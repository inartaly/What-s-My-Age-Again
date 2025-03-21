const cacheName = 'pwa-age-app-v1';
const filesToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './materialize.css',
  './materialize.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
