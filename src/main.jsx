import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { TelegramProvider } from "./components/context/TelegramContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TelegramProvider>
      <App />
    </TelegramProvider>
  </ThemeProvider>
);

// Service Worker-ni ro'yxatdan o'tkazish
serviceWorkerRegistration.register();
