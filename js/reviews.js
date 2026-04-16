/**
 * reviews.js
 * Draggable carousel for the reviews section.
 * Mouse drag + touch swipe + prev/next buttons + dot nav.
 */

(function () {
  'use strict';

  var track = document.querySelector('.reviews__track');
  if (!track) return;

  var prevBtn = document.getElementById('reviewsPrev');
  var nextBtn = document.getElementById('reviewsNext');
  var dotsContainer = document.querySelector('.reviews__dots');

  /* ── State ──────────────────────────────────────── */
  var isDragging   = false;
  var startX       = 0;
  var scrollStart  = 0;
  var currentIndex = 0;

  /* ── Helpers ────────────────────────────────────── */
  function getCards() {
    return track.querySelectorAll('.review-card');
  }

  function getCardWidth() {
    var first = getCards()[0];
    if (!first) return 0;
    var style = window.getComputedStyle(track);
    var gap = parseFloat(style.columnGap || style.gap || 0) || 24;
    return first.offsetWidth + gap;
  }

  function updateDots() {
    if (!dotsContainer) return;
    var dots = dotsContainer.querySelectorAll('.reviews__dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === currentIndex);
    });
  }

  function scrollTo(index) {
    var cards = getCards();
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;
    currentIndex = index;

    var cardW = getCardWidth();
    var target = cardW * index;

    if (window.gsap) {
      gsap.to(track, {
        scrollLeft: target,
        duration: 0.5,
        ease: 'power2.inOut'
      });
    } else {
      /* CSS smooth scroll */
      track.scrollTo({ left: target, behavior: 'smooth' });
    }

    updateDots();
  }

  /* ── Build dots ─────────────────────────────────── */
  function buildDots() {
    if (!dotsContainer) return;
    var cards = getCards();
    dotsContainer.innerHTML = '';
    cards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'reviews__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Review ' + (i + 1));
      dot.addEventListener('click', function () { scrollTo(i); });
      dotsContainer.appendChild(dot);
    });
  }

  /* ── Buttons ────────────────────────────────────── */
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      scrollTo(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      scrollTo(currentIndex + 1);
    });
  }

  /* ── Mouse drag ─────────────────────────────────── */
  track.addEventListener('mousedown', function (e) {
    isDragging  = true;
    startX      = e.pageX;
    scrollStart = track.scrollLeft;
    track.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    var dx = e.pageX - startX;
    track.scrollLeft = scrollStart - dx;
  });

  document.addEventListener('mouseup', function (e) {
    if (!isDragging) return;
    isDragging = false;
    track.style.userSelect = '';

    /* Snap to nearest card */
    var cardW = getCardWidth();
    if (cardW > 0) {
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) scrollTo(currentIndex + 1);
        else        scrollTo(currentIndex - 1);
      } else {
        scrollTo(currentIndex);
      }
    }
  });

  /* ── Touch swipe ────────────────────────────────── */
  var touchStartX = 0;

  track.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    scrollStart = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) scrollTo(currentIndex + 1);
      else        scrollTo(currentIndex - 1);
    }
  }, { passive: true });

  /* ── Keyboard navigation ────────────────────────── */
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  scrollTo(currentIndex - 1);
    if (e.key === 'ArrowRight') scrollTo(currentIndex + 1);
  });

  /* ── Update current index on scroll ─────────────── */
  track.addEventListener('scroll', function () {
    var cardW = getCardWidth();
    if (cardW > 0) {
      var idx = Math.round(track.scrollLeft / cardW);
      if (idx !== currentIndex) {
        currentIndex = idx;
        updateDots();
      }
    }
  }, { passive: true });

  /* ── Init ───────────────────────────────────────── */
  function init() {
    buildDots();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
