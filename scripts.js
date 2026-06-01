const i18n = {
    en: {
        hero_title: "Anas Lachhab",
        stat_age: "25 Years Old",
        stat_status: "Single",
        stat_exp: "2-3 Years",
        stat_loc: "Rabat, Morocco",
        stat_relocate: "Open to Relocate",
        badge_passport: "Passport Ready",
        hero_catch: "\"Turning chaos into clarity through Data, and manual tasks into history through AI Automation.\"",
        btn_contact: "Test My Skills with AI",
        btn_dash: "Check the Skills Impact Worldwide",
        btn_cv: "Download CV",
        map_title: "Limitless Deployment",
        map_desc: "My code is cloud-native, and so am I. While I am based in Rabat, my ambition is borderless. I am actively seeking international opportunities and I am <strong>fully prepared to relocate</strong> anywhere in the world.",
        skills_title: "Technical Arsenal",
        skills_sub: "The systems, tools, and technologies I use to build AI-driven solutions.",
        cat_ai_title: 'AI Systems & Automation',
        cat_ai_list: '<li><b>Workflow Automation:</b> n8n, Make.com, Zapier</li><li>LLM APIs: OpenAI API, Gemini API, Deepseek API</li><li>Local LLM: Ollama (Llama, Qwen)</li><li>Prompt Engineering</li><li>Chatbots: Voiceflow</li>',
        cat_data_title: 'Data & Analytics',
        cat_data_list: '<li>Web Scraping: Selenium, BeautifulSoup</li><li>Processing: Pandas, NumPy</li><li>Visualization: Matplotlib, Power BI</li><li>Machine Learning: Tensorflow, Scikit-learn</li><li>Advanced Excel</li>',
        cat_market_title: 'Growth & Marketing',
        cat_market_list: '<li>SEO, GEO & AEO Strategies</li><li>Google Analytics & Console</li><li>META Business Suite</li><li>CRM / ERP: Odoo</li><li>Mailing: Brevo, MailGun</li>',
        cat_prog_title: 'Programming',
        cat_prog_list: '<li>Python (Automation, Data, AI)</li><li>JavaScript (Vanilla)</li><li>HTML / CSS</li><li>SQL & MongoDB</li><li>GitHub Actions</li>',
        cat_design_title: 'Content & Design',
        cat_design_list: '<li>Canva, Photoshop, Illustrator</li><li>AI Image: OpenAI DALL-E</li><li>AI Video: Google Veo</li><li>Creative AI Tools</li>',
        cat_cloud_title: 'Cloud & Infrastructure',
        cat_cloud_list: '<li>AWS: Lambda, S3, DynamoDB</li><li>GCP APIs: Gmail, Sheets</li><li>VPS Deployment: OVHCloud</li>',
        
        // NEW: Learning Section
        learning_title: "Skills I'm Learning Right Now",
        learn_spanish: "Spanish Language",

        exp_title: "Career Timeline",
        exp_targetup_role: "Data & AI Automation PMO",
        exp_targetup_list: "<li>Designed and deployed AI-powered automation workflows using Python & n8n.</li><li>Automated data extraction and lead generation.</li><li>Led digital marketing automation (SEO, Analytics).</li><li>Built websites using Odoo.</li>",
        exp_ifcar_role: "Data & Marketing Analyst / Automation",
        exp_ifcar_list: "<li>Developed AI-powered resume classifier to automate screening.</li><li>Conducted data analysis (SQL, Excel) and built dashboards.</li><li>Led market research and SEO performance.</li>",
        exp_sorec_role: "Data Analyst",
        exp_sorec_list: "<li>Analyzed large datasets and transformed raw data into insights.</li><li>Built interactive dashboards.</li>",
        exp_hcp_role: "Census Enumerator",
        exp_hcp_list: "<li>Participated in national population census.</li><li>Collected and verified structured data.</li>",
        edu_title: "Education",
        degree_title: "Licence in Economics & Management",
        video_title: "Me in Person",
        video_sub: "A quick demonstration of my skills",
        
        // NEW: Featured Case Study
        feat_title: "Featured Case Study",
        feat_sub: "My most complex and impactful automation architecture to date.",
        feat_proj_title: "AI-Powered Public Tender Automation",
        feat_proj_obj: "I led the development of an AI-powered automation system for monitoring and qualifying public tenders (“appels d’offres”) for a consulting firm. The objective was to eliminate the manual work of searching, reading, and qualifying tenders from multiple procurement platforms while dramatically improving the speed and quality of opportunity detection.",
        feat_workflow_title: "Workflow Overview & AI Pipeline",
        feat_step1_title: "Automated Scraping",
        feat_step1_desc: "Pipelines built in Python (BS4, Selenium) run automatically on GitHub Actions. New tenders are sent via webhooks to a VPS-hosted n8n instance.",
        feat_step2_title: "Initial AI Filtering",
        feat_step2_desc: "The first AI agent analyzes descriptions and discards irrelevant tenders, keeping only those aligned with our specific consulting services.",
        feat_step3_title: "AI Scoring System",
        feat_step3_desc: "Relevant tenders are evaluated by a second AI agent based on strategic relevance, technical fit, project value, and probability of success.",
        feat_step4_title: "Deep Data Extraction",
        feat_step4_desc: "For scores >90%, a final AI extracts structured details: budget, deadlines, bid bonds, required documents, and client needs.",
        feat_step5_title: "CRM Integration",
        feat_step5_desc: "Qualified, structured opportunities are automatically pushed into Odoo CRM for the sales team to manage as high-potential leads.",
        feat_impact_title: "Results & Impact",
        feat_impact_desc: "This automation drastically reduced the time spent manually reviewing tenders and eliminated human error in opportunity qualification. The business team can now focus exclusively on high-value, pre-structured opportunities already analyzed by AI, creating a faster and highly scalable tender acquisition process.",

        proj_title: "Some of my solutions",
        proj_sub: "Automation in action.",
        cat_proj_social: "Social Media & Messaging AI Agents",
        proj_wa_title: "WhatsApp AI Assistant",
        proj_wa_desc: "AI customer support bot using n8n, OpenAI & Meta API.",
        proj_insta_title: "Instagram DM Bot",
        proj_insta_desc: "Automated DM replies and lead qualification using AI.",
        proj_fb_title: "Facebook AI Agent",
        proj_fb_desc: "Automated Messages and Comments using AI.",
        cat_proj_content: "Content Generation & Distribution",
        proj_img_title: "AI Image Generator",
        proj_img_desc: "Automated image creation using n8n and OpenAI-GPT image.",
        proj_video_title: "AI Video Creator",
        proj_video_desc: "AI-powered video generation and editing using Google VEO.",
        proj_post_title: "Social Media Auto Posting",
        proj_post_desc: "Automated posting across LinkedIn, Instagram, Facebook, YouTube, TikTok & Reddit.",
        cat_proj_hr: "HR & Recruitment Automation",
        proj_cv_title: "AI CV Screener",
        proj_cv_desc: "Gmail + Gemini API to rank and qualify candidates.",
        proj_recruit_title: "Recruitment Automation",
        proj_recruit_desc: "Resume parsing, scoring, and interview scheduling.",
        cat_proj_data: "Data, Dashboards & Market Intelligence",
        proj_market_title: "Market Intelligence Dashboard",
        proj_market_desc: "Real-time market insights and trends using Web scraping & Streamlit.",
        proj_li_title: "Linkedin Jobs Analysis",
        proj_li_desc: "Web scraping & job market analytics from Linkedin Jobs.",
        proj_ga_title: "Google Analytics Dashboard",
        proj_ga_desc: "SEO, traffic performance and Predections dashboard via Google APIs.",
        cat_proj_sales: "Sales, CRM & Business Automation",
        proj_scrap_title: "Lead Scraper Pipeline",
        proj_scrap_desc: "Apollo / LeadRocks → Odoo CRM automated workflow.",
        proj_maps_title: "Google Maps Lead Generator",
        proj_maps_desc: "Scraping, enrichment & outreach automation using Cold mailing.",
        proj_inv_title: "Invoice Automation System",
        proj_inv_desc: "Automated invoice processing and internal routing.",
        contact_title: "Let's Connect",
        contact_sub: "Ready to discuss relocation or remote opportunities."
    },
    fr: {
        hero_title: "Anas Lachhab",
        stat_age: "25 Ans",
        stat_status: "Célibataire",
        stat_exp: "2-3 Ans",
        stat_loc: "Rabat, Maroc",
        stat_relocate: "Mobile à l'international",
        badge_passport: "Passeport Prêt",
        hero_catch: "\"Transformer le chaos en clarté grâce aux données, et les tâches manuelles en histoire ancienne grâce à l'IA.\"",
        btn_contact: "Tester mes compétences avec l'IA",
        btn_dash: "Consulter l'impact des compétences",
        btn_cv: "Télécharger CV",
        map_title: "Déploiement Illimité",
        map_desc: "Mon code est cloud-native, et moi aussi. Bien que basé à Rabat, mon ambition est sans frontières. Je suis activement à la recherche d'opportunités internationales et <strong>prêt à me délocaliser</strong> n'importe où dans le monde.",
        skills_title: "Arsenal Technique",
        skills_sub: "Les systèmes et outils que j'utilise pour bâtir des solutions IA.",
        cat_ai_title: 'Systèmes IA & Automatisation',
        cat_ai_list: '<li><b>Workflow:</b> n8n, Make.com, Zapier</li><li>API LLM: OpenAI, Gemini, Deepseek</li><li>LLM Local: Ollama (Llama, Qwen)</li><li>Prompt Engineering</li><li>Chatbots: Voiceflow</li>',
        cat_data_title: 'Données & Analytique',
        cat_data_list: '<li>Web Scraping: Selenium, BeautifulSoup</li><li>Traitement: Pandas, NumPy</li><li>Visualisation: Matplotlib, Power BI</li><li>Machine Learning: Tensorflow, Scikit-learn</li><li>Excel Avancé</li>',
        cat_market_title: 'Croissance & Marketing',
        cat_market_list: '<li>Stratégies SEO, GEO & AEO</li><li>Google Analytics & Console</li><li>META Business Suite</li><li>CRM / ERP: Odoo</li><li>Mailing: Brevo, MailGun</li>',
        cat_prog_title: 'Programmation',
        cat_prog_list: '<li>Python (Automation, Data, IA)</li><li>JavaScript (Vanilla)</li><li>HTML / CSS</li><li>SQL & MongoDB</li><li>GitHub Actions</li>',
        cat_design_title: 'Contenu & Design',
        cat_design_list: '<li>Canva, Photoshop, Illustrator</li><li>Image IA: OpenAI DALL-E</li><li>Vidéo IA: Google Veo</li><li>Outils Créatifs IA</li>',
        cat_cloud_title: 'Cloud & Infrastructure',
        cat_cloud_list: '<li>AWS: Lambda, S3, DynamoDB</li><li>GCP APIs: Gmail, Sheets</li><li>Déploiement VPS: OVHCloud</li>',
        
        // NEW: Learning Section
        learning_title: "Ce que j'apprends actuellement",
        learn_spanish: "Langue Espagnole",

        exp_title: "Parcours Professionnel",
        exp_targetup_role: "PMO Données & Automatisation IA",
        exp_targetup_list: "<li>Conception de workflows IA automatisés (Python, n8n).</li><li>Automatisation de l'extraction de données et génération de leads.</li><li>Gestion du marketing digital (SEO, Analytics).</li><li>Création de sites via Odoo.</li>",
        exp_ifcar_role: "Analyste Données & Marketing / Automatisation",
        exp_ifcar_list: "<li>Développement d'un classificateur de CV par IA.</li><li>Analyse de données (SQL, Excel) et tableaux de bord.</li><li>Gestion étude de marché et performance SEO.</li>",
        exp_sorec_role: "Analyste de Données",
        exp_sorec_list: "<li>Analyse de grands ensembles de données et insights actionnables.</li><li>Création de tableaux de bord interactifs.</li>",
        exp_hcp_role: "Recenseur (HCP)",
        exp_hcp_list: "<li>Participation au recensement national de la population.</li><li>Collecte et vérification des données structurées.</li>",
        edu_title: "Éducation",
        degree_title: "Licence en Économie et Gestion",
        video_title: "Moi en Personne",
        video_sub: "Une démonstration rapide de mes compétences",
        
        // NEW: Featured Case Study
        feat_title: "Étude de Cas Principale",
        feat_sub: "Mon architecture d'automatisation la plus complexe et percutante à ce jour.",
        feat_proj_title: "Automatisation IA des Appels d'Offres",
        feat_proj_obj: "J'ai dirigé le développement d'un système IA pour la surveillance et la qualification des appels d'offres publics pour un cabinet de conseil. L'objectif était d'éliminer la recherche manuelle sur diverses plateformes et d'améliorer drastiquement la vitesse de détection des opportunités.",
        feat_workflow_title: "Aperçu du Workflow & Pipeline IA",
        feat_step1_title: "Scraping Automatisé",
        feat_step1_desc: "Des pipelines en Python (BS4, Selenium) s'exécutent sur GitHub Actions. Les données sont envoyées par webhook vers une instance n8n sur VPS.",
        feat_step2_title: "Filtrage IA Initial",
        feat_step2_desc: "Un premier agent IA lit les descriptions et écarte les appels d'offres non pertinents pour ne garder que ceux alignés avec nos services.",
        feat_step3_title: "Système de Scoring IA",
        feat_step3_desc: "Un second agent IA évalue les appels d'offres selon la pertinence stratégique, l'adéquation technique, la valeur et la probabilité de succès.",
        feat_step4_title: "Extraction Profonde",
        feat_step4_desc: "Pour les scores >90%, une IA finale extrait des données structurées : budget, délais, cautions, documents requis et besoins clients.",
        feat_step5_title: "Intégration CRM",
        feat_step5_desc: "Les opportunités qualifiées sont poussées automatiquement dans Odoo CRM en tant que leads à haut potentiel pour l'équipe commerciale.",
        feat_impact_title: "Résultats & Impact",
        feat_impact_desc: "Cette automatisation a considérablement réduit le temps d'examen manuel et éliminé l'erreur humaine. L'équipe commerciale se concentre désormais uniquement sur des opportunités pré-structurées et qualifiées par l'IA, créant un processus d'acquisition évolutif et ultra-rapide.",

        proj_title: "Quelques solutions",
        proj_sub: "L'automatisation en action.",
        cat_proj_social: "Agents IA Réseaux Sociaux & Messagerie",
        proj_wa_title: "Assistant WhatsApp IA",
        proj_wa_desc: "Bot de support client via n8n, OpenAI & Meta API.",
        proj_insta_title: "Bot Instagram DM",
        proj_insta_desc: "Réponses automatiques et qualification de leads par IA.",
        proj_fb_title: "Agent Facebook IA",
        proj_fb_desc: "Messages et commentaires automatisés via IA.",
        cat_proj_content: "Génération & Distribution de Contenu",
        proj_img_title: "Générateur d'Images IA",
        proj_img_desc: "Création d'images automatisée via n8n et OpenAI.",
        proj_video_title: "Créateur Vidéo IA",
        proj_video_desc: "Génération et montage vidéo via Google VEO.",
        proj_post_title: "Publication Automatique",
        proj_post_desc: "Publication auto sur LinkedIn, Instagram, Facebook, YouTube, TikTok & Reddit.",
        cat_proj_hr: "Automatisation RH & Recrutement",
        proj_cv_title: "Filtre CV IA",
        proj_cv_desc: "Gmail + Gemini API pour classer et qualifier les candidats.",
        proj_recruit_title: "Automatisation Recrutement",
        proj_recruit_desc: "Parsing de CV, scoring et planification d'entretiens.",
        cat_proj_data: "Données, Dashboards & Intelligence Marché",
        proj_market_title: "Dashboard Intelligence Marché",
        proj_market_desc: "Insights marché en temps réel via Web scraping & Streamlit.",
        proj_li_title: "Analyse Emploi LinkedIn",
        proj_li_desc: "Scraping et analyse du marché de l'emploi LinkedIn.",
        proj_ga_title: "Dashboard Google Analytics",
        proj_ga_desc: "SEO, trafic et prédictions via les API Google.",
        cat_proj_sales: "Ventes, CRM & Automatisation Business",
        proj_scrap_title: "Pipeline Scraping Leads",
        proj_scrap_desc: "Workflow automatisé Apollo / LeadRocks → Odoo CRM.",
        proj_maps_title: "Générateur Leads Google Maps",
        proj_maps_desc: "Scraping, enrichissement et automatisation cold mailing.",
        proj_inv_title: "Système de Facturation Auto",
        proj_inv_desc: "Traitement et routage automatisé des factures.",
        contact_title: "Connectons-nous",
        contact_sub: "Prêt à discuter d'opportunités de relocation ou remote."
    },
    ar: {
        hero_title: "أنس لشهب",
        stat_age: "25 سنة",
        stat_status: "عازب",
        stat_exp: "2-3 سنوات",
        stat_loc: "الرباط، المغرب",
        stat_relocate: "مستعد للانتقال",
        badge_passport: "جواز السفر جاهز",
        hero_catch: "\"تحويل الفوضى إلى وضوح بالبيانات، والمهام اليدوية إلى تاريخ عبر أتمتة الذكاء الاصطناعي.\"",
        btn_contact: "اختبر مهاراتي عبر الذكاء الاصطناعي",
        btn_dash: "تحقق من تأثير مهاراتي عالمياً",
        btn_cv: "تحميل السيرة",
        map_title: "نشر بلا حدود",
        map_desc: "الكود الخاص بي سحابي، وكذلك أنا. بينما أنا مقيم في الرباط، طموحي بلا حدود. أنا أبحث بنشاط عن فرص دولية و<strong>مستعد تماماً للانتقال</strong> إلى أي مكان في العالم.",
        skills_title: "الترسانة التقنية",
        skills_sub: "الأنظمة والأدوات التي أستخدمها لبناء حلول الذكاء الاصطناعي.",
        cat_ai_title: 'أنظمة الذكاء الاصطناعي والأتمتة',
        cat_ai_list: '<li><b>أتمتة العمليات:</b> n8n, Make.com, Zapier</li><li>واجهات LLM: OpenAI, Gemini, Deepseek</li><li>النماذج المحلية: Ollama</li><li>هندسة الأوامر (Prompt Engineering)</li><li>روبوتات الدردشة: Voiceflow</li>',
        cat_data_title: 'البيانات والتحليلات',
        cat_data_list: '<li>استخراج البيانات: Selenium, BeautifulSoup</li><li>المعالجة: Pandas, NumPy</li><li>التصور: Matplotlib, Power BI</li><li>التعلم الآلي: Tensorflow, Scikit-learn</li><li>إكسل متقدم</li>',
        cat_market_title: 'النمو والتسويق',
        cat_market_list: '<li>استراتيجيات SEO و GEO</li><li>Google Analytics & Console</li><li>META Business Suite</li><li>أنظمة Odoo ERP</li><li>البريد: Brevo, MailGun</li>',
        cat_prog_title: 'البرمجة',
        cat_prog_list: '<li>Python (الأتمتة، البيانات، الذكاء الاصطناعي)</li><li>JavaScript</li><li>HTML / CSS</li><li>SQL & MongoDB</li><li>GitHub Actions</li>',
        cat_design_title: 'المحتوى والتصميم',
        cat_design_list: '<li>Canva, Photoshop, Illustrator</li><li>توليد الصور: OpenAI DALL-E</li><li>توليد الفيديو: Google Veo</li><li>أدوات الإبداع بالذكاء الاصطناعي</li>',
        cat_cloud_title: 'السحابة والبنية التحتية',
        cat_cloud_list: '<li>AWS: Lambda, S3, DynamoDB</li><li>GCP APIs: Gmail, Sheets</li><li>استضافة VPS: OVHCloud</li>',
        
        // NEW: Learning Section
        learning_title: "مهارات أتعلمها حالياً",
        learn_spanish: "اللغة الإسبانية",

        exp_title: "المسار المهني",
        exp_targetup_role: "مدير مشاريع البيانات والأتمتة",
        exp_targetup_list: "<li>تصميم ونشر سير عمل مؤتمت بالذكاء الاصطناعي (Python, n8n).</li><li>أتمتة استخراج البيانات وتوليد العملاء المحتملين.</li><li>قيادة أتمتة التسويق الرقمي.</li><li>بناء المواقع باستخدام Odoo.</li>",
        exp_ifcar_role: "محلل بيانات وتسويق / أخصائي أتمتة",
        exp_ifcar_list: "<li>تطوير مصنف سيرة ذاتية بالذكاء الاصطناعي.</li><li>تحليل البيانات وبناء لوحات المعلومات.</li><li>قيادة أبحاث السوق وتحسين SEO.</li>",
        exp_sorec_role: "محلل بيانات",
        exp_sorec_list: "<li>تحليل مجموعات البيانات الكبيرة وتحويلها إلى رؤى.</li><li>بناء لوحات معلومات تفاعلية.</li>",
        exp_hcp_role: "باحث إحصائي",
        exp_hcp_list: "<li>المشاركة في الإحصاء الوطني للسكان والسكنى.</li><li>جمع وتدقيق البيانات الهيكلية.</li>",
        edu_title: "التعليم",
        degree_title: "إجازة في الاقتصاد والإدارة",
        video_title: "أنا شخصياً",
        video_sub: "عرض سريع لمهاراتي",
        
        // NEW: Featured Case Study
        feat_title: "دراسة حالة مميزة",
        feat_sub: "مشروعي الأكثر تعقيداً وتأثيراً في مجال الأتمتة حتى الآن.",
        feat_proj_title: "الأتمتة الذكية لطلبات العروض العامة",
        feat_proj_obj: "قمت بقيادة تطوير نظام أتمتة بالذكاء الاصطناعي لمراقبة وتأهيل طلبات العروض (Appels d'offres) لشركة استشارات. الهدف كان التخلص من العمل اليدوي في البحث والقراءة عبر منصات متعددة، وتحسين سرعة اكتشاف الفرص بشكل جذري.",
        feat_workflow_title: "نظرة عامة على سير العمل والذكاء الاصطناعي",
        feat_step1_title: "استخراج البيانات التلقائي",
        feat_step1_desc: "خطوط برمجية باستخدام Python تعمل تلقائياً عبر GitHub Actions، وترسل البيانات الجديدة عبر Webhooks إلى خادم VPS (n8n).",
        feat_step2_title: "التصفية المبدئية بالذكاء الاصطناعي",
        feat_step2_desc: "يقوم وكيل الذكاء الاصطناعي الأول بقراءة الوصف واستبعاد العروض غير ذات الصلة، مع الاحتفاظ فقط بما يتوافق مع خدماتنا الاستشارية.",
        feat_step3_title: "نظام التقييم الذكي",
        feat_step3_desc: "يتم تقييم العروض ذات الصلة بواسطة وكيل ذكاء اصطناعي آخر بناءً على الملاءمة الاستراتيجية، التقنية، القيمة المالية، واحتمالية النجاح.",
        feat_step4_title: "استخراج البيانات المعمق",
        feat_step4_desc: "للعروض الحاصلة على تقييم >90%، يقوم الذكاء الاصطناعي باستخراج تفاصيل دقيقة: الميزانية، المواعيد النهائية، الضمانات، والمستندات المطلوبة.",
        feat_step5_title: "تكامل نظام CRM",
        feat_step5_desc: "يتم دفع الفرص المؤهلة والمهيكلة تلقائياً إلى نظام Odoo CRM ليديرها فريق المبيعات كعملاء محتملين ذوي قيمة عالية.",
        feat_impact_title: "النتائج والتأثير",
        feat_impact_desc: "قلصت هذه الأتمتة الوقت المستغرق في المراجعة اليدوية للعروض بشكل كبير وقضت على الأخطاء البشرية. يمكن لفريق المبيعات الآن التركيز حصرياً على الفرص عالية القيمة والمحللة مسبقاً بواسطة الذكاء الاصطناعي، مما خلق عملية اكتساب سريعة وقابلة للتوسع.",

        proj_title: "مشاريع مختارة",
        proj_sub: "الأتمتة في العمل.",
        cat_proj_social: "وكلاء الذكاء الاصطناعي للتواصل",
        proj_wa_title: "مساعد واتساب الذكي",
        proj_wa_desc: "بوت خدمة عملاء باستخدام n8n و OpenAI.",
        proj_insta_title: "بوت انستغرام",
        proj_insta_desc: "الرد التلقائي وتأهيل العملاء باستخدام الذكاء الاصطناعي.",
        proj_fb_title: "وكيل فيسبوك الذكي",
        proj_fb_desc: "أتمتة الرسائل والتعليقات باستخدام AI.",
        cat_proj_content: "توليد وتوزيع المحتوى",
        proj_img_title: "مولد الصور بالذكاء الاصطناعي",
        proj_img_desc: "إنشاء صور تلقائي باستخدام n8n و OpenAI.",
        proj_video_title: "صانع الفيديو الذكي",
        proj_video_desc: "إنشاء وتحرير الفيديو باستخدام Google Veo.",
        proj_post_title: "النشر التلقائي",
        proj_post_desc: "نشر تلقائي عبر LinkedIn, Instagram, Facebook و TikTok.",
        cat_proj_hr: "أتمتة الموارد البشرية",
        proj_cv_title: "فلتر السير الذاتية",
        proj_cv_desc: "تصنيف المتقدمين عبر Gmail و Gemini API.",
        proj_recruit_title: "أتمتة التوظيف",
        proj_recruit_desc: "تحليل السير الذاتية وجدولة المقابلات.",
        cat_proj_data: "البيانات وذكاء السوق",
        proj_market_title: "لوحة ذكاء السوق",
        proj_market_desc: "رؤى فورية للسوق باستخدام Web Scraping.",
        proj_li_title: "تحليل وظائف لينكد إن",
        proj_li_desc: "تحليل سوق العمل عبر سحب بيانات LinkedIn.",
        proj_ga_title: "لوحة Google Analytics",
        proj_ga_desc: "تحليل SEO والأداء والتوقعات عبر Google API.",
        cat_proj_sales: "المبيعات و CRM",
        proj_scrap_title: "خط سحب بيانات العملاء",
        proj_scrap_desc: "سير عمل مؤتمت من Apollo إلى Odoo CRM.",
        proj_maps_title: "مولد عملاء خرائط جوجل",
        proj_maps_desc: "سحب البيانات وإثرائها والمراسلة الباردة.",
        proj_inv_title: "نظام الفواتير الآلي",
        proj_inv_desc: "معالجة وتوجيه الفواتير تلقائياً.",
        contact_title: "لنتواصل",
        contact_sub: "مستعد لمناقشة فرص الانتقال أو العمل عن بعد."
    }
};

const roleTitles = {
    en: ["Global Automation Architect", "Data Analyst", "AI Specialist"],
    fr: ["Architecte d'Automatisation", "Analyste de Données", "Spécialiste IA"],
    ar: ["مهندس أتمتة عالمي", "محلل بيانات", "خبير ذكاء اصطناعي"]
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
    
    if(lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.style.setProperty('--font-main', "'Cairo', sans-serif");
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.style.setProperty('--font-main', "'Plus Jakarta Sans', sans-serif");
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    clearTimeout(typingTimeout);
    typeLoop();
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    const icon = document.querySelector('.theme-btn i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

const typingText = document.querySelector("#animated-role .typing-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeLoop() {
    const titles = roleTitles[currentLang];
    const currentWord = titles[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % titles.length;
    }
    
    typingTimeout = setTimeout(typeLoop, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    typeLoop();
});
