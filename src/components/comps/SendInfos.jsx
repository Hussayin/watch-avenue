import React, { useState } from "react";
import { FaUser, FaPhone, FaRulerCombined, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";

const BOT_TOKEN = "8128907679:AAEKOkEbUmqCGKPjctvTSZPHFszQT26RRWs";
const CHAT_ID = "@carpetClientUz";

const ten = 11;

const SendInfos = () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendToTelegram = async () => {
    if (!name || !area || !phone) {
      toast.error("Majburiy maydonlar to‘ldirilmagan");
      return;
    }

    if (+area <= 69) {
      toast.error("Gilam hajmi 70 kv.m dan katta bo‘lishi shart");
      return;
    }

    setLoading(true);

    const text = `
🧾 *Yangi buyurtma*
👤 Ism: ${name}
📐 Maydon: ${area} kv.m
📞 Telefon: ${phone}
`;

    try {
      if (image) {
        const formData = new FormData();
        formData.append("chat_id", CHAT_ID);
        formData.append("caption", text);
        formData.append("parse_mode", "Markdown");
        formData.append("photo", image);

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
          method: "POST",
          body: formData,
        });
      } else {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        });
      }

      toast.success("Ma’lumot yuborildi ✅");

      setName("");
      setArea("");
      setPhone("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      toast.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="signup"
      className=" w-full flex justify-center items-center mt-[40px]  h-[750px] mb-[50px]  p-4 "
    >
      <div className="max-w-md mx-auto bg-[#0B0F1A] rounded-2xl px-[10px] py-[35px] shadow">
        <h2 className="text-center  text-[22px] leading-6 font-bold mb-4 font-cormorant ">
          Shaxsan Maruf akadan gilam harid qilish uchun malumot qoldring
        </h2>

        {/* NAME */}
        <label className="text-sm font-medium">
          Ism familiya <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center border rounded-lg p-3 mb-3">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            className="w-full outline-none bg-[#101625] p-[5px] "
            placeholder="Ism familiyangiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* AREA */}
        <label className="text-sm font-medium">
          Gilam hajmi (kv.m) <span className="text-red-600">*</span>
        </label>
        <p className="text-xs text-gray-500 mb-1">
          Eslatma: 70 kv.m dan katta bo‘lishi shart
        </p>
        <div className="flex items-center border rounded-lg p-3 mb-3">
          <FaRulerCombined className="text-gray-400 mr-2" />
          <input
            type="tel"
            className="w-full outline-none bg-[#101625] p-[5px] "
            placeholder="Masalan: 80"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        {/* PHONE */}
        <label className="text-sm font-medium">
          Telefon raqam <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center border rounded-lg p-3 mb-3">
          <FaPhone className="text-gray-400 mr-2" />
          <input
            type="tel"
            className="w-full outline-none bg-[#101625] p-[5px] "
            placeholder="+998 xx xxx xx xx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* IMAGE */}
        <label className="text-sm font-medium">
          Rasmingizni yuklang sizni tanishmiz uchun{" "}
          <span className="text-gray-400">(ixtiyoriy)</span>
        </label>

        <label className="border-dashed border-2 rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer mb-3">
          <FaImage className="text-3xl text-gray-400 mb-1" />
          <span className="text-sm text-gray-500">Rasm tanlash</span>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              setPreview(URL.createObjectURL(file));
            }}
          />
        </label>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
        )}

        {/* BUTTON */}
        <button
          onClick={sendToTelegram}
          disabled={loading}
          className="w-full bg-[#ffc822] text-black py-3 rounded-xl font-semibold active:scale-95 transition"
        >
          {loading ? "Yuborilmoqda..." : "Yuborish"}
        </button>
      </div>
    </div>
  );
};

export default SendInfos;
