import { MapPin, Calendar, Clock, ArrowRight, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'AGENDA', href: '#' },
    { name: 'GALERIA', href: '#' },
    { name: 'FALE CONOSCO', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Top Row: Address */}
        <div className={`hidden md:flex justify-end mb-2 font-roboto transition-opacity duration-300 ${isScrolled ? 'text-on-surface/60' : 'text-white/60'}`}>
          <span className="text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
            <MapPin size={12} />
            Rua Inglaterra, 341, Parque das Nações, Santo André, SP - 09210-000
          </span>
        </div>

        {/* Bottom Row: Logo and Menu */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://img.icons8.com/ios-filled/100/ffffff/church.png" 
              alt="IPPN Logo" 
              className={`h-8 w-8 object-contain ${isScrolled ? 'invert brightness-0' : ''}`}
              referrerPolicy="no-referrer"
            />
            <span className={`text-2xl font-bold tracking-tighter font-roboto ${isScrolled ? 'text-primary' : 'text-white'}`}>IPPN</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-roboto font-medium tracking-wide uppercase text-sm transition-all duration-300 pb-1 border-b-2 ${
                  link.active 
                    ? (isScrolled ? 'text-primary border-primary' : 'text-white border-white') 
                    : 'border-transparent opacity-80 hover:opacity-100 ' + (isScrolled ? 'text-on-surface hover:text-primary' : 'text-white')
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-surface-container-high text-primary' : 'hover:bg-white/10 text-white'}`}>
              <MapPin size={20} />
            </button>
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-primary' : 'text-white'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-roboto font-bold text-xl text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO6NK1C93lady0ZyGjXqsbgwj1v4hnshm_nZ3uhxuNEeAX1bMC4VyWKMxO41zSaU5Eh1WLltJElqa4jPKx45GarLRkXa5XMwIxKILCEsbZXKzyO7x1G7Oq5Du4nuQTxir0VAGvNECmC-WSN1iW0HwrDmzkd3R0vQA0AfEH9RR6-XT_DhMXUwXiC2SDoRs_1zzrwThiRfa-BjiIuo2Ea5qDfWZNmN2ueoVP5OgpDa3mF_OX2ijyMLauHfJftCko-QMJvYgXIGZG5g",
      label: "Uma Igreja Reformada",
      title: <>Caminhando com <br /> <span className="editorial-italic">Reverência e Fé.</span></>,
      description: "Bem-vindo à IPPN. Um refúgio moderno enraizado na tradição presbiteriana, onde a Palavra é o centro e a comunidade é o corpo."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy5SR7QokF9If6OJnAQ9l7p_1RRCRflL5chjsUS81V_oEXAao_hZ67R-92VA_oXpwLZXdds-P4iq3s6etEET_iuAIwCcz7i482GYnFOvOLaJcMM_YII3921s1DT_Uq1hbmNzJlC8ILsBieHDIpUcfzpkoM8P6qLm-F9BfjwkLm_3ODMNzwsccuiclpeNc2aoK3AP3L24AATvix27rWUFPY4atk7GMpIS3_K22zNLJ5itComlqWtg8NWXTxXct-ykt7B6Mc27nC8Q",
      label: "Comunhão e Serviço",
      title: <>Vida em <br /> <span className="editorial-italic">Comunidade Cristã.</span></>,
      description: "Não caminhamos sozinhos. Na IPPN, cultivamos relacionamentos profundos e servimos uns aos outros com alegria e amor fraternal."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPKCTMtzz3n0xoZ83_-ehR_Jcqu8FBZ61Fgv-T87zqD5BNrhLZQcrskMfToaK_7xCDY5CptK5xZP4bWW9zfcQgenvhmEZSseRfKrK7HfMZw9RmUn9Bph3jutZwPyggVR5etBtZsP9h-dVD7gPwYYPXWQ4dqe7YvC6NhEOF3CnK-Lp_KeTAguDPtXaO4WgDmxHeXEL2rV6t0SiEf2k1ezlulAXdhCHUCpHV0gBIQ65uxi8rwOFMfBJWJvqSFFQrxVrpJ_euILT5-g",
      label: "Fidelidade Bíblica",
      title: <>Enraizados na <br /> <span className="editorial-italic">Palavra de Deus.</span></>,
      description: "Nossa base é a autoridade das Escrituras. Dedicamo-nos ao estudo sério e à aplicação prática do Evangelho em nossas vidas."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-screen-2xl w-full mx-auto px-8">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 uppercase tracking-[0.4em] text-xs font-label mb-6 block">
                {slides[currentSlide].label}
              </span>
              <h1 className="text-white font-headline text-5xl md:text-8xl leading-[1.1] font-bold mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-white/70 max-w-xl text-lg font-body leading-relaxed mb-10">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-md font-medium tracking-wide transition-all hover:bg-primary-container hover:scale-105 active:scale-95">
              CONHEÇA NOSSA HISTÓRIA
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-medium tracking-wide hover:bg-white/20 transition-all">
              ASSISTIR AO VIVO
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-8 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-12 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Event Banner Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-6xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-primary-container text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 rounded-lg"
        >
          <div className="flex items-center gap-6">
            <div className="text-center border-r border-white/20 pr-6">
              <span className="block text-4xl font-headline font-bold leading-none">18</span>
              <span className="text-xs uppercase tracking-widest font-label">ABR 26</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold tracking-tight">ACAMPAMENTO IPPN</h2>
              <p className="opacity-80 text-sm md:text-base font-body">Retiro espiritual para toda a família no Sítio Monte Sinai.</p>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-3 rounded font-bold text-sm tracking-widest transition-all hover:bg-primary hover:text-white">
            SAIBA MAIS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Identity = () => {
  const pillars = [
    {
      num: '01',
      title: 'Adoração',
      desc: 'Nossa liturgia busca a glória de Deus de forma solene, bíblica e congregacional, priorizando o encontro reverente entre o Criador e sua Igreja.',
      bg: 'bg-surface-container-low'
    },
    {
      num: '02',
      title: 'Fidelidade às Escrituras',
      desc: 'Cremos que a Bíblia é a nossa única regra de fé e prática. Cada ensinamento e decisão é submetido à autoridade infalível da Palavra de Deus.',
      bg: 'bg-white border border-outline-variant/10'
    },
    {
      num: '03',
      title: 'Pregação Expositiva',
      desc: 'Dedicamo-nos à exposição verso a verso das Escrituras, permitindo que o próprio texto bíblico defina o tema e a aplicação da nossa pregação.',
      bg: 'bg-surface-container-low'
    }
  ];

  return (
    <section className="pt-48 pb-24 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
        <div className="lg:col-span-5">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Nossa Identidade</span>
          <h2 className="text-5xl md:text-6xl font-headline font-bold leading-tight">
            O que a <br /> <span className="editorial-italic text-primary/60">IPPN é?</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xl text-on-surface/70 font-body leading-relaxed max-w-2xl">
            Buscamos ser uma igreja que honra o passado e serve ao presente, fundamentada nos pilares que definem nossa caminhada com Cristo.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div 
            key={pillar.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={`group p-10 transition-all duration-500 hover:bg-primary hover:text-white ${pillar.bg}`}
          >
            <span className="text-4xl font-headline font-bold opacity-10 block mb-8 group-hover:opacity-30">{pillar.num}</span>
            <h3 className="text-2xl font-headline font-bold mb-4">{pillar.title}</h3>
            <p className="opacity-70 leading-relaxed group-hover:opacity-90">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="bg-surface-container-high py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Vida em Comunidade</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-lg group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy5SR7QokF9If6OJnAQ9l7p_1RRCRflL5chjsUS81V_oEXAao_hZ67R-92VA_oXpwLZXdds-P4iq3s6etEET_iuAIwCcz7i482GYnFOvOLaJcMM_YII3921s1DT_Uq1hbmNzJlC8ILsBieHDIpUcfzpkoM8P6qLm-F9BfjwkLm_3ODMNzwsccuiclpeNc2aoK3AP3L24AATvix27rWUFPY4atk7GMpIS3_K22zNLJ5itComlqWtg8NWXTxXct-ykt7B6Mc27nC8Q" 
              alt="Community" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-lg group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX7TtbKMzCZhbfOggYxszDHpAtf6RMaAD0aLzVOw7p9NwvEFcpag79411BKlG4OGG5OqMdyg5BOG3qjSA3wSZBMMyTagQDt5_QLpBmltCpE01LvKp-JE6vgPZKAZ03r9BQz5pZmpaoA121bX3oI-XaW0a4Sh3W_SOYWf84-W8Hv5czxwjYBls50rEkBYDenHJ-tQm17d2YtyhmPu0grvLnmUqYRhRS2nixlohPhIZ9eQi8dfPpwtK4-VLfJyMM0ty09ubZMPntyg" 
              alt="Study" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-1 md:row-span-2 overflow-hidden rounded-lg group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Kb53cpj06fjG-zlF3AY5GVvo03eqC4iLmft4B1eaBPh2nqZU201aQiBlstp9YkiGqjc22aLpn7vh524bNQtq4VY68G4P39Qz36G2r443bZrLd_3p4EkL-ZWC3ls8DP8y8en5ERuMxkXbuAmZOvMuxQC0pH1YfxhSmWM7IBuaTPPbk1zK8ILPGnquojHjAFBpSKiQYzMvXhhyIXcLyG3MQiJu6CtG-8FgLhpkCumw3J7G0xA12emXuN6fQfpNK3RbRsJne-BOPg" 
              alt="Kids" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-lg group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPKCTMtzz3n0xoZ83_-ehR_Jcqu8FBZ61Fgv-T87zqD5BNrhLZQcrskMfToaK_7xCDY5CptK5xZP4bWW9zfcQgenvhmEZSseRfKrK7HfMZw9RmUn9Bph3jutZwPyggVR5etBtZsP9h-dVD7gPwYYPXWQ4dqe7YvC6NhEOF3CnK-Lp_KeTAguDPtXaO4WgDmxHeXEL2rV6t0SiEf2k1ezlulAXdhCHUCpHV0gBIQ65uxi8rwOFMfBJWJvqSFFQrxVrpJ_euILT5-g" 
              alt="Worship" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      day: '18',
      month: 'ABR',
      tag: 'Retiro',
      title: 'Acampamento IPPN 2026',
      time: 'Todo o dia',
      loc: 'Sítio Monte Sinai',
      primary: true
    },
    {
      day: '24',
      month: 'ABR',
      tag: 'Culto',
      title: 'Culto de Oração e Doutrina',
      time: '20:00h',
      loc: 'Santuário IPPN',
      primary: false
    },
    {
      day: '27',
      month: 'ABR',
      tag: 'Educação',
      title: 'Escola Bíblica Dominical (EBD)',
      time: '09:00h',
      loc: 'Salas de Aula',
      primary: false
    }
  ];

  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-outline-variant/30 pb-6">
        <h2 className="text-4xl font-headline font-bold">Próximos Eventos</h2>
        <a href="#" className="text-primary font-bold text-sm tracking-widest hover:underline flex items-center gap-2">
          VER AGENDA COMPLETA
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="space-y-6">
        {events.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white hover:bg-surface-container-low transition-colors rounded-lg group shadow-sm"
          >
            <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-lg flex-shrink-0 ${event.primary ? 'bg-primary text-white' : 'border-2 border-primary text-primary'}`}>
              <span className="text-3xl font-headline font-bold">{event.day}</span>
              <span className="text-xs font-label uppercase">{event.month}</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-1 block">{event.tag}</span>
              <h3 className="text-2xl font-headline font-bold mb-2">{event.title}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-on-surface/60 text-sm">
                <span className="flex items-center gap-1"><Clock size={16} /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin size={16} /> {event.loc}</span>
              </div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white px-6 py-2 rounded text-sm font-bold">
              {event.primary ? 'INSCREVER-SE' : 'DETALHES'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Pastors = () => {
  const pastors = [
    {
      name: 'Bruno Souza',
      role: 'Pastor Titular',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdsFinhFMZueiPWti4n7Cbc9Gj1jDhpDi84_AqFHpLslcr2yNQJkUcQ_Qti1XWrPBu-Epoj3w5y-F8hE0Nb6In6lyPZ76_aich4zfyk1P3kbeN2Ps87xH7FZayoLZES2zb5EYGELqgVUnIN4gUagne6L925FmIi_s4xLxBRb4q1xVqik-H0h_AVqLPLnEv7LXYImHwtcQ-E4u8l6w5-obcGwiaIgCZa7qDkhIWz-lyeOSYD2xX71YnskwKQju0Mcvmfr6oKiu6mw'
    },
    {
      name: 'Herley Rocha',
      role: 'Pastor Auxiliar',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnaEoa2_1CIRdS9IIfniH44hI08VF59i4r5N0R-c5inTcBTK_Zw8QwocChbCdUqYIxsVM59R2-HU9A7c9NDSsw1CdFzSZA-7qeOoh4D5bQ7e7Bs04JeouKkje-9ka40ojDK1acjoe675PubWk00E8-iYZJiHu05oZWaStIhlSUFlOic4G_uZBeANN-47L1VQ07vRsLOrIPwAkuBBVBi9L2YfoC5FuzitdPNSU5uUj6myrFFegmj1uimmzTzagQD0qt1tGg1m0FWA'
    },
    {
      name: 'Lucas Fogaça',
      role: 'Pastor de Jovens',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGNDeNiJ_muxxayaMc-ivMoW3uXwiMw9r_S7XgADAnkRzeCxpM-6QzmCtZ-FEeJK_ImLxIRU2AwxecKkmdRpf_l9wWT4EIxMWWOGyu2EvXCt803XCWhpXzgCU0Idf5fZBjocgqUdTpBRK_56w1vMbLC_32VSFdW8cdSYnh91CKPRrhTm_P6gyQCEOHswAhKV7ZxcaCrfn1yr6Gj6dgEaNHt0a3QlHXMpV95JxUIj4doLKK0Xcgu8WzNIplYPjQype6uV1kVmK-0Q'
    }
  ];

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-headline font-bold leading-tight">Nossos <span className="editorial-italic text-primary">Pastores.</span></h2>
            <p className="mt-6 text-on-surface/60 leading-relaxed max-w-sm">
              Uma equipe dedicada ao ensino fiel da Palavra e ao cuidado amoroso de cada ovelha do rebanho de Cristo.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastors.map((pastor, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden group shadow-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={pastor.img} 
                    alt={pastor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-headline font-bold">{pastor.name}</h4>
                  <p className="text-primary text-sm font-label uppercase tracking-widest mt-1">{pastor.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuADYZ7P0_y-F40iJSJXhD_xtJKj8-moBnj9Zx-XSNauucLvwjEycejf3Lsilz4mFD3uR8cLSnNlPs3N7R4Yb4-0QrsIfxWEJ_B-nFocpCcbgIfPilmK5rfIlBmBYKUcvorHm3dFs4HDGs4xcZ_GgKox_LygaGsnN0P4KPiTOGRErVirh03soHSR8V8tFOjqphTF2NqUleiLFdaNrTquBSDFTL_gscJgZRzCaD8qIZeNNcoPfHPJuMCB61FfwdJeEv4AxkCAB4sTqQ" 
        alt="Map" 
        className="w-full h-full object-cover opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-md p-10 max-w-md shadow-2xl rounded-lg text-center"
        >
          <MapPin size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-bold mb-2">Visite-nos</h3>
          <p className="text-on-surface/70 mb-6 font-body">
            Rua Inglaterra, 341, Parque das Nações<br />
            Santo André, SP - 09210-000
          </p>
          <a href="#" className="inline-block bg-primary text-white px-8 py-3 rounded font-bold tracking-widest text-sm hover:bg-primary-container transition-colors">
            COMO CHEGAR
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold mb-4 block font-headline">IPPN Church</span>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs mb-8">
              Igreja Presbiteriana do Parque das Nações. Uma comunidade de fé reformada em Santo André, comprometida com a pregação fiel da Palavra.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Endereço</h5>
            <p className="text-white/60 text-sm leading-relaxed">
              Rua Inglaterra, 341<br />
              Parque das Nações<br />
              Santo André, SP
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Horários</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Domingo: 10h & 18h</li>
              <li>EBD: 9h</li>
              <li>Quarta: 20h</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Navegação</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Agenda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ministérios</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/40 text-sm">© 2024 IPPN Church. The Modern Sanctuary.</span>
          <span className="text-[10px] text-white/20 tracking-[0.2em] uppercase">Soli Deo Gloria</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <Gallery />
        <Events />
        <Pastors />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
