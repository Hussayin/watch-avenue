import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
import ScrollManager from "./ScrollManager";

import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz
import Eron from "../comps/Eron";
import Turkiya from "../comps/Turkiya";
import AllCarpets from "../comps/AllCarpets";

import { useEffect } from "react";
import { InitTelegram } from "../../utils/Telegram";
import { SendUserToBot } from "../../utils/SendUser";

const App = () => {
  useEffect(() => {
    InitTelegram();
    SendUserToBot();
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/allCarpets" element={<AllCarpets />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
