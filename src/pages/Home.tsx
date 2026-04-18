import { useEffect, useRef } from 'react';
import { ArrowRight, Star, Award, Users, Home as HomeIcon, ChevronDown } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const previewServices = [
  {
    title: 'Interior Design',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Modular Kitchen',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Living Room',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bedroom',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'False Ceiling',
    image: 'https://i.pinimg.com/736x/7d/09/10/7d0910ad548b7cc3b9b50a37235c07e2.jpg',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Bengaluru',
    review: 'VA Interiors transformed our home into a stunning masterpiece. Aravind and his team delivered beyond our expectations with their attention to detail and premium quality materials.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Andrahalli, Bengaluru',
    review: 'The modular kitchen they designed is absolutely gorgeous. Every corner was planned thoughtfully and the execution was flawless. Highly recommended for luxury interiors.',
    rating: 5,
  },
  {
    name: 'Sunita Nair',
    location: 'Bengaluru',
    review: 'From false ceiling to the complete bedroom makeover, VA Interiors exceeded all my expectations. The quality and elegance they brought to my space is truly unmatched.',
    rating: 5,
  },
];

const stats = [
  { icon: HomeIcon, value: '150+', label: 'Projects Completed' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
];

export default function Home({ onNavigate }: HomeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      const targets = el.querySelectorAll('.scroll-animate');
      targets.forEach((target) => observer.observe(target));
    }
    return () => observer.disconnect();
  }, []);

  const handleContact = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServices = () => {
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef}>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <p className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-6 opacity-0 animate-slide-up">
              Welcome to VA Interiors & Enterprises
            </p>
            <h1 className="font-playfair font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 opacity-0 animate-slide-up">
              Designing Premium<br />
              <span className="gold-text-gradient italic">Interiors</span> with Elegance
            </h1>
            <p className="font-poppins text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto opacity-0 animate-slide-up-delay">
              Transforming spaces into timeless experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up-delay2">
              <button
                onClick={handleContact}
                className="gold-btn px-8 py-4 rounded font-poppins font-semibold tracking-wide text-base flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </button>
              <button
                onClick={handleServices}
                className="gold-border-btn px-8 py-4 rounded font-poppins font-semibold tracking-wide text-base"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <ChevronDown size={28} className="text-gold/60" />
        </div>
      </section>

      <section className="bg-[#0B0B0B] py-10 border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-6 lg:gap-0 divide-x-0 lg:divide-x lg:divide-[#2A2A2A]">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center py-4 scroll-animate">
                  <Icon size={22} className="text-gold mx-auto mb-2" />
                  <p className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-1">{stat.value}</p>
                  <p className="font-poppins text-xs sm:text-sm text-white/40 tracking-wide">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate">
            <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">About Us</p>
            <div className="section-divider !m-0 mb-6 !w-16" />
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
              About VA Interiors<br />
              <span className="gold-text-gradient italic">& Enterprises</span>
            </h2>
            <p className="font-poppins text-white/60 text-base leading-relaxed mb-5">
              VA Interiors & Enterprises is a premium interior design company dedicated to crafting exceptional living and working spaces across south India. We combine artistic vision with precision execution to deliver truly bespoke interiors.
            </p>
            <p className="font-poppins text-white/60 text-base leading-relaxed mb-8">
              Every project we undertake is a testament to our commitment to quality — from customized design solutions tailored to your lifestyle to high-quality materials sourced for lasting elegance.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Customized design solutions for every space',
                'Premium, high-quality materials and finishes',
                'Transparent pricing and timely execution',
                'End-to-end interior & exterior services',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-poppins text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="glass-card rounded-xl p-5 inline-block">
              <p className="font-playfair font-semibold text-white text-lg">Aravind Reddy</p>
              <p className="font-poppins text-xs text-gold tracking-widest uppercase mt-1">Proprietor, VA Interiors & Enterprises</p>
            </div>
          </div>

          <div className="relative scroll-animate">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="VA Interiors Premium Design"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-xl overflow-hidden border-2 border-gold/30 shadow-xl shadow-gold/10">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Modular kitchen design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl overflow-hidden border-2 border-gold/20 shadow-xl">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Bedroom design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 glass-card rounded-lg px-4 py-3">
              <p className="font-poppins text-xs text-gold font-semibold tracking-wide">Premium Quality</p>
              <p className="font-poppins text-[10px] text-white/50 mt-0.5">Certified Materials</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-animate">
            <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">What We Offer</p>
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white">
              Our <span className="gold-text-gradient italic">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {previewServices.map((service, i) => (
              <div
                key={i}
                className="scroll-animate service-card-img group cursor-pointer relative rounded-xl overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-64 sm:h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-playfair font-semibold text-white text-sm leading-tight">{service.title}</p>
                  <div className="w-8 h-0.5 bg-gold mt-2 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <button
              onClick={handleServices}
              className="gold-border-btn px-8 py-3.5 rounded font-poppins font-semibold text-sm tracking-wide inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">Testimonials</p>
          <div className="section-divider" />
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white">
            What Our <span className="gold-text-gradient italic">Clients</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card glass-card glass-card-hover rounded-2xl p-7 scroll-animate"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-poppins text-sm text-white/65 leading-relaxed mb-6 relative z-10">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
                  <span className="font-playfair font-bold text-[#0B0B0B] text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-playfair font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-poppins text-[11px] text-gold/70">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto scroll-animate">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">Ready to Transform?</p>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Let's Create Your<br />
            <span className="gold-text-gradient italic">Dream Space</span>
          </h2>
          <p className="font-poppins text-white/60 text-base mb-10">
            Contact us today and let Aravind Reddy and the VA Interiors team design the perfect space for you.
          </p>
          <button
            onClick={handleContact}
            className="gold-btn px-10 py-4 rounded font-poppins font-semibold tracking-wide text-base inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
