import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/919844466917?text=Hello%20VA%20Interiors%20%26%20Enterprises%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 scale-110 group-hover:scale-125 transition-transform duration-300 animate-ping" />
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-900/40 hover:shadow-green-500/30 transition-all duration-300 group-hover:scale-110">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#161616] border border-[#2A2A2A] text-white text-xs font-poppins py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </div>
    </a>
  );
}
