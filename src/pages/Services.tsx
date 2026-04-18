import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    title: 'Interior Design Services',
    description: 'Comprehensive interior design solutions tailored to your lifestyle. From concept to completion, we craft spaces that reflect elegance and functionality.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Modular Kitchen',
    description: 'Premium modular kitchens in WPC, uPVC, Aluminum, Wood, and Glass. Smart storage solutions combined with exquisite aesthetics for your culinary space.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Living Room Design',
    description: 'Transform your living room into a sophisticated social space. We create harmonious layouts with premium furnishings and bespoke décor elements.',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Kids Room Design',
    description: 'Imaginative and safe spaces designed to inspire young minds. Vibrant, functional, and crafted with child-safe premium materials.',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Pooja Room Design',
    description: 'Serene and sacred spaces designed with spiritual sensitivity. Intricate woodwork, elegant finishes, and devotional ambiance crafted to perfection.',
    image: 'https://i.pinimg.com/1200x/a2/16/3e/a2163eb3f59fc493dfdb9ccbcaacaf84.jpg',
  },
  {
    title: 'Master Bedroom Design',
    description: 'Luxurious master bedrooms that redefine rest and relaxation. Premium wardrobes, bespoke furniture, and thoughtful lighting for ultimate comfort.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Balcony Design',
    description: 'Turn your balcony into an outdoor retreat. Weather-resistant materials, vertical gardens, and elegant furniture for your private open-air space.',
    image: 'https://i.pinimg.com/1200x/1e/13/c1/1e13c1b07a7eb06fa2fca534eaa8b729.jpg',
  },
  {
    title: 'Exterior Design & Execution',
    description: 'Elevate your property\'s curb appeal with premium exterior design. From façade treatments to landscaping, we create stunning first impressions.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'False Ceiling',
    description: 'Architectural ceiling solutions in Gypsum, Glass, and WPC. Custom lighting integration, decorative patterns, and acoustic engineering for every space.',
    image: 'https://i.pinimg.com/736x/7d/09/10/7d0910ad548b7cc3b9b50a37235c07e2.jpg',
  },

  {
  title: 'Commercial Buildings',
  description: 'Modern and efficient commercial spaces designed to enhance productivity and brand presence. We deliver smart layouts, premium finishes, and scalable solutions for offices and business hubs.',
  image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800',
},
{
  title: 'Salons & Restaurants',
  description: 'Stylish and functional salon and restaurant interiors crafted to elevate customer experience. From ambiance lighting to seating layouts, we design spaces that attract and retain customers.',
  image: 'https://cdna.artstation.com/p/assets/images/images/038/191/928/large/rashed-abdullah-12.jpg?1622446368',
},
{
  title: 'Shopping Malls',
  description: 'Large-scale retail environments designed for impact and flow. We create visually engaging mall interiors with optimized layouts, lighting, and aesthetics to enhance shopper experience.',
  image: 'https://i.pinimg.com/736x/e4/84/ce/e484cef23921b78a5e02823a8b3131a5.jpg',
},

];

export default function Services({ onNavigate }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.scroll-animate').forEach((t) => observer.observe(t));
    }
    return () => observer.disconnect();
  }, []);

  const handleContact = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef}>
      <section className="relative h-80 sm:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-14">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-3">What We Offer</p>
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-white">
            Our <span className="gold-text-gradient italic">Services</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14 scroll-animate">
          <div className="section-divider" />
          <p className="font-poppins text-white/50 text-sm max-w-2xl mx-auto">
            We offer a complete range of interior and exterior design services, each executed with meticulous attention to detail and an unwavering commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl overflow-hidden scroll-animate hover:border-gold/40 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/8"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="service-card-img h-56 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full gold-gradient flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowRight size={14} className="text-[#0B0B0B]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair font-semibold text-white text-xl mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-3 transition-all duration-400 group-hover:w-16" />
                <p className="font-poppins text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={handleContact}
                  className="mt-5 font-poppins text-xs text-gold tracking-wide hover:text-gold-light transition-colors inline-flex items-center gap-1.5 group/btn"
                >
                  Get a Quote
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/88" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto scroll-animate">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">Get Started</p>
          <h2 className="font-playfair font-bold text-4xl text-white mb-5 leading-tight">
            Ready to Begin Your<br />
            <span className="gold-text-gradient italic">Transformation?</span>
          </h2>
          <p className="font-poppins text-white/55 text-sm mb-8">
            Reach out to our team and let's discuss how we can bring your vision to life.
          </p>
          <button
            onClick={handleContact}
            className="gold-btn px-8 py-4 rounded font-poppins font-semibold tracking-wide inline-flex items-center gap-2"
          >
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
