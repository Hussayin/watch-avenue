export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/service-worker.js",
          {
            scope: "/",
          }
        );

        console.log(
          "✅ Service Worker registered with scope:",
          registration.scope
        );

        // Yangi versiya mavjud bo‘lsa, uni avtomatik yuklash
        if (registration.waiting) {
          updateServiceWorker(registration);
        }

        // Har qanday yangilanishni kuzatish
        registration.addEventListener("updatefound", () => {
          console.log("🔄 Yangi Service Worker topildi...");
          const newWorker = registration.installing;

          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                console.log("✨ Yangi versiya tayyor. Yangilash...");
                updateServiceWorker(registration);
              }
            });
          }
        });
      } catch (error) {
        console.error("❌ Service Worker registration failed:", error);
      }
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister().then(() => {
          console.log("🚫 Service Worker o‘chirildi.");
        });
      })
      .catch((error) => {
        console.error("❌ Service Worker unregistration failed:", error);
      });
  }
}

// Service Worker yangilanishini majburan ishga tushirish
function updateServiceWorker(registration) {
  registration.waiting.postMessage({ type: "SKIP_WAITING" });

  registration.waiting.addEventListener("statechange", (event) => {
    if (event.target.state === "activated") {
      console.log("⚡ Yangi Service Worker aktiv bo‘ldi. Sahifani yangilang!");
      window.location.reload(); // Sahifani yangilash
    }
  });
}
