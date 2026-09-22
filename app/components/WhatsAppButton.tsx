import { MessageCircle } from "lucide-react";

const whatsappNumber = "919080044019";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "Hi NN Digi Solutions, I would like to know more about your digital services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NN Digi Solutions on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={26} />
    </a>
  );
}