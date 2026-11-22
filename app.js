/* Rehan Nadaf, portfolio: a street of shops. Plain JavaScript, no build step.
   Shutter sounds are synthesised live; narration was recorded once with ElevenLabs (audio/). */
(() => {
  'use strict';

  const CONTACT_EMAIL = 'rehanzn2007@gmail.com';

  // Each project is a shop. bg/fg/trim are its enamel signboard colours.
  const SHOPS = [
    { id: 'eb', name: 'Executive Board', tag: 'An AI executive board for founders', role: 'Co-Founder & CTO',
      desc: 'Small businesses can\'t afford a full leadership team. EB gives founders an AI CFO, CMO, COO and CSO that read the company\'s own books and hand back one clear recommendation.',
      points: ['Built about 85% of the app and website', 'ERP underneath: accounting, GST invoicing, expenses, goals', 'Human approval on every action'],
      stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI'], link: 'https://executiveboard.in', linkText: 'Visit executiveboard.in',
      bg: '#1B1813', fg: '#F5C518', trim: '#F5C518' },
    { id: 'playyr', name: 'PLAYYR', tag: 'Your city is your playground', role: 'CTO at Vergemount',
      desc: 'A social sports and esports discovery platform: find people to play with nearby, join local crews and tournaments, keep a streak going.',
      points: ['Nearby players, teams and venues on a map', 'Team invites and tournament sign-ups', 'Challenges, streaks and player profiles'],
      stack: ['JavaScript', 'Supabase', 'Cloudflare'], link: '',
      bg: '#C42318', fg: '#FFFFFF', trim: '#1B1813' },
    { id: 'eatongo', name: 'EatOnGo', tag: 'Skip the canteen queue', role: '1st, AIESEC Ideathon. 4th, Hack4SDG',
      desc: 'Students scan the outlet\'s QR code, order and pay from their phone, and collect with a token and a four-character code. Vendors get a live queue and sales insights.',
      points: ['Order now or pre-order a pickup slot', 'Verified pickup with token and code', 'Real-time sync between customer and vendor'],
      stack: ['JavaScript', 'Firebase', 'PWA'], link: 'https://rehancodes-web.github.io/eatongo/', linkText: 'Try the live demo',
      bg: '#FF3D8B', fg: '#FFFFFF', trim: '#F5C518' },
    { id: 'higherup', name: 'HigherUp.AI', tag: 'Hiring by proven skills', role: 'Founder and developer',
      desc: 'Matches students and job seekers to roles based on what they can actually do, and helps businesses hire for proven skills.',
      points: ['Profiles built around evidence of skills', 'Swipe-style job discovery', 'Employer side for roles and matches'],
      stack: ['JavaScript', 'Python', 'Supabase'], link: 'https://rehancodes-web.github.io/HigherUp.AI/', linkText: 'Visit the live site',
      bg: '#1D3FAE', fg: '#FFFFFF', trim: '#F5C518' },
    { id: 'put1meet', name: 'put1meet', tag: 'Hidden spots of Bangalore', role: 'Founder and developer',
      desc: 'Find old ruins, quiet walks and hidden corners of the city, plan by area, and meet people heading to the same spot.',
      points: ['Curated spots by area', 'Follows, meet groups and messages', 'Community-submitted spots'],
      stack: ['JavaScript', 'Supabase', 'PostgreSQL'], link: 'https://rehancodes-web.github.io/put1meet/put1meet/', linkText: 'Explore put1meet',
      bg: '#0A5C32', fg: '#F5C518', trim: '#FFFBEA' },
    { id: 'community', name: 'Community Manager', tag: 'Housing societies, sorted', role: 'Developer',
      desc: 'One portal for owners, staff, invoices, dues and payments, with monthly and yearly reports, plus an iPhone app on the same backend.',
      points: ['Role-aware sign in for admins, staff and owners', 'Invoices, dues and expense reports', 'React Native iOS app'],
      stack: ['TypeScript', 'React Native', 'Expo', 'Supabase'], link: '',
      bg: '#FFFFFF', fg: '#1D3FAE', trim: '#C42318' },
    { id: 'campuspaws', name: 'Campus Paws', tag: 'Look after the campus dogs', role: 'Developer',
      desc: 'Lists the dogs living on campus and lets anyone report a dog that is hurt or in trouble, with a photo and a note.',
      points: ['Profiles for the campus pack', 'Reports with photo upload', 'Plain HTML, CSS and JavaScript'],
      stack: ['HTML', 'CSS', 'JavaScript'], link: 'https://rehancodes-web.github.io/cie3webtech/', linkText: 'Visit the live site',
      bg: '#F5C518', fg: '#5A2E0E', trim: '#0B6B3A' },
    { id: 'polymath', name: 'Polymath OS', tag: 'Learning, levelled up', role: 'Founder and developer',
      desc: 'A gamified skill-learning platform: pick skills from different fields, complete activities, and level up with challenges and streaks.',
      points: ['Skill trees across fields', 'Challenges, streaks and achievements', 'Progress tracking'],
      stack: ['JavaScript'], link: '',
      bg: '#1B1813', fg: '#FFFFFF', trim: '#FF3D8B' },
    { id: 'portfolio', name: 'This street', tag: 'The site you\'re on', role: 'Designer and developer',
      desc: 'A portfolio built as a working shop street: pull a shutter up and the shopkeeper tells you about the project.',
      points: ['Draggable shutters with synthesised sound', 'Narration recorded with ElevenLabs, captions synced', 'Plain HTML, CSS and JavaScript on GitHub Pages'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Web Audio', 'ElevenLabs'], link: 'https://github.com/rehancodes-web/portfolio', linkText: 'See the code',
      bg: '#FFFBEA', fg: '#C42318', trim: '#1D3FAE' }
  ];

  const SERVICES = [
    { name: 'Websites that bring in customers', desc: 'Business sites and landing pages that load fast, look sharp on every phone and turn visitors into enquiries.' },
    { name: 'Web apps and dashboards', desc: 'Booking systems, customer portals and admin panels with sign-in, databases and payments.' },
    { name: 'Automations', desc: 'Connect your forms, sheets, WhatsApp, email and CRM so repeat work happens on its own.' },
    { name: 'AI assistants', desc: 'Chatbots that know your business, and AI that drafts, sorts and summarises inside your tools.' },
    { name: 'Mobile apps', desc: 'iOS and Android apps with React Native, sharing one backend with your website.' },
    { name: 'Tech partner for founders', desc: 'From idea to launched MVP: scoping, architecture, build and the first round of fixes.' }
  ];
  const TOOLS = ['JavaScript', 'TypeScript', 'Next.js', 'React Native', 'Node.js', 'Python', 'PostgreSQL', 'Prisma', 'Supabase', 'Firebase', 'OpenAI API', 'Vercel', 'Cloudflare', 'Git and GitHub'];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ===== Sound =====
  let soundOn = true;
  const Sfx = (() => {
    let ctx = null, out = null, noise = null;
    function init() {
      if (ctx) return true;
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC(); out = ctx.createGain(); out.gain.value = .5; out.connect(ctx.destination);
      noise = ctx.createBuffer(1, ctx.sampleRate * .08, ctx.sampleRate);
      const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
      return true;
    }
    return {
      wake() { if (init() && ctx.state === 'suspended') ctx.resume(); },
      // one slat of corrugated steel passing the roller
      tick(speed = 1) {
        if (!soundOn || !init()) return;
        const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noise; s.playbackRate.value = .8 + Math.random() * .5;
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800 + Math.random() * 1400; bp.Q.value = 2.5;
        const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(clamp(.12 + speed * .05, .1, .35), t + .004); g.gain.exponentialRampToValueAtTime(.0001, t + .07);
        s.connect(bp).connect(g).connect(out); s.start(t); s.stop(t + .09);
      },
      // shutter hitting its stop
      clunk() {
        if (!soundOn || !init()) return;
        const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'triangle'; o.frequency.setValueAtTime(170, t); o.frequency.exponentialRampToValueAtTime(70, t + .16);
        g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.45, t + .005); g.gain.exponentialRampToValueAtTime(.0001, t + .25);
        o.connect(g).connect(out); o.start(t); o.stop(t + .3);
        this.tick(3);
      }
    };
  })();

  // ===== Narration (pre-recorded) with captions =====
  const Narrator = (() => {
    const el = new Audio(); el.preload = 'none';
    let manifest = null, id = null, radio = null, cue = -1, raf = 0;
    fetch('audio/narration.json').then(r => r.json()).then(m => { manifest = m; }).catch(() => {});
    const show = t => { if (!radio) return; $('.radio-text', radio).textContent = t; radio.classList.toggle('on', !!t); };
    function loop() {
      if (manifest && manifest[id] && !el.paused) {
        const cues = manifest[id].cues, t = el.currentTime + .08;
        let i = cues.length - 1; while (i > 0 && cues[i].t > t) i--;
        if (i !== cue) { cue = i; show(cues[i].text); }
      }
      raf = requestAnimationFrame(loop);
    }
    el.addEventListener('ended', () => { show(''); cue = -1; });
    return {
      play(newId, radioEl) {
        if (radio && radio !== radioEl) show('');
        radio = radioEl;
        if (id !== newId) { id = newId; el.src = `audio/${id}.mp3`; cue = -1; }
        el.muted = !soundOn;
        el.currentTime = 0;
        el.play().catch(() => {});
        cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
      },
      stop(radioEl) { if (radioEl && radioEl !== radio) return; el.pause(); show(''); cue = -1; },
      mute(m) { el.muted = m; }
    };
  })();

  // ===== Render the street =====
  $('#shops').innerHTML = SHOPS.map(s => `
    <li class="shop">
      <div class="shop-board" style="--bg:${s.bg};--fg:${s.fg};--trim:${s.trim}">
        <h3 class="shop-name">${esc(s.name)}</h3>
        <p class="shop-tag">${esc(s.tag)}</p>
      </div>
      <div class="shopfront" data-id="${s.id}" id="shop-${s.id}">
        <div class="interior">
          <p class="shop-role">${esc(s.role)}</p>
          <p class="shop-desc">${esc(s.desc)}</p>
          <ul class="shop-points">${s.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <ul class="shop-stack">${s.stack.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          ${s.link ? `<a class="shop-link" href="${s.link}" target="_blank" rel="noopener">${esc(s.linkText)}</a>` : ''}
          <p class="radio" aria-live="off"><span class="radio-dot" aria-hidden="true"></span><span class="radio-text"></span></p>
        </div>
        <button class="shutter" type="button" aria-expanded="false" aria-controls="shop-${s.id}" aria-label="Open ${esc(s.name)}">
          <span class="shutter-label">Pull up to open</span>
          <span class="shutter-handle" aria-hidden="true"></span>
        </button>
      </div>
    </li>`).join('');

  // ===== Shutters =====
  const fronts = [];
  function makeShutter(front) {
    const sh = $('.shutter', front), radio = $('.radio', front), id = front.dataset.id;
    let p = 0, drag = null, lastSlat = 0, isOpen = false;
    const SLAT = 18;
    const set = v => { p = v; sh.style.setProperty('--p', v.toFixed(4)); };
    function settle(to, after) {
      sh.classList.add('settling');
      const from = p; set(to);
      // play slat ticks along the way so the roll sounds right
      const slats = Math.round(Math.abs(to - from) * front.clientHeight / SLAT);
      if (!reduceMotion) for (let i = 0; i < Math.min(slats, 26); i++) setTimeout(() => Sfx.tick(1.5), i * (560 / Math.max(slats, 1)) * (1 - i / (slats * 2)));
      setTimeout(() => { sh.classList.remove('settling'); if (to === 1 || to === 0) Sfx.clunk(); after && after(); }, reduceMotion ? 0 : 700);
    }
    function open() {
      if (isOpen) return; isOpen = true;
      fronts.forEach(f => f !== api && f.close());
      Sfx.wake();
      sh.setAttribute('aria-expanded', 'true'); front.classList.add('open');
      settle(1, () => { if (isOpen) Narrator.play(id, radio); });
      sh.tabIndex = -1; sh.style.pointerEvents = 'none';
    }
    function close() {
      if (!isOpen && p < .02) return;
      isOpen = false; Narrator.stop(radio);
      sh.setAttribute('aria-expanded', 'false'); front.classList.remove('open');
      sh.tabIndex = 0; sh.style.pointerEvents = '';
      settle(id === 'about' ? .06 : 0);
    }
    sh.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch' && matchMedia('(max-width: 640px)').matches && !e.target.closest('.shutter-handle')) return; // let phones scroll
      Sfx.wake();
      drag = { y: e.clientY, p0: p, moved: 0 }; lastSlat = 0;
      sh.setPointerCapture(e.pointerId); sh.classList.add('dragging');
    });
    sh.addEventListener('pointermove', e => {
      if (!drag) return;
      const dy = drag.y - e.clientY; drag.moved = Math.max(drag.moved, Math.abs(dy));
      set(clamp(drag.p0 + dy / front.clientHeight, 0, .98));
      const slat = Math.floor(dy / SLAT);
      if (slat !== lastSlat) { Sfx.tick(Math.min(3, Math.abs(e.movementY || 4) / 4)); lastSlat = slat; }
    });
    const end = () => {
      if (!drag) return; sh.classList.remove('dragging');
      const moved = drag.moved; drag = null;
      if (moved < 6) { open(); return; }
      if (p > .28) open(); else close();
    };
    sh.addEventListener('pointerup', end);
    sh.addEventListener('pointercancel', end);
    sh.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    sh.addEventListener('click', e => { if (e.detail === 0) open(); }); // keyboard-generated click
    const api = { open, close, front, peek() { if (!reduceMotion) { sh.classList.add('settling'); set(.16); setTimeout(() => set(.06), 650); setTimeout(() => sh.classList.remove('settling'), 1400); } else set(.06); } };
    return api;
  }
  $$('.shopfront').forEach(f => fronts.push(makeShutter(f)));
  // shops get a "pull down" control once open
  fronts.forEach(api => {
    if (api.front.dataset.id === 'about') return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'btn btn-line pull-down'; b.textContent = 'Pull the shutter down';
    b.addEventListener('click', () => { api.close(); $('.shutter', api.front).focus({ preventScroll: true }); });
    $('.interior', api.front).appendChild(b);
  });
  // touch screens tap to open; the handle still drags
  if (matchMedia('(hover: none)').matches) $$('.shutter-label').forEach(l => { l.textContent = l.closest('#heroShop') ? 'Tap to open the shop' : 'Tap to open'; });
  // the hero shutter peeks once so visitors see it moves
  setTimeout(() => fronts[0].peek(), 900);

  // ===== Street scrolling =====
  const shops = $('#shops'), prev = $('#streetPrev'), next = $('#streetNext');
  const maxX = () => Math.max(0, shops.scrollWidth - shops.clientWidth);
  function updateArrows() { prev.disabled = shops.scrollLeft < 4; next.disabled = shops.scrollLeft > maxX() - 4; }
  shops.addEventListener('scroll', updateArrows, { passive: true });
  addEventListener('resize', updateArrows); requestAnimationFrame(updateArrows);
  const walk = dir => shops.scrollBy({ left: dir * shops.clientWidth * .8, behavior: reduceMotion ? 'auto' : 'smooth' });
  prev.addEventListener('click', () => walk(-1));
  next.addEventListener('click', () => walk(1));
  shops.addEventListener('wheel', e => {
    if (maxX() <= 0 || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const x = shops.scrollLeft;
    if ((e.deltaY < 0 && x <= 0) || (e.deltaY > 0 && x >= maxX() - 1)) return;
    e.preventDefault(); shops.scrollLeft = x + e.deltaY * 1.2;
  }, { passive: false });

  // ===== Sound toggle =====
  const soundBtn = $('#soundToggle');
  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn; Narrator.mute(!soundOn);
    soundBtn.setAttribute('aria-pressed', String(soundOn));
    $('#soundLabel').textContent = soundOn ? 'Sound on' : 'Sound off';
  });

  // ===== Rate board and wall =====
  $('#rateList').innerHTML = SERVICES.map((s, i) => `
    <li class="rate"><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><button class="rate-ask" type="button" data-i="${i}">Ask about this</button></li>`).join('');
  $('#tools').textContent = TOOLS.join(', ') + '.';
  const select = $('#serviceSelect');
  select.innerHTML = SERVICES.map(s => `<option>${esc(s.name)}</option>`).join('') + '<option>Something else</option>';
  $('#rateList').addEventListener('click', e => {
    const b = e.target.closest('.rate-ask'); if (!b) return;
    select.value = SERVICES[+b.dataset.i].name;
    $('#order').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => $('#requestForm [name=name]').focus({ preventScroll: true }), 650);
  });

  // ===== Order pad =====
  $('#mailLink').href = `mailto:${CONTACT_EMAIL}`;
  $('#requestForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, err = $('#formError');
    const name = f.name.value.trim(), email = f.email.value.trim(), service = f.service.value, msg = f.message.value.trim();
    if (!name || !email || !msg) { err.textContent = 'Add your name, email and the details so I can reply.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'That email address looks incomplete. Check it and try again.'; return; }
    err.textContent = '';
    const subject = `Order: ${service}`;
    const body = `Hi Rehan,\n\n${msg}\n\nName: ${name}\nEmail: ${email}\nItem: ${service}`;
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
