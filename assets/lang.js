/* ZH Plumbers — language framework (English / Urdu / Arabic). Dictionaries: dict-a/b/c.js */
(function () {
  var SRC = 'src';
  var T = window.ZH_T || {};

  function getLang() {
    try { return localStorage.getItem('zhlang') || 'en'; } catch (e) { return 'en'; }
  }

  function tr(s, lang) {
    var e = T[s];
    if (!e) return null;
    return e[lang] || null;
  }

  window.zhT = function (s) {
    var lang = getLang();
    if (lang === SRC) return s;
    return tr(s, lang) || s;
  };

  var origMap = new WeakMap();

  function applyLang(lang) {
    var rtl = (lang === 'ur' || lang === 'ar');
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang === SRC ? 'en' : lang);
    if (rtl && !document.getElementById('zh-arabic-font')) {
      var l = document.createElement('link');
      l.id = 'zh-arabic-font';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap';
      document.head.appendChild(l);
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var key = n.nodeValue.trim();
      if (!origMap.has(n)) {
        if (T[key]) origMap.set(n, n.nodeValue);
        else return;
      }
      if (lang === SRC) { n.nodeValue = origMap.get(n); return; }
      var v = tr(key, lang);
      if (v) {
        var orig = origMap.get(n);
        var lead = orig.match(/^\s*/)[0], tail = orig.match(/\s*$/)[0];
        n.nodeValue = lead + v + tail;
      }
    });
    document.querySelectorAll('[placeholder],[title]').forEach(function (el) {
      ['placeholder', 'title'].forEach(function (attr) {
        var val = el.getAttribute(attr);
        if (!val) return;
        var key = val.trim();
        if (!origMap.has(el)) {
          if (T[key]) origMap.set(el, el.getAttribute(attr));
          else return;
        }
        if (lang === SRC) { el.setAttribute(attr, origMap.get(el)); return; }
        var v = tr(key, lang);
        if (v) el.setAttribute(attr, v);
      });
    });
  }

  function setLang(lang) {
    try { localStorage.setItem('zhlang', lang); } catch (e) {}
    applyLang(lang);
    document.querySelectorAll('.zh-lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.style.background = on ? '#38bdf8' : 'rgba(30,41,59,.9)';
      b.style.color = on ? '#0c2434' : '#cbd5e1';
    });
  }
  window.zhSetLang = setLang;

  function initSwitcher() {
    var current = getLang();
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;bottom:14px;left:14px;z-index:9990;display:flex;gap:6px;padding:5px;background:rgba(15,23,42,.75);border:1px solid #334155;border-radius:30px;backdrop-filter:blur(6px)';
    var opts = [['src', 'Roman Urdu'], ['en', 'English'], ['ur', 'اردو'], ['ar', 'عربي']];
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.className = 'zh-lang-btn';
      b.setAttribute('data-lang', o[0]);
      b.textContent = o[1];
      b.style.cssText = 'border:none;padding:6px 12px;border-radius:20px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:rgba(30,41,59,.9);color:#cbd5e1';
      b.onclick = function () { setLang(o[0]); };
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
    setLang(current);
  }

  function boot() {
    var saved = getLang();
    var nav = (navigator.language || 'en').slice(0, 2);
    initSwitcher();
    if (saved === SRC && nav === 'ar') setLang('ar');
    else if (saved === SRC && nav === 'ur') setLang('ur');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
