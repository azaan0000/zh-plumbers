/* ZH Plumbers - modern UI layer: scroll reveal, stat count-up, back-to-top */
(function () {
  /* scroll reveal */
  var els = document.querySelectorAll('.svc-box,.area-card,.stat-box,.faq-item,.review-card');
  els.forEach(function (e) {
    if (e.classList.contains('fade-in')) return;
    e.classList.add('zh-reveal');
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('zh-on'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.zh-reveal').forEach(function (e) { io.observe(e); });
  } else {
    document.querySelectorAll('.zh-reveal').forEach(function (e) { e.classList.add('zh-on'); });
  }

  /* stat count-up */
  function countUp(el) {
    var m = el.textContent.match(/^([0-9]+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1], 10), suffix = m[2], t0 = null, dur = 1200;
    if (target === 0) return;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); so.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stat-num').forEach(function (e) { so.observe(e); });
  }

  /* back-to-top */
  var b = document.createElement('button');
  b.className = 'zh-top';
  b.innerHTML = '\u2191';
  b.setAttribute('aria-label', 'Back to top');
  b.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(b);
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) b.classList.add('zh-show'); else b.classList.remove('zh-show');
  }, { passive: true });
})();
