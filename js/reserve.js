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
    var map = { '11-15': '11 – 15', '16-20': '16 – 20', '20+': '+20' };
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
      msg += nl + 'Thank you!';
    } else {
      msg  = 'Hola El Palmar, quisiera reservar una mesa.' + nl + nl;
      msg += line('  Nombre',   data.name);
      msg += line('  WhatsApp', data.phone);
      msg += line('  Personas', guestsLabel(data.guests));
      msg += line('  Fecha',    formatDate(data.date));
      msg += line('  Hora',     formatTime(data.time));
      if (data.notes) msg += line('  Notas', data.notes);
      msg += nl + 'Gracias!';
    }
    return msg;
  }

  /* ── Validation ─────────────────────────────────── */
  function validate() {
    var fields = ['name', 'phone', 'guests', 'date', 'time'];
    var valid  = true;

    fields.forEach(function (id) {
      var el   = inputEl(id);
      var empty = !el || !el.value.trim();
      setError(id, empty);
      if (empty) valid = false;
    });

    return valid;
  }

  /* ── Submit → WhatsApp ──────────────────────────── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    var phoneRaw = inputEl('phone').value.trim().replace(/\D/g, '');

    var data = {
      name:   inputEl('name').value.trim(),
      phone:  '+52 ' + inputEl('phone').value.trim(),
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

  /* ── Min date = today ───────────────────────────── */
  var dateInput = inputEl('date');
  if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  }

})();
