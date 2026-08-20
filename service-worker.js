const CACHE='dibs4u-reference-v23';
const ASSETS=['./','./index.html','./manifest.json','./cute-music.wav','./sushi-icon-source.png','./sushi-wheel.png','./sushi-winner.png','./sushi-dance.gif','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon-64.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request)));});
