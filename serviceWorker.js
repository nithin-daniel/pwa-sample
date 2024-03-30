// const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "coffe.jpg",
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561395663-385e657f72bc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(my-cache).then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })

// // self.addEventListener("fetch", fetchEvent => {
// //   fetchEvent.respondWith(
// //     caches.match(fetchEvent.request).then(res => {
// //       return res || fetch(fetchEvent.request)
// //     })
// //   )
// // })

// // self.addEventListener("fetch", fetchEvent => {
// //   fetchEvent.respondWith(
// //     caches.open('my-cache').then(cache => {
// //       return cache.match(fetchEvent.request).then(cachedResponse => {
// //         const fetchPromise = fetch(fetchEvent.request).then(networkResponse => {
// //           cache.put(fetchEvent.request, networkResponse.clone()); // Update the cache with the new response
// //           return networkResponse;
// //         }).catch(error => {
// //           // Handle fetch errors, e.g., offline fallback
// //           console.error('Fetch error:', error);
// //         });

// //         return cachedResponse || fetchPromise;
// //       });
// //     })
// //   );
// // });

// // self.addEventListener("fetch", function(event) {
// //   console.log(event.request.url);
// //   event.respondWith(
// //     caches.match(event.request).then(function(response) {
// //       return response || fetch(event.request)
// //     })
// //   )
// // })

// // self.addEventListener("fetch", function(event) {
// //   event.respondWith(
// //     caches.match(event.request).then(function(response) {
// //       // If a cached response exists, return it
// //       if (response) {
// //         return response;
// //       }

// //       // Otherwise, fetch the resource from the network
// //       return fetch(event.request).then(function(networkResponse) {
// //         // Cache the fetched response for future use
// //         caches.open("my-cache").then(function(cache) {
// //           cache.put(event.request, networkResponse.clone());
// //         });

// //         return networkResponse;
// //       });
// //     })
// //   );
// // });


// async function cacheThenNetwork(request) {
//   const cachedResponse = await caches.match(my-cache);
//   if (cachedResponse) {
//     console.log("Found response in cache:", cachedResponse);
//     return cachedResponse;
//   }
//   console.log("Falling back to network");
//   return fetch(request);
// }

// self.addEventListener("fetch", (event) => {
//   console.log(`Handling fetch event for ${event.request.url}`);
//   event.respondWith(cacheThenNetwork(event.request));
// });




self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("sw-cache").then(function(cache) {
      console.log(cache);
      return cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
})