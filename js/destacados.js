(function () {
  'use strict';

  /* ── Auto-scroll con CSS animation ───────────────── */
  function initAutoScroll(carousel) {
    var track = carousel.querySelector('.dest-track');
    if (!track) return;

    var originals = Array.prototype.slice.call(
      track.querySelectorAll('.dest-slide')
    );
    if (!originals.length) return;

    /* 1. Clonar slides para loop seamless */
    originals.forEach(function (slide) {
      var clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    /* 2. Calcular ancho exacto de un set (después de render) */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var gap = 12;
        var halfPx = originals.reduce(function (acc, s) {
          return acc + s.offsetWidth + gap;
        }, 0);

        /* Duración proporcional al ancho — velocidad constante ~80px/s */
        var dur = Math.round(halfPx / 80) + 's';

        track.style.setProperty('--dest-half', '-' + halfPx + 'px');
        track.style.setProperty('--dest-dur', dur);

        /* 3. Arrancar animación */
        track.classList.add('is-playing');
      });
    });
  }

  /* ── Intersection Observer (fade-up) ──────────────── */
  function initFade() {
    var els = document.querySelectorAll('.dest-anim');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ── Init ─────────────────────────────────────────── */
  document.querySelectorAll('.dest-carousel').forEach(initAutoScroll);
  initFade();

})();
