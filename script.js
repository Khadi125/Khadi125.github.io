/* ==========================================================================
   PORTFOLIO — Khadije Ahmedou Limam
   Interactions minimales : header sticky, menu mobile, animations à l'apparition
   ========================================================================== */

(function () {
    'use strict';

    // ---------- Header : ombre au scroll ----------
    const header = document.getElementById('header');
    const toggleHeaderShadow = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeaderShadow, { passive: true });
    toggleHeaderShadow();

    // ---------- Menu mobile ----------
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Ferme le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

    // ---------- Animation à l'apparition (fade + slide-up) ----------
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Cibler les blocs à animer
    const animatedSelectors = [
        '.section-header',
        '.about-text',
        '.about-stats',
        '.skill-card',
        '.project-featured',
        '.project-card',
        '.timeline-column',
        '.langues-block',
        '.contact-card',
    ];

    document.querySelectorAll(animatedSelectors.join(',')).forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // ---------- Micro-CSS injecté pour l'animation reveal ----------
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 700ms ease, transform 700ms ease;
        }
        .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
})();
