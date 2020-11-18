importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');


if (workbox) {
  console.log(`Workbox berhasil dimuat`);

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/index.html', revision: '1'},
    { url: '/manifest.json', revision: '1'},
    { url: '/index.js', revision: '1'},
  ]);

  workbox.routing.registerRoute(
    new RegExp('.min.css'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'min.css',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('.min.js'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'min.js',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('api.football-data.org'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'api.football-data.org',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('fonts.googleapis.com'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'fonts.googleapis.com',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('fonts.googleapis.com'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'fonts.googleapis.com',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('fonts.gstatic.com'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'fonts.gstatic.com',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('font-awesome'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'font-awesome',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );


  /*
  workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/4.7.0\/css\/font-awesome\.min\.css/,
    workbox.strategies.cacheFirst({
      cacheName: 'font-awesome-v4.7.0',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/3.5.1\/jquery\.min\.js/,
    workbox.strategies.cacheFirst({
      cacheName: 'jquery-v3.5.1',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/api.football-data.org\/v2/,
    workbox.strategies.cacheFirst({
      cacheName: 'api-football',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/materialize\/1.0.0\/css\/materialize.min.css/,
    workbox.strategies.cacheFirst({
      cacheName: 'materialize.min.css',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts.googleapis.com\/icon?family=Material+Icons/,
    workbox.strategies.cacheFirst({
      cacheName: 'material-icons',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize\/1.0.0\/js\/materialize.min.js/,
    workbox.strategies.cacheFirst({
      cacheName: 'materialize.min.js',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts.gstatic.com\/s\/materialicons\/v67\/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2/,
    workbox.strategies.cacheFirst({
      cacheName: 'materialicons.woff2',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/4.7.0\/fonts\/fontawesome-webfont.woff2?v=4.7.0/,
    workbox.strategies.cacheFirst({
      cacheName: 'font-awesome.woff2',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/4.7.0\/fonts\/fontawesome-webfont.woff2?v=4.7.0/,
    workbox.strategies.cacheFirst({
      cacheName: 'font-awesome.woff2',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/4.7.0\/fonts\/fontawesome-webfont.woff?v=4.7.0/,
    workbox.strategies.cacheFirst({
      cacheName: 'font-awesome.woff',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/4.7.0\/fonts\/fontawesome-webfont.ttf?v=4.7.0/,
    workbox.strategies.cacheFirst({
      cacheName: 'font-awesome.ttf',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );*/

  workbox.routing.registerRoute(
    new RegExp('/pages/'),  
    workbox.strategies.staleWhileRevalidate({
      networkTimeoutSeconds: 3,     // 3 detik
      cacheName: 'pages',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/css/'),  
    workbox.strategies.staleWhileRevalidate({
      networkTimeoutSeconds: 3,     // 3 detik
      cacheName: 'css',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/js/'),  
    workbox.strategies.staleWhileRevalidate({
      networkTimeoutSeconds: 3,     // 3 detik
      cacheName: 'js',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/img/'),  
    workbox.strategies.staleWhileRevalidate({
      networkTimeoutSeconds: 3,     // 3 detik
      cacheName: 'images',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

}else {
    console.log(`Workbox gagal dimuat`);
    

}


const CACHE_NAME = "RumahBola-v1";

const urlsToCache = [

    // root folder
    "/",
    "/nav.html",
    "/index.html",
    "/index.js",
    "/manifest.json",
    "/push.js",
    
    //assets/img/
    "/assets/img/logo.jpg",
    "/assets/img/logo.png",
    "/assets/img/my-picture.png",
    "/assets/img/user.png",
    "/assets/img/LaLiga.png",
    "/assets/img/EPL.png",
    "/assets/img/bell.png",
    // /css
    "/css/custom.css",
    // /js
    "/js/api.js",
    "/js/navigation.js",
    "/js/regSW.js",
    "/js/db.js",
    "/js/idb.js",
    "/js/fav.js",
    
    // /pages
    "/pages/epl-team.html",
    "/pages/laliga-team.html",
    "/pages/favorites.html",

    // online reference
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
    
   
    
];

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then( (cache) => {
        return cache.addAll(urlsToCache);
      })
    );
});


self.addEventListener("fetch", (event) => {
    const base_url = "https://api.football-data.org";
    if (event.request.url.indexOf(base_url) > -1) {
      event.respondWith(
        caches.open(CACHE_NAME).then( (cache) => {
          return fetch(event.request).then( (response) => {
            cache.put(event.request.url, response.clone());
            return response;
          })
        })
      );
    } else {
      event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((response) => {
          return response || fetch (event.request);
        })
      )
    }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then( (cacheNames) => {
      return Promise.all(
        cacheNames.map( (cacheName) => {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', (event) => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body: body,
    icon: '/assets/img/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
}); 