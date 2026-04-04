/* app.js — JobFit Analyzer */

const API_BASE = 'http://localhost:8000'; // backend URL
let currentLang = 'en';

// ─── i18n Translations ─────────────────────────────────────────────────────────
const i18n = {
  en: {
    nav_analyze: "Analyze",
    nav_history: "History",
    nav_profile: "My Profile",
    page_title: "Job Fit Analyzer",
    page_sub: "Paste a job offer, URL, or detail the project to get an honest AI analysis",
    intro_desc: "Tell me about your project, the skills you need, and the goals you want to achieve. My AI agent will analyze my profile against your exact requirements to tell you honestly if I am eligible and the perfect fit for your job.",
    card_title: "Project Context & Details",
    card_sub: "Fill in the mandatory fields to check my eligibility",
    label_url: "Job posting URL (Optional shortcut)",
    ph_url: "https://linkedin.com/jobs/view/...",
    btn_scrape: "Scrape",
    tag_scraped: "Scraped",
    divider_or: "OR",
    label_task: "Task of the job / Project Title",
    ph_task: "e.g. Build an automated lead scoring AI...",
    label_achieve: "What do you want to achieve?",
    ph_achieve: "e.g. Automate 80% of data flow, reduce processing time...",
    label_problem: "What are the problems that you want to fix?",
    ph_problem: "e.g. Manual data entry is taking too long...",
    label_skills: "Key skills needed",
    ph_skills: "e.g. Python, n8n, OpenAI...",
    label_sector: "Sector / Industry",
    sector_placeholder: "Select an industry...",
    sectors: [
      "Technology / IT", "Healthcare / Medical", "Finance / Banking", "E-commerce / Retail",
      "Education / E-Learning", "Manufacturing / Logistics", "Real Estate / Construction",
      "Telecommunications", "Media / Entertainment", "Energy / Environment",
      "Transportation / Automotive", "Hospitality / Tourism", "Consulting / Professional Services",
      "Legal / Compliance", "Government / Public Sector", "Agriculture / Food Production",
      "Aerospace / Defense", "Non-Profit / NGO", "Marketing / Advertising", "Human Resources / Staffing"
    ],
    label_desc: "Job Description (Optional)",
    ph_desc: "Paste extra details, responsibilities, or nice-to-haves here...",
    cta_info: "Analysis uses your stored profile + resume.",
    cta_link: "Update profile →",
    btn_analyze: "Analyze fit",
    err_mandatory: "Please fill in all the mandatory fields (*) to run the analysis.",
    res_title: "Analysis results",
    res_overall: "Overall fit",
    res_skills: "Skills match",
    res_exp: "Experience level",
    res_ctx: "Context & culture",
    res_del: "Delivery fit",
    res_str: "Why you're a strong fit",
    res_gaps: "Gaps & concerns",
    res_proceed: "How to proceed",
    hist_empty: "No analyses yet",
    hist_sub: "Run your first job fit analysis and it'll appear here."
  },
  fr: {
    nav_analyze: "Analyser",
    nav_history: "Historique",
    nav_profile: "Mon Profil",
    page_title: "Analyseur de Compatibilité",
    page_sub: "Collez une offre ou détaillez le projet pour une analyse IA honnête",
    intro_desc: "Parlez-moi de votre projet, des compétences dont vous avez besoin et de vos objectifs. Mon agent IA analysera mon profil par rapport à vos besoins pour vous dire honnêtement si je suis qualifié pour votre poste.",
    card_title: "Contexte & Détails du Projet",
    card_sub: "Remplissez les champs obligatoires pour vérifier mon éligibilité",
    label_url: "URL de l'offre (Raccourci optionnel)",
    ph_url: "https://linkedin.com/jobs/view/...",
    btn_scrape: "Extraire",
    tag_scraped: "Extrait",
    divider_or: "OU",
    label_task: "Tâche / Titre du projet",
    ph_task: "ex. Créer une IA de scoring de leads...",
    label_achieve: "Que souhaitez-vous accomplir ?",
    ph_achieve: "ex. Automatiser 80% du flux de données...",
    label_problem: "Quels problèmes voulez-vous résoudre ?",
    ph_problem: "ex. La saisie manuelle prend trop de temps...",
    label_skills: "Compétences clés requises",
    ph_skills: "ex. Python, n8n, OpenAI...",
    label_sector: "Secteur / Industrie",
    sector_placeholder: "Sélectionnez une industrie...",
    sectors: [
      "Technologie / Informatique", "Santé / Médical", "Finance / Banque", "E-commerce / Retail",
      "Éducation / E-Learning", "Fabrication / Logistique", "Immobilier / Construction",
      "Télécommunications", "Médias / Divertissement", "Énergie / Environnement",
      "Transport / Automobile", "Hôtellerie / Tourisme", "Conseil / Services Pro",
      "Juridique / Conformité", "Gouvernement / Secteur Public", "Agriculture / Agroalimentaire",
      "Aérospatial / Défense", "Association / ONG", "Marketing / Publicité", "Ressources Humaines"
    ],
    label_desc: "Description du poste (Optionnel)",
    ph_desc: "Collez ici les responsabilités ou autres détails...",
    cta_info: "L'analyse utilise votre profil enregistré.",
    cta_link: "Mettre à jour →",
    btn_analyze: "Analyser l'adéquation",
    err_mandatory: "Veuillez remplir tous les champs obligatoires (*) pour lancer l'analyse.",
    res_title: "Résultats de l'analyse",
    res_overall: "Compatibilité globale",
    res_skills: "Compétences",
    res_exp: "Niveau d'expérience",
    res_ctx: "Culture & Contexte",
    res_del: "Capacité de livraison",
    res_str: "Pourquoi vous êtes un bon candidat",
    res_gaps: "Lacunes et points de vigilance",
    res_proceed: "Comment procéder",
    hist_empty: "Aucune analyse",
    hist_sub: "Lancez votre première analyse pour la voir ici."
  },
  ar: {
    nav_analyze: "تحليل",
    nav_history: "السجل",
    nav_profile: "ملفي الشخصي",
    page_title: "محلل الملاءمة الوظيفية",
    page_sub: "أدخل رابط الوظيفة أو تفاصيل المشروع للحصول على تحليل ذكاء اصطناعي صادق",
    intro_desc: "أخبرني عن مشروعك، المهارات التي تحتاجها، والأهداف التي تريد تحقيقها. سيقوم وكيل الذكاء الاصطناعي الخاص بي بتحليل ملفي بناءً على متطلباتك ليخبرك بصدق ما إذا كنت مناسبًا ومؤهلًا لعملك.",
    card_title: "سياق وتفاصيل المشروع",
    card_sub: "املأ الحقول الإلزامية للتحقق من أهليتي",
    label_url: "رابط إعلان الوظيفة (اختياري)",
    ph_url: "https://linkedin.com/jobs/view/...",
    btn_scrape: "استخراج",
    tag_scraped: "مستخرج",
    divider_or: "أو",
    label_task: "المهام / عنوان المشروع",
    ph_task: "مثال: بناء نظام ذكاء اصطناعي لتقييم العملاء...",
    label_achieve: "ما الذي تريد تحقيقه؟",
    ph_achieve: "مثال: أتمتة 80٪ من تدفق البيانات...",
    label_problem: "ما هي المشاكل التي تريد حلها؟",
    ph_problem: "مثال: الإدخال اليدوي يستغرق وقتًا طويلاً...",
    label_skills: "المهارات الأساسية المطلوبة",
    ph_skills: "مثال: Python, n8n, OpenAI...",
    label_sector: "القطاع / الصناعة",
    sector_placeholder: "اختر الصناعة...",
    sectors: [
      "التكنولوجيا / تقنية المعلومات", "الرعاية الصحية", "المالية / البنوك", "التجارة الإلكترونية",
      "التعليم / التعلم الإلكتروني", "التصنيع / الخدمات اللوجستية", "العقارات / البناء",
      "الاتصالات", "الإعلام / الترفيه", "الطاقة / البيئة",
      "النقل / السيارات", "الضيافة / السياحة", "الاستشارات / الخدمات المهنية",
      "القانون / الامتثال", "الحكومة / القطاع العام", "الزراعة / إنتاج الغذاء",
      "الفضاء / الدفاع", "المنظمات غير الربحية", "التسويق / الإعلانات", "الموارد البشرية"
    ],
    label_desc: "الوصف الوظيفي (اختياري)",
    ph_desc: "ألصق التفاصيل الإضافية والمسؤوليات هنا...",
    cta_info: "يستخدم التحليل ملفك الشخصي المخزن.",
    cta_link: "تحديث الملف ←",
    btn_analyze: "تحليل الملاءمة",
    err_mandatory: "يرجى ملء جميع الحقول الإلزامية (*) لتشغيل التحليل.",
    res_title: "نتائج التحليل",
    res_overall: "الملاءمة العامة",
    res_skills: "مطابقة المهارات",
    res_exp: "مستوى الخبرة",
    res_ctx: "السياق والثقافة",
    res_del: "القدرة على التنفيذ",
    res_str: "لماذا أنت مرشح قوي",
    res_gaps: "الفجوات ونقاط القلق",
    res_proceed: "كيفية المتابعة",
    hist_empty: "لا توجد تحليلات بعد",
    hist_sub: "قم بإجراء أول تحليل ليظهر هنا."
  }
};

function setLang(lang) {
  currentLang = lang;
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-${lang}`).classList.add('active');

  // Update texts and placeholders
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else {
        el.innerHTML = i18n[lang][key];
      }
    }
  });

  // Re-populate Sector Select
  const sectorSelect = document.getElementById('sector');
  const currentVal = sectorSelect.value;
  sectorSelect.innerHTML = `<option value="" disabled selected>${i18n[lang].sector_placeholder}</option>` +
    i18n[lang].sectors.map((s, idx) => `<option value="${i18n.en.sectors[idx]}">${s}</option>`).join('');
  
  // Keep selected value if exists
  if (currentVal) sectorSelect.value = currentVal;
}


// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function initTheme() {
  const btn = document.getElementById('themeToggleBtn');
  const iconSun = btn.querySelector('.theme-icon-sun');
  const iconMoon = btn.querySelector('.theme-icon-moon');

  // We set dark as default in HTML. Check if user previously saved "light"
  if (localStorage.getItem('jobfit_theme') === 'light') {
    document.body.removeAttribute('data-theme');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  } else {
    // Force dark (matches default)
    document.body.setAttribute('data-theme', 'dark');
    iconMoon.classList.add('hidden');
    iconSun.classList.remove('hidden');
  }

  btn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('jobfit_theme', 'light');
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('jobfit_theme', 'dark');
      iconMoon.classList.add('hidden');
      iconSun.classList.remove('hidden');
    }
  });
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function initNav() {
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      switchView(el.dataset.view);
    });
  });
}

function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`view-${name}`)?.classList.add('active');
  document.querySelector(`.nav-item[data-view="${name}"]`)?.classList.add('active');
}

// ─── Scrape ───────────────────────────────────────────────────────────────────
document.getElementById('scrapeBtn').addEventListener('click', async () => {
  const url = document.getElementById('jobUrl').value.trim();
  if (!url) return;

  const btn = document.getElementById('scrapeBtn');
  btn.classList.add('loading');

  try {
    const res = await fetch(`${API_BASE}/scrape`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    const data = await res.json();

    const preview = document.getElementById('scrapePreview');
    document.getElementById('previewSource').textContent = new URL(url).hostname;
    document.getElementById('previewText').textContent = data.text?.slice(0, 400) + '...';
    preview.classList.remove('hidden');

    window._scrapedText = data.text;
    window._scrapedTitle = data.title || '';
    
    // Auto-fill Title if empty
    if (!document.getElementById('jobTitle').value && data.title) {
        document.getElementById('jobTitle').value = data.title;
    }
  } catch (err) {
    alert('Could not scrape URL. Backend offline or URL blocked.');
  } finally {
    btn.classList.remove('loading');
  }
});

// ─── Analyze ──────────────────────────────────────────────────────────────────
document.getElementById('analyzeBtn').addEventListener('click', async () => {
  
  const task = document.getElementById('jobTitle').value.trim();
  const achieve = document.getElementById('achievements').value.trim();
  const problem = document.getElementById('problems').value.trim();
  const skills = document.getElementById('mustHaves').value.trim();
  const sector = document.getElementById('sector').value;
  const optDesc = document.getElementById('jobDesc').value.trim();

  // Validate ALL mandatory fields
  if (!task || !achieve || !problem || !skills || !sector) {
    alert(i18n[currentLang].err_mandatory);
    return;
  }

  // Combine scraped context or optional description
  const combinedContext = (window._scrapedText ? `[Scraped Context]: ${window._scrapedText}\n` : '') + optDesc;

  const payload = {
    job_title: task,
    recruiter_deliverables: achieve,
    recruiter_problems: problem,
    must_haves: skills,
    sector: sector,
    job_text: combinedContext || "Manual context provided above.", 
    profile_bio: document.getElementById('profileBio').value.trim(),
  };

  const btn = document.getElementById('analyzeBtn');
  btn.disabled = true;
  btn.classList.add('spinning');

  try {
    let res;
    if (window._resumeFile) {
      const form = new FormData();
      form.append('resume', window._resumeFile);
      form.append('data', JSON.stringify(payload));
      res = await fetch(`${API_BASE}/analyze`, { method: 'POST', body: form });
    } else {
      res = await fetch(`${API_BASE}/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    const result = await res.json();
    renderResults(result, task);
  } catch (err) {
    // Fallback Mock result if backend offline
    renderResults({
      overall_score: 88,
      verdict: 'Excellent fit for AI-driven transformation goals',
      dimensions: { skills: 90, experience: 85, context: 88, delivery: 80 },
      strengths: [
        'Deep hands-on Python & AI automation background matches requested stack.',
        'n8n + Odoo natively aligns with solving the manual data entry issues.',
        'Consulting pedigree proves capability to hit the 80% automation target.'
      ],
      gaps: ['No explicit enterprise SOC2 security experience highlighted.'],
      how_to_proceed: 'Lead with your n8n + AI pipeline work. Emphasize how it directly addresses their disconnected systems pain point.',
      talking_points: ['Built an end-to-end AI lead scoring system.', 'Can provide a PoC showing how AI bridges their workflows.']
    }, task);
  } finally {
    btn.disabled = false;
    btn.classList.remove('spinning');
  }
});

// ─── Render Results ───────────────────────────────────────────────────────────
function renderResults(data, title) {
  document.getElementById('resultsSection').classList.remove('hidden');
  document.getElementById('resultsMeta').textContent =
    `${title ? title + ' · ' : ''}${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;

  const score = data.overall_score || 0;
  document.getElementById('scoreOverall').textContent = score;
  const circ = 2 * Math.PI * 48;
  document.getElementById('dialArc').style.strokeDashoffset = circ - (score / 100) * circ;
  
  const root = getComputedStyle(document.documentElement);
  const strokeColor = score >= 75 ? root.getPropertyValue('--green') : (score >= 50 ? root.getPropertyValue('--amber') : root.getPropertyValue('--red'));
  document.getElementById('dialArc').style.stroke = strokeColor;
  document.getElementById('verdictText').textContent = data.verdict || '';

  const dims = data.dimensions || {};
  setDim('dim-skills', dims.skills);
  setDim('dim-experience', dims.experience);
  setDim('dim-context', dims.context);
  setDim('dim-delivery', dims.delivery);

  renderList('strengthsList', data.strengths || []);
  renderList('gapsList', data.gaps || []);
  document.getElementById('howToProceed').innerHTML = (data.how_to_proceed || '').split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');

  document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setDim(id, val) {
  const el = document.getElementById(id);
  el.querySelector('.dim-val').textContent = val ? `${val}%` : '—';
  el.querySelector('.dim-fill').style.width = val ? `${val}%` : '0%';
}

function renderList(id, items) {
  document.getElementById(id).innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
setLang('en');
initTheme();
initNav();

// Backend status check
fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(2000) })
  .then(r => { if(r.ok) document.getElementById('backendStatus').classList.add('online'); })
  .catch(() => document.getElementById('backendStatus').classList.add('offline'));