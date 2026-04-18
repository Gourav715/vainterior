import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] font-poppins">
      <Header currentPage={currentPage} onNavigate={navigate} />

      <main className="pt-20">
        {currentPage === 'home' && <Home onNavigate={navigate} />}
        {currentPage === 'services' && <Services onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
