/* ============================================================
   PRELOADER — Burbujas que van de izquierda a derecha
   ============================================================ */

(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const container = document.getElementById('preloader-bubbles');
  if (!preloader || !container) return;

  // Respect reduced-motion
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    preloader.classList.add('is-hidden');
    document.body.style.overflow = '';
    return;
  }

  // Lock scroll while loading
  document.body.style.overflow = 'hidden';

  /* ── Create bubbles ── */
  const BUBBLE_COUNT = 28;
  const bubbles = [];

  for (let i = 0; i < BUBBLE_COUNT; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'preloader__bubble';

    // Random size between 30px and 120px
    const size = 30 + Math.random() * 90;
    // Random vertical position
    const top  = Math.random() * 90;
    // Random wobble offset
    const wobble = (Math.random() - 0.5) * 80;
    // Duration 1.6s – 3.2s
    const duration = 1600 + Math.random() * 1600;
    // Delay stagger
    const delay = i * 60 + Math.random() * 120;
    // Travel distance (ensure it reaches far right)
    const travel = window.innerWidth + 300;

    bubble.style.cssText = [
      'width:'    + size + 'px',
      'height:'   + size + 'px',
      'top:'      + top + '%',
      '--wobble:' + wobble + 'px',
      '--travel:' + travel + 'px',
      '--duration:' + duration + 'ms',
      '--delay:'    + delay + 'ms',
    ].join(';');

    container.appendChild(bubble);
    bubbles.push({ el: bubble, delay: delay, duration: duration });
  }

  /* ── Determine total animation time ── */
  const maxTime = bubbles.reduce(function(acc, b) {
    return Math.max(acc, b.delay + b.duration);
  }, 0);

  // Minimum display: 1.8s, max: 3.5s
  const exitDelay = Math.min(Math.max(maxTime * 0.6, 1800), 3500);

  /* ── Exit preloader ── */
  function exitPreloader() {
    preloader.classList.add('is-exiting');
    document.body.style.overflow = '';

    preloader.addEventListener('animationend', function onExit() {
      preloader.classList.add('is-hidden');
      preloader.removeEventListener('animationend', onExit);

      // Fire event for other modules
      document.dispatchEvent(new CustomEvent('preloaderDone'));
    }, { once: true });
  }

  /* ── Wait for fonts + min delay ── */
  const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();
  const timePromise = new Promise(function(resolve) {
    setTimeout(resolve, exitDelay);
  });

  Promise.all([fontPromise, timePromise]).then(exitPreloader);

})();
