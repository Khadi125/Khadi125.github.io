/* ==========================================================================
   PORTFOLIO — Khadije Ahmedou Limam
   Header sticky · menu mobile · thème clair/sombre · i18n FR/EN/AR (RTL)
   ========================================================================== */

(function () {
    'use strict';

    /* ==============================================
       Dictionnaire de traductions
       ============================================== */
    const I18N = {
        fr: {
            'nav.work':         'Travail',
            'nav.about':        'À propos',
            'nav.skills':       'Compétences',
            'nav.path':         'Parcours',
            'nav.contact':      'Contact',

            'hero.eyebrow':     'Portfolio · Nouakchott · 2026',
            'hero.name.line1':  'Khadije <em>Ahmedou</em>',
            'hero.name.line2':  'Limam.',
            'hero.role':        'Développeuse Full-Stack — Web & Mobile',
            'hero.baseline':    "Je conçois et développe des applications web et mobiles, de l'idée à la mise en ligne. J'aime autant réfléchir à l'architecture d'un backend qu'à la fluidité d'une interface. Chaque projet est pour moi l'occasion de comprendre un besoin réel et d'y répondre avec soin.",
            'hero.cta1':        'Voir mon travail →',
            'hero.cta3':        'Télécharger mon CV ↓',
            'hero.cta2':        'Me contacter',

            'work.title.em':    'Sélection',
            'work.title.rest':  'de projets récents',
            'work.lead':        "Quelques réalisations qui traduisent ma façon de concevoir des produits : utiles, propres et bien pensés.",
            'work.more':        'Et plus encore, en libre accès sur mon',
            'proj.viewSource':  'Voir le code source',

            'proj.koulia.word':    'Koulia',
            'proj.koulia.title':   'Koulia',
            'proj.koulia.tagline': 'Plateforme universitaire complète — PFE',
            'proj.koulia.desc':    "Écosystème complet pour la gestion académique : API REST, interface web pour l'administration et les enseignants, et application mobile pour les étudiants. Modélisation LMD réaliste, messagerie temps réel, multilingue et mode hors ligne.",

            'proj.shop.title':     'MY Shop',
            'proj.shop.tagline':   'Application e-commerce',
            'proj.shop.desc':      "Application e-commerce complète : catalogue produits, panier, gestion des commandes et espace administrateur. Un projet pour explorer les patterns d'une application de vente en ligne, du produit au paiement.",

            'proj.entr.title':     "Gestion d'entreprise",
            'proj.entr.tagline':   'Application mobile Flutter',
            'proj.entr.desc':      "Application mobile pensée pour piloter une petite structure : employés, projets, tâches et suivi. Réalisée en Flutter, avec une interface épurée qui met l'information utile au premier plan.",

            'proj.game.title':     'Mind Game',
            'proj.game.tagline':   'Jeu de mémoire en Python',
            'proj.game.desc':      "Un jeu à la Simon, moderne et soigné, développé en Python avec pygame. On répète des séquences lumineuses, on monte de niveau et on essaie de battre son score. Un petit projet, mais fini avec soin.",

            'about.title.em':      'À propos',
            'about.title.rest':    'de moi',
            'about.p1':            "Je m'appelle <strong>Khadije Ahmedou Limam</strong>. Je vis à Nouakchott, en Mauritanie, et je termine actuellement ma Licence à la Faculté des Sciences et Techniques de l'Université de Nouakchott.",
            'about.p2':            "Le développement, pour moi, c'est le plaisir de partir d'une idée et d'aller jusqu'au bout : la comprendre, la modéliser, la coder proprement, puis la mettre entre les mains de quelqu'un qui va vraiment s'en servir. J'aime les projets où il faut penser à la fois au backend, à l'expérience utilisateur et à ce qui rend un produit agréable à utiliser.",
            'about.p3':            "Passionnée par le développement logiciel, je suis curieuse et orientée vers la résolution de problèmes. J'apprends rapidement de nouvelles technologies et j'accorde une grande importance à la qualité de mon travail et aux détails. Je recherche des opportunités qui me permettront de contribuer à des projets innovants tout en renforçant mes compétences techniques et professionnelles.",
            'about.fact1':         'projets réalisés',
            'about.fact2':         'langues parlées',
            'about.fact3':         'années de dev',
            'about.fact4':         'domaines de travail',

            'skills.title.em':     'Compétences',
            'skills.title.rest':   '— mes outils de travail',
            'skills.lead':         "Les technologies avec lesquelles j'ai déjà travaillé, en cours, en stage ou sur mes projets personnels.",
            'skills.cat.langs':    'Langages',
            'skills.cat.back':     'Backend',
            'skills.cat.web':      'Web',
            'skills.cat.mobile':   'Mobile',
            'skills.cat.db':       'Base de données',
            'skills.cat.tools':    'Outils',

            'path.title.em':       'Parcours',
            'path.title.rest':     '— formation & expérience',
            'path.formation':      'Formation',
            'path.experience':     'Expérience',
            'path.languages':      'Langues',
            'path.licence.title':  "Licence en Développement, Administration d'Intranet et Internet (DA2I)",
            'path.licence.place':  'Université de Nouakchott — Faculté des Sciences et Techniques',
            'path.licence.note':   'Projet de Fin d\'Études : Koulia — plateforme universitaire complète.',
            'path.cpge.title':     "Classe préparatoire aux Grandes Écoles d'Ingénierie — PCSI",
            'path.cpge.place':     "Cycle préparatoire — filière Physique, Chimie et Sciences de l'Ingénieur",
            'path.bac.title':      'Baccalauréat — série D',
            'path.smart.date':     'Stage — Développeuse',
            'path.smart.note1':    'Conception et développement de Koulia, plateforme universitaire numérique (web, mobile et API REST).',
            'path.smart.note2':    "Conception et développement d'une application mobile de gestion des tâches avec Flutter.",

            'lang.ar':             'Arabe',
            'lang.ar.level':       'Langue maternelle',
            'lang.en':             'Anglais',
            'lang.en.level':       'Avancé (B2 – C1)',
            'lang.fr':             'Français',
            'lang.fr.level':       'Intermédiaire (B1 – B2)',

            'contact.title.em':    'Contactons-nous',
            'contact.lead':        "Vous avez un projet, une opportunité ou une idée à partager ? N'hésitez pas à me contacter. Je serai ravie d'échanger avec vous.",
            'contact.cvLabel':     'CV',
            'contact.cvValue':     'Télécharger mon CV (PDF)',
            'contact.location':    'Basée à Nouakchott, Mauritanie · disponible à distance.',

            'footer.brand':        'Khadije Ahmedou Limam',
            'footer.copy':         '© 2026 · Développé avec <span class="heart">♥</span> à Nouakchott.',
        },

        en: {
            'nav.work':         'Work',
            'nav.about':        'About',
            'nav.skills':       'Skills',
            'nav.path':         'Journey',
            'nav.contact':      'Contact',

            'hero.eyebrow':     'Portfolio · Nouakchott · 2026',
            'hero.name.line1':  'Khadije <em>Ahmedou</em>',
            'hero.name.line2':  'Limam.',
            'hero.role':        'Full-Stack Developer — Web & Mobile',
            'hero.baseline':    "I design and build web and mobile applications, from the initial idea to the live product. I enjoy thinking about backend architecture as much as about the fluidity of a user interface. Each project is an opportunity to understand a real need and answer it with care.",
            'hero.cta1':        'See my work →',
            'hero.cta3':        'Download my resume ↓',
            'hero.cta2':        'Get in touch',

            'work.title.em':    'Selected',
            'work.title.rest':  'recent projects',
            'work.lead':        'A few projects that reflect the way I like to build products: useful, clean, and thoughtful.',
            'work.more':        'And more, freely available on my',
            'proj.viewSource':  'View source code',

            'proj.koulia.word':    'Koulia',
            'proj.koulia.title':   'Koulia',
            'proj.koulia.tagline': 'Complete university platform — Capstone project',
            'proj.koulia.desc':    'A full ecosystem for academic management: REST API, web interface for admin and teachers, and a mobile app for students. Realistic academic modeling, real-time messaging, multilingual and offline-capable.',

            'proj.shop.title':     'MY Shop',
            'proj.shop.tagline':   'E-commerce application',
            'proj.shop.desc':      'A full e-commerce application: product catalog, cart, order management and admin dashboard. A project to explore the patterns of an online store, from the product to the checkout.',

            'proj.entr.title':     'Business Management',
            'proj.entr.tagline':   'Flutter mobile app',
            'proj.entr.desc':      'A mobile app designed to run a small structure: employees, projects, tasks and tracking. Built with Flutter, with a clean UI that puts useful information first.',

            'proj.game.title':     'Mind Game',
            'proj.game.tagline':   'Memory game in Python',
            'proj.game.desc':      'A polished, modern Simon-style memory game, built with Python and pygame. Repeat glowing sequences, level up and try to beat your high score. A small project, but finished with care.',

            'about.title.em':      'About',
            'about.title.rest':    'me',
            'about.p1':            "My name is <strong>Khadije Ahmedou Limam</strong>. I live in Nouakchott, Mauritania, and I'm currently finishing my Bachelor's degree at the Faculty of Science and Technology of the University of Nouakchott.",
            'about.p2':            'To me, development is the joy of starting from an idea and going all the way: understanding it, modeling it, writing clean code, and putting it into the hands of someone who will really use it. I like projects where you have to think about backend, user experience, and what makes a product pleasant to use.',
            'about.p3':            "Passionate about software development, I am curious and problem-solving oriented. I quickly learn new technologies and I care deeply about the quality of my work and the details. I'm looking for opportunities to contribute to innovative projects while strengthening my technical and professional skills.",
            'about.fact1':         'projects delivered',
            'about.fact2':         'languages spoken',
            'about.fact3':         'years of dev',
            'about.fact4':         'domains I work in',

            'skills.title.em':     'Skills',
            'skills.title.rest':   '— my working tools',
            'skills.lead':         "The technologies I've already worked with, at school, during my internship or on my personal projects.",
            'skills.cat.langs':    'Languages',
            'skills.cat.back':     'Backend',
            'skills.cat.web':      'Web',
            'skills.cat.mobile':   'Mobile',
            'skills.cat.db':       'Database',
            'skills.cat.tools':    'Tools',

            'path.title.em':       'Journey',
            'path.title.rest':     '— education & experience',
            'path.formation':      'Education',
            'path.experience':     'Experience',
            'path.languages':      'Languages',
            'path.licence.title':  "Bachelor's in Intranet and Internet Development & Administration (DA2I)",
            'path.licence.place':  'University of Nouakchott — Faculty of Science and Technology',
            'path.licence.note':   'Capstone project: Koulia — a complete university platform.',
            'path.cpge.title':     'Preparatory class for Engineering Grandes Écoles — PCSI',
            'path.cpge.place':     'Preparatory cycle — Physics, Chemistry and Engineering Sciences',
            'path.bac.title':      'High-school diploma — Science track (D)',
            'path.smart.date':     'Internship — Developer',
            'path.smart.note1':    'Design and development of Koulia, a digital university platform (web, mobile and REST API).',
            'path.smart.note2':    'Design and development of a Flutter mobile task management application.',

            'lang.ar':             'Arabic',
            'lang.ar.level':       'Native',
            'lang.en':             'English',
            'lang.en.level':       'Advanced (B2 – C1)',
            'lang.fr':             'French',
            'lang.fr.level':       'Intermediate (B1 – B2)',

            'contact.title.em':    "Let's talk",
            'contact.lead':        "Do you have a project, an opportunity or an idea to share? Feel free to reach out. I'll be glad to hear from you.",
            'contact.cvLabel':     'Resume',
            'contact.cvValue':     'Download my resume (PDF)',
            'contact.location':    'Based in Nouakchott, Mauritania · open to remote.',

            'footer.brand':        'Khadije Ahmedou Limam',
            'footer.copy':         '© 2026 · Made with <span class="heart">♥</span> in Nouakchott.',
        },

        ar: {
            'nav.work':         'أعمالي',
            'nav.about':        'من أنا',
            'nav.skills':       'مهاراتي',
            'nav.path':         'مسيرتي',
            'nav.contact':      'تواصل',

            'hero.eyebrow':     'ملف الأعمال · نواكشوط · 2026',
            'hero.name.line1':  'خديجة <em>أحمدو</em>',
            'hero.name.line2':  'لمام.',
            'hero.role':        'مطوّرة برمجيات — ويب وتطبيقات محمولة',
            'hero.baseline':    'أصمّم وأطوّر تطبيقات الويب والهاتف، من الفكرة الأولى إلى الإطلاق. أستمتع بالتفكير في هندسة الخادم بقدر ما أهتمّ بسلاسة واجهة المستخدم. كل مشروع فرصة لفهم حاجة حقيقية والاستجابة لها بعناية.',
            'hero.cta1':        'شاهد أعمالي ←',
            'hero.cta3':        'حمّل سيرتي الذاتية ↓',
            'hero.cta2':        'تواصل معي',

            'work.title.em':    'مختارات',
            'work.title.rest':  'من مشاريعي الأخيرة',
            'work.lead':        'مشاريع تعكس طريقتي في تصميم المنتجات: مفيدة، نظيفة، ومدروسة.',
            'work.more':        'والمزيد متاح على',
            'proj.viewSource':  'مشاهدة الشيفرة المصدرية',

            'proj.koulia.word':    'كُلية',
            'proj.koulia.title':   'كُلية',
            'proj.koulia.tagline': 'منصّة جامعية متكاملة — مشروع التخرج',
            'proj.koulia.desc':    'نظام متكامل لإدارة الحياة الأكاديمية: واجهة برمجة، تطبيق ويب للإدارة والأساتذة، وتطبيق جوّال للطلاب. نمذجة أكاديمية واقعية، محادثات فورية، دعم لعدة لغات، وعمل بدون اتصال.',

            'proj.shop.title':     'MY Shop',
            'proj.shop.tagline':   'تطبيق تجارة إلكترونية',
            'proj.shop.desc':      'تطبيق تجارة إلكترونية متكامل: كتالوج المنتجات، السلة، إدارة الطلبات ولوحة الإدارة. مشروع لاستكشاف أنماط متجر عبر الإنترنت من المنتج إلى الدفع.',

            'proj.entr.title':     'إدارة المؤسسات',
            'proj.entr.tagline':   'تطبيق جوّال بـFlutter',
            'proj.entr.desc':      'تطبيق جوّال مصمّم لإدارة مؤسسة صغيرة: الموظفون، المشاريع، المهام، والمتابعة. مبني بـFlutter بواجهة نظيفة تُبرز المعلومة المهمة أولًا.',

            'proj.game.title':     'لعبة الذاكرة',
            'proj.game.tagline':   'لعبة ذاكرة بلغة Python',
            'proj.game.desc':      'لعبة على غرار Simon، عصرية ومتقنة، مطوّرة بـPython وpygame. تكرّر التسلسلات المضيئة، تتقدّم في المستويات وتحاول تحطيم أفضل نتيجة. مشروع صغير، لكنه منجز بعناية.',

            'about.title.em':      'من أنا',
            'about.title.rest':    '',
            'about.p1':            'اسمي <strong>خديجة أحمدو ليمام</strong>. أعيش في نواكشوط بموريتانيا، وأنهي حاليًا الإجازة في كلية العلوم والتقنية بجامعة نواكشوط.',
            'about.p2':            'البرمجة بالنسبة لي هي متعة الانطلاق من فكرة والوصول بها إلى النهاية: فهمها، نمذجتها، كتابتها بشكل نظيف، ثم وضعها بين يدي من سيستخدمها فعلًا. أحب المشاريع التي تجمع بين التفكير في الخادم وتجربة المستخدم وما يجعل المنتج ممتعًا في الاستخدام.',
            'about.p3':            'شغوفة بتطوير البرمجيات، فضولية وموجَّهة نحو حلّ المشكلات. أتعلّم بسرعة التقنيات الجديدة وأُولي أهمية كبيرة لجودة عملي وتفاصيله. أبحث عن فرص تسمح لي بالمساهمة في مشاريع مبتكرة وبتعزيز مهاراتي التقنية والمهنية.',
            'about.fact1':         'مشروع منجَز',
            'about.fact2':         'لغات أتحدّثها',
            'about.fact3':         'سنوات في التطوير',
            'about.fact4':         'مجالات عملي',

            'skills.title.em':     'المهارات',
            'skills.title.rest':   '— أدوات عملي',
            'skills.lead':         'التقنيات التي عملتُ بها فعلًا، في الدراسة أو التدريب أو مشاريعي الشخصية.',
            'skills.cat.langs':    'اللغات',
            'skills.cat.back':     'الخادم',
            'skills.cat.web':      'الويب',
            'skills.cat.mobile':   'المحمول',
            'skills.cat.db':       'قواعد البيانات',
            'skills.cat.tools':    'الأدوات',

            'path.title.em':       'المسيرة',
            'path.title.rest':     '— التكوين والخبرة',
            'path.formation':      'التكوين',
            'path.experience':     'الخبرة',
            'path.languages':      'اللغات',
            'path.licence.title':  'إجازة في تطوير وإدارة الإنترانت والإنترنت (DA2I)',
            'path.licence.place':  'جامعة نواكشوط — كلية العلوم والتقنية',
            'path.licence.note':   'مشروع التخرج: كلية — منصّة جامعية متكاملة.',
            'path.cpge.title':     'السنة التحضيرية للمدارس الهندسية الكبرى — PCSI',
            'path.cpge.place':     'المرحلة التحضيرية — شعبة الفيزياء والكيمياء وعلوم المهندس',
            'path.bac.title':      'الباكالوريا — شعبة العلوم الطبيعية (D)',
            'path.smart.date':     'تدريب — مطوّرة',
            'path.smart.note1':    'تصميم وتطوير كولية، منصّة جامعية رقمية (ويب، جوّال، وواجهة برمجية).',
            'path.smart.note2':    'تصميم وتطوير تطبيق جوّال لإدارة المهام باستخدام Flutter.',

            'lang.ar':             'العربية',
            'lang.ar.level':       'اللغة الأم',
            'lang.en':             'الإنجليزية',
            'lang.en.level':       'متقدّم (B2 – C1)',
            'lang.fr':             'الفرنسية',
            'lang.fr.level':       'متوسّط (B1 – B2)',

            'contact.title.em':    'لنتواصل',
            'contact.lead':        'هل لديك مشروع أو فرصة أو فكرة تودّ مشاركتها؟ لا تتردّد في التواصل معي، سيسعدني الحديث معك.',
            'contact.cvLabel':     'السيرة الذاتية',
            'contact.cvValue':     'تحميل السيرة الذاتية (PDF)',
            'contact.location':    'مقيمة في نواكشوط بموريتانيا · متاحة للعمل عن بُعد.',

            'footer.brand':        'خديجة أحمدو لمام',
            'footer.copy':         '© 2026 · صُنع بـ<span class="heart">♥</span> في نواكشوط.',
        },
    };

    /* ==============================================
       Utils
       ============================================== */
    const $  = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const store = {
        get: (k, fallback) => {
            try { return localStorage.getItem(k) ?? fallback; }
            catch { return fallback; }
        },
        set: (k, v) => {
            try { localStorage.setItem(k, v); } catch {}
        }
    };

    /* ==============================================
       Thème clair / sombre
       ============================================== */
    const themeBtn = $('#themeBtn');

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        store.set('kal-theme', theme);
        const meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#12100E' : '#FBFAF7');
    }

    (function initTheme() {
        const saved = store.get('kal-theme');
        if (saved) return applyTheme(saved);
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(dark ? 'dark' : 'light');
    })();

    themeBtn?.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme;
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    /* ==============================================
       Langues + RTL
       ============================================== */
    function applyLang(lang) {
        if (!I18N[lang]) return;
        const dict = I18N[lang];

        // Attributs racine
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        // Applique les traductions
        $$('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Boutons langues
        $$('.lang-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });

        store.set('kal-lang', lang);
    }

    $$('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    (function initLang() {
        const saved = store.get('kal-lang');
        applyLang(saved || 'fr');
    })();

    /* ==============================================
       Nav sticky
       ============================================== */
    const navWrap = $('#nav');
    function updateNav() {
        if (window.scrollY > 20) navWrap.classList.add('scrolled');
        else navWrap.classList.remove('scrolled');
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    /* ==============================================
       Menu mobile
       ============================================== */
    const menuBtn = $('#menuBtn');
    const navLinks = $('.nav-links');
    menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
    $$('.nav-link').forEach((l) =>
        l.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    /* ==============================================
       Reveal à l'apparition
       ============================================== */
    const targets = $$('.section-head, .project, .about-text, .about-facts, .skill-block, .path-col, .contact-links, .contact-location');
    targets.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('is-visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

    targets.forEach((el) => io.observe(el));
})();
