(function () {
  'use strict';

  /* ── Tracking-Loader (nur bei Zustimmung) ── */
  function loadTracking() {
    // Google Analytics – ID hier eintragen wenn verfügbar
    // var GA_ID = 'G-XXXXXXXXXX';
    // var s = document.createElement('script');
    // s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    // s.async = true;
    // document.head.appendChild(s);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', GA_ID);

    // Microsoft Clarity – ID hier eintragen wenn verfügbar
    // (function(c,l,a,r,i,t,y){
    //   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //   y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    // })(window,document,"clarity","script","XXXXXXXXXX");
  }

  /* ── Bereits entschieden? ── */
  var consent = localStorage.getItem('ms_cookie_consent');
  if (consent === 'all')       { loadTracking(); return; }
  if (consent === 'necessary') { return; }

  /* ── Styles ── */
  var css = `
    #ms-cookie-banner {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 48px);
      max-width: 640px;
      background: #1a1a1a;
      color: #f0f0f0;
      border-radius: 14px;
      padding: 20px 24px;
      box-shadow: 0 8px 40px rgba(0,0,0,.45);
      z-index: 9999;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 14px;
      animation: ms-cookie-slide 0.35s cubic-bezier(.22,.68,0,1.2) both;
    }
    @keyframes ms-cookie-slide {
      from { opacity: 0; transform: translateX(-50%) translateY(20px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    #ms-cookie-banner p { margin: 0; color: #bbb; }
    #ms-cookie-banner a { color: #D92B1A; text-decoration: underline; }
    #ms-cookie-banner strong { color: #f0f0f0; }
    #ms-cookie-btns {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    #ms-cookie-accept {
      background: #D92B1A;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      flex: 1;
      white-space: nowrap;
    }
    #ms-cookie-accept:hover { background: #b82215; }
    #ms-cookie-necessary {
      background: transparent;
      color: #bbb;
      border: 1px solid #444;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      flex: 1;
      white-space: nowrap;
    }
    #ms-cookie-necessary:hover { border-color: #888; color: #f0f0f0; }
    @media (max-width: 480px) {
      #ms-cookie-banner { bottom: 12px; padding: 16px; width: calc(100% - 24px); }
      #ms-cookie-btns { flex-direction: column; }
    }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── Banner HTML ── */
  var banner = document.createElement('div');
  banner.id = 'ms-cookie-banner';
  banner.innerHTML = `
    <div>
      <strong>Wir verwenden Cookies</strong>
      <p style="margin-top:6px;">Wir nutzen Cookies für Analysezwecke, um unsere Website zu verbessern. Mehr dazu in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>
    </div>
    <div id="ms-cookie-btns">
      <button id="ms-cookie-accept">Alle akzeptieren</button>
      <button id="ms-cookie-necessary">Nur notwendige</button>
    </div>
  `;
  document.body.appendChild(banner);

  function dismiss(type) {
    localStorage.setItem('ms_cookie_consent', type);
    banner.style.animation = 'none';
    banner.style.opacity   = '0';
    banner.style.transform = 'translateX(-50%) translateY(20px)';
    banner.style.transition = 'opacity .25s, transform .25s';
    setTimeout(function () { banner.remove(); }, 280);
    if (type === 'all') loadTracking();
  }

  document.getElementById('ms-cookie-accept').addEventListener('click',    function () { dismiss('all'); });
  document.getElementById('ms-cookie-necessary').addEventListener('click', function () { dismiss('necessary'); });
})();
