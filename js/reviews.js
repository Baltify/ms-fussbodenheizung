(function () {
  'use strict';

  var REVIEWS = [
    {
      name: 'Mariam Aziza', initial: 'M', color: '#C2185B',
      text: 'Top Arbeit von MS Fußbodenheizung! Die Jungs haben auf unseren 115 qm einen mega Job gemacht, wir sind super zufrieden. Bei unseren zwei weiteren Immobilien kommt die Fußbodenheizung auf jeden Fall auch wieder von MS. Klare Empfehlung! 👍'
    },
    {
      name: 'Sim. Weber', initial: 'S', color: '#00897B',
      text: 'Wir sind absolut begeistert! Alle Absprachen und Termine wurden zuverlässig eingehalten, und auf unsere individuellen Wünsche wurde jederzeit eingegangen. Innerhalb von nur 1,5 Tagen wurden bei uns 140 qm gefräst, verlegt und sauber verspachtelt. Wir können MS Fußbodenheizung uneingeschränkt und von Herzen weiterempfehlen!'
    },
    {
      name: 'Mina Tissier', initial: 'M', color: '#6A1B9A',
      text: 'Ein großes Dankeschön an das ganze Team! Vom ersten Gespräch bis zur Fertigstellung lief alles perfekt. Man fühlt sich gut aufgehoben und ernst genommen.'
    },
    {
      name: 'Crysissnake 23', initial: 'C', color: '#1565C0',
      text: 'Ich habe für die Renovierung meiner Wohnung ein Unternehmen für Bodenfräsarbeiten gesucht und bin hier fündig geworden. Der Kontakt war von Anfang an freundlich und unkompliziert, einen Termin habe ich innerhalb einer Woche bekommen. Die Arbeiten wurden zügig, sauber und fachgerecht ausgeführt. Super Jungs.'
    },
    {
      name: 'Milano', initial: 'M', color: '#E65100',
      text: 'Ich bin mit der Arbeit der Firma MS Fußbodenheizung äußerst zufrieden. Die Beratung war kompetent, freundlich und transparent, alle Arbeiten wurden termingerecht und in sehr hoher Qualität ausgeführt. Auch bei Rückfragen wurde stets schnell und hilfsbereit reagiert. Uneingeschränkte Weiterempfehlung!'
    },
    {
      name: 'David Pazer', initial: 'D', color: '#2E7D32',
      text: 'Gute Beratung, saubere Arbeit und nette Jungs, kann ich nur weiterempfehlen!'
    },
    {
      name: 'Stefan Darmanovic', initial: 'S', color: '#5D4037',
      text: 'Bei mir zu Hause haben sie nachträglich das Erdgeschoss gemacht. Super Arbeit in Rekordzeit. Alles, was versprochen wurde, wurde auch so gehalten. Seitdem haben sich meine Kosten halbiert, genauso wie der Verbrauch. Der Inhaber ist ein Mann, der sein Wort hält.'
    },
    {
      name: 'Iryna Gutsol', initial: 'I', color: '#00838F',
      text: 'Vielen Dank. Super Ergebnis. Sind mega mit der Arbeit der Jungs zufrieden. Sehr kultivierte und professionelle Herrschaften.'
    },
    {
      name: 'Thorsten Gottschalk', initial: 'T', color: '#4527A0',
      text: 'Ich bin absolut begeistert von MS Fußbodenheizung! Von der ersten Beratung bis zur finalen Umsetzung lief alles perfekt. Die Umsetzung verlief reibungslos, termingerecht und auf höchstem Niveau, das Ergebnis hat meine Erwartungen sogar übertroffen. Klare Weiterempfehlung für alle, die Wert auf Qualität, Service und Fachwissen legen!'
    },
    {
      name: 'Faridahmad Yousofi', initial: 'F', color: '#F4511E',
      text: 'Von der ersten Beratung bis zur finalen Installation lief alles professionell, zuverlässig und transparent ab. Das Team war pünktlich, freundlich und hat sehr sauber gearbeitet. Die Fußbodenheizung funktioniert einwandfrei und sorgt für angenehme Wärme im gesamten Haus. Auch das Preis-Leistungs-Verhältnis war fair und nachvollziehbar.'
    },
    {
      name: 'Tolga Bastatli', initial: 'T', color: '#009688',
      text: 'Wir sind absolut zufrieden mit der Arbeit dieser Firma! Das Team hat sich viel Zeit genommen, unsere Wünsche zu verstehen, und uns kompetent beraten. Die Ausführung war termingerecht, sauber und handwerklich auf sehr hohem Niveau. Wir würden die Firma jederzeit weiterempfehlen!'
    },
    {
      name: 'Sevki Aslan', initial: 'S', color: '#AD1457',
      text: 'Top Qualität und perfekte Umsetzung! Die Fußbodenheizung läuft leise, effizient und sorgt für angenehme Wärme. Sehr zuverlässig, klare Empfehlung!'
    },
    {
      name: 'Senem Aslan', initial: 'S', color: '#283593',
      text: 'Perfekte Arbeit, alles läuft einwandfrei. Würde ich jederzeit wieder machen!'
    },
    {
      name: 'Federico', initial: 'F', color: '#37474F',
      text: 'Absolut empfehlenswert! Von der ersten Beratung bis zur fertigen Verlegung lief alles professionell, zuverlässig und sauber ab. Besonders positiv: sehr freundlicher Kontakt, faire Preise und saubere Baustelle. Wer eine nachträgliche Fußbodenheizung sucht, ist hier genau richtig. Klare Weiterempfehlung!'
    },
    {
      name: 'Dilek Aslan', initial: 'D', color: '#7B3FA0',
      text: 'Super Arbeit! Die Fußbodenheizung funktioniert einwandfrei, heizt schnell und gleichmäßig. Saubere und professionelle Ausführung. Absolut empfehlenswert!'
    }
  ];

  var outer   = document.getElementById('reviewsCardOuter');
  var dotsEl  = document.getElementById('reviewsDots');
  var btnPrev = document.getElementById('revPrev');
  var btnNext = document.getElementById('revNext');
  if (!outer) return;

  var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cards    = [];
  var current  = 0;
  var animating = false;

  /* ── Build cards ── */
  REVIEWS.forEach(function (r, i) {
    var card = document.createElement('div');
    card.className = 'rev-card';
    card.innerHTML =
      '<div class="rev-stars">★★★★★</div>' +
      '<div class="rev-quote">„</div>' +
      '<p class="rev-text">' + r.text + '"</p>' +
      '<div class="rev-separator"></div>' +
      '<div class="rev-author">' +
        '<div class="rev-avatar" style="background:' + r.color + '">' + r.initial + '</div>' +
        '<div>' +
          '<div class="rev-name">' + r.name + '</div>' +
          '<div class="rev-source">Google Bewertung · ★★★★★</div>' +
        '</div>' +
      '</div>';
    outer.appendChild(card);
    cards.push(card);
    gsap.set(card, { opacity: i === 0 ? 1 : 0, x: 0, visibility: i === 0 ? 'visible' : 'hidden' });
  });

  /* ── Dots ── */
  var dots = [];
  function buildDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    dots = [];
    REVIEWS.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'rev-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Bewertung ' + (i + 1));
      d.addEventListener('click', function () { goTo(i); clearAuto(); });
      dotsEl.appendChild(d);
      dots.push(d);
    });
  }
  buildDots();

  function updateDots() {
    dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
  }

  /* ── Transition ── */
  function goTo(next, dir) {
    if (animating || next === current) return;
    animating = true;
    if (dir === undefined) dir = next > current ? 1 : -1;

    var outCard = cards[current];
    var inCard  = cards[next];

    gsap.set(inCard, { opacity: 0, x: dir * 70, visibility: 'visible' });

    if (noMotion) {
      gsap.set(outCard, { opacity: 0, visibility: 'hidden' });
      gsap.set(inCard,  { opacity: 1, x: 0 });
      animating = false;
    } else {
      var tl = gsap.timeline({ onComplete: function () {
        gsap.set(outCard, { visibility: 'hidden' });
        animating = false;
      }});
      tl.to(outCard, { opacity: 0, x: dir * -50, duration: 0.28, ease: 'power2.in' }, 0);
      tl.to(inCard,  { opacity: 1, x: 0,         duration: 0.38, ease: 'power2.out' }, 0.18);
    }

    current = next;
    updateDots();
  }

  /* ── Controls ── */
  if (btnPrev) btnPrev.addEventListener('click', function () {
    goTo((current - 1 + REVIEWS.length) % REVIEWS.length, -1);
    clearAuto();
  });
  if (btnNext) btnNext.addEventListener('click', function () {
    goTo((current + 1) % REVIEWS.length, 1);
    clearAuto();
  });

  /* ── Auto-play ── */
  var timer = setInterval(tick, 6000);
  function tick() { goTo((current + 1) % REVIEWS.length, 1); }
  function clearAuto() { clearInterval(timer); }

  outer.addEventListener('mouseenter', clearAuto);
  outer.addEventListener('mouseleave', function () { timer = setInterval(tick, 6000); });

  /* ── Touch swipe ── */
  var startX = 0;
  outer.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX; clearAuto();
  }, { passive: true });
  outer.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      var dir  = diff > 0 ? 1 : -1;
      var next = (current + dir + REVIEWS.length) % REVIEWS.length;
      goTo(next, dir);
    }
  });
})();
