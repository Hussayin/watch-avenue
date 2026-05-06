export const SendUserToBot = () => {
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe?.user;

  if (!user) return;

  tg.sendData(
    JSON.stringify({
      type: "USER_START",
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        is_premium: user.is_premium,
        photo_url: user.photo_url,
      },
    })
  );
};
