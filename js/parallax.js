/**
 * parallax.js
 * Hero parallax effect.
 * Updates CSS custom property --scroll-y on scroll.
 * GSAP ScrollTrigger used when available; rAF fallback otherwise.
 */

(function () {
  'use strict';

  /* Skip if reduced motion preference */
  if (window.ElPalmarSupport && window.ElPalmarSupport.reducedMotion) return;

  var hero = document.getElementById('inicio');
  if (!hero) return;

  var root = document.documentElement;
  var ticking = false;

  /* ── Helper: update CSS var ─────────────────────── */
  function updateScrollVar(y) {
    root.style.setProperty('--scroll-y', y + 'px');
  }

  /* ── GSAP ScrollTrigger version ─────────────────── */
  function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger) {
      initFallback();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* Sky layer */
    gsap.to('.hero__layer--sky', {
      y: '-18%',
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6
      }
    });

    /* Ocean layer */
    gsap.to('.hero__layer--ocean', {
      y: '-10%',
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8
      }
    });

    /* Palm tree right */
    var palmRight = document.querySelector('.hero__palm:not(.hero__palm--left)');
    if (palmRight) {
      gsap.to(palmRight, {
        y: '-12%',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7
        }
      });
    }

    /* Palm tree left */
    var palmLeft = document.querySelector('.hero__palm--left');
    if (palmLeft) {
      gsap.to(palmLeft, {
        y: '-7%',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.0
        }
      });
    }

    /* Particles float effect */
    var particles = document.querySelectorAll('.hero__particle');
    particles.forEach(function (p, i) {
      gsap.to(p, {
        y: -(40 + i * 15) + 'px',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5 + i * 0.1
        }
      });
    });
  }

  /* ── rAF fallback ───────────────────────────────── */
  function initFallback() {
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateScrollVar(window.pageYOffset || window.scrollY || 0);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* Initial call */
  }

  /* ── Stars creation ─────────────────────────────── */
  function createStars() {
    var container = document.querySelector('.hero__stars');
    if (!container) return;

    var count = window.innerWidth < 768 ? 40 : 80;

    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.className = 'hero__star';

      var size = 1 + Math.random() * 2.5;
      star.style.width  = size + 'px';
      star.style.height = size + 'px';
      star.style.left   = Math.random() * 100 + '%';
      star.style.top    = Math.random() * 65 + '%';
      star.style.setProperty('--star-duration', (2 + Math.random() * 3) + 's');
      star.style.setProperty('--star-delay',    (Math.random() * 4) + 's');
      star.style.opacity = 0.1 + Math.random() * 0.5;

      container.appendChild(star);
    }
  }

  /* ── Floating particles in hero ─────────────────── */
  function createParticles() {
    var container = document.querySelector('.hero');
    if (!container) return;

    var count = 8;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'hero__particle';

      var size = 4 + Math.random() * 14;
      p.style.width  = size + 'px';
      p.style.height = size + 'px';
      p.style.left   = (10 + Math.random() * 80) + '%';
      p.style.top    = (20 + Math.random() * 60) + '%';
      p.style.setProperty('--p-dur',   (3 + Math.random() * 4) + 's');
      p.style.setProperty('--p-delay', (Math.random() * 3) + 's');
      p.style.opacity = 0.08 + Math.random() * 0.18;

      container.appendChild(p);
    }
  }

  /* ── Init ───────────────────────────────────────── */
  function init() {
    createStars();
    createParticles();

    if (window.gsap && window.ScrollTrigger) {
      initGSAP();
    } else {
      initFallback();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
