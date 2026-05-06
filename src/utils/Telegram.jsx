export const tg = window.Telegram.WebApp;

export const InitTelegram = () => {
  tg.ready();
  tg.expand();
};
