/**
 * cursor.js
 * Custom ocean bubble cursor.
 * — Default: blue translucent bubble
 * — Hover: bubble grows + turns orange
 * — Click: bubble splits into 3 foam dots that scatter
 */

(function () {
  'use strict';

  /* Skip on touch devices */
  if (window.ElPalmarSupport && window.ElPalmarSupport.touchDevice) return;
  if (!window.matchMedia('(hover: hover)').matches) return;

  /* ── Elements ───────────────────────────────────── */
  var cursor  = document.getElementById('cursor');
  var foam    = document.getElementById('cursor-foam');
  var trail   = document.getElementById('cursor-trail');

  if (!cursor || !foam) return;

  var dots = foam.querySelectorAll('.cursor-foam__dot');

  /* ── State ──────────────────────────────────────── */
  var mouse   = { x: -200, y: -200 };
  var current = { x: -200, y: -200 };
  var isActive = false;
  var rafId;

  /* ── Light section detection ────────────────────── */
  var lightSections = null;

  function updateLightMode(x, y) {
    if (!lightSections) {
      lightSections = document.querySelectorAll('[data-cursor="light"]');
    }
    var onLight = false;
    for (var i = 0; i < lightSections.length; i++) {
      var r = lightSections[i].getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        onLight = true;
        break;
      }
    }
    cursor.classList.toggle('cursor--on-light', onLight);
    if (trail) trail.classList.toggle('cursor-trail--on-light', onLight);
  }

  /* ── GSAP-powered move (with fallback) ─────────── */
  function moveCursor() {
    if (window.gsap) {
      gsap.to(cursor, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.12,
        ease: 'power2.out'
      });
      if (trail) {
        gsap.to(trail, {
          x: mouse.x,
          y: mouse.y,
          duration: 0.38,
          ease: 'power3.out'
        });
      }
    } else {
      /* Pure JS fallback */
      current.x += (mouse.x - current.x) * 0.12;
      current.y += (mouse.y - current.y) * 0.12;
      cursor.style.transform = 'translate(' + current.x + 'px, ' + current.y + 'px) translate(-50%, -50%)';
      if (trail) {
        trail.style.transform = 'translate(' + current.x + 'px, ' + current.y + 'px) translate(-50%, -50%)';
      }
      rafId = requestAnimationFrame(moveCursor);
    }
  }

  /* ── Foam animation ─────────────────────────────── */
  function spawnFoam() {
    foam.style.transform = 'translate(' + mouse.x + 'px, ' + mouse.y + 'px)';

    dots.forEach(function (dot, i) {
      dot.classList.remove('is-active');
      /* Force reflow to restart animation */
      void dot.offsetWidth;

      /* Randomize scatter direction slightly */
      var angle = (i * 120 + Math.random() * 30 - 15) * (Math.PI / 180);
      var dist  = 18 + Math.random() * 8;
      dot.style.setProperty('--foam-x', Math.cos(angle) * dist + 'px');
      dot.style.setProperty('--foam-y', Math.sin(angle) * dist + 'px');

      dot.classList.add('is-active');
    });

    /* Temporarily hide main bubble during foam */
    cursor.querySelector('.cursor__bubble').style.opacity = '0.25';
    setTimeout(function () {
      cursor.querySelector('.cursor__bubble').style.opacity = '';
    }, 350);
  }

  /* ── Hover detection ────────────────────────────── */
  var interactiveSelectors = 'a, button, [role="button"], label, input, select, textarea, [data-hover], .menu__tab, .reviews__btn, .social-link, .delivery-btn, .menu-card, .feature-card, .review-card';

  function onMouseEnterInteractive() {
    cursor.classList.add('cursor--hover');
  }

  function onMouseLeaveInteractive() {
    cursor.classList.remove('cursor--hover');
  }

  function bindHoverTargets() {
    document.querySelectorAll(interactiveSelectors).forEach(function (el) {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });
  }

  /* Re-bind after dynamic content changes */
  function rebindHoverTargets() {
    bindHoverTargets();
  }

  /* ── Event Listeners ────────────────────────────── */
  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    updateLightMode(e.clientX, e.clientY);
    if (!window.gsap && !isActive) {
      isActive = true;
      moveCursor();
    }
  });

  document.addEventListener('mousedown', function () {
    cursor.classList.add('cursor--click');
    spawnFoam();
  });

  document.addEventListener('mouseup', function () {
    cursor.classList.remove('cursor--click');
  });

  document.addEventListener('mouseleave', function () {
    gsap && gsap.to(cursor, { opacity: 0, duration: 0.2 });
  });

  document.addEventListener('mouseenter', function () {
    gsap && gsap.to(cursor, { opacity: 1, duration: 0.2 });
  });

  /* ── Init ───────────────────────────────────────── */
  function init() {
    bindHoverTargets();

    if (window.gsap) {
      /* Use GSAP ticker for butter-smooth tracking */
      gsap.ticker.add(function () {
        gsap.set(cursor, { x: mouse.x, y: mouse.y });
      });
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    } else {
      moveCursor();
    }

    /* Re-bind after language change (re-renders DOM) */
    document.addEventListener('ep:langchange', rebindHoverTargets);

    /* ── Map iframe — hide custom cursor inside iframe ── */
    var mapIframe = document.querySelector('.contact__map-wrap iframe');
    if (mapIframe) {
      mapIframe.addEventListener('mouseenter', function () {
        cursor.style.opacity = '0';
        if (trail) trail.style.opacity = '0';
      });
      mapIframe.addEventListener('mouseleave', function () {
        cursor.style.opacity = '1';
        if (trail) trail.style.opacity = '1';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
