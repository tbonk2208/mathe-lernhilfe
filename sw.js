/* Service Worker der Mathe-Lernhilfe: alle Dateien werden beim Installieren gespeichert, danach läuft die App ohne Internet. */
const VERSION = 'mathe-95556600925b';
const FILES = ["./", "fonts/BricolageGrotesque.woff", "fonts/STIXTwoText-Italic.woff", "fonts/STIXTwoText.woff", "fonts/SourceSans3-Italic.woff", "fonts/SourceSans3.woff", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "index.html", "manifest.webmanifest"];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, {cache:'reload'}))))); });   /* am HTTP-Cache vorbei, damit Updates vollständig sind */
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('mathe-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate'){ e.respondWith(caches.match('./', {cacheName:VERSION}).then(r => r || fetch(req))); return; }
  e.respondWith(caches.match(req, {cacheName:VERSION, ignoreSearch:true}).then(r => r || fetch(req)));
});
