let CACHE_NAME = "michael";
let urlsToCache = ["/", "/about", "/projects", "/contact"];

self.addEventListener("install", event => {
  // *perform install steps

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("open cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// *Cache  and return requests

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

event.respondWith(
  caches.match(event.request).then(function(response) {
    //* Cache hit -return response
    if (response) {
      return response;
    }
    return fetch(event.request);
  })
);

//* Update a service worker

self.addEventListener("activate", event => {
  let cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
