/* Store links open the store APP on a phone (Boss TG 42054, 2026-11-17).
   The HTML keeps the plain https href (no JS, crawlers, desktop, copy link). On a CLICK, on a phone only, the href is
   swapped for the store-app form for that one navigation, then put back:
   - Android (Chrome, Samsung Internet, Firefox, ...): an intent:// URL that targets the Play app (com.android.vending);
     S.browser_fallback_url is the original https URL, so if the Play app cannot take it the browser goes to the web page.
   - iPhone / iPad: apps.apple.com -> itms-apps:// (opens the App Store app). testflight.apple.com stays https
     (iOS hands those universal links to the TestFlight app when it is installed, otherwise the web page opens).
   - Desktop, in-app browsers (Facebook, Instagram, WebView, ...): untouched, the https href works as before. */
(function () {
  var ua = navigator.userAgent || '';
  var android = /Android/i.test(ua);
  var ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!android && !ios) return;
  // in-app browsers: intent:// is not reliably handled there, keep the https link
  var inApp = /; wv\)|FBAN|FBAV|FB_IAB|Instagram|Messenger|Line\/|MicroMessenger|Snapchat|TikTok|musical_ly|Pinterest/i.test(ua);

  function ujCel(href) {
    var u;
    try { u = new URL(href, location.href); } catch (e) { return null; }
    if (u.protocol !== 'https:') return null;
    if (android && !inApp && u.hostname === 'play.google.com') {
      var fb = 'S.browser_fallback_url=' + encodeURIComponent(u.href) + ';end';
      var id = u.searchParams.get('id');
      if (u.pathname === '/store/apps/details' && id && /^[A-Za-z0-9._]+$/.test(id)) {
        // the store page of a public app
        return 'intent://details?id=' + id + '#Intent;scheme=market;package=com.android.vending;' + fb;
      }
      // anything else on Play (e.g. /apps/testing/<package>, the public-test opt-in page): the same address, handed to the Play app
      return 'intent://' + u.host + u.pathname + u.search + '#Intent;scheme=https;package=com.android.vending;' + fb;
    }
    if (ios && u.hostname === 'apps.apple.com') {
      return 'itms-apps://' + u.host + u.pathname + u.search + u.hash;
    }
    return null;   // testflight.apple.com and everything else: unchanged
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var orig = a.getAttribute('href');
    var cel = ujCel(orig);
    if (!cel) return;
    a.setAttribute('href', cel);
    setTimeout(function () { a.setAttribute('href', orig); }, 0);
  }, true);
})();
