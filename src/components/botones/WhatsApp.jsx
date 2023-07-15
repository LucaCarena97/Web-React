import { IoLogoWhatsapp } from "react-icons/io";

export function WhatsApp() {
  const handleWhatsappClick = () => {
    window.location.href = "whatsapp://send?phone=+5493584013902";
  };

  return (
    <>
      <button
        className="bg-green-500 border-green-600 border-2 text-white py-2 px-2 rounded text-2xl hover:bg-green-600 "
        onClick={handleWhatsappClick}
      >
        <a
          href="whatsapp://send?phone=+5491234567890"
          className="whatsapp-icon"
        >
          <IoLogoWhatsapp />
        </a>
      </button>
    </>
  );
}
