export function WhatsApp() {
  const handleWhatsappClick = () => {
    window.location.href = "whatsapp://send?phone=+5493584013902";
  };

  return (
    <button
      className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600 "
      onClick={handleWhatsappClick}
    >
      Enviar WhatsApp
    </button>
  );
}
