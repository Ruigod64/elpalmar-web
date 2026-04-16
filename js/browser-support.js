/**
 * browser-support.js
 * Legacy browser detection and polyfills.
 * Loaded first — no dependencies.
 */

(function () {
  'use strict';

  /* ── Feature Detection ──────────────────────────── */
  var support = {
    cssVariables:    typeof CSS !== 'undefined' && CSS.supports && CSS.supports('--foo', 'bar'),
    cssGrid:         typeof CSS !== 'undefined' && CSS.supports && CSS.supports('display', 'grid'),
    backdropFilter:  typeof CSS !== 'undefined' && CSS.supports && (
                       CSS.supports('backdrop-filter', 'blur(1px)') ||
                       CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
                     ),
    intersectionObs: typeof IntersectionObserver !== 'undefined',
    customEvents:    typeof CustomEvent === 'function',
    scrollBehavior:  'scrollBehavior' in document.documentElement.style,
    animations:      typeof document.createElement('div').animate === 'function',
    touchDevice:     'ontouchstart' in window || navigator.maxTouchPoints > 0,
    reducedMotion:   window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  /* Expose globally */
  window.ElPalmarSupport = support;

  /* ── Polyfills ──────────────────────────────────── */

  // IntersectionObserver polyfill (lightweight fallback)
  if (!support.intersectionObs) {
    window.IntersectionObserver = function (callback) {
      this.observe = function (el) {
        // Immediately mark all as visible
        callback([{ isIntersecting: true, target: el }]);
      };
      this.unobserve = function () {};
      this.disconnect = function () {};
    };
  }

  // CustomEvent polyfill for IE11
  if (!support.customEvents) {
    window.CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }

  // requestAnimationFrame polyfill
  if (!window.requestAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback((lastTime = nextTime));
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }

  // Element.closest polyfill
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var el = this;
      while (el && el.nodeType === 1) {
        if (el.matches ? el.matches(selector) : el.msMatchesSelector(selector)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      }
      return null;
    };
  }

  // NodeList.forEach polyfill
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  /* ── CSS Variable fallback for IE11 ────────────── */
  if (!support.cssVariables) {
    document.documentElement.classList.add('no-css-vars');
  }

  /* ── Backdrop filter class ──────────────────────── */
  if (!support.backdropFilter) {
    document.documentElement.classList.add('no-backdrop');
  }

  /* ── Smooth scroll fallback ─────────────────────── */
  if (!support.scrollBehavior) {
    // Polyfill anchor scroll with JS
    document.addEventListener('click', function (e) {
      var anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      // Simple linear scroll for legacy browsers
      var start = window.pageYOffset;
      var change = top - start;
      var duration = 600;
      var startTime = null;

      function step(ts) {
        if (!startTime) startTime = ts;
        var elapsed = ts - startTime;
        var progress = Math.min(elapsed / duration, 1);
        // easeInOut
        var ease = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        window.scrollTo(0, start + change * ease);
        if (elapsed < duration) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ── Touch device: disable custom cursor ────────── */
  if (support.touchDevice) {
    document.documentElement.classList.add('is-touch');
  }

  /* ── Reduced motion flag ────────────────────────── */
  if (support.reducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }

  /* ── Preload Google Fonts ───────────────────────── */
  var preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap'
  ];

  preloadFonts.forEach(function (href) {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });

})();
