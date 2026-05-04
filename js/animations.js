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
      tab.addEventListener('click', function (e) {
        e.preventDefault();

        var target   = tab.getAttribute('data-tab');
        var newPanel = document.getElementById('panel-' + target);
        var savedY   = window.pageYOffset || document.documentElement.scrollTop;
        var html     = document.documentElement;
        var body     = document.body;

        /* Suppress browser scroll-anchoring before any layout change */
        html.style.overflowAnchor = 'none';
        body.style.overflowAnchor = 'none';

        /* Show new panel first, then hide others — no zero-height gap */
        if (newPanel) newPanel.classList.add('is-active');
        tabs.forEach(function (t)   { if (t !== tab)      t.classList.remove('is-active'); });
        panels.forEach(function (p) { if (p !== newPanel) p.classList.remove('is-active'); });
        tab.classList.add('is-active');

        /* Single restore — no double-correction bounce */
        window.scrollTo(0, savedY);

        /* Re-enable anchoring after the frame is painted */
        requestAnimationFrame(function () {
          html.style.overflowAnchor = '';
          body.style.overflowAnchor = '';
        });
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

  /* ── Active nav link (scroll-based) ─────────────── */
  function initActiveNav() {
    var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    if (!navLinks.length) return;

    /* Build ordered list of [id, element] for links that exist in the DOM */
    var targets = [];
    navLinks.forEach(function (link) {
      var id = (link.getAttribute('href') || '').slice(1);
      var el = id ? document.getElementById(id) : null;
      if (el) targets.push({ id: id, el: el, link: link });
    });
    if (!targets.length) return;

    function getActiveId() {
      /* A section is "active" when its top is at or above 42% of viewport.
         We iterate forward and keep overwriting so the last qualifying
         section wins → always the one closest to (but not past) the trigger. */
      var trigger = window.pageYOffset + window.innerHeight * 0.42;
      var activeId = null;
      for (var i = 0; i < targets.length; i++) {
        var top = targets[i].el.getBoundingClientRect().top + window.pageYOffset;
        if (top <= trigger) activeId = targets[i].id;
      }
      return activeId;
    }

    function update() {
      var id = getActiveId();
      targets.forEach(function (t) {
        t.link.classList.toggle('is-active', t.id === id);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update(); /* set correct state on load */
  }

  /* ── Lightbox ────────────────────────────────────── */
  function initLightbox() {
    var lightbox  = document.getElementById('lightbox');
    var lbImg     = document.getElementById('lightboxImg');
    var lbCap     = document.getElementById('lightboxCaption');
    var lbClose   = document.getElementById('lightboxClose');
    var lbBackdrop = document.getElementById('lightboxBackdrop');
    if (!lightbox) return;

    function openLightbox(src, caption) {
      lbImg.src           = src;
      lbImg.alt           = caption || '';
      lbCap.textContent   = caption || '';
      lbCap.style.display = caption ? '' : 'none';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      setTimeout(function () { lbImg.src = ''; }, 320);
    }

    /* Wire up all card images */
    document.querySelectorAll('.menu-card__img img').forEach(function (img) {
      img.addEventListener('click', function (e) {
        e.stopPropagation();
        var caption = img.closest('.menu-card')
          .querySelector('.menu-card__name');
        openLightbox(img.src, caption ? caption.textContent : '');
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lbBackdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  /* ── Init ────────────────────────────────────────── */
  function init() {
    initGSAP();
    initMenuTabs();
    initNav();
    initScrollTop();
    initLightbox();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
