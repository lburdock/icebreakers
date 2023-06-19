const cacheName = "IcebreakersCache";

const GH_PATH = "/icebreakers";
const cacheFiles = [
  `${GH_PATH}/`,
  `${GH_PATH}/index.html`,
  `${GH_PATH}/manifest.json`,
  `${GH_PATH}/css/reset.css`,
  `${GH_PATH}/css/styles.css`,
  `${GH_PATH}/js/icebreakers.js`,
  `${GH_PATH}/js/main.js`,
  `${GH_PATH}/js/shuffle.js`,
];
const VERSION = "version_00";

// Cache all the files to make a PWA
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      // Our application only has two files here index.html and manifest.json
      // but you can add more such as style.css as your app grows
      return cache.addAll(cacheFiles);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
