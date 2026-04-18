import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11">
              <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center shadow-lg group-hover:shadow-gold/30 transition-shadow duration-300">
                <span className="font-playfair font-bold text-[#0B0B0B] text-lg leading-none">VA</span>
              </div>
              <div className="absolute inset-0 rounded-full gold-gradient opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="font-playfair font-semibold text-white text-base leading-tight tracking-wide">
                VA Interiors
              </p>
              <p className="font-poppins text-[10px] text-gold tracking-[0.2em] uppercase">
                & Enterprises
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`nav-link font-poppins text-sm font-medium tracking-wide ${
                  currentPage === item.page ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="gold-btn px-5 py-2 rounded font-poppins text-sm font-semibold tracking-wide"
            >
              Get a Quote
            </button>
          </nav>

          <button
            className="md:hidden text-white p-2 transition-colors hover:text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0B0B0B]/98 border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`font-poppins text-base font-medium text-left transition-colors ${
                currentPage === item.page ? 'text-gold' : 'text-white/80 hover:text-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="gold-btn px-5 py-3 rounded font-poppins text-sm font-semibold tracking-wide mt-1"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
