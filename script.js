/* GWALABOY PHLYY — shared interactions */
(function () {
  'use strict';

  /* ---- year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- nav: scrolled state + mobile drawer ---- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      if (nav) nav.classList.toggle('menu-open', open);
      document.body.classList.toggle('menu-lock', open);
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        if (nav) nav.classList.remove('menu-open');
        document.body.classList.remove('menu-lock');
      });
    });
  }

  /* ---- duplicate ticker content for seamless loop ---- */
  var ticker = document.getElementById('ticker');
  if (ticker) ticker.innerHTML += ticker.innerHTML;

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Videos: autoplay (muted, looping) as each tile scrolls into view ---- */
  function loadVid(v) {
    var id = v.getAttribute('data-yt');
    if (!id || v.dataset.loaded) return;
    v.dataset.loaded = '1';
    var f = document.createElement('iframe');
    // muted autoplay is required by browsers; controls stay so the viewer can unmute / go fullscreen
    f.src = 'https://www.youtube.com/embed/' + id +
      '?autoplay=1&mute=1&loop=1&playlist=' + id +
      '&controls=1&rel=0&modestbranding=1&playsinline=1';
    f.title = 'GwalaBoy Phlyy video';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.allowFullscreen = true;
    var keep = v.querySelector('.vid-label');
    v.innerHTML = '';
    v.appendChild(f);
    if (keep) v.appendChild(keep);
  }
  function unloadVid(v) {
    if (!v.dataset.loaded) return;
    delete v.dataset.loaded;
    var id = v.getAttribute('data-yt');
    var label = v.querySelector('.vid-label');
    v.innerHTML =
      '<img loading="lazy" src="https://img.youtube.com/vi/' + id + '/hqdefault.jpg" alt="" />' +
      '<div class="vid-play"><span class="ring"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>';
    if (label) v.appendChild(label);
  }
  var vids = document.querySelectorAll('.vid[data-yt]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (vids.length && 'IntersectionObserver' in window && !reduceMotion) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) loadVid(e.target);
        else unloadVid(e.target);
      });
    }, { threshold: 0.5 });
    vids.forEach(function (v) { vio.observe(v); });
  } else {
    // fallback: click to play
    vids.forEach(function (v) { v.addEventListener('click', function () { loadVid(v); }); });
  }

  /* ---- hero background video (index-video.html) ----
     Inject a muted, looping, chrome-less YouTube embed on desktop.
     Skip on small screens / reduced-motion: the CSS poster image stands in. */
  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    var id = heroVideo.getAttribute('data-yt');
    var small = window.matchMedia('(max-width: 760px)').matches;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (id && !small && !reduce) {
      var f = document.createElement('iframe');
      // playlist=id makes a single video loop; mute=1 required for autoplay
      f.src = 'https://www.youtube.com/embed/' + id +
        '?autoplay=1&mute=1&controls=0&loop=1&playlist=' + id +
        '&modestbranding=1&playsinline=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3';
      f.title = 'GwalaBoy Phlyy';
      f.setAttribute('frameborder', '0');
      f.allow = 'autoplay; encrypted-media';
      f.setAttribute('aria-hidden', 'true');
      f.setAttribute('tabindex', '-1');
      heroVideo.appendChild(f);
    }
  }

  /* ---- store filters (store page) ---- */
  var filterBtns = document.querySelectorAll('.filters button[data-filter]');
  if (filterBtns.length) {
    filterBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var cat = b.getAttribute('data-filter');
        filterBtns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        document.querySelectorAll('.item[data-cat]').forEach(function (it) {
          var show = cat === 'all' || it.getAttribute('data-cat') === cat;
          it.classList.toggle('hide', !show);
        });
      });
    });
  }

  /* ---- mock cart ---- */
  var count = 0;
  var bookLink = document.querySelector('.nav-cta');
  var badge;
  document.querySelectorAll('[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      count++;
      btn.textContent = 'Added ✓';
      btn.classList.add('added');
      setTimeout(function () {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('added');
      }, 1400);
      if (bookLink) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'cart-badge';
          bookLink.appendChild(badge);
        }
        badge.textContent = count;
        badge.classList.add('show');
      }
    });
  });
})();
