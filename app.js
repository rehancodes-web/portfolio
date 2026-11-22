/* Rehan Nadaf, portfolio. Plain JavaScript; every sound is synthesised live with the Web Audio API. */
(() => {
  'use strict';

  const CONTACT_EMAIL = 'rehanzn2007@gmail.com';
  const PROJECTS = [
    {
      id: 'eb', name: 'Executive Board', short: 'EB', year: '2026',
      role: 'Co-Founder & CTO',
      tag: 'An AI executive board and ERP for founder-led businesses.',
      desc: 'Small businesses can\'t afford a full leadership team. EB gives founders an AI CFO, CMO, COO and CSO that read the company\'s own books, debate the trade-offs, and hand back one clear recommendation from "The Crown".',
      points: ['Built about 85% of the application and website', 'Multi-tenant ERP: double-entry accounting, GST invoicing, expenses, goals and tasks', 'AI specialists grounded in the company\'s posted ledger, with human approval on every action'],
      stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'OpenAI', 'Vercel'],
      link: 'https://executiveboard.in', linkText: 'Visit executiveboard.in',
      color: '#D9A441', art: 'radial-gradient(circle at 78% 22%, #D9A441 0 16%, transparent 16.5%), linear-gradient(150deg, #19141F 0 58%, #2B2233 58%)',
      ink: '#F0E7D3', w: 125, key: 0, tempo: 84
    },
    {
      id: 'playyr', name: 'PLAYYR', short: 'PLAYYR', year: '2026',
      role: 'CTO at Vergemount',
      tag: 'Your city is your playground.',
      desc: 'A social sports and esports discovery platform. Find people to play with nearby, join local crews and tournaments, and keep your streak alive with gamified challenges.',
      points: ['Location-based discovery of players, teams and venues', 'Team creation, invites and tournament registration', 'Activity challenges, streaks and player profiles'],
      stack: ['JavaScript', 'Supabase', 'Cloudflare', 'Interactive maps'],
      link: '', color: '#E2533B',
      art: 'repeating-linear-gradient(-45deg, #E2533B 0 22px, #C8402B 22px 44px)',
      ink: '#FFF4E8', w: 150, key: 3, tempo: 92
    },
    {
      id: 'eatongo', name: 'EatOnGo', short: 'EatOnGo', year: '2026',
      role: 'Team Code Larpers, 1st at AIESEC Ideathon, 4th at Hack4SDG',
      tag: 'QR ordering and verified pickup for busy canteens.',
      desc: 'A student has ten minutes for lunch and the counter is packed. With EatOnGo they scan the outlet QR, order and pay from their phone, and collect with a token and a four-character code, so the right food goes to the right person.',
      points: ['Customer app: order now or pre-order a pickup slot, then track it live', 'Vendor hub: live queue, pickup verification, sales and rush-hour analytics', 'Real-time sync between customer and vendor, plus loyalty rewards'],
      stack: ['JavaScript', 'Firebase Realtime Database', 'PWA'],
      link: 'https://rehancodes-web.github.io/eatongo/', linkText: 'Try the live demo',
      color: '#FF3D8B',
      art: 'linear-gradient(90deg, #2BD0DC 0 25%, #FFD43B 25% 50%, #FF3D8B 50% 75%, #44D17A 75%) bottom / 100% 18% no-repeat, #F7F3EA',
      ink: '#1A1520', w: 110, key: 5, tempo: 96
    },
    {
      id: 'higherup', name: 'HigherUp.AI', short: 'HigherUp', year: '2026',
      role: 'Founder & developer',
      tag: 'Skills-first recruitment.',
      desc: 'A platform that matches students, graduates and job seekers to jobs and internships based on proven skills, and helps businesses hire for what people can actually do.',
      points: ['Candidate profiles built around evidence of skills', 'Swipe-style job discovery and a journey view', 'Employer side for posting roles and reviewing matches'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Supabase', 'Render'],
      link: 'https://rehancodes-web.github.io/HigherUp.AI/', linkText: 'Visit the live site',
      color: '#4C6FFF',
      art: 'linear-gradient(0deg, #4C6FFF 0 30%, transparent 30%) 18% 100% / 14% 100% no-repeat, linear-gradient(0deg, #8FA4FF 0 55%, transparent 55%) 44% 100% / 14% 100% no-repeat, linear-gradient(0deg, #DCE3FF 0 80%, transparent 80%) 70% 100% / 14% 100% no-repeat, #16204A',
      ink: '#F3F5FF', w: 100, key: -2, tempo: 88
    },
    {
      id: 'put1meet', name: 'put1meet', short: 'put1meet', year: '2026',
      role: 'Founder & developer',
      tag: 'Hidden spots around Bangalore, and people going there.',
      desc: 'Find public ruins, quiet walks and lesser-known places around the city, plan by side of town, and meet people heading to the same spot. Built with an "explore without making it worse" ethic.',
      points: ['Curated spots by area of the city', 'Accounts, follows, meet groups and direct messages', 'Community submissions for new spots'],
      stack: ['JavaScript', 'Supabase', 'PostgreSQL', 'GitHub Pages'],
      link: 'https://rehancodes-web.github.io/put1meet/put1meet/', linkText: 'Explore put1meet', color: '#3FA37A',
      art: 'repeating-radial-gradient(circle at 30% 70%, #2F8F67 0 10px, #3FA37A 10px 22px)',
      ink: '#F2FFF7', w: 90, key: 7, tempo: 80
    },
    {
      id: 'community', name: 'Community Manager', short: 'Community', year: '2026',
      role: 'Developer',
      tag: 'Run a housing community from one portal, and now from your phone.',
      desc: 'A management system for residential communities: owners, staff, invoices, dues and payments, with monthly and yearly reports. Includes an iOS app for admins and owners on the same backend.',
      points: ['Role-aware sign in for platform admins, community staff and owners', 'Invoices, dues tracking, payments and expense reports', 'Expo and React Native mobile app sharing the Supabase backend'],
      stack: ['TypeScript', 'React Native', 'Expo', 'Supabase', 'PostgreSQL'],
      link: '', color: '#8A6CE0',
      art: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px) 0 0 / 28px 28px, #5B43A8',
      ink: '#F6F2FF', w: 115, key: 2, tempo: 86
    },
    {
      id: 'campuspaws', name: 'Campus Paws', short: 'Paws', year: '2026',
      role: 'Developer, web technology project',
      tag: 'Look after the dogs on campus.',
      desc: 'A website that lists the dogs living on campus and lets anyone report a dog that is hurt, sick or in trouble, with a photo and a description.',
      points: ['Dog profiles for the campus pack', 'Problem reports with photo upload', 'Plain HTML, CSS and JavaScript, no framework'],
      stack: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rehancodes-web.github.io/cie3webtech/', linkText: 'Visit the live site',
      color: '#E3A05B',
      art: 'radial-gradient(circle at 30% 34%, #7A4A1E 0 7%, transparent 7.5%), radial-gradient(circle at 46% 26%, #7A4A1E 0 6%, transparent 6.5%), radial-gradient(circle at 62% 34%, #7A4A1E 0 6%, transparent 6.5%), radial-gradient(ellipse at 46% 52%, #7A4A1E 0 11%, transparent 11.5%), #F2C48D',
      ink: '#3A220D', w: 130, key: 9, tempo: 100
    },
    {
      id: 'polymath', name: 'Polymath OS', short: 'Polymath', year: '2026',
      role: 'Founder & developer',
      tag: 'Learning, levelled up.',
      desc: 'A gamified skill-learning platform that makes personal growth structured and rewarding: explore skills, complete learning activities, track progress and stay consistent with challenges and achievements.',
      points: ['Skill trees across different fields', 'Challenges, streaks and achievements', 'Progress tracking for multidisciplinary learners'],
      stack: ['JavaScript', 'Gamification design'],
      link: '', color: '#2FB7C4',
      art: 'conic-gradient(#2FB7C4 0 25%, #12434A 0 50%, #2FB7C4 0 75%, #12434A 0) 0 0 / 50% 50%',
      ink: '#F0FEFF', w: 140, key: -5, tempo: 90
    },
    {
      id: 'portfolio', name: 'This record player', short: 'Portfolio', year: '2026',
      role: 'Designer & developer',
      tag: 'The site you\'re on right now.',
      desc: 'A portfolio built as a working turntable. Pull a record out of the crate, drop it on the deck, and the narrator tells you the story behind the project.',
      points: ['Drag-and-drop records with a custom cursor, tap-to-play on phones', 'Scratchable platter, tonearm and motor easing in plain JavaScript', 'Sound effects synthesised live with the Web Audio API, narration voiced with ElevenLabs'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Web Audio API', 'ElevenLabs', 'GitHub Pages'],
      link: 'https://github.com/rehancodes-web/portfolio', linkText: 'See the code on GitHub',
      color: '#C9B8E8',
      art: 'radial-gradient(circle at 70% 40%, #0D0A12 0 26%, #C9B8E8 26.5% 29%, #0D0A12 29.5% 36%, transparent 36.5%), linear-gradient(160deg, #3B2A55, #1D1428)',
      ink: '#EFE6D6', w: 110, key: 0, tempo: 84
    }
  ];

  const SERVICES = [
    { name: 'Websites that sell', desc: 'Landing pages, business sites and portfolios that load fast, look sharp on every phone and turn visitors into enquiries.', ex: 'Like this site, and executiveboard.in' },
    { name: 'Web apps and dashboards', desc: 'Booking systems, customer portals, admin panels and internal tools, with sign-in, databases and payments.', ex: 'Like EatOnGo\'s vendor hub and the Community Manager portal' },
    { name: 'Automations', desc: 'Stop doing the same task twice. I connect your forms, sheets, WhatsApp, email and CRM so work moves on its own.', ex: 'Lead capture, invoice reminders, daily reports' },
    { name: 'AI assistants and integrations', desc: 'Chatbots trained on your business, AI that drafts, sorts and summarises, and agents that act inside your tools.', ex: 'Like the AI executive board inside EB' },
    { name: 'Mobile apps', desc: 'iOS and Android apps with React Native, sharing one backend with your website.', ex: 'Like the Community Manager iOS app' },
    { name: 'Tech partner for founders', desc: 'Turn an idea into an MVP: product scoping, architecture, build, launch and the first round of fixes.', ex: 'How EB and PLAYYR were built' }
  ];

  const STACK = ['JavaScript', 'TypeScript', 'Next.js', 'React Native', 'Node.js', 'Python', 'HTML & CSS', 'PostgreSQL', 'Prisma', 'Supabase', 'Firebase', 'OpenAI API', 'Vercel', 'Cloudflare', 'Git & GitHub'];



  // ===== Audio engine =====
  const Audio = (() => {
    let ctx = null, master, musicBus, fxBus, analyser, crackleSrc, timer = null;
    let enabled = false, music = false, step = 0, nextTime = 0, transpose = 0, tempo = 84;
    const CHORDS = [[57, 60, 64, 67], [53, 57, 60, 64], [48, 52, 55, 59], [55, 59, 62, 65]]; // Am7 Fmaj7 Cmaj7 G7
    const BASS = [45, 41, 36, 43];
    const hz = n => 440 * Math.pow(2, (n - 69) / 12);

    function init() {
      if (ctx) return;
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = 0;
      analyser = ctx.createAnalyser(); analyser.fftSize = 128; analyser.smoothingTimeConstant = .75;
      musicBus = ctx.createGain(); musicBus.gain.value = .8;
      fxBus = ctx.createGain(); fxBus.gain.value = .9;
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4;
      musicBus.connect(comp); fxBus.connect(comp); comp.connect(master); master.connect(analyser); analyser.connect(ctx.destination);
    }
    function noiseBuffer(sec, pops) {
      const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) {
        d[i] = (Math.random() * 2 - 1) * .18;
        if (pops && Math.random() < .00035) d[i] = (Math.random() * 2 - 1) * 1.0;
      }
      return b;
    }
    function startCrackle() {
      crackleSrc = ctx.createBufferSource(); crackleSrc.buffer = noiseBuffer(3, true); crackleSrc.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
      const g = ctx.createGain(); g.gain.value = .07;
      crackleSrc.connect(hp).connect(g).connect(musicBus); crackleSrc.start();
    }
    function env(g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
    function kick(t) { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + .18); env(g, t, .004, .9, .32); o.connect(g).connect(musicBus); o.start(t); o.stop(t + .4); }
    function snare(t) { const s = ctx.createBufferSource(); s.buffer = noiseBuffer(.3); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1900; bp.Q.value = .8; const g = ctx.createGain(); env(g, t, .002, .45, .16); s.connect(bp).connect(g).connect(musicBus); s.start(t); s.stop(t + .3); }
    function hat(t, v) { const s = ctx.createBufferSource(); s.buffer = noiseBuffer(.1); const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7500; const g = ctx.createGain(); env(g, t, .001, v, .045); s.connect(hp).connect(g).connect(musicBus); s.start(t); s.stop(t + .1); }
    function pad(t, notes, dur) {
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100; lp.Q.value = .4;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(.09, t + .25); g.gain.setValueAtTime(.09, t + dur - .3); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      lp.connect(g).connect(musicBus);
      notes.forEach((n, i) => { const o = ctx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sawtooth'; o.frequency.value = hz(n + transpose); o.detune.value = (i - 1.5) * 6; const og = ctx.createGain(); og.gain.value = i % 2 ? .5 : .16; o.connect(og).connect(lp); o.start(t); o.stop(t + dur + .05); });
    }
    function bass(t, n, dur) { const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter(); o.type = 'triangle'; o.frequency.value = hz(n + transpose); lp.type = 'lowpass'; lp.frequency.value = 400; env(g, t, .01, .35, dur); o.connect(lp).connect(g).connect(musicBus); o.start(t); o.stop(t + dur + .05); }
    function pluck(t, n, v = .2) { const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter(); o.type = 'square'; o.frequency.value = hz(n + transpose); lp.type = 'lowpass'; lp.frequency.setValueAtTime(3200, t); lp.frequency.exponentialRampToValueAtTime(500, t + .25); env(g, t, .004, v, .3); o.connect(lp).connect(g).connect(fxBus); o.start(t); o.stop(t + .4); }

    function schedule() {
      const spb = 60 / tempo / 4; // seconds per 16th
      while (nextTime < ctx.currentTime + .12) {
        const s = step % 64, bar = Math.floor(s / 16), inBar = s % 16;
        const swing = inBar % 2 ? spb * .16 : 0, t = nextTime + swing;
        if (inBar === 0) pad(t, CHORDS[bar], spb * 16);
        if (inBar === 0 || inBar === 10) bass(t, BASS[bar], spb * 5);
        if (inBar === 0 || inBar === 7 || inBar === 10) kick(t);
        if (inBar === 4 || inBar === 12) snare(t);
        if (inBar % 2 === 0) hat(t, inBar % 4 === 0 ? .12 : .06);
        step++; nextTime += spb;
      }
    }
    return {
      get ready() { return !!ctx; },
      get analyser() { return enabled && ctx ? analyser : null; },
      get enabled() { return enabled; },
      setEnabled(on) {
        init(); if (ctx.state === 'suspended') ctx.resume();
        enabled = on;
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setTargetAtTime(on ? .85 : 0, ctx.currentTime, .08);
      },
      setTrack(p) { transpose = p.key || 0; tempo = p.tempo || 84; },
      play() {
        init(); if (ctx.state === 'suspended') ctx.resume();
        if (music) return; music = true;
        startCrackle(); // vinyl crackle under the narrator; the beat is no longer used
      },
      stop() {
        if (!music) return; music = false; clearInterval(timer); timer = null;
        try { crackleSrc && crackleSrc.stop(); } catch (e) {}
      },
      connectElement(el) { init(); const src = ctx.createMediaElementSource(el); const g = ctx.createGain(); g.gain.value = 1.25; src.connect(g).connect(fxBus); },
      needle() { if (!ctx) return; const t = ctx.currentTime; const s = ctx.createBufferSource(); s.buffer = noiseBuffer(.25, true); const bp = ctx.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 900; const g = ctx.createGain(); env(g, t, .002, .5, .2); s.connect(bp).connect(g).connect(fxBus); s.start(t); },
      scratch(vel) {
        if (!ctx || !enabled) return;
        const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noiseBuffer(.12);
        s.playbackRate.value = Math.min(2.5, .4 + Math.abs(vel) * .04);
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500 + Math.min(2600, Math.abs(vel) * 18); bp.Q.value = 6;
        const g = ctx.createGain(); env(g, t, .004, .55, .08);
        s.connect(bp).connect(g).connect(fxBus); s.start(t); s.stop(t + .14);
      },
      riff(seed) {
        if (!ctx || !enabled) return;
        const t = ctx.currentTime + .02, base = 60 + (seed % 5) * 2, pattern = [0, 4, 7, 11, 12, 7];
        pattern.forEach((iv, i) => pluck(t + i * .11, base + iv, .18));
      }
    };
  })();



  const ABOUT = {
    name: 'Start here', short: 'Rehan Nadaf', labelBottom: 'Side A',
    kicker: 'On the deck', tag: 'Builder of things people use.',
    desc: 'Pick a record from the crate below and put it on the turntable. Each one is something I\'ve built, from AI products to hackathon winners.',
    points: [], stack: [], link: '', color: '#D9A441', key: 0, tempo: 84
  };

  // ===== Helpers =====
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rectCentre = r => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 });

  // ===== Render crate =====
  const crateEl = $('#crateRecords');
  crateEl.innerHTML = PROJECTS.map((p, i) => `
    <li class="crec" data-i="${i}">
      <button class="crec-btn" type="button" data-i="${i}" style="--art:${esc(p.art)};--c:${p.color};--ink2:${p.ink}" aria-label="Put ${esc(p.name)} on the turntable">
        <span class="crec-disc" aria-hidden="true"></span>
        <span class="crec-sleeve"><span>${esc(p.name)}</span></span>
      </button>
    </li>`).join('');

  // ===== Crate scrolling: wheel, arrows, track, keyboard =====
  const cratePrev = $('#cratePrev'), crateNext = $('#crateNext'), crateTrack = $('#crateScroll'), crateThumb = $('#crateThumb');
  $('#crateCount').textContent = `Crate no. 1, ${PROJECTS.length} records`;
  const crateMax = () => Math.max(0, crateEl.scrollWidth - crateEl.clientWidth);
  function updateCrateScroll() {
    const max = crateMax(), x = crateEl.scrollLeft, frac = Math.min(1, crateEl.clientWidth / crateEl.scrollWidth);
    crateTrack.hidden = max <= 2;
    crateThumb.style.width = `${frac * 100}%`;
    crateThumb.style.transform = `translateX(${max ? (x / max) * (1 / frac - 1) * 100 : 0}%)`;
    cratePrev.classList.toggle('is-hidden', x < 4);
    crateNext.classList.toggle('is-hidden', x > max - 4);
    crateEl.classList.toggle('fade-l', x > 4);
    crateEl.classList.toggle('fade-r', x < max - 4);
  }
  crateEl.addEventListener('scroll', updateCrateScroll, { passive: true });
  window.addEventListener('resize', updateCrateScroll);
  requestAnimationFrame(updateCrateScroll);
  const flip = dir => crateEl.scrollBy({ left: dir * crateEl.clientWidth * .7, behavior: reduceMotion ? 'auto' : 'smooth' });
  cratePrev.addEventListener('click', () => flip(-1));
  crateNext.addEventListener('click', () => flip(1));
  // a vertical mouse wheel flips through the crate, then lets the page scroll at either end
  crateEl.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const max = crateMax(), x = crateEl.scrollLeft;
    if ((e.deltaY < 0 && x <= 0) || (e.deltaY > 0 && x >= max - 1)) return;
    e.preventDefault();
    crateEl.scrollLeft = x + e.deltaY * 1.2;
  }, { passive: false });
  crateTrack.addEventListener('click', e => {
    const r = crateTrack.getBoundingClientRect();
    crateEl.scrollTo({ left: ((e.clientX - r.left) / r.width) * crateMax(), behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  crateEl.addEventListener('keydown', e => {
    const btn = e.target.closest('.crec-btn'); if (!btn || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    const li = btn.closest('.crec'), next = e.key === 'ArrowRight' ? li.nextElementSibling : li.previousElementSibling;
    if (next) { e.preventDefault(); const b = $('.crec-btn', next); b.focus({ preventScroll: true }); next.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', inline: 'nearest', block: 'nearest' }); }
  });

  // ===== Render back cover =====
  $('#tracks').innerHTML = SERVICES.map((s, i) => `
    <li class="track">
      <span class="track-no">${i + 1}</span>
      <h3><span>${esc(s.name)}</span><button class="track-ask" type="button" data-i="${i}">Request this</button></h3>
      <p>${esc(s.desc)} ${esc(s.ex)}.</p>
    </li>`).join('');
  $('#stack').textContent = STACK.join(', ');
  $('#serviceSelect').innerHTML = SERVICES.map(s => `<option>${esc(s.name)}</option>`).join('') + '<option>Something else</option>';
  $('#tracks').addEventListener('click', e => {
    const b = e.target.closest('.track-ask'); if (!b) return;
    const i = +b.dataset.i;
    $('#serviceSelect').value = SERVICES[i].name;
    Audio.riff(i);
    $('#request').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => $('#requestForm [name=name]').focus({ preventScroll: true }), 600);
  });

  // ===== Deck state =====
  const body = document.body, record = $('#record'), platter = $('#platter');
  let playing = false, current = ABOUT, currentIndex = -1, angle = 0, speed = 0, scratching = false, busy = false;
  const FULL = reduceMotion ? 40 : 200; // deg per second

  const soundBtn = $('#soundToggle');
  function setSound(on) {
    Audio.setEnabled(on);
    soundBtn.setAttribute('aria-pressed', String(on));
    $('.sound-label', soundBtn).textContent = on ? 'Sound on' : 'Sound off';
  }
  soundBtn.addEventListener('click', () => setSound(!Audio.enabled));

  // ===== Narrator: each record tells its project's story (voice recorded with ElevenLabs) =====
  const caption = $('#caption');
  const Narrator = (() => {
    let manifest = null, el = null, id = 'about', loadedId = null, speaking = false, onEndCb = null, cueIdx = -1;
    fetch('audio/narration.json').then(r => r.json()).then(m => { manifest = m; }).catch(() => {});
    const show = s => { caption.textContent = s; caption.classList.toggle('on', !!s); };
    function ensureEl() {
      if (el) return el;
      el = new window.Audio();
      el.preload = 'auto';
      el.addEventListener('ended', () => { speaking = false; show(''); cueIdx = -1; el.currentTime = 0; onEndCb && onEndCb(); });
      Audio.connectElement(el); // route through the deck so the meter follows the voice and the sound toggle mutes it
      return el;
    }
    return {
      get speaking() { return speaking; },
      load(newId) { id = newId; },
      start(onEnd) {
        const a = ensureEl();
        if (loadedId !== id) { a.src = `audio/${id}.mp3`; loadedId = id; cueIdx = -1; }
        onEndCb = onEnd; speaking = true;
        a.play().catch(() => { speaking = false; });
      },
      stop() { speaking = false; if (el) el.pause(); show(''); cueIdx = -1; },
      tick() {
        if (!speaking || !el || !manifest || !manifest[id]) return;
        const cues = manifest[id].cues, t = el.currentTime + .08;
        let i = cues.length - 1; while (i > 0 && cues[i].t > t) i--;
        if (i !== cueIdx) { cueIdx = i; show(cues[i].text); }
      }
    };
  })();

  function setPlaying(on) {
    if (on === playing) return;
    playing = on;
    body.classList.toggle('playing', on);
    $('#startStop').setAttribute('aria-label', on ? 'Stop the turntable' : 'Start the turntable');
    if (on) {
      if (!Audio.enabled) setSound(true);
      setTimeout(() => {
        if (!playing) return;
        Audio.needle(); Audio.play();
        setTimeout(() => { if (playing) Narrator.start(() => setTimeout(() => setPlaying(false), 900)); }, 700);
      }, reduceMotion ? 0 : 1000);
    } else { Narrator.stop(); Audio.stop(); }
  }
  $('#startStop').addEventListener('click', () => setPlaying(!playing));

  // notes panel
  const notes = $('#notes');
  function showNotes(p) {
    notes.classList.add('swap');
    setTimeout(() => {
      $('#notesKicker').textContent = p === ABOUT ? 'On the deck' : p.role;
      $('#notesTitle').textContent = p.name;
      $('#notesTag').textContent = p.tag;
      $('#notesDesc').textContent = p.desc;
      $('#notesPoints').innerHTML = (p.points || []).map(x => `<li>${esc(x)}</li>`).join('');
      $('#notesStack').innerHTML = (p.stack || []).map(x => `<li>${esc(x)}</li>`).join('');
      const a = $('#notesLink');
      if (p.link) { a.hidden = false; a.href = p.link; a.textContent = p.linkText || 'Visit the live site'; } else a.hidden = true;
      notes.classList.remove('swap');
    }, reduceMotion ? 0 : 260);
  }

  function setLabel(p) {
    record.style.setProperty('--label', p.color);
    $('#labelTop').textContent = p.short;
    $('#labelBottom').textContent = p.labelBottom || p.year;
    Audio.setTrack(p);
  }

  function markCrate(i) {
    $$('.crec').forEach(li => li.classList.toggle('on-deck', +li.dataset.i === i));
  }

  // ===== The record you carry (ghost) =====
  let ghost = null;
  const g = { x: 0, y: 0, s: 0, r: 0, tx: 0, ty: 0, ts: 0, tr: 0, k: .22, done: null };
  function makeGhost(fromRect, color) {
    ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.style.setProperty('--c', color);
    ghost.style.width = ghost.style.height = '100px';
    document.body.appendChild(ghost);
    const c = rectCentre(fromRect);
    g.x = g.tx = c.x; g.y = g.ty = c.y; g.s = g.ts = fromRect.width / 100; g.r = g.tr = 0; g.done = null;
  }
  function stepGhost() {
    if (!ghost) return;
    const k = reduceMotion ? 1 : g.k;
    g.x = lerp(g.x, g.tx, k); g.y = lerp(g.y, g.ty, k); g.s = lerp(g.s, g.ts, k); g.r = lerp(g.r, g.tr, k * .6);
    ghost.style.transform = `translate(${g.x - 50}px, ${g.y - 50}px) scale(${g.s}) rotate(${g.r}deg)`;
    if (g.done && Math.abs(g.x - g.tx) < .6 && Math.abs(g.y - g.ty) < .6 && Math.abs(g.s - g.ts) < .004) {
      const cb = g.done; g.done = null; cb();
    }
  }
  function deckTarget() {
    const r = record.getBoundingClientRect();
    return { ...rectCentre(r), s: r.width / 100 };
  }
  function overDeck(x, y) {
    const r = platter.getBoundingClientRect(), c = rectCentre(r);
    return Math.hypot(x - c.x, y - c.y) < r.width * .62;
  }

  // Load a crate record onto the deck. Starts from the ghost's current position.
  function landOnDeck(i) {
    const p = PROJECTS[i];
    busy = true;
    const wasPlaying = playing;
    setPlaying(false);
    record.classList.add('lifted');
    const t = deckTarget();
    g.k = .16; g.tx = t.x; g.ty = t.y; g.ts = t.s; g.tr = g.r + 120;
    let landed = false;
    const finish = () => {
      if (landed) return; landed = true; g.done = null;
      setLabel(p); current = p; currentIndex = i; markCrate(i); showNotes(p); Narrator.load(p.id);
      record.classList.remove('lifted');
      if (ghost) { ghost.remove(); ghost = null; }
      busy = false; angle = 0;
      setTimeout(() => setPlaying(true), wasPlaying ? 120 : 60);
    };
    g.done = finish;
    setTimeout(finish, 1400); // safety net if the browser throttles animation frames
  }
  function returnToCrate(i) {
    const disc = $(`.crec[data-i="${i}"] .crec-disc`), r = disc.getBoundingClientRect(), c = rectCentre(r);
    g.k = .2; g.tx = c.x; g.ty = c.y; g.ts = r.width / 100; g.tr = 0;
    g.done = () => { ghost.remove(); ghost = null; busy = false; $(`.crec[data-i="${i}"]`).classList.remove('carrying'); };
  }

  // Crate pointer handling: drag with mouse/pen, tap anywhere
  let press = null;
  crateEl.addEventListener('pointerdown', e => {
    const btn = e.target.closest('.crec-btn'); if (!btn || busy) return;
    press = { i: +btn.dataset.i, x: e.clientX, y: e.clientY, id: e.pointerId, type: e.pointerType, btn, dragging: false, lx: e.clientX, lt: performance.now() };
  });
  window.addEventListener('pointermove', e => {
    if (!press || e.pointerId !== press.id) return;
    const dist = Math.hypot(e.clientX - press.x, e.clientY - press.y);
    if (!press.dragging) {
      if (press.type === 'touch') return; // touch scrolls the crate; a tap still loads the record
      if (dist < 6) return;
      press.dragging = true;
      const disc = $('.crec-disc', press.btn);
      makeGhost(disc.getBoundingClientRect(), PROJECTS[press.i].color);
      disc.style.visibility = 'hidden';
      press.btn.setPointerCapture?.(e.pointerId);
      body.classList.add('dragging');
      cursor.classList.add('holding'); cursor.classList.remove('big');
      if (!Audio.enabled && Audio.ready) {} // stay silent until the visitor asks for sound
    }
    const now = performance.now(), vx = (e.clientX - press.lx) / Math.max(1, now - press.lt);
    press.lx = e.clientX; press.lt = now;
    g.k = .28; g.tx = e.clientX; g.ty = e.clientY;
    const over = overDeck(e.clientX, e.clientY);
    body.classList.toggle('over-deck', over);
    g.ts = over ? deckTarget().s * .92 : 1.45;
    g.tr = Math.max(-25, Math.min(25, vx * 18));
  });
  window.addEventListener('pointerup', e => {
    if (!press || e.pointerId !== press.id) return;
    const p = press; press = null;
    body.classList.remove('dragging');
    cursor.classList.remove('holding');
    const disc = $('.crec-disc', p.btn);
    if (p.dragging) {
      const over = body.classList.contains('over-deck');
      body.classList.remove('over-deck');
      busy = true;
      if (over) { disc.style.visibility = ''; landOnDeck(p.i); }
      else { returnToCrate(p.i); const restore = () => { disc.style.visibility = ''; }; const prev = g.done; g.done = () => { prev && prev(); restore(); }; }
      p.btn.dataset.justDragged = '1';
      setTimeout(() => delete p.btn.dataset.justDragged, 50);
    }
  });
  window.addEventListener('pointercancel', () => { press = null; body.classList.remove('dragging', 'over-deck'); });

  crateEl.addEventListener('click', e => {
    const btn = e.target.closest('.crec-btn'); if (!btn || busy || btn.dataset.justDragged) return;
    flyToDeck(+btn.dataset.i);
  });

  function flyToDeck(i) {
    if (i === currentIndex) { setPlaying(!playing); return; }
    const go = () => {
      const disc = $(`.crec[data-i="${i}"] .crec-disc`);
      makeGhost(disc.getBoundingClientRect(), PROJECTS[i].color);
      g.ts = g.s * 1.25; // a little lift before it flies
      setTimeout(() => landOnDeck(i), reduceMotion ? 0 : 90);
    };
    const r = platter.getBoundingClientRect();
    if (r.top < 60 || r.bottom > window.innerHeight) {
      $('#deck').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      setTimeout(go, reduceMotion ? 0 : 450);
    } else go();
  }

  // ===== Record on the deck: tap to play, drag to scratch =====
  let lastA = 0, moved = 0, rid = null, lastScratch = 0, lastT = 0;
  const pAngle = e => { const c = rectCentre(record.getBoundingClientRect()); return Math.atan2(e.clientY - c.y, e.clientX - c.x) * 180 / Math.PI; };
  record.addEventListener('pointerdown', e => {
    if (busy) return;
    scratching = true; moved = 0; rid = e.pointerId; record.setPointerCapture(e.pointerId);
    lastA = pAngle(e); lastT = performance.now();
  });
  record.addEventListener('pointermove', e => {
    if (!scratching || e.pointerId !== rid) return;
    const a = pAngle(e); let d = a - lastA; if (d > 180) d -= 360; if (d < -180) d += 360;
    lastA = a; angle += d; moved += Math.abs(d);
    const now = performance.now(), vel = d / Math.max(1, now - lastT) * 1000; lastT = now;
    if (Math.abs(d) > 2 && now - lastScratch > 45) { Audio.scratch(vel / 10); lastScratch = now; }
  });
  const endScratch = e => {
    if (!scratching) return; scratching = false;
    try { record.releasePointerCapture(e.pointerId); } catch (_) {}
    if (moved < 6) setPlaying(!playing);
  };
  record.addEventListener('pointerup', endScratch);
  record.addEventListener('pointercancel', endScratch);
  record.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlaying(!playing); } });

  // ===== Custom cursor =====
  const cursor = $('#cursor'), cursorText = $('#cursorText');
  const cur = { x: -100, y: -100, tx: -100, ty: -100 };
  if (finePointer) {
    const station = $('#station');
    window.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      cur.tx = e.clientX; cur.ty = e.clientY;
      const inStation = station.contains(e.target) || !!press;
      cursor.classList.toggle('on', inStation);
      if (press && press.dragging) return;
      let label = '';
      if (e.target.closest('.crec-btn')) label = +e.target.closest('.crec-btn').dataset.i === currentIndex ? (playing ? 'Pause' : 'Play') : 'Drag';
      else if (e.target.closest('#record')) label = playing ? 'Scratch' : 'Play';
      cursor.classList.toggle('big', !!label);
      if (label) cursorText.textContent = label;
    });
    document.addEventListener('pointerleave', () => cursor.classList.remove('on'));
  }

  // ===== VU meter =====
  const vu = $('#vu'), BARS = 40;
  vu.innerHTML = '<i></i>'.repeat(BARS);
  const bars = [...vu.children], freq = new Uint8Array(64);

  // ===== Main loop =====
  let last = performance.now();
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    // platter: ease up and down like a real motor
    const target = playing ? FULL : 0;
    speed += (target - speed) * Math.min(1, dt * (playing ? 1.3 : 2));
    if (!scratching) angle += speed * dt;
    record.style.transform = `rotate(${angle}deg)`;
    // cursor follows with a little lag
    if (finePointer) {
      cur.x = lerp(cur.x, cur.tx, .3); cur.y = lerp(cur.y, cur.ty, .3);
      cursor.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
    }
    stepGhost();
    Narrator.tick();
    // meter
    const an = Audio.analyser;
    if (an && playing) {
      an.getByteFrequencyData(freq);
      bars.forEach((b, i) => { b.style.height = `${2 + freq[Math.floor(i * 1.2) + 1] / 255 * 32}px`; });
    } else if (playing && Narrator.speaking && !reduceMotion) {
      // speech-like meter: syllable bursts that rise and fall
      const env = Math.max(0, Math.sin(now / 95) * .5 + Math.sin(now / 41) * .35 + .35);
      bars.forEach((b, i) => { const shape = Math.exp(-Math.pow((i - BARS * .32) / (BARS * .28), 2)); b.style.height = `${2 + env * shape * 30 * (.75 + Math.random() * .5)}px`; });
    } else if (playing && !reduceMotion) {
      bars.forEach((b, i) => { b.style.height = `${3 + ((Math.sin(now / 180 + i * .55) + Math.sin(now / 110 + i * 1.1) + 2) / 4) * 22}px`; });
    } else bars.forEach(b => { b.style.height = '2px'; });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  showNotes(ABOUT);

  // ===== Theme toggle =====
  const themeBtn = $('#themeToggle');
  const syncTheme = () => { const light = document.documentElement.dataset.theme === 'light'; themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme'); document.querySelector('meta[name=theme-color]').content = light ? '#E9E6DF' : '#1A1411'; };
  themeBtn.addEventListener('click', () => { const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) {} syncTheme(); });
  syncTheme();

  // ===== Request form =====
  const mailLink = $('#mailLink');
  if (CONTACT_EMAIL) mailLink.href = `mailto:${CONTACT_EMAIL}`; else mailLink.hidden = true;
  $('#requestForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, err = $('#formError');
    const name = f.name.value.trim(), email = f.email.value.trim(), service = f.service.value, msg = f.message.value.trim();
    if (!name || !email || !msg) { err.textContent = 'Add your name, email and a short description so I can reply.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'That email address looks incomplete. Check it and try again.'; return; }
    if (!CONTACT_EMAIL) { err.textContent = 'Email isn\'t set up yet. Reach me on LinkedIn for now.'; return; }
    err.textContent = '';
    const subject = `Build request: ${service}`;
    const text = `Hi Rehan,\n\n${msg}\n\nName: ${name}\nEmail: ${email}\nService: ${service}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  });
})();

