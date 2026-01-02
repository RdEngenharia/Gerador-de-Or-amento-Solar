const CACHE_NAME = 'solar-cache-v1';
const ASSETS = [
  '/Gerador-de-Or-amento-Solar/',
  '/Gerador-de-Or-amento-Solar/index.html',
  '/Gerador-de-Or-amento-Solar/manifest.json',
  // O Vite vai gerar arquivos com nomes diferentes, 
  // o service worker tentará pegar o essencial.
];

// Instala e salva os arquivos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Responde do cache se estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
