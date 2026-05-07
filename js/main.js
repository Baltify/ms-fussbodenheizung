/* =============================================
   MS FUSSBODENHEIZUNG — MAIN JS
   ============================================= */

gsap.registerPlugin(ScrollTrigger);
const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* === NAV === */
function initNav() {
  var nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  var burger = document.querySelector('.nav-burger');
  var mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* === SCROLL REVEAL (IntersectionObserver — kein GSAP/ScrollTrigger) === */
function initScrollReveal() {
  if (noMotion) return;
  var els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-s');
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
}

/* === STATS COUNT-UP === */
function initStats() {
  document.querySelectorAll('.stat-num[data-target]').forEach(function (el) {
    var target = parseInt(el.dataset.target, 10);
    var suffix = el.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: function () {
        if (noMotion) { el.textContent = target + suffix; return; }
        var obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 1.8, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(obj.val) + suffix; },
          onComplete: function () { el.textContent = target + suffix; }
        });
      }
    });
  });
}

/* === FAQ ACCORDION === */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* === RADIO OPTION SELECT === */
function initRadioOptions() {
  document.querySelectorAll('.radio-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      var name = opt.querySelector('input') && opt.querySelector('input').name;
      if (name) {
        document.querySelectorAll('.radio-option input[name="' + name + '"]').forEach(function (inp) {
          inp.closest('.radio-option').classList.remove('selected');
        });
      }
      opt.classList.add('selected');
      var inp = opt.querySelector('input');
      if (inp) inp.checked = true;
    });
  });
}

/* === CONTACT FORM === */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('.form-submit');
    btn.textContent = 'Anfrage gesendet ✓';
    btn.style.background = '#2a7a2a';
    btn.disabled = true;
  });
}

/* === ACTIVE NAV LINK === */
function initActiveNav() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* === PROZESS-TIMELINE — scroll-synchronisiert === */
function initProcessPipe() {
  var timeline = document.querySelector('.process-timeline');
  if (!timeline || noMotion) return;

  var fill  = timeline.querySelector('.proc-line-fill');
  var items = Array.prototype.slice.call(timeline.querySelectorAll('.proc-item'));
  if (!fill || !items.length) return;

  /* Linie fährt 1:1 mit dem Scroll mit — hoch und runter */
  gsap.to(fill, {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: timeline,
      start: 'top 65%',
      end:   'bottom 65%',
      scrub: 0.5
    }
  });

  /* Jeder Schritt leuchtet auf wenn Linie ihn erreicht,
     und schaltet sich beim Hochscrollen wieder aus */
  items.forEach(function (item) {
    ScrollTrigger.create({
      trigger:     item,
      start:       'top 66%',
      onEnter:     function () { item.classList.add('active'); },
      onLeaveBack: function () { item.classList.remove('active'); }
    });
  });
}

/* === INIT === */
function initGalleryToggle() {
  var btn = document.getElementById('galleryToggleBtn');
  if (!btn) return;
  var extras = document.querySelectorAll('.gallery-extra');
  var btnText = btn.querySelector('.gallery-btn-text');

  btn.addEventListener('click', function () {
    var isOpen = btn.classList.contains('open');
    if (!isOpen) {
      extras.forEach(function (el) { el.style.display = 'block'; });
      if (!noMotion) {
        gsap.from(extras, { opacity: 0, scale: 0.93, duration: 0.45, stagger: 0.03, ease: 'power2.out' });
      }
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      btnText.textContent = 'Weniger anzeigen';
    } else {
      extras.forEach(function (el) { el.style.display = 'none'; });
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btnText.textContent = 'Alle 39 Referenzen anzeigen';
      document.querySelector('.gallery-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function initAll() {
  initNav();
  initActiveNav();
  initScrollReveal();
  initStats();
  initProcessPipe();
  initFaq();
  initRadioOptions();
  initContactForm();
  initGalleryToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* =============================================
   FLOATING BUTTONS (Anruf + WhatsApp)
   ============================================= */
(function () {
  var call = document.createElement('a');
  call.href      = 'tel:+4915510924122';
  call.className = 'call-float';
  call.setAttribute('aria-label', 'Jetzt anrufen');
  call.innerHTML =
    '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>' +
    '</svg>';
  document.body.appendChild(call);
})();

(function () {
  var btn = document.createElement('a');
  btn.href        = 'https://wa.me/4915510924122?text=Hallo%20Salah%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20nachtr%C3%A4gliche%20Fu%C3%9Fbodenheizung%20und%20w%C3%BCrde%20gerne%20ein%20Angebot%20anfragen.';
  btn.target      = '_blank';
  btn.rel         = 'noopener noreferrer';
  btn.className   = 'wa-float';
  btn.setAttribute('aria-label', 'WhatsApp schreiben');
  btn.innerHTML   =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
    '<path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.466 3.471 1.344 4.971L2 22l5.178-1.322A9.956 9.956 0 0012.004 22C17.531 22 22 17.523 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.214a8.21 8.21 0 01-4.348-1.24l-.31-.186-3.073.785.817-2.99-.202-.317A8.16 8.16 0 013.786 12c0-4.535 3.683-8.218 8.218-8.218 4.536 0 8.219 3.683 8.219 8.218 0 4.536-3.683 8.214-8.219 8.214z"/>' +
    '</svg>';
  document.body.appendChild(btn);
})();
