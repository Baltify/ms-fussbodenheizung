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

/* === SCROLL REVEAL === */
function initScrollReveal() {
  if (noMotion) return;
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, y: 0, duration: .8, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
  gsap.utils.toArray('.reveal-l').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, x: 0, duration: .9, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
  gsap.utils.toArray('.reveal-r').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, x: 0, duration: .9, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
  gsap.utils.toArray('.reveal-s').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, scale: 1, duration: .75, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
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
function initAll() {
  initNav();
  initActiveNav();
  initScrollReveal();
  initStats();
  initProcessPipe();
  initFaq();
  initRadioOptions();
  initContactForm();
  ScrollTrigger.refresh();
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
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>' +
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
    '<svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.7 6.5L3 29l6.9-1.8c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm6.5 18.6c-.3.8-1.6 1.5-2.2 1.6-.6.1-1.2.1-3.7-.8-3.1-1.1-5.1-4.3-5.3-4.5-.2-.2-1.4-1.8-1.4-3.5 0-1.7.9-2.5 1.2-2.8.3-.3.7-.4 1-.4h.7c.3 0 .6.1.9.8l1.2 2.9c.1.2.1.5 0 .7l-.5.8-.3.4c.3.4 1.1 1.6 2.2 2.5 1.3 1 2.4 1.4 2.8 1.5l.8-1c.2-.3.5-.3.8-.2l2.8 1.3c.3.1.5.3.5.5 0 .3-.2.7-.5 1.2z"/>' +
    '</svg>';
  document.body.appendChild(btn);
})();
