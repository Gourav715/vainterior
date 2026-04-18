import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/919844466917?text=Hello%20VA%20Interiors%20%26%20Enterprises%2C%20I%20am%20interested%20in%20your%20services.';

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <span className="font-playfair font-bold text-[#0B0B0B] text-base">VA</span>
              </div>
              <div>
                <p className="font-playfair font-semibold text-white text-sm leading-tight">VA Interiors</p>
                <p className="font-poppins text-[9px] text-gold tracking-[0.2em] uppercase">& Enterprises</p>
              </div>
            </div>
            <p className="font-poppins text-sm text-white/50 leading-relaxed">
              Designing premium interiors with elegance. Transforming spaces into timeless experiences across Bengaluru.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {(['home', 'services', 'contact'] as Page[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="font-poppins text-sm text-white/50 hover:text-gold transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9844466917"
                  className="flex items-center gap-3 font-poppins text-sm text-white/50 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold shrink-0" />
                  9844466917
                </a>
              </li>
              <li>
                <a
                  href="tel:8296844337"
                  className="flex items-center gap-3 font-poppins text-sm text-white/50 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold shrink-0" />
                  8296844337
                </a>
              </li>
              <li>
                <a
                  href="mailto:vainteriors3795@gmail.com"
                  className="flex items-center gap-3 font-poppins text-sm text-white/50 hover:text-gold transition-colors break-all"
                >
                  <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                  vainteriors3795@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Our Location</h4>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-gold shrink-0 mt-1" />
              <p className="font-poppins text-sm text-white/50 leading-relaxed">
                No-75, 10th Cross, Vidyamaya Nagar,<br />
                Main Road, Andrahalli,<br />
                Bengaluru - 560091
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 gold-border-btn px-4 py-2 rounded font-poppins text-xs font-medium tracking-wide"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-white/30 text-center sm:text-left">
            © 2024 VA Interiors & Enterprises. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-white/30">
            Proprietor: <span className="text-gold/60">Aravind Reddy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
