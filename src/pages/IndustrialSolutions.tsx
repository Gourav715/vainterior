import { useEffect } from 'react';

export default function IndustrialSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Metal Cutting Solutions',
      video: 'https://www.pexels.com/download/video/29913842/',
      description: 'High-performance cutting solutions designed to deliver accuracy, efficiency, and reliability across every application. Backed by advanced technology and trusted quality, we help industries cut smarter, faster, and better.',
      subtopics: [
        { name: 'Cutting Tools', image: 'https://images.pexels.com/photos/28231806/pexels-photo-28231806.jpeg', desc: 'Precision cutting tools engineered for durability, superior performance, and extended tool life across machining applications.' },
        { name: 'Laser Cutting', image: 'https://images.pexels.com/photos/29988981/pexels-photo-29988981.jpeg', desc: 'Advanced laser cutting systems for smooth edges, high-speed cutting, and exceptional accuracy on multiple metal surfaces.' },
        { name: 'Plasma Cutting', image: 'https://images.pexels.com/photos/14265844/pexels-photo-14265844.jpeg', desc: 'Heavy-duty plasma cutting solutions designed for fast and efficient cutting of thick industrial metal materials.' },
      ],
    },
    {
      title: 'Welding Solutions',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4',
      description: 'Comprehensive welding solutions designed to deliver strength, precision, and reliability across industries with premium equipment and consumables.',
      subtopics: [
        { name: 'Welding Equipments', image: 'https://images.pexels.com/photos/29224610/pexels-photo-29224610.jpeg', desc: 'Advanced welding machines built for durability, efficiency, and high-performance industrial applications.' },
        { name: 'MIG & TIG Welding', image: 'https://images.pexels.com/photos/31349537/pexels-photo-31349537.jpeg', desc: 'Professional MIG and TIG welding solutions delivering smooth, clean, and precise welding performance.' },
        { name: 'Welding Consumables', image: 'https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg', desc: 'High-quality consumables including nozzles, contact tips, gas lenses, and electrodes for uninterrupted productivity.' },
      ],
    },
    {
      title: 'Painting Solutions',
      video: 'https://videos.pexels.com/video-files/855382/855382-hd_1920_1080_25fps.mp4',
      description: 'High-performance painting solutions designed for precision, efficiency, and flawless industrial finishes with premium tools and accessories.',
      subtopics: [
        { name: 'Painting Guns', image: 'https://images.pexels.com/photos/6474297/pexels-photo-6474297.jpeg', desc: 'Professional painting guns engineered for superior atomization, smooth finish, and precision paint control.' },
        { name: 'Nozzles', image: 'https://images.pexels.com/photos/33814682/pexels-photo-33814682.jpeg', desc: 'Precision-engineered nozzles designed for optimum paint flow, spray patterns, and consistent coating quality.' },
        { name: 'Sanding Wheels & Guns', image: 'https://images.pexels.com/photos/12734541/pexels-photo-12734541.jpeg', desc: 'Durable sanding tools and abrasive wheels for smooth surface preparation, finishing, and professional-grade polishing.' },
      ],
    },
    {
      title: 'Industrial Safety',
      video: 'https://videos.pexels.com/video-files/848226/848226-hd_1920_1080_25fps.mp4',
      description: 'Comprehensive industrial safety solutions built to protect workforces and improve operational safety across every industrial environment.',
      subtopics: [
        { name: 'PPE', image: 'https://images.pexels.com/photos/9894959/pexels-photo-9894959.jpeg', desc: 'Premium personal protective equipment designed to ensure maximum protection, comfort, and durability.' },
        { name: 'Painting Safety Equipment', image: 'https://images.pexels.com/photos/6474196/pexels-photo-6474196.jpeg', desc: 'Reliable painting safety equipment built to protect against fumes, overspray, and hazardous chemicals.' },
        { name: 'Welding Safety Equipment', image: 'https://images.pexels.com/photos/14528645/pexels-photo-14528645.jpeg', desc: 'Advanced welding safety products offering superior protection against sparks, heat, radiation, and fumes.' },
      ],
    },
    {
      title: 'Customised Solutions',
      video: 'https://videos.pexels.com/video-files/4481259/4481259-hd_1920_1080_25fps.mp4',
      description: 'Custom-built industrial and engineering solutions tailored to exact specifications with precision manufacturing and advanced engineering expertise.',
      subtopics: [
        { name: 'Build To Print Orders', image: 'https://images.pexels.com/photos/31357903/pexels-photo-31357903.jpeg', desc: 'Manufacturing components exactly as per technical drawings, specifications, and tolerance requirements.' },
        { name: 'Checking Fixtures & Gauges', image: 'https://images.pexels.com/photos/6916500/pexels-photo-6916500.jpeg', desc: 'Precision-engineered fixtures and gauges designed for accurate inspection and quality control applications.' },
        { name: 'Precision Machining Components', image: 'https://images.pexels.com/photos/28752153/pexels-photo-28752153.jpeg', desc: 'High-precision machined components with superior surface finish and tight tolerance control.' },
      ],
    },
    {
      title: 'Innovative Technology',
      video: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4',
      description: 'Powerful digital and business technology solutions designed to help companies scale faster, generate leads, and establish a strong digital presence.',
      subtopics: [
        { name: 'Business Website Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', desc: 'High-converting websites with mobile responsive design, fast-loading performance, and SEO-friendly structure.' },
        { name: 'Lead Generation Systems', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', desc: 'Automated lead generation systems designed to attract, capture, nurture, and convert quality business leads.' },
        { name: 'Premium Webapps', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop', desc: 'Custom premium web applications built for scalability, security, performance, and enterprise-level business operations.' },
      ],
    },
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source src="https://videos.pexels.com/video-files/856987/856987-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0B0B0B]" />
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-wide uppercase text-[#D4A64F] mb-6">
            VA Interiors & Enterprises
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white mb-8">
            Transforming Spaces. Empowering Industries. Delivering Excellence.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Delivering premium interior solutions, industrial engineering services,
            safety systems, customised manufacturing, and innovative technology
            solutions under one trusted enterprise.
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <section key={index} className="relative py-24 border-t border-[#D4A64F]/20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10">
            <source src={section.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0B0B0B]/90" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-black uppercase text-[#D4A64F] mb-6 tracking-wide">
                {section.title}
              </h2>
              <div className="w-40 h-[2px] bg-[#D4A64F] mx-auto mb-8" />
              <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-9">
                {section.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {section.subtopics.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B1320]/80 border border-[#D4A64F]/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#D4A64F] mb-4 uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 leading-8 text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}