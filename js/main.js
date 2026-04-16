/**
 * main.js
 * Entry point principal.
 *
 * Responsabilidades:
 *  1. Cargar GSAP (CDN) de forma secuencial y confiable.
 *  2. Después de GSAP, cargar los módulos de la app en orden.
 *  3. Lógica de orquestación: smooth scroll, lazy-map, console badge.
 *
 * browser-support.js y language.js se cargan antes en el HTML
 * (síncronos) porque necesitan ejecutarse lo antes posible para
 * evitar FOUC (Flash Of Untranslated/Unstyled Content).
 */

(function () {
  'use strict';

  /* ── CDN scripts — se cargan primero, en orden ──── */
  var GSAP_SCRIPTS = [
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js'
  ];

  /* ── Módulos de la app — se cargan después de GSAP  */
  var APP_SCRIPTS = [
    'js/cursor.js',
    'js/preloader.js',
    'js/parallax.js',
    'js/reviews.js',
    'js/animations.js'
  ];

  /* ── Utilidad: inyectar un <script> y esperar onload ── */
  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = function () { callback && callback(); };
    script.onerror = function () {
      console.warn('[El Palmar] No se pudo cargar:', src);
      callback && callback(); /* continuar aunque falle */
    };
    document.head.appendChild(script);
  }

  /* ── Carga secuencial de un array de scripts ──────── */
  function loadSequence(scripts, index, done) {
    if (index >= scripts.length) {
      done && done();
      return;
    }
    loadScript(scripts[index], function () {
      loadSequence(scripts, index + 1, done);
    });
  }

  /* ── Lógica propia (antes era el body de main.js) ─── */
  function initApp() {

    /* Registrar plugin ScrollTo si GSAP lo cargó */
    if (window.gsap && window.ScrollToPlugin) {
      gsap.registerPlugin(ScrollToPlugin);
    }

    /* Smooth scroll para todos los anchors internos */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = anchor.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();

        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        if (window.gsap) {
          gsap.to(window, {
            scrollTo: { y: top, autoKill: false },
            duration: 0.9,
            ease: 'power2.inOut'
          });
        } else {
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    /* Lazy-load del iframe de Google Maps */
    var mapWrap = document.querySelector('.contact__map-wrap');
    if (mapWrap) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var iframe = mapWrap.querySelector('iframe[data-src]');
            if (iframe) {
              iframe.src = iframe.getAttribute('data-src');
              iframe.removeAttribute('data-src');
            }
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '200px 0px' });
      observer.observe(mapWrap);
    }

    /* Revelar body cuando el preloader termina */
    document.addEventListener('ep:preloaderDone', function () {
      if (window.gsap) {
        gsap.to('body', { opacity: 1, duration: 0.3, ease: 'power1.out' });
      }
    });

    /* Console signature */
    if (window.console && window.console.log) {
      console.log(
        '%c El Palmar · Mariscos + Sushi ',
        'background:#1C2632;color:#3DC8E8;padding:6px 12px;border-radius:4px;' +
        'font-family:Poppins,sans-serif;font-size:13px;letter-spacing:0.1em'
      );
      console.log(
        '%c Mazatlán, Sinaloa · México',
        'color:#F7941D;font-family:Poppins,sans-serif;font-size:11px;letter-spacing:0.08em'
      );
    }
  }

  /* ── Arranque ──────────────────────────────────────── */
  function boot() {
    /* 1. Cargar GSAP → luego módulos de app → luego init */
    loadSequence(GSAP_SCRIPTS, 0, function () {
      loadSequence(APP_SCRIPTS, 0, function () {
        initApp();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
