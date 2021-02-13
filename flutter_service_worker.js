'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2a8de261a84fd7b19a0f4902850266e2",
"manifest.json": "2b02e4c0468d9a868f30867d86a390a4",
"main.dart.js": "277722dc536c3c27bfa66f21c7f4668e",
"icons/Icon-192.png": "b141cd14133b8c0c0549552e721d7ada",
"icons/Icon-512.png": "e9286de1559200a1a8637a69cee8aec8",
"index.html": "77ebc7f81540c567178e08b2e33a6b43",
"/": "77ebc7f81540c567178e08b2e33a6b43",
"assets/NOTICES": "d75713b144acc76214a0ecea6a75ec58",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/AssetManifest.json": "3788faa12b6ceafec7272a17d1ef2764",
"assets/FontManifest.json": "ab9ee27749f78fe939561327fd324e25",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/default.png": "f1d6836d93dc4af94ebe2c76e286f75d",
"assets/assets/images/search.svg": "44b2ff5217efd3059f848d485599bf6e",
"assets/assets/images/header_decoration.png": "a57e817e33a29b996813ec85d29065f0",
"assets/assets/images/app_icon_512.png": "e9286de1559200a1a8637a69cee8aec8",
"assets/assets/images/app_icon_1024.png": "6a8c20de4a3cc3368059348c5ac6ac2b",
"assets/assets/images/welcome.jpg": "03b00aa35bc6a2fbb3d94c55f5f6eb9c",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/assets/free_decks/deck1/image_03.jpg": "055e6e96ec934b93037dc5037f4cdad2",
"assets/assets/free_decks/deck1/image_02.jpg": "f6342d4e8aaa9e3073dbaeb190f89aa7",
"assets/assets/free_decks/deck1/clap.mp3": "a9abeca268b3fe353cc33edb4486339f",
"assets/assets/free_decks/deck1/image_01.png": "11e0115482c2152e0d5d189d05779df0",
"assets/assets/free_decks/deck1/image_04.jpg": "ccb0274837f8afa57d748ebe9cccfab2",
"assets/assets/free_decks/deck1/tile.svg": "ad669fc9f4cdc428f813325764379a1f",
"assets/assets/free_decks/deck2/img9.svg": "bdb54b57e63488cace529a593f2899f0",
"assets/assets/free_decks/deck2/img3.svg": "c0506e5e5b9a3b1b9d5402993c958a07",
"assets/assets/free_decks/deck2/s6.mp3": "695a2c295d66a5ee4daa73ec915f6f33",
"assets/assets/free_decks/deck2/s1.mp3": "cbb325d038dee99500ce012454086530",
"assets/assets/free_decks/deck2/s7.mp3": "ace031783454bc6cd2fa7ec91a54f2fb",
"assets/assets/free_decks/deck2/s10.mp3": "e30cfc9f8ef16c4d63c7bdc64aae507e",
"assets/assets/free_decks/deck2/img7.svg": "16ce4e08317919eeeb46165deac0960b",
"assets/assets/free_decks/deck2/s8.mp3": "241444e3823bf4038068ceec1f910a97",
"assets/assets/free_decks/deck2/s5.mp3": "2e2ca7ed4b66d40a5875adbfcb657815",
"assets/assets/free_decks/deck2/img8.svg": "bdb54b57e63488cace529a593f2899f0",
"assets/assets/free_decks/deck2/img4.svg": "a4f7aecee0e7338b395c43ab9d442107",
"assets/assets/free_decks/deck2/s2.mp3": "fbc6f4a25bf946f2fd87d9fd063a7b72",
"assets/assets/free_decks/deck2/s3.mp3": "2bcdde1cee80c7870d317a9dd52e6f73",
"assets/assets/free_decks/deck2/img10.svg": "80cbb649e526b49762fef55b3bb761e2",
"assets/assets/free_decks/deck2/s4.mp3": "9c03f6cff49de1bc9f50454a86b21d10",
"assets/assets/free_decks/deck2/img2.svg": "80cbb649e526b49762fef55b3bb761e2",
"assets/assets/free_decks/deck2/img1.svg": "79e2e034d5b1d47f76e156decbe11f77",
"assets/assets/free_decks/deck2/img5.svg": "bdb54b57e63488cace529a593f2899f0",
"assets/assets/free_decks/deck2/img6.svg": "75b788b65a7e33ee5f945f4efcb8ce27",
"assets/assets/free_decks/deck2/tile.svg": "ad669fc9f4cdc428f813325764379a1f",
"assets/assets/free_decks/deck2/s9.mp3": "57394622de0d5a9e5c85553e487b967f",
"favicon.png": "1b13060682aa99b79aeba36e971e5f12"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
