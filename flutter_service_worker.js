'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bf935c13a85921e9a3a3c3b00b698a36",
"version.json": "e30dcb8a0b20339c5ad0b0e2104df5f1",
"index.html": "c1bf82bfd3d0951e037b3ff3bdb3ddef",
"/": "c1bf82bfd3d0951e037b3ff3bdb3ddef",
"main.dart.js": "1a011307261a15c619407ddba4d1d1b6",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "56658eef1b83a20ef91da119dc62cede",
"icons/Icon-192.png": "56658eef1b83a20ef91da119dc62cede",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b486d2f3205abb31b0b3b8d3b06b683c",
"assets/AssetManifest.json": "6b75ea73353b86b74de2652d66953f51",
"assets/NOTICES": "d30c18c3a5ff8d657ecc5f0b0b1461f3",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/AssetManifest.bin.json": "3c17539faff1e9820ae708b902917fb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c1ecb88cda8384f7d5e41b732d669a7e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "71f2dc6635e5c6d8e256d94adf0c01ee",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "050c12d359b2ddec2aba62ecb5f618ae",
"assets/fonts/MaterialIcons-Regular.otf": "5da91c54e3643e512f0870f671cc9769",
"assets/assets/images/app_icon.png": "d95e1c8a471f004967271ccd5f602b69",
"assets/assets/images/logo_management.png": "9bcec4c4d0a30ed16f6f73864642378c",
"assets/assets/images/logo.png": "a22559c5f3b660345743b860645d1052",
"assets/assets/images/board.png": "b4fe663e6e0c17115b4e5af8aef69b39",
"assets/assets/images/logo_closed.png": "7702b192786deae9ac610857d87962d3",
"assets/assets/icons/email.png": "0fe95de8d4c1a6a54b2bfe247ce92c6e",
"assets/assets/icons/forum.png": "823f4fbb88374dc18dd399a8c4092d91",
"assets/assets/icons/paid.png": "43b4dae7dda4e338105bc0868a74fb86",
"assets/assets/icons/school.png": "9807b9f8e3043a39e5dcf90294eadced",
"assets/assets/icons/pie_chart.png": "345d4b03bd6cd9973369a8340e4005ac",
"assets/assets/icons/settings.png": "e73019533fc500fceea7b6aee0eb82ea",
"assets/assets/icons/apartment.png": "fb3e2708540790134a22aa22103533dc",
"assets/assets/icons/lock.png": "8107200a107a34d04b2ee86992ef3629",
"assets/assets/icons/database.png": "b337cb8189c663e36b3b1e07f9abc6cb",
"assets/assets/icons/logout.png": "e03d36a53e6330eecfa838075bbd2bc5",
"assets/assets/icons/home.png": "9da603308f584977041b59484b3e90e0",
"assets/assets/icons/user_settings.png": "0ce835cacc8d77efe5c29e1de15dab42",
"assets/assets/icons/add_notes.png": "907e4f96cf3ed9c98fc80834d5571437",
"assets/assets/icons/school_2.png": "0b221e0593f6a3b1c750f700117478af",
"assets/assets/icons/format_shapes.png": "74df7df25835c05bd490187dd7605f5f",
"assets/assets/icons/description.png": "c24f5930a7edb6e5bcd6e6254972f161",
"assets/assets/icons/schedule.png": "5e840837351a424dacaee15e555a6682",
"assets/assets/icons/user_plus.png": "c80bbf8315eb2adcb78a361a0e4192c4",
"assets/assets/icons/menu_left.png": "eaeedcf886da702d568f897fc6709db8",
"assets/assets/icons/meeting_room.png": "c6329d74e3165be43161a5effce7b3b4",
"assets/assets/icons/extension.png": "bfa45b2e3e4abc0f67bf1958834063cd",
"assets/assets/icons/menu_right.png": "f718a4013ebd28355c973edb1959891d",
"assets/assets/icons/manage_history.png": "e709ca5e6515ee5daf6f50984b0adfd8",
"assets/assets/icons/bookmarks.png": "6f53eaf99634eae2cec54e9c1ce62d63",
"assets/assets/icons/chevron_up_down.png": "17f95c76d3504768bd5b45a980097db8",
"assets/assets/icons/design_services.png": "108cdac8bdd56962376a8a6e487e2392",
"assets/assets/icons/ion_help-buoy-sharp.png": "bfb1a6bcdb92a8eefbea3455607d3fa9",
"assets/assets/icons/mic.png": "62d66ba6e3ad955165dec689be18c8ee",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
