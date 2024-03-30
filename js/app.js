const container = document.querySelector(".container")
const coffees = [
  { name: "Nithin", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Voluptatem", image: "https://images.unsplash.com/photo-1561395663-385e657f72bc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Explicabo", image: "https://images.unsplash.com/photo-1521677633993-721dd3f95c10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Rchitecto", image: "https://images.unsplash.com/photo-1571867424485-ca624c51c157?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: " Beatae", image: "https://plus.unsplash.com/premium_photo-1683141205809-e8007422591a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: " Vitae", image: "https://images.unsplash.com/photo-1558909552-8fcf7c94b575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Inventore", image: "https://plus.unsplash.com/premium_photo-1661391536771-f18becd9f76e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Veritatis", image: "https://images.unsplash.com/photo-1517789807669-59c1043388b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Accusantium", image: "https://images.unsplash.com/photo-1520014380140-c48c62c3ac38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then(res => console.log("service worker registered")
//       )
//       .catch(err => console.log("service worker not registered", err))
//   })
// }



if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
};




// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//       navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then(registration => {
//           console.log("Service worker registered");
  
//           // Check if there is an update available for the service worker
//           registration.addEventListener("updatefound", () => {
//             const newWorker = registration.installing;
//             newWorker.addEventListener("statechange", () => {
//               if (newWorker.state === "installed") {
//                 if (navigator.serviceWorker.controller) {
//                   // A new version of the service worker is installed and activated
//                   console.log("New service worker installed and activated. Updating cache.");
  
//                   // Perform cache update logic here
//                   newWorker.postMessage({ action: "skipWaiting" });
//                 } else {
//                   // No service worker is controlling the page yet
//                   console.log("No service worker controlling the page.");
//                 }
//               }
//             });
//           });
//         })
//         .catch(err => console.log("Service worker registration failed:", err));
//     });
//   }
  