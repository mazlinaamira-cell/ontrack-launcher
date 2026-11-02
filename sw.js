// Cache hanya halaman pelancar awam, bukan dashboard atau data staf.
const CACHE='ontrack-launcher-v1';
const ASSETS=['./','./index.html','./config.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',event=>{const req=event.request;const url=new URL(req.url);if(req.method!=='GET'||url.origin!==self.location.origin)return;event.respondWith(fetch(req).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(cache=>cache.put(req,c))}return res}).catch(()=>caches.match(req)))});
