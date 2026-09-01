// ===========================================================
// SECURIFORM — Script principal
// Slider hero, menu mobile, animations au scroll, compteurs
// ===========================================================

/* ===================== SLIDER (uniquement si présent sur la page) ===================== */
    (function(){
      const sliderEl = document.getElementById('slider');
      if(!sliderEl) return; // Pas de slider sur cette page (ex. pages intérieures) : on arrête ici sans erreur.

      const slides = document.querySelectorAll('.slide');
      const dotsWrap = document.querySelector('.slider-dots');
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let index = 0, timer = null;

      slides.forEach((s,i)=>{
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role','tab');
        b.setAttribute('aria-label','Aller à la diapositive ' + (i+1));
        b.setAttribute('aria-selected', i===0 ? 'true' : 'false');
        b.addEventListener('click', ()=>{ go(i); restart(); });
        dotsWrap.appendChild(b);
      });
      const dots = dotsWrap.querySelectorAll('button');

      function go(i){
        slides[index].classList.remove('active');
        dots[index].setAttribute('aria-selected','false');
        index = (i + slides.length) % slides.length;
        slides[index].classList.add('active');
        dots[index].setAttribute('aria-selected','true');
      }
      function restart(){
        if(reduced) return;
        clearInterval(timer);
        timer = setInterval(()=>go(index+1), 6000);
      }
      prev.addEventListener('click', ()=>{ go(index-1); restart(); });
      next.addEventListener('click', ()=>{ go(index+1); restart(); });
      sliderEl.addEventListener('keydown', e=>{
        if(e.key==='ArrowLeft'){ go(index-1); restart(); }
        if(e.key==='ArrowRight'){ go(index+1); restart(); }
      });
      const heroEl = document.querySelector('.hero');
      heroEl.addEventListener('mouseenter', ()=>clearInterval(timer));
      heroEl.addEventListener('mouseleave', restart);

      /* Swipe tactile */
      let startX = null;
      heroEl.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; }, {passive:true});
      heroEl.addEventListener('touchend', e=>{
        if(startX === null) return;
        const delta = e.changedTouches[0].clientX - startX;
        if(Math.abs(delta) > 50){ go(delta < 0 ? index+1 : index-1); restart(); }
        startX = null;
      }, {passive:true});

      restart();
    })();

    /* ===================== MENU MOBILE ===================== */
    (function(){
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav');
      burger.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open);
        burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      });
      nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
      }));
    })();

    /* ===================== RÉVÉLATION AU SCROLL ===================== */
    (function(){
      const els = document.querySelectorAll('.reveal');
      if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('visible')); return; }
      const io = new IntersectionObserver(entries=>{
        entries.forEach(en=>{
          if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
        });
      },{threshold:.15});
      els.forEach(e=>io.observe(e));
    })();

    /* ===================== COMPTEURS ===================== */
    (function(){
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const nums = document.querySelectorAll('.stat-num');
      function animate(el){
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimals = (String(el.dataset.count).split('.')[1]||'').length;
        if(reduced){ el.textContent = target.toFixed(decimals).replace('.',',') + suffix; return; }
        const dur = 1400, t0 = performance.now();
        function step(t){
          const p = Math.min((t - t0)/dur, 1);
          el.textContent = (target * (1-Math.pow(1-p,3))).toFixed(decimals).replace('.',',') + suffix;
          if(p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
      const io = new IntersectionObserver(entries=>{
        entries.forEach(en=>{ if(en.isIntersecting){ animate(en.target); io.unobserve(en.target); } });
      },{threshold:.5});
      nums.forEach(n=>io.observe(n));
    })();

    document.getElementById('annee').textContent = new Date().getFullYear();