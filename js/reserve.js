/**
 * reserve.js
 * WhatsApp reservation form — validation + message builder.
 */

(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────── */
  var WA_NUMBER = '526691005111'; // Reemplazar con el número del restaurante (solo dígitos, sin +)

  var form = document.getElementById('reserveForm');
  if (!form) return;

  /* ── Helpers ────────────────────────────────────── */
  function t(key) {
    return (window.ElPalmarLang && window.ElPalmarLang.t(key)) || key;
  }

  function getLang() {
    return (window.ElPalmarLang && window.ElPalmarLang.current) || 'es';
  }

  function fieldEl(id)  { return document.getElementById('field-' + id); }
  function inputEl(id)  { return document.getElementById('reserve-' + id); }

  function setError(id, show) {
    var field = fieldEl(id);
    if (field) field.classList.toggle('is-error', show);
  }

  function formatDate(val) {
    if (!val) return '';
    var p = val.split('-');
    return p.length === 3 ? (p[2] + '/' + p[1] + '/' + p[0]) : val;
  }

  function formatTime(val) {
    if (!val) return '';
    var p   = val.split(':');
    var h   = parseInt(p[0], 10);
    var m   = p[1] || '00';
    var suf = h >= 12 ? 'pm' : 'am';
    var h12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    return h12 + ':' + m + ' ' + suf;
  }

  function guestsLabel(val) {
    if (!val) return '';
    var map = { '11-15': '11 – 15', '15+': '+15' };
    return map[val] || val;
  }

  function buildMessage(data) {
    var isEN = getLang() === 'en';
    var nl   = '%0A';
    var line = function (label, value) { return label + ': ' + value + nl; };

    var msg;
    if (isEN) {
      msg  = 'Hello El Palmar! I would like to reserve a table.' + nl + nl;
      msg += line('  Name',   data.name);
      msg += line('  WhatsApp', data.phone);
      msg += line('  Guests', guestsLabel(data.guests));
      msg += line('  Date',   formatDate(data.date));
      msg += line('  Time',   formatTime(data.time));
      if (data.notes) msg += line('  Notes', data.notes);
      msg += nl + 'Thank you! I await your confirmation.';
    } else {
      msg  = 'Hola El Palmar, quisiera reservar una mesa.' + nl + nl;
      msg += line('  Nombre',   data.name);
      msg += line('  WhatsApp', data.phone);
      msg += line('  Personas', guestsLabel(data.guests));
      msg += line('  Fecha',    formatDate(data.date));
      msg += line('  Hora',     formatTime(data.time));
      if (data.notes) msg += line('  Notas', data.notes);
      msg += nl + 'Gracias! Espero su confirmación.';
    }
    return msg;
  }

  /* ── Validation ─────────────────────────────────── */
  function validate() {
    var fields = ['name', 'phone', 'guests', 'date', 'time'];
    var valid  = true;

    fields.forEach(function (id) {
      var el    = inputEl(id);
      var empty = !el || !el.value.trim();
      var bad   = false;

      if (!empty && id === 'time') {
        var parts = el.value.split(':');
        var mins  = parseInt(parts[0], 10) * 60 + parseInt(parts[1] || 0, 10);
        bad = mins < 720 || mins > 1320; /* 12:00 = 720min, 22:00 = 1320min */
      }

      setError(id, empty || bad);
      if (empty || bad) valid = false;
    });

    return valid;
  }

  /* ── Submit → WhatsApp ──────────────────────────── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    var phoneRaw = inputEl('phone').value.trim().replace(/\D/g, '');

    var codeSelect = document.getElementById('reserve-phone-code');
    var rawCode    = codeSelect ? codeSelect.value : '52';
    /* Canada uses same dial code as USA — strip the -CA suffix */
    var dialCode   = rawCode.replace(/-[A-Z]+$/, '');

    var data = {
      name:   inputEl('name').value.trim(),
      phone:  '+' + dialCode + ' ' + inputEl('phone').value.trim(),
      guests: inputEl('guests').value,
      date:   inputEl('date').value,
      time:   inputEl('time').value,
      notes:  inputEl('notes').value.trim()
    };

    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + buildMessage(data);
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  /* ── Clear errors on input ──────────────────────── */
  ['name', 'phone', 'guests', 'date', 'time'].forEach(function (id) {
    var el = inputEl(id);
    if (!el) return;
    el.addEventListener('input',  function () { setError(id, false); });
    el.addEventListener('change', function () { setError(id, false); });
  });

  /* ── Min date = tomorrow ────────────────────────── */
  var dateInput = inputEl('date');
  if (dateInput) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.setAttribute('min', tomorrow.toISOString().split('T')[0]);
  }

  /* ── Custom time picker sync ─────────────────────── */
  var hourSel    = document.getElementById('reserve-time-hour');
  var minSel     = document.getElementById('reserve-time-min');
  var timeHidden = inputEl('time');

  function syncTimePicker() {
    var h = hourSel ? hourSel.value : '';
    var m = minSel  ? minSel.value  : '';
    if (!h || !m) { if (timeHidden) timeHidden.value = ''; return; }
    var h24 = parseInt(h, 10) === 12 ? 12 : parseInt(h, 10) + 12;
    if (timeHidden) {
      timeHidden.value = String(h24).padStart(2, '0') + ':' + m;
      setError('time', false);
    }
  }

  if (hourSel) hourSel.addEventListener('change', syncTimePicker);
  if (minSel)  minSel.addEventListener('change', syncTimePicker);

})();
