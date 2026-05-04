/**
 * reviews.js
 * Draggable carousel for the reviews section.
 *
 * Bug fixed: scroll event during GSAP animation was recalculating
 * currentIndex mid-animation and reverting dots to the previous index.
 * Solution: isScrolling flag suppresses the scroll handler while
 * a programmatic scroll is in progress.
 */

(function () {
  'use strict';

  var track = document.querySelector('.reviews__track');
  if (!track) return;

  var prevBtn        = document.getElementById('reviewsPrev');
  var nextBtn        = document.getElementById('reviewsNext');
  var dotsContainer  = document.querySelector('.reviews__dots');

  /* ── State ──────────────────────────────────────── */
  var currentIndex  = 0;
  var isDragging    = false;
  var startX        = 0;
  var scrollStart   = 0;
  var isScrolling   = false; /* true while a programmatic scroll runs */

  /* ── Helpers ────────────────────────────────────── */
  function getCards() {
    return track.querySelectorAll('.review-card');
  }

  function getCardWidth() {
    var first = getCards()[0];
    if (!first) return 0;
    var style = window.getComputedStyle(track);
    var gap   = parseFloat(style.columnGap) || parseFloat(style.gap) || 24;
    return first.offsetWidth + gap;
  }

  function updateDots() {
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.reviews__dot').forEach(function (dot, i) {
      var active = i === currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  }

  function updateButtons() {
    var total = getCards().length;
    if (prevBtn) {
      var atStart = currentIndex <= 0;
      prevBtn.disabled = atStart;
      prevBtn.classList.toggle('is-disabled', atStart);
    }
    if (nextBtn) {
      var atEnd = currentIndex >= total - 1;
      nextBtn.disabled = atEnd;
      nextBtn.classList.toggle('is-disabled', atEnd);
    }
  }

  /* ── Core: go to index ──────────────────────────── */
  function goTo(index) {
    var cards = getCards();
    index = Math.max(0, Math.min(index, cards.length - 1));
    currentIndex = index;

    var target = getCardWidth() * index;
    isScrolling = true;

    if (window.gsap) {
      gsap.to(track, {
        scrollLeft: target,
        duration:   0.52,
        ease:       'power2.inOut',
        onComplete: function () { isScrolling = false; }
      });
    } else {
      track.scrollTo({ left: target, behavior: 'smooth' });
      /* fallback: reset flag after CSS smooth-scroll settles */
      setTimeout(function () { isScrolling = false; }, 650);
    }

    updateDots();
    updateButtons();
  }

  /* ── Prev / Next buttons ────────────────────────── */
  if (prevBtn) {
    prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });
  }

  /* ── Dot navigation ─────────────────────────────── */
  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    getCards().forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className      = 'reviews__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label',    'Reseña ' + (i + 1));
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () { goTo(i); });
      dotsContainer.appendChild(dot);
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
    track.scrollLeft = scrollStart - (e.pageX - startX);
  });

  document.addEventListener('mouseup', function (e) {
    if (!isDragging) return;
    isDragging             = false;
    track.style.userSelect = '';
    var dx = e.pageX - startX;
    goTo(Math.abs(dx) > 40
      ? (dx < 0 ? currentIndex + 1 : currentIndex - 1)
      : currentIndex
    );
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
      goTo(dx < 0 ? currentIndex + 1 : currentIndex - 1);
    } else {
      goTo(currentIndex); /* snap back if short tap */
    }
  }, { passive: true });

  /* ── Scroll listener (manual drag only) ────────────
     Skipped while isScrolling to prevent mid-animation
     flicker that was causing the dot de-sync bug.        */
  track.addEventListener('scroll', function () {
    if (isScrolling) return;
    var cardW = getCardWidth();
    if (cardW <= 0) return;
    var idx = Math.round(track.scrollLeft / cardW);
    if (idx !== currentIndex) {
      currentIndex = idx;
      updateDots();
      updateButtons();
    }
  }, { passive: true });

  /* ── Keyboard ───────────────────────────────────── */
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  /* ── Init ───────────────────────────────────────── */
  function init() {
    buildDots();
    updateButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
