(function () {
  try {
    var SUPABASE_URL = 'https://xhacoxddmcjwvwwygdsa.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYWNveGRkbWNqd3Z3d3lnZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NjM3ODUsImV4cCI6MjEwMjAzOTc4NX0.G7dbZAyG9hinOU-h3WmsZGeCNd8AfwXY4eN7doSL5qk';

    var sid = null;
    try { sid = sessionStorage.getItem('gh_sid'); } catch (e) {}
    if (!sid) {
      sid = 'v_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
      try { sessionStorage.setItem('gh_sid', sid); } catch (e) {}
    }

    var langAttr = document.documentElement.getAttribute('lang') || 'it';
    var lang = langAttr.split('-')[0];

    var payload = {
      session_id: sid,
      page: location.pathname,
      lang: lang,
      referrer: document.referrer || null,
      device: (window.innerWidth <= 700 ? 'mobile' : 'desktop')
    };

    fetch(SUPABASE_URL + '/rest/v1/site_visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(function () {});
  } catch (e) {
    // Non blocca mai il caricamento della pagina se qualcosa va storto qui.
  }
})();
