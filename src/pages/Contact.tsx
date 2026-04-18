import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, User, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = encodeURIComponent(
      `Hello VA Interiors & Enterprises,\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
    window.open(`https://wa.me/919844466917?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactDetails = [
    {
      icon: User,
      label: 'Proprietor',
      value: 'Aravind Reddy',
      sub: 'VA Interiors & Enterprises',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9844466917',
      sub: '8296844337',
      href1: 'tel:9844466917',
      href2: 'tel:8296844337',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vainteriors3795@gmail.com',
      href1: 'mailto:vainteriors3795@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'No-75, 10th Cross, Vidyamaya Nagar,',
      sub: 'Main Road, Andrahalli, Bengaluru - 560091',
    },
  ];

  return (
    <div ref={sectionRef}>
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-12">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-3">Reach Out</p>
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-white">
            Contact <span className="gold-text-gradient italic">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="scroll-animate">
            <p className="font-poppins text-xs tracking-[0.35em] uppercase text-gold mb-4">Get in Touch</p>
            <div className="section-divider !m-0 mb-6 !w-16" />
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Let's Build Something<br />
              <span className="gold-text-gradient italic">Beautiful Together</span>
            </h2>
            <p className="font-poppins text-white/50 text-sm leading-relaxed mb-10">
              Reach out to us with your vision and we'll turn it into reality. Our team is always ready to discuss your project and provide you with the best design solutions.
            </p>

            <div className="space-y-5">
              {contactDetails.map((detail, i) => {
                const Icon = detail.icon;
                return (
                  <div key={i} className="flex items-start gap-4 glass-card rounded-xl px-5 py-4">
                    <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#0B0B0B]" />
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-gold/70 tracking-wider uppercase mb-1">{detail.label}</p>
                      {detail.href1 ? (
                        <a href={detail.href1} className="font-poppins text-white text-sm hover:text-gold transition-colors block">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-poppins text-white text-sm">{detail.value}</p>
                      )}
                      {detail.sub && (
                        detail.href2 ? (
                          <a href={detail.href2} className="font-poppins text-white/50 text-xs hover:text-gold transition-colors block mt-0.5">
                            {detail.sub}
                          </a>
                        ) : (
                          <p className="font-poppins text-white/50 text-xs mt-0.5">{detail.sub}</p>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/919844466917?text=Hello%20VA%20Interiors%20%26%20Enterprises%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-3.5 rounded-xl font-poppins font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="scroll-animate" style={{ transitionDelay: '100ms' }}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-playfair font-semibold text-white text-2xl mb-2">Send Us a Message</h3>
              <p className="font-poppins text-white/40 text-sm mb-8">
                Fill out the form below and we'll connect with you on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block font-poppins text-xs text-white/50 tracking-wider uppercase mb-2">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full bg-[#1a1a1a] border rounded-xl px-4 pl-10 py-3.5 font-poppins text-sm text-white placeholder-white/25 outline-none transition-all duration-300 focus:focus:bg-[#1f1f1f] ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-[#2A2A2A] focus:border-gold/60'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="font-poppins text-xs text-red-400 mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block font-poppins text-xs text-white/50 tracking-wider uppercase mb-2">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full bg-[#1a1a1a] border rounded-xl px-4 pl-10 py-3.5 font-poppins text-sm text-white placeholder-white/25 outline-none transition-all duration-300 focus:bg-[#1f1f1f] ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-[#2A2A2A] focus:border-gold/60'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="font-poppins text-xs text-red-400 mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-poppins text-xs text-white/50 tracking-wider uppercase mb-2">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={`w-full bg-[#1a1a1a] border rounded-xl px-4 pl-10 py-3.5 font-poppins text-sm text-white placeholder-white/25 outline-none transition-all duration-300 focus:bg-[#1f1f1f] ${
                        errors.phone
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-[#2A2A2A] focus:border-gold/60'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="font-poppins text-xs text-red-400 mt-1.5">{errors.phone}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full gold-btn py-4 rounded-xl font-poppins font-semibold tracking-wide text-base flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </button>

                <p className="font-poppins text-[11px] text-white/25 text-center">
                  Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-7xl mx-auto scroll-animate">
        <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl shadow-black/40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5673!2d77.5118!3d13.0041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4c5e6b9a1f%3A0x0!2sAndrahalli%2C%20Bengaluru%2C%20Karnataka%20560091!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VA Interiors & Enterprises Location"
          />
        </div>
        <div className="mt-5 text-center">
          <p className="font-poppins text-sm text-white/30">
            <MapPin size={12} className="inline mr-1.5 text-gold" />
            No-75, 10th Cross, Vidyamaya Nagar, Main Road, Andrahalli, Bengaluru - 560091
          </p>
        </div>
      </section>
    </div>
  );
}
