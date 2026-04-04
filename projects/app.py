"""
JobFit Backend — FastAPI + BeautifulSoup scraper + DeepSeek API
pip install fastapi uvicorn requests beautifulsoup4 python-multipart PyPDF2
"""

import json
import os
import re
from typing import Optional

import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="JobFit API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in production
    allow_methods=["*"],
    allow_headers=["*"],
)

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY", "YOUR_DEEPSEEK_KEY_HERE")
DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions"

# ─── Profile (could be loaded from a file / DB) ───────────────────────────────
BASE_PROFILE = """
Name: Anas N.
Title: Data Scientist & AI Automation Specialist
Location: Morocco → relocating to UAE

Core skills: Python, n8n, DeepSeek API, Anthropic API, Odoo CRM, Make/Zapier,
prompt engineering, machine learning, SQL, Power BI, FastAPI, BeautifulSoup,
Selenium, LLM integration, workflow automation, data analysis.

Experience: Lead automation engineer at TargetUp Group — built end-to-end AI
pipelines, n8n workflows, Odoo integrations, WhatsApp chatbots, strategic
intelligence systems for procurement (appels d'offres). Consulting background
across ESG/CSR, ISO quality, Lean Six Sigma, digital transformation for B2B
clients in Morocco and MENA.

Languages: French (fluent), Arabic (native), English (professional).
Notable projects: Go Siyaha AI lead qualification system, automated AO
analysis prompts, weekly veille stratégique email automation, Outlook OAuth2
n8n infrastructure setup.
"""

# ─── Health ───────────────────────────────────────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok"}

# ─── Scrape ───────────────────────────────────────────────────────────────────
class ScrapeRequest(BaseModel):
    url: str

@app.post("/scrape")
def scrape(req: ScrapeRequest):
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        )
    }
    try:
        res = requests.get(req.url, headers=headers, timeout=12)
        res.raise_for_status()
    except Exception as e:
        return {"error": str(e), "text": "", "title": ""}

    soup = BeautifulSoup(res.text, "html.parser")

    # Remove junk
    for tag in soup(["script", "style", "nav", "header", "footer", "aside", "form"]):
        tag.decompose()

    title = soup.title.string.strip() if soup.title else ""

    # Try to find main content zone
    main = (
        soup.find("div", class_=re.compile(r"job[-_]?(description|detail|content|body)", re.I))
        or soup.find("section", class_=re.compile(r"job|description", re.I))
        or soup.find("main")
        or soup.find("article")
        or soup.body
    )

    text = main.get_text(separator="\n", strip=True) if main else soup.get_text("\n", strip=True)

    # Clean up whitespace
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    clean = "\n".join(lines)

    return {"text": clean[:8000], "title": title}

# ─── Analyze ─────────────────────────────────────────────────────────────────
class AnalyzeRequest(BaseModel):
    job_text: str
    job_title: Optional[str] = ""
    recruiter_problems: Optional[str] = ""
    recruiter_deliverables: Optional[str] = ""
    must_haves: Optional[str] = ""
    salary: Optional[str] = ""
    company_context: Optional[str] = ""
    profile_bio: Optional[str] = ""

def build_prompt(req: AnalyzeRequest, resume_text: str = "") -> str:
    profile = BASE_PROFILE
    if req.profile_bio:
        profile += f"\n\nAdditional context from user: {req.profile_bio}"
    if resume_text:
        profile += f"\n\nResume extract:\n{resume_text[:3000]}"

    extras = ""
    if req.recruiter_problems:
        extras += f"\nRecruiter-stated problems: {req.recruiter_problems}"
    if req.recruiter_deliverables:
        extras += f"\nExpected deliverables: {req.recruiter_deliverables}"
    if req.must_haves:
        extras += f"\nVerbal must-haves: {req.must_haves}"
    if req.salary:
        extras += f"\nSalary / contract: {req.salary}"
    if req.company_context:
        extras += f"\nCompany context: {req.company_context}"

    return f"""You are a senior career advisor and talent matching specialist.

## Candidate Profile
{profile}

## Job Opportunity
Title: {req.job_title or "Not specified"}

Job Description:
{req.job_text[:4000]}
{extras}

## Task
Analyze how well this candidate fits this job opportunity. Be direct, specific, and honest. 
Do NOT be generically positive. Point out real gaps.

Respond ONLY with a valid JSON object in this exact structure:
{{
  "overall_score": <integer 0-100>,
  "verdict": "<one punchy sentence verdict>",
  "dimensions": {{
    "skills": <integer 0-100>,
    "experience": <integer 0-100>,
    "context": <integer 0-100>,
    "delivery": <integer 0-100>
  }},
  "strengths": ["<specific strength with evidence>", ...],
  "gaps": ["<specific gap with impact>", ...],
  "how_to_proceed": "<2-3 paragraphs: framing strategy, application tips, negotiation/positioning notes>",
  "talking_points": ["<concrete talking point for interview/cover>", ...]
}}

Rules:
- strengths: 3-5 items, cite specific skills/projects from profile
- gaps: 2-4 items, be concrete about what's missing and why it matters
- talking_points: 3-5 items, very specific to this job
- overall_score: weight skills 35%, experience 25%, context 20%, delivery 20%
- Return ONLY the JSON, no markdown fences, no preamble
"""

@app.post("/analyze")
async def analyze(
    data: Optional[str] = Form(None),
    resume: Optional[UploadFile] = File(None),
    # fallback for JSON body
    job_text: Optional[str] = Form(None),
):
    # Parse payload
    if data:
        payload = json.loads(data)
        req = AnalyzeRequest(**payload)
    elif job_text:
        req = AnalyzeRequest(job_text=job_text)
    else:
        # Try JSON body (when no file upload)
        return {"error": "No data provided"}

    # Extract resume text if provided
    resume_text = ""
    if resume:
        try:
            import PyPDF2, io
            content = await resume.read()
            reader = PyPDF2.PdfReader(io.BytesIO(content))
            resume_text = "\n".join(p.extract_text() or "" for p in reader.pages)
        except Exception:
            pass

    prompt = build_prompt(req, resume_text)

    # Call DeepSeek
    try:
        res = requests.post(
            DEEPSEEK_URL,
            headers={
                "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "deepseek-chat",
                "messages": [{"role": "user", "content": prompt}],
                "max_tokens": 1500,
                "temperature": 0.4,
            },
            timeout=30,
        )
        res.raise_for_status()
        raw = res.json()["choices"][0]["message"]["content"].strip()
        # Strip markdown fences if present
        raw = re.sub(r"^```json\s*", "", raw)
        raw = re.sub(r"```\s*$", "", raw)
        result = json.loads(raw)
        return result
    except Exception as e:
        return {"error": str(e)}


# ─── Also handle JSON body for /analyze (no file) ────────────────────────────
@app.post("/analyze-json")
async def analyze_json(req: AnalyzeRequest):
    prompt = build_prompt(req)
    try:
        res = requests.post(
            DEEPSEEK_URL,
            headers={
                "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "deepseek-chat",
                "messages": [{"role": "user", "content": prompt}],
                "max_tokens": 1500,
                "temperature": 0.4,
            },
            timeout=30,
        )
        res.raise_for_status()
        raw = res.json()["choices"][0]["message"]["content"].strip()
        raw = re.sub(r"^```json\s*", "", raw)
        raw = re.sub(r"```\s*$", "", raw)
        return json.loads(raw)
    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)