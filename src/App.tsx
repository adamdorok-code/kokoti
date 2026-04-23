import { motion } from 'motion/react';
import { Plane, Compass, ShieldCheck, ArrowRight, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const SERVICES = [
  {
    title: 'Predaj Lietadiel',
    description: 'Získajte prístup k exkluzívnej ponuke nových a zánovných súkromných lietadiel od popredných svetových výrobcov.',
    icon: Plane,
  },
  {
    title: 'Súkromné Lety',
    description: 'Cestujte podľa vlastného harmonogramu. Zabezpečíme charterové lety pre biznis aj oddych s maximálnym komfortom.',
    icon: Compass,
  },
  {
    title: 'Správa Flotily',
    description: 'Komplexný manažment vášho lietadla, od technickej údržby až po zabezpečenie posádky a administratívy.',
    icon: ShieldCheck,
  }
];

const FLEET = [
  {
    name: 'Gulfstream G650ER',
    type: 'Ultra-Long Range',
    passengers: '19',
    speed: 'Mach 0.925',
    range: '13,890 km',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Bombardier Global 7500',
    type: 'Long Range',
    passengers: '14',
    speed: 'Mach 0.925',
    range: '14,260 km',
    image: 'https://images.unsplash.com/photo-1583344641976-96a9ce02b0c4?q=80&w=1500&auto=format&fit=crop'
  },
  {
    name: 'Cessna Citation Latitude',
    type: 'Midsize Jet',
    passengers: '9',
    speed: 'Mach 0.80',
    range: '5,000 km',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1500&auto=format&fit=crop'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-[#e0e0e0] font-sans selection:bg-sky-400/30 relative overflow-x-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40vh] right-[-100px] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030405]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Plane className="w-8 h-8 text-white" />
            <span className="font-serif text-xl font-light tracking-[0.3em] uppercase text-white">SkyLuxe</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-slate-400">
            <a href="#sluzby" className="hover:text-white transition-colors">Služby</a>
            <a href="#flotila" className="hover:text-white transition-colors">Flotila</a>
            <a href="#predaj" className="hover:text-white transition-colors">Predaj</a>
            <a href="#kontakt" className="px-6 py-2 border border-slate-700 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Kontakt</a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden relative z-50 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050608]/95 backdrop-blur-xl pt-32 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-serif text-white/70">
             <a href="#sluzby" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Služby</a>
             <a href="#flotila" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Flotila</a>
             <a href="#predaj" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Predaj</a>
             <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-white">Kontakt</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop" 
            alt="Private Jet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/80 to-[#050608]/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl flex flex-col pt-10"
          >
            <div className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-sky-400"></span>
              Nová úroveň mobility
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white mb-6">
              Sloboda <br /> <span className="italic text-slate-500">bez kompromisov.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
              Exkluzívny predaj súkromných lietadiel a charterové lety na mieru. Cestujte bez kompromisov so SkyLuxe Aviation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#kontakt" className="px-8 py-4 bg-white text-black font-medium text-sm rounded-sm uppercase tracking-tighter text-center hover:bg-slate-200 transition-colors">
                Rezervovať let
              </a>
              <a href="#sluzby" className="px-8 py-4 border border-white/20 text-white font-medium text-sm rounded-sm uppercase tracking-tighter text-center hover:bg-white/5 transition-colors">
                Zobraziť ponuku
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="sluzby" className="py-32 bg-[#050608] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mb-4">Naše Služby</h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">Komplexné riešenia pre privátnu leteckú dopravu prispôsobené vašim najvyšším štandardom.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-[#0c0e12]/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl hover:bg-[#11141a] transition-colors group cursor-pointer"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 text-sky-400 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 font-medium group-hover:text-white group-hover:gap-4 transition-all">
                  <span>Zistiť viac</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="flotila" className="py-32 bg-[#030405]/50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-sky-400"></span>
                Exkluzívne Modely
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white">Ponuka Lietadiel</h2>
            </div>
            <a href="#predaj" className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 text-white hover:text-sky-400 hover:border-sky-400 transition-colors">
              Zobraziť všetky
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {FLEET.map((aircraft, index) => (
              <motion.div 
                key={aircraft.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="group cursor-pointer bg-[#0c0e12]/50 backdrop-blur-md border border-white/5 p-4 rounded-2xl hover:bg-[#0c0e12]/80 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={aircraft.image} 
                    alt={aircraft.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#0c0e12]/90 backdrop-blur-xl px-4 py-2 text-[10px] uppercase tracking-widest border border-white/10 text-white rounded-full">
                    {aircraft.type}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-white">{aircraft.name}</h3>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-6">
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Pasažieri</div>
                    <div className="text-sm font-light text-white">{aircraft.passengers}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Rýchlosť</div>
                    <div className="text-sm font-light text-white">{aircraft.speed}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Dojazd</div>
                    <div className="text-sm font-light text-white">{aircraft.range}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section id="kontakt" className="py-32 bg-[#050608] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mb-8">Pripravení na <span className="italic text-slate-500">odlet?</span></h2>
              <p className="text-slate-400 leading-relaxed mb-12 max-w-md">
                Kontaktujte našich expertov pre detailné informácie o predaji lietadiel alebo rezervácii vášho ďalšieho privátneho letu.
              </p>

              <div className="space-y-8 mt-4">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Zavolajte nám</div>
                    <div className="text-xl font-light text-white">+421 900 111 222</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Napíšte nám</div>
                    <div className="text-xl font-light text-white">sales@skyluxe.sk</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Centrála</div>
                    <div className="text-lg font-light text-white leading-tight">Letisko M. R. Štefánika<br />Bratislava, Slovensko</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0e12]/90 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-2xl relative shadow-2xl">
              <h3 className="font-serif text-2xl mb-8 text-white relative z-10">Nezáväzný dopyt</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-slate-500 tracking-widest">Meno a Priezvisko</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:border-white/30 focus:bg-white/10 focus:outline-none transition-colors text-white font-light" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-slate-500 tracking-widest">Telefón</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:border-white/30 focus:bg-white/10 focus:outline-none transition-colors text-white font-light" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-slate-500 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:border-white/30 focus:bg-white/10 focus:outline-none transition-colors text-white font-light" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-slate-500 tracking-widest">Účel</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:border-white/30 focus:bg-white/10 focus:outline-none transition-colors appearance-none text-white font-light">
                      <option>Záujem o kúpu lietadla</option>
                      <option>Záujem o privátny let</option>
                      <option>Správa lietadla</option>
                      <option>Iné</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-500">
                       <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-slate-500 tracking-widest">Správa</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:border-white/30 focus:bg-white/10 focus:outline-none transition-colors resize-none text-white font-light"></textarea>
                </div>

                <button type="button" className="w-full bg-white text-black py-4 font-medium rounded-sm uppercase tracking-tighter text-sm hover:bg-slate-200 transition-colors flex justify-center items-center gap-2 mt-4">
                  Odoslať dopyt
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-12 py-10 bg-[#030405]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <Plane className="w-6 h-6 text-white" />
             <span className="font-serif text-xl tracking-[0.3em] uppercase text-white">SkyLuxe</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Ochrana osobných údajov</a>
            <a href="#" className="hover:text-white transition-colors">Obchodné podmienky</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <p className="text-[10px] uppercase text-slate-600 tracking-widest">
            &copy; {new Date().getFullYear()} SkyLuxe Aviation.
          </p>
        </div>
      </footer>
    </div>
  );
}

