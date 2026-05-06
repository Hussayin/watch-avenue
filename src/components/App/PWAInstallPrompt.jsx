import { useEffect, useState } from "react";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 text-black left-1/2 transform -translate-x-1/2 bg-white p-3 shadow-md rounded-lg">
      <p>Saytni ilova sifatida o‘rnatib, qulay foydalaning!</p>
      <button
        onClick={installPWA}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        O‘rnatish
      </button>
    </div>
  );
};

export default PWAInstallPrompt;
