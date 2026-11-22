(() => {
  const $ = s => document.querySelector(s);
  const rand = (a, b) => Math.random() * (b - a) + a;
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const vib = p => navigator.vibrate && navigator.vibrate(p);

  /* ---------- Diya illustration ---------- */
  const diyaSVG = `<svg viewBox="0 0 120 96" aria-hidden="true">
    <path d="M6 52Q60 44 114 52Q108 90 60 92Q12 90 6 52Z" fill="url(#gClay)"/>
    <path d="M6 52Q60 44 114 52Q112 61 60 59Q8 61 6 52Z" fill="url(#gRim)"/>
    <ellipse cx="60" cy="52" rx="40" ry="4.5" fill="#3a1a05"/>
    <g fill="#ffe08a"><circle cx="30" cy="73" r="2.6"/><circle cx="45" cy="79" r="2.6"/><circle cx="60" cy="81" r="2.6"/><circle cx="75" cy="79" r="2.6"/><circle cx="90" cy="73" r="2.6"/></g>
    <rect x="58" y="44" width="4" height="9" rx="2" fill="#2b1608"/>
    <g class="flame"><path d="M60 0C75 18 79 32 60 48C41 32 45 18 60 0Z" fill="url(#gFlame)"/><path d="M60 20C67 29 68 38 60 46C52 38 53 29 60 20Z" fill="#fff6c9"/></g>
  </svg>`;
  document.querySelectorAll('[data-diya]').forEach(e => {
    e.insertAdjacentHTML('afterbegin', diyaSVG);
    e.style.setProperty('--fd', rand(0, .4).toFixed(2) + 's');
  });

  /* ---------- Canvas: stars, embers, fireworks ---------- */
  const bgC = $('#bg'), fxC = $('#fx'), b = bgC.getContext('2d'), c = fxC.getContext('2d');
  let W, H, stars = [], embers = [], sparks = [], rockets = [], mode = 0, nextLaunch = 0;
  const mkEmber = init => ({ x: rand(0, W), y: init ? rand(0, H) : H + 10, r: rand(.8, 2.4), vy: rand(.25, .75), ph: rand(0, 6.28), a: rand(.35, .9) });

  function resize() {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    [bgC, fxC].forEach(k => { k.width = W * d; k.height = H * d; });
    b.setTransform(d, 0, 0, d, 0, 0); c.setTransform(d, 0, 0, d, 0, 0);
    stars = Array.from({ length: Math.round(W * H / 5500) }, () => ({ x: rand(0, W), y: rand(0, H * .85), r: rand(.3, 1.4), p: rand(0, 6.28), s: rand(.6, 2) }));
    embers = Array.from({ length: Math.min(60, Math.round(W / 9)) }, () => mkEmber(true));
  }

  function burst(x, y, big = 1) {
    const h = pick([42, 38, 30, 46, 22, 350]), ring = Math.random() < .35, n = Math.round((ring ? 48 : 72) * big);
    for (let i = 0; i < n && sparks.length < 1800; i++) {
      const a = ring ? i / n * 6.283 : rand(0, 6.283), sp = ring ? rand(3.8, 4.2) : rand(.8, 5.5) * (big > 1 ? 1.15 : 1);
      sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: rand(.009, .018), h: h + rand(-10, 10), s: rand(1.2, 2.4) });
    }
  }
  function launch(tx) {
    const ty = rand(.14, .5) * H, g = .1;
    rockets.push({ x: tx ?? rand(.12, .88) * W, y: H, vx: rand(-.5, .5), vy: -Math.sqrt(2 * g * (H - ty)), g });
  }

  function frame(t) {
    // background layer
    b.clearRect(0, 0, W, H);
    for (const s of stars) {
      b.fillStyle = `rgba(255,238,200,${(.3 + .7 * Math.abs(Math.sin(t / 1000 * s.s + s.p))) * .85})`;
      b.beginPath(); b.arc(s.x, s.y, s.r, 0, 6.283); b.fill();
    }
    for (const e of embers) {
      e.y -= e.vy; e.x += Math.sin(t / 900 + e.ph) * .35;
      if (e.y < -10) Object.assign(e, mkEmber(false));
      const a = e.a * (.5 + .5 * Math.sin(t / 500 + e.ph));
      b.fillStyle = `rgba(255,170,50,${a * .18})`; b.beginPath(); b.arc(e.x, e.y, e.r * 3.5, 0, 6.283); b.fill();
      b.fillStyle = `rgba(255,215,120,${a})`; b.beginPath(); b.arc(e.x, e.y, e.r, 0, 6.283); b.fill();
    }
    // fireworks layer (trails via fade-out)
    c.globalCompositeOperation = 'destination-out'; c.fillStyle = 'rgba(0,0,0,.2)'; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'lighter';
    if (mode && t > nextLaunch) { launch(); nextLaunch = t + rand(500, 1100) / mode; }
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i]; r.x += r.vx; r.y += r.vy; r.vy += r.g;
      sparks.push({ x: r.x, y: r.y, vx: rand(-.3, .3), vy: rand(.2, .8), life: .6, decay: .05, h: 40, s: 1.4 });
      if (r.vy >= -.6) { burst(r.x, r.y, 1); rockets.splice(i, 1); }
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.x += s.vx; s.y += s.vy; s.vx *= .985; s.vy = s.vy * .985 + .045; s.life -= s.decay;
      if (s.life <= 0) { sparks[i] = sparks[sparks.length - 1]; sparks.pop(); continue; }
      c.fillStyle = `hsla(${s.h},100%,${50 + s.life * 25}%,${s.life})`;
      c.beginPath(); c.arc(s.x, s.y, s.s * (.5 + s.life * .5), 0, 6.283); c.fill();
    }
    requestAnimationFrame(frame);
  }
  addEventListener('resize', resize);
  resize(); requestAnimationFrame(frame);

  /* ---------- Touch / mouse interaction ---------- */
  let lastMove = 0;
  addEventListener('pointermove', e => {
    const now = performance.now(); if (now - lastMove < 25) return; lastMove = now;
    for (let i = 0; i < 2; i++) sparks.push({ x: e.clientX, y: e.clientY, vx: rand(-1, 1), vy: rand(-1.2, .4), life: 1, decay: .03, h: rand(30, 50), s: rand(1, 2) });
  }, { passive: true });
  addEventListener('pointerdown', e => {
    if (e.target.closest('input')) return;
    burst(e.clientX, e.clientY, mode ? 1.1 : .6);
  }, { passive: true });

  /* ---------- Lanterns ---------- */
  const lan = $('#lanterns');
  for (let i = 0; i < 9; i++) {
    const l = document.createElement('div'); l.className = 'lantern';
    l.style.cssText = `left:${rand(2, 94)}%;--w:${rand(22, 44)}px;--d:${rand(16, 28)}s;--dl:-${rand(0, 20)}s`;
    l.innerHTML = '<i></i>'; lan.appendChild(l);
  }

  /* ---------- Title ---------- */
  let k = 0;
  $('#bigTitle').innerHTML = ['Happy', 'Diwali', '🪔'].map(w =>
    `<span class="w">${[...w].map(ch => `<span class="ch" style="animation-delay:${(k++) * 90}ms">${ch}</span>`).join('')}</span>`).join(' ');

  /* ---------- Flow ---------- */
  const welcome = $('#welcome'), cel = $('#celebrate'), card = $('#card');
  $('#openBtn').addEventListener('click', () => {
    vib(40); welcome.classList.add('leaving'); mode = 1;
    for (let i = 0; i < 8; i++) setTimeout(() => burst(rand(.15, .85) * innerWidth, rand(.15, .5) * innerHeight, 1.3), i * 260);
    setTimeout(() => { cel.classList.add('in'); lan.classList.add('on'); }, 500);
    setTimeout(() => { welcome.style.display = 'none'; }, 1000);
  });

  const openCard = () => {
    if (card.classList.contains('open')) return;
    vib([30, 40, 30]); card.classList.add('open'); $('#share').classList.add('on');
    const w = innerWidth, h = innerHeight;
    [[.5, .3], [.2, .22], [.8, .25]].forEach(([x, y], i) => setTimeout(() => burst(x * w, y * h, 1.4), i * 250));
  };
  $('#cover').addEventListener('click', openCard);
  $('#cover').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCard(); } });

  /* ---------- Personalised diya ---------- */
  const nameIn = $('#name'), diya = $('#diya'), greet = $('#greet');
  const to = new URLSearchParams(location.search).get('to'); if (to) nameIn.value = to.slice(0, 24);
  const showGreeting = () => {
    greet.textContent = `Happy Diwali, ${nameIn.value.trim().slice(0, 24)}!`;
    greet.classList.remove('pop'); void greet.offsetWidth; greet.classList.add('pop');
  };
  diya.addEventListener('click', () => {
    if (!nameIn.value.trim()) {
      nameIn.classList.remove('shake'); void nameIn.offsetWidth; nameIn.classList.add('shake');
      nameIn.focus(); toast('Type your name first 🪔'); return;
    }
    vib([60, 40, 90]); diya.classList.add('lit'); $('#hint').textContent = 'Your diya is lit ✨';
    const r = diya.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top, 1.3);
    for (let i = 0; i < 5; i++) setTimeout(() => burst(rand(.1, .9) * innerWidth, rand(.1, .5) * innerHeight, 1.2), 250 + i * 220);
    showGreeting(); $('#greetWrap').classList.add('show');
    setTimeout(() => diya.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
  });
  nameIn.addEventListener('keydown', e => { if (e.key === 'Enter') diya.click(); });
  nameIn.addEventListener('input', () => { if (diya.classList.contains('lit') && nameIn.value.trim()) showGreeting(); });

  /* ---------- Sharing ---------- */
  const link = () => location.href.split(/[?#]/)[0];
  const msg = '🪔✨ I have a special Diwali surprise for you! Open it and light your diya 👇';
  let tt; function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2400); }
  async function copy() {
    try { await navigator.clipboard.writeText(link()); }
    catch { const t = document.createElement('textarea'); t.value = link(); document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch {} t.remove(); }
    toast('Link copied! Share the magic ✨');
  }
  $('#copyBtn').addEventListener('click', copy);
  $('#waBtn').addEventListener('click', () => window.open('https://wa.me/?text=' + encodeURIComponent(msg + '\n' + link()), '_blank', 'noopener'));
  $('#shareBtn').addEventListener('click', async () => {
    if (navigator.share) { try { await navigator.share({ title: 'A Special Diwali Surprise ✨', text: msg, url: link() }); } catch {} }
    else copy();
  });
})();