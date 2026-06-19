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
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
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

  /* ---- YouTube facade: click thumbnail -> load iframe ---- */
  document.querySelectorAll('.vid[data-yt]').forEach(function (v) {
    v.addEventListener('click', function () {
      var id = v.getAttribute('data-yt');
      if (!id || v.dataset.loaded) return;
      v.dataset.loaded = '1';
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = 'GwalaBoy Phlyy video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      v.innerHTML = '';
      v.appendChild(f);
    });
  });

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
