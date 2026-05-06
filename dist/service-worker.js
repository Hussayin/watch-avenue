const CACHE_NAME = "pwa-cache-v3"; // Har deployda versiyani oshirishni unutmang
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/index.js",
  "/assets/index.css",
];

// Service Worker o‘rnatish va keshni yaratish
self.addEventListener("install", (event) => {
  console.log("🛠 Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Yangi versiyani darhol ishga tushirish
});

// Service Worker faollashganda eski keshlarni o‘chirish
self.addEventListener("activate", (event) => {
  console.log("🚀 Service Worker activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🗑 Eski kesh o‘chirildi: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Yangi versiyani hamma foydalanuvchilarga majburan yuklash
});

// Tarmoqdan yoki keshdan ma’lumot olish
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return; // Faqat GET so‘rovlarini keshlash

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response; // Xatolik bo‘lsa yoki server javobi noto‘g‘ri bo‘lsa, shunchaki qaytarish
        }

        // Javobni keshga qo‘shish
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Tarmoqda muammo bo‘lsa, keshdan olish
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match("/index.html"); // Agar yo‘q bo‘lsa, asosiy sahifani qaytarish
        });
      })
  );
});

// Yangi versiyani darhol ishga tushirish
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
