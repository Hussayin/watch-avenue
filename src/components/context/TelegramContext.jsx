// TelegramContext.js
import React, { createContext } from "react";

// Context yaratish
export const TelegramContext = createContext();

// Telegramga yuborish funksiyasi
const sendToTelegram = async (product) => {
  const BOT_TOKEN = "8351701042:AAGQV4yWp6yN-ILgyW0LikvXS9387uKkIU0"; // O'zingizning Telegram bot tokeningizni yozing
  const CHAT_ID = "@userssanathaliuz"; // Telegram chat ID
  const MESSAGE = `
🛒 *Product Info:*
- [Rasmni ko'rish](${product.image})
- *Title:* ${product.aboutProduct}
- *Price:* ${product.price}$
  `;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: MESSAGE,
        parse_mode: "Markdown",
      }),
    });
    console.log("Message sent to Telegram!");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

// Provider yaratish
export const TelegramProvider = ({ children }) => {
  return (
    <TelegramContext.Provider value={{ sendToTelegram }}>
      {children}
    </TelegramContext.Provider>
  );
};
