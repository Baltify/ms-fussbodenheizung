(function () {
  'use strict';

  var REVIEWS = [
    {
      name: 'Jalal Jamel', initial: 'J', color: '#6B5CE7',
      text: 'Absolut empfehlenswert! Von der ersten Beratung bis zur fertigen Verlegung lief alles professionell, zuverlässig und sauber ab. Die Arbeiten wurden pünktlich durchgeführt und das Ergebnis ist top. Besonders positiv: sehr freundlicher Kontakt, faire Preise und saubere Baustelle.'
    },
    {
      name: 'Tolga Bastatli', initial: 'T', color: '#009688',
      text: 'Wir sind absolut zufrieden mit der Arbeit dieser Firma! Von der ersten Beratung bis zur finalen Umsetzung lief alles professionell, zuverlässig und transparent. Die Ausführung war termingerecht, sauber und handwerklich auf sehr hohem Niveau. Klare Weiterempfehlung!'
    },
    {
      name: 'Stefan Darmanovic', initial: 'S', color: '#E65100',
      text: 'Super Arbeit in Rekordzeit. Alles, was versprochen wurde, wurde auch so gehalten. Seitdem haben sich auch meine Kosten halbiert genauso wie der Verbrauch. Der Inhaber ist ein Mann, der sein Wort hält.'
    },
    {
      name: 'Alusch', initial: 'A', color: '#7B3FA0',
      text: 'Ich bin mit der Arbeit der Firma MS Fußbodenheizung äußerst zufrieden. Die Beratung war von Anfang bis Ende kompetent, freundlich und transparent. Alle Arbeiten wurden termingerecht und in sehr hoher Qualität ausgeführt. Uneingeschränkte Weiterempfehlung!'
    },
    {
      name: 'Faridahmad Yousofi', initial: 'F', color: '#F4511E',
      text: 'Von der ersten Beratung bis zur finalen Installation lief alles professionell, zuverlässig und transparent ab. Das Team war pünktlich, freundlich und hat sehr sauber gearbeitet. Auch das Preis-Leistungs-Verhältnis war fair und nachvollziehbar.'
    },
    {
      name: 'Sevki Aslan', initial: 'S', color: '#5D4037',
      text: 'Top Qualität und perfekte Umsetzung! Die Fußbodenheizung läuft leise, effizient und sorgt für angenehme Wärme. Sehr zuverlässig, klare Empfehlung!'
    },
    {
      name: 'Iryna Gutsol', initial: 'I', color: '#2E7D32',
      text: 'Vielen Dank. Super Ergebnis. Sind Mega mit der Arbeit der Jungs zufrieden. Sehr kultivierte und professionelle Herrschaften.'
    },
    {
      name: 'David Pazer', initial: 'D', color: '#1565C0',
      text: 'Gute Beratung, saubere Arbeit und nette Jungs — kann ich nur weiterempfehlen!'
    },
    {
      name: 'Senem Aslan', initial: 'S', color: '#00695C',
      text: 'Perfekte Arbeit, alles läuft einwandfrei. Würde ich jederzeit wieder machen!'
    }
  ];

  var track  = document.getElementById('reviewsTrack');
  var dotsEl = document.getElementById('reviewsDots');
  var btnPrev = document.getElementById('revPrev');
  var btnNext = document.getElementById('revNext');
  if (!track) return;

  /* ── Render cards ── */
  REVIEWS.forEach(function (r) {
    var card = document.createElement('div');
    card.className = 'rev-card reveal';
    card.innerHTML =
      '<div class="rev-stars">★★★★★</div>' +
      '<p class="rev-text">„' + r.text + '“</p>' +
      '<div class="rev-author">' +
        '<div class="rev-avatar" style="background:' + r.color + '">' + r.initial + '</div>' +
        '<div>' +
          '<div class="rev-name">' + r.name + '</div>' +
          '<div class="rev-source">Google Bewertung</div>' +
        '</div>' +
      '</div>';
    track.appendChild(card);
  });

  /* ── Carousel logic ── */
  function getVisible() {
    var w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 900) return 2;
    return 3;
  }

  var current = 0;
  var total   = REVIEWS.length;

  function maxIndex() { return total - getVisible(); }

  function go(n) {
    current = Math.max(0, Math.min(n, maxIndex()));
    var cardW = track.children[0].offsetWidth + 20; // width + gap
    track.style.transform = 'translateX(-' + (current * cardW) + 'px)';
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current >= maxIndex();
    dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
  }

  /* ── Dots ── */
  var dots = [];
  if (dotsEl) {
    for (var i = 0; i < total; i++) {
      (function (idx) {
        var d = document.createElement('button');
        d.className = 'rev-dot' + (idx === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Bewertung ' + (idx + 1));
        d.addEventListener('click', function () { go(idx); clearAuto(); });
        dotsEl.appendChild(d);
        dots.push(d);
      })(i);
    }
  }

  if (btnPrev) btnPrev.addEventListener('click', function () { go(current - 1); clearAuto(); });
  if (btnNext) btnNext.addEventListener('click', function () { go(current + 1); clearAuto(); });

  /* ── Auto-play ── */
  var timer = setInterval(function () {
    go(current >= maxIndex() ? 0 : current + 1);
  }, 4500);

  function clearAuto() { clearInterval(timer); }

  track.parentElement.addEventListener('mouseenter', function () { clearInterval(timer); });
  track.parentElement.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
      go(current >= maxIndex() ? 0 : current + 1);
    }, 4500);
  });

  /* ── Touch swipe ── */
  var startX = 0;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; clearAuto(); }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? current + 1 : current - 1);
  });

  window.addEventListener('resize', function () { go(current); });
  go(0);
})();
