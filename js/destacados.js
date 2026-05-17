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

  /* ── Lightbox ─────────────────────────────────────── */
  function initLightbox() {
    var lb      = document.getElementById('dest-lb');
    var lbImg   = lb.querySelector('.dest-lb__img');
    var lbCap   = lb.querySelector('.dest-lb__caption');
    var btnClose = lb.querySelector('.dest-lb__close');
    var btnPrev  = lb.querySelector('.dest-lb__prev');
    var btnNext  = lb.querySelector('.dest-lb__next');

    var gallery = [];   /* [{src, alt}] of current carousel originals */
    var current = 0;

    function show(idx) {
      current = (idx + gallery.length) % gallery.length;
      lbImg.style.opacity = '0';
      setTimeout(function () {
        lbImg.src = gallery[current].src;
        lbImg.alt = gallery[current].alt;
        lbCap.textContent = gallery[current].alt;
        lbImg.style.opacity = '1';
      }, 120);
      btnPrev.hidden = gallery.length <= 1;
      btnNext.hidden = gallery.length <= 1;
    }

    function open(slides, idx) {
      gallery = slides.map(function (s) {
        var img = s.querySelector('img');
        return { src: img.src, alt: img.alt };
      });
      lb.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      show(idx);
      btnClose.focus();
    }

    function close() {
      lb.setAttribute('hidden', '');
      document.body.style.overflow = '';
      gallery = [];
    }

    /* Click on slides — originals + clones both need listeners.
       With many slides, originals and clones are visible at the same time near the loop reset point. */
    document.querySelectorAll('.dest-carousel').forEach(function (carousel) {
      var originals = Array.prototype.slice.call(
        carousel.querySelectorAll('.dest-slide:not([aria-hidden])')
      );
      var clones = Array.prototype.slice.call(
        carousel.querySelectorAll('.dest-slide[aria-hidden]')
      );

      function attachClick(slide, idx) {
        slide.style.pointerEvents = 'auto';
        slide.style.cursor = 'zoom-in';
        slide.addEventListener('click', function () {
          open(originals, idx);
        });
      }

      originals.forEach(function (slide, idx) { attachClick(slide, idx); });
      /* Clones preserve original order, so clone[idx] maps to original[idx] */
      clones.forEach(function (slide, idx) { attachClick(slide, idx); });
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(current - 1); });
    btnNext.addEventListener('click', function () { show(current + 1); });

    /* Close on backdrop click */
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });

    /* Keyboard: ESC + arrows */
    document.addEventListener('keydown', function (e) {
      if (lb.hasAttribute('hidden')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft')  show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* ── Init ─────────────────────────────────────────── */
  document.querySelectorAll('.dest-carousel').forEach(initAutoScroll);
  initFade();
  initLightbox();

})();
