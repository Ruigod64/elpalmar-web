/**
 * animations.js
 * GSAP + ScrollTrigger page animations.
 * Falls back to IntersectionObserver CSS class toggling.
 */

(function () {
  'use strict';

  var reducedMotion = window.ElPalmarSupport && window.ElPalmarSupport.reducedMotion;

  /* ── Scroll reveal (IntersectionObserver) ────────── */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.animate-fade-up, .animate-fade-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── GSAP Animations ─────────────────────────────── */
  function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger || reducedMotion) {
      initScrollReveal();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ── Nav ─────────────────────────────────────── */
    var header = document.querySelector('.header');
    if (header) {
      ScrollTrigger.create({
        start: 'top+=80 top',
        onEnter:      function () { header.classList.add('header--scrolled'); },
        onLeaveBack:  function () { header.classList.remove('header--scrolled'); }
      });
    }

    /* ── Active nav link ─────────────────────────── */
    var sections  = document.querySelectorAll('section[id]');
    var navLinks  = document.querySelectorAll('.nav__links a[href^="#"]');

    sections.forEach(function (section) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: function () { setActiveLink(section.id); },
        onEnterBack: function () { setActiveLink(section.id); }
      });
    });

    function setActiveLink(id) {
      navLinks.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
      });
    }

    /* Opciones comunes: once:true previene que elementos ya
       visibles al init queden atascados en opacity:0 */
    var ST_DEFAULTS = { once: true, toggleActions: 'play none none none' };

    /* ── About section ───────────────────────────── */
    var aboutText = document.querySelector('.about__text');
    if (aboutText) {
      gsap.from(aboutText.children, {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
        scrollTrigger: Object.assign({ trigger: aboutText, start: 'top 80%' }, ST_DEFAULTS)
      });
    }

    var featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length) {
      gsap.from(featureCards, {
        y: 50, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
        scrollTrigger: Object.assign({ trigger: featureCards[0], start: 'top 85%' }, ST_DEFAULTS)
      });
    }

    var aboutStats = document.querySelectorAll('.about__stat');
    if (aboutStats.length) {
      gsap.from(aboutStats, {
        scale: 0.8, opacity: 0, stagger: 0.18, duration: 0.6, ease: 'back.out(1.7)',
        scrollTrigger: Object.assign({ trigger: '.about__visual', start: 'top 80%' }, ST_DEFAULTS)
      });
    }

    /* ── Menu section ────────────────────────────── */
    var menuHeader = document.querySelector('.menu .section-header');
    if (menuHeader) {
      gsap.from(menuHeader.children, {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
        scrollTrigger: Object.assign({ trigger: menuHeader, start: 'top 85%' }, ST_DEFAULTS)
      });
    }

    /* ── Reviews ─────────────────────────────────── */
    var reviewsHeader = document.querySelector('.reviews .section-header');
    if (reviewsHeader) {
      gsap.from(reviewsHeader.children, {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
        scrollTrigger: Object.assign({ trigger: reviewsHeader, start: 'top 85%' }, ST_DEFAULTS)
      });
    }

    /* ── Contact ─────────────────────────────────── */
    var contactCols = document.querySelectorAll('.contact__map-wrap, .contact__info');
    if (contactCols.length) {
      gsap.from(contactCols, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact__grid',
          start: 'top 85%',
          once: true,
          /* Si la sección ya es visible al init, anima de inmediato */
          toggleActions: 'play none none none'
        }
      });
    }

    /* ── Footer ──────────────────────────────────── */
    var footerTop = document.querySelector('.footer__top');
    if (footerTop) {
      gsap.from(footerTop.children, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerTop,
          start: 'top 90%'
        }
      });
    }

    /* ── Generic animate-fade-up fallback ────────── */
    initScrollReveal();
  }

  /* ── Menu tabs ───────────────────────────────────── */
  function initMenuTabs() {
    var tabs   = document.querySelectorAll('.menu__tab');
    var panels = document.querySelectorAll('.menu__panel');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');

        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });

        tab.classList.add('is-active');
        var panel = document.getElementById('panel-' + target);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  /* ── Navigation ──────────────────────────────────── */
  function initNav() {
    var header    = document.querySelector('.header');
    var hamburger = document.getElementById('navHamburger');
    var drawer    = document.getElementById('navDrawer');
    var overlay   = document.getElementById('navOverlay');

    /* Scrolled state (fallback without GSAP ScrollTrigger) */
    if (!window.ScrollTrigger && header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('header--scrolled', window.pageYOffset > 80);
      }, { passive: true });
    }

    /* Mobile drawer */
    function openDrawer() {
      if (!hamburger || !drawer) return;
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!hamburger || !drawer) return;
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', function () {
      hamburger.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });

    if (overlay) overlay.addEventListener('click', closeDrawer);

    /* Close drawer on nav link click */
    if (drawer) {
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeDrawer);
      });
    }

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ── Scroll to top ───────────────────────────────── */
  function initScrollTop() {
    var btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (window.gsap) {
        gsap.to(window, { scrollTo: 0, duration: 0.8, ease: 'power2.inOut' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  /* ── Init ────────────────────────────────────────── */
  function init() {
    initGSAP();
    initMenuTabs();
    initNav();
    initScrollTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
