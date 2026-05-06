import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [isVisible, setIsVisible] = useState(false); // Modalni ko'rinishi
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Android uchun beforeinstallprompt
  const [platform, setPlatform] = useState(""); // Qurilma platformasi

  useEffect(() => {
    // Qurilma platformasini aniqlash
    if (/iPhone|iPad|iPod/i.test(navigator.platform)) {
      setPlatform("iOS");
    } else {
      setPlatform("Other");
    }

    // Ilova o'rnatilganidan keyin modal qayta chiqmasligi kerak
    const isAppInstalled = localStorage.getItem("isAppInstalled");
    if (isAppInstalled === "true") {
      return; // Modalni qayta ko'rsatma
    }

    // Android qurilmalarda "beforeinstallprompt"ni ushlash
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e); // Promptni saqlash
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Modalni 10 soniyadan keyin ko'rsatish
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 soniya

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = () => {
    // Modalni yopish
    setIsVisible(false);
    localStorage.setItem("isAppInstalled", "true"); // Foydalanuvchi ilovani o'rnatganini saqlash

    // Android qurilmalar uchun yuklab olish promptini ko'rsatish
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Install prompt ko'rsatish
      deferredPrompt.userChoice.then(() => {
        // Foydalanuvchi tanlovi tugadi, hech qanday harakat kerak emas
      });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false); // Modalni yopish
    localStorage.setItem("isAppInstalled", "true"); // Rad etilganda ham qayta chiqmasligi uchun belgilash
  };

  return (
    isVisible && (
      <div
        className="fixed h-full w-full bg-[#0000007d] z-50 flex justify-center items-center"
        style={{ overflow: "hidden" }}
      >
        <div className="bg-white rounded-lg p-5 w-[90%] max-w-[400px] text-center shadow-lg">
          {platform === "iOS" ? (
            // iOS uchun modal
            <>
              <p className="text-lg font-bold mb-4 text-black">
                <span className="block mb-2">
                  Sitedan qulay foydalanish uchun ilovani <b>Home Screen</b> ga
                  qo'shing.
                </span>
                <span className="block">
                  Safari brauzerida "Share" tugmasini bosing va "Add to Home
                  Screen" ni tanlang.
                </span>
              </p>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={handleDismiss}
              >
                Yopish
              </button>
            </>
          ) : (
            // iOSdan boshqa barcha platformalar uchun modal
            <>
              <p className="text-lg font-bold mb-4 text-black">
                Ilovani yuklab oling va undan qulay foydalanishga ega bo'ling!
              </p>
              <div className="flex justify-center items-center gap-4">
                <button
                  className="bg-green-600 text-white py-2 px-4 rounded-lg"
                  onClick={handleInstall}
                >
                  Yuklab olish
                </button>
                <button
                  className="bg-gray-500 hidden text-white py-2 px-4 rounded-lg"
                  onClick={handleDismiss}
                >
                  Rad etish
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default InstallPrompt;
