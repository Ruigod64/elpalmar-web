/**
 * language.js
 * Bilingual i18n system (ES / EN).
 * Detects system language, provides toggle.
 */

(function () {
  'use strict';

  /* ── Translations ───────────────────────────────── */
  var i18n = {
    es: {
      /* Nav */
      'nav.about':    'Nosotros',
      'nav.menu':     'Menú',
      'nav.reviews':  'Reseñas',
      'nav.contact':  'Contacto',

      /* Hero */
      'hero.eyebrow':   'Mazatlán, Sinaloa · México',
      'hero.title':     'No venimos a convencerte.',
      'hero.title2':    'El mar lo hará por nosotros.',
      'hero.subtitle':  'Mariscos que recuerdan el Pacífico. Sushi que reescribe lo que conoces del mar.',
      'hero.cta':       'Explorar el menú',
      'hero.cta2':      'Reservar mesa',
      'hero.scroll':    'Desplazar',

      /* About */
      'about.tag':        'Nuestra historia',
      'about.title':      'El oceáno en cada bocado',
      'about.body1':      'Mazatlán tiene un secreto: los mejores mariscos no se anuncian, se descubren. Y una vez que los pruebas, el Océano Pacífico nunca vuelve a ser el mismo fondo de pantalla.',
      'about.body2':      'En El Palmar fusionamos la tradición pesquera de Sinaloa con la precisión del sushi japonés. Cada plato es una conversación entre dos mares, dos culturas y un solo propósito: que te quedes sin palabras.',
      'about.cta':        'Ver el menú completo',
      'about.stat1':      'Años frente al mar',
      'about.stat2':      'Platillos únicos',
      'about.stat3':      'Años de tradición',
      'about.f1.title':   'Del barco al plato',
      'about.f1.body':    'Trabajamos directamente con pescadores locales. Sin intermediarios, sin frigoríficos de por medio. El producto llega fresco cada mañana.',
      'about.f2.title':   'Fusión sin forzar',
      'about.f2.body':    'No mezclamos por moda. Mezclamos porque el camarón sinaloense y el arroz de sushi nacieron para encontrarse.',
      'about.f3.title':   'Ambiente que acompaña',
      'about.f3.body':    'La palapa, la brisa y el rumor del mar de fondo. Un lugar donde el tiempo corre a otra velocidad.',

      /* Menu */
      'menu.tag':       'Lo que preparamos',
      'menu.title':     'El menú',
      'menu.subtitle':  'Próximamente añadiremos todo nuestro menú aquí. Por ahora, ven y déjate sorprender.',
      'menu.tab1':      'Mariscos',
      'menu.tab2':      'Sushi',
      'menu.tab3':      'Especialidades',
      'menu.tab4':      'Bebidas',
      'menu.coming':    'Menú completo próximamente — cada platillo fotografiado y descrito.',
      'menu.badge':     'Pronto',

      /* Reviews */
      'reviews.tag':      'Lo que dicen',
      'reviews.title':    'Voces del mar',
      'reviews.subtitle': 'No publicidad. Solo personas que se sentaron, comieron y volvieron a casa con algo que contar.',
      'reviews.source':   'Reseñas verificadas en Google Maps',

      /* Contact */
      'contact.tag':       'Encuéntranos',
      'contact.title':     'Ven a donde termina la tierra',
      'contact.addr.l':    'Dirección',
      'contact.addr.v':    'Av. del Mar, Mazatlán, Sinaloa, México',
      'contact.phone.l':   'Teléfono / WhatsApp',
      'contact.hours.l':   'Horario',
      'contact.hours.v':   'Lun – Dom · 12:00 pm – 10:00 pm',
      'contact.social.l':  'Redes sociales',
      'contact.delivery.l':'Pide a domicilio',
      'contact.wa':        'WhatsApp',
      'contact.fb':        'Facebook',
      'contact.ig':        'Instagram',

      /* Footer */
      'footer.tagline':   'Mariscos + Sushi · Mazatlán',
      'footer.nav':       'Navegación',
      'footer.follow':    'Síguenos',
      'footer.copy':      '© 2025 El Palmar Mariscos + Sushi. Todos los derechos reservados.',
      'footer.scroll':    'Subir',
    },

    en: {
      /* Nav */
      'nav.about':    'About',
      'nav.menu':     'Menu',
      'nav.reviews':  'Reviews',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.eyebrow':   'Mazatlán, Sinaloa · Mexico',
      'hero.title':     "We won't convince you.",
      'hero.title2':    'The ocean will.',
      'hero.subtitle':  'Seafood that remembers the Pacific. Sushi that rewrites everything you know about the sea.',
      'hero.cta':       'Explore the menu',
      'hero.cta2':      'Reserve a table',
      'hero.scroll':    'Scroll',

      /* About */
      'about.tag':        'Our story',
      'about.title':      'The ocean in every bite',
      'about.body1':      "Mazatlán's best seafood doesn't advertise itself — it waits for you. And once you find it, the Pacific will never look the same from shore.",
      'about.body2':      "At El Palmar we marry Sinaloa's fishing tradition with Japanese sushi precision. Each plate is a conversation between two oceans, two cultures, and one purpose: to leave you speechless.",
      'about.cta':        'See the full menu',
      'about.stat1':      'Years by the sea',
      'about.stat2':      'Unique dishes',
      'about.stat3':      'Years of tradition',
      'about.f1.title':   'Boat to plate',
      'about.f1.body':    'We work directly with local fishermen. No middlemen, no cold storage chains. The catch arrives fresh every morning.',
      'about.f2.title':   'Fusion without forcing',
      'about.f2.body':    "We don't mix for trend. We mix because Sinaloa shrimp and sushi rice were always meant to meet.",
      'about.f3.title':   'A setting that stays with you',
      'about.f3.body':    'The palapa, the ocean breeze, the distant sound of waves. A place where time moves at a different pace.',

      /* Menu */
      'menu.tag':       'What we cook',
      'menu.title':     'The menu',
      'menu.subtitle':  'Full menu coming soon. For now, come in and let the ocean surprise you.',
      'menu.tab1':      'Seafood',
      'menu.tab2':      'Sushi',
      'menu.tab3':      'Specialties',
      'menu.tab4':      'Drinks',
      'menu.coming':    'Full menu coming soon — every dish photographed and described.',
      'menu.badge':     'Soon',

      /* Reviews */
      'reviews.tag':      'What they say',
      'reviews.title':    'Voices from the sea',
      'reviews.subtitle': 'No advertising. Just people who sat down, ate, and went home with a story.',
      'reviews.source':   'Verified reviews on Google Maps',

      /* Contact */
      'contact.tag':       'Find us',
      'contact.title':     'Come to where the land ends',
      'contact.addr.l':    'Address',
      'contact.addr.v':    'Av. del Mar, Mazatlán, Sinaloa, Mexico',
      'contact.phone.l':   'Phone / WhatsApp',
      'contact.hours.l':   'Hours',
      'contact.hours.v':   'Mon – Sun · 12:00 pm – 10:00 pm',
      'contact.social.l':  'Social media',
      'contact.delivery.l':'Order delivery',
      'contact.wa':        'WhatsApp',
      'contact.fb':        'Facebook',
      'contact.ig':        'Instagram',

      /* Footer */
      'footer.tagline':   'Seafood + Sushi · Mazatlán',
      'footer.nav':       'Navigation',
      'footer.follow':    'Follow us',
      'footer.copy':      '© 2025 El Palmar Mariscos + Sushi. All rights reserved.',
      'footer.scroll':    'Back to top',
    }
  };

  /* ── Language Manager ───────────────────────────── */
  var LanguageManager = {
    current: 'es',

    /**
     * Detect language from browser / system.
     * Falls back to 'es'.
     */
    detect: function () {
      var stored = null;
      try { stored = localStorage.getItem('ep-lang'); } catch (e) {}
      if (stored && i18n[stored]) return stored;

      var lang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
      return lang.startsWith('es') ? 'es' : 'en';
    },

    /**
     * Apply translations to all [data-i18n] elements.
     */
    apply: function (lang) {
      if (!i18n[lang]) return;
      this.current = lang;

      var elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var text = i18n[lang][key];
        if (text !== undefined) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
          } else {
            el.textContent = text;
          }
        }
      });

      /* Update html lang attribute */
      document.documentElement.setAttribute('lang', lang);

      /* Update toggle button state */
      var items = document.querySelectorAll('.lang-toggle__item');
      items.forEach(function (item) {
        item.classList.toggle('is-active', item.getAttribute('data-lang') === lang);
      });

      /* Persist */
      try { localStorage.setItem('ep-lang', lang); } catch (e) {}

      /* Fire event for other modules */
      var event = new CustomEvent('ep:langchange', { detail: { lang: lang } });
      document.dispatchEvent(event);
    },

    /**
     * Toggle between ES and EN.
     */
    toggle: function () {
      this.apply(this.current === 'es' ? 'en' : 'es');
    },

    /**
     * Get a translation string.
     */
    t: function (key) {
      return i18n[this.current][key] || key;
    },

    /**
     * Initialize.
     */
    init: function () {
      var self = this;
      var lang = this.detect();
      this.apply(lang);

      /* Wire up toggle buttons */
      document.addEventListener('click', function (e) {
        var toggle = e.target.closest('.lang-toggle');
        if (!toggle) return;

        var item = e.target.closest('.lang-toggle__item');
        if (item) {
          var targetLang = item.getAttribute('data-lang');
          if (targetLang && targetLang !== self.current) {
            self.apply(targetLang);
          }
        } else {
          self.toggle();
        }
      });
    }
  };

  /* Expose globally */
  window.ElPalmarLang = LanguageManager;

  /* Auto-init when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      LanguageManager.init();
    });
  } else {
    LanguageManager.init();
  }

})();
