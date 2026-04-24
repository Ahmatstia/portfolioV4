import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence,
  useMotionValue
} from "motion/react";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Instagram,
  Plus,
  ArrowRight,
  Menu,
  X,
  Zap,
  Layers,
  Layout,
  Terminal,
  Cpu,
  Globe,
  Database
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "EcoPulse Dashboard",
    category: "Full Stack Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1400"
  },
  {
    id: "02",
    title: "Lumina Intelligence",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400"
  },
  {
    id: "03",
    title: "Nexus Commerce",
    category: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1400"
  },
  {
    id: "04",
    title: "Synapse Network",
    category: "Infrastructure",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1400"
  }
];

const CAREER = [
  {
    year: "2022 — Present",
    role: "Senior Full Stack Engineer",
    company: "Global Tech Solutions",
    details: "Architecting scalable cloud infrastructures and leading a high-performance engineering team."
  },
  {
    year: "2020 — 2022",
    role: "Lead Frontend Developer",
    company: "Creative Digital Agency",
    details: "Built immersive 3D web experiences using WebGL and advanced React patterns."
  },
  {
    year: "2018 — 2020",
    role: "Software Developer",
    company: "Innovation Hub",
    details: "Full stack contribution to various MVPs, focusing on rapid prototyping and user testing."
  }
];

const SERVICES = [
  {
    title: "Architectural Engineering",
    desc: "Building scalable foundations using Micro-frontends and robust Backend architectures.",
    icon: Layers,
    tags: ["TS", "Go", "AWS", "K8s"]
  },
  {
    title: "Dynamic Experience",
    desc: "Crafting immersive interfaces that prioritize accessibility and high-end motion design.",
    icon: Layout,
    tags: ["React", "R3F", "GSAP", "Framer"]
  },
  {
    title: "Core Infrastructure",
    desc: "Deep-core optimization focusing on Web Vitals, Edge computing, and data security.",
    icon: Zap,
    tags: ["PostgreSQL", "Redis", "Terraform"]
  }
];

function CustomCursor({ scale, text }: { scale: number, text: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 48);
      mouseY.set(e.clientY - 48);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="cursor-lens"
      style={{ x: springX, y: springY, scale }}
    >
      <span className="text-[10px] font-bold tracking-widest text-white whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

function HorizontalItem({ project, index, hoverIn, hoverOut }: { project: any, index: number, hoverIn: () => void, hoverOut: () => void, key?: React.Key }) {
  const ref = useRef(null);
  
  return (
    <motion.div 
      ref={ref}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      className="horizontal-item group"
    >
      <div className="w-full h-full relative overflow-hidden transition-all duration-1000 group-hover:scale-[0.98]">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
      </div>
      <div className="absolute bottom-16 left-16 right-16 flex justify-between items-end pointer-events-none transition-all duration-700 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="space-y-2">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/50">{project.category} / {project.year}</p>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
          <ArrowUpRight size={32} className="text-white/80" />
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service }: { service: any, key?: React.Key }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-2xl group"
    >
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
        <service.icon size={24} />
      </div>
      <h4 className="text-2xl font-light uppercase tracking-tighter mb-4">{service.title}</h4>
      <p className="text-white/40 text-sm leading-relaxed mb-8">{service.desc}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag: string) => (
          <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white/20 border border-white/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, index }: { item: any, index: number, key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 py-16 border-t border-white/5 first:border-t-0"
    >
      <div className="md:col-span-3">
        <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">{item.year}</span>
      </div>
      <div className="md:col-span-5">
        <h4 className="text-3xl font-light uppercase tracking-tighter mb-2">{item.role}</h4>
        <p className="text-white/40 uppercase tracking-widest text-[10px]">{item.company}</p>
      </div>
      <div className="md:col-span-4">
        <p className="text-sm text-white/50 leading-relaxed font-light">{item.details}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [cursorText, setCursorText] = useState("");

  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: horizontalScrollRef
  });
  
  const xTranslate = useTransform(horizontalScrollProgress, [0, 1], ["0%", "-70%"]);
  const skewX = useTransform(horizontalScrollProgress, [0, 0.5, 1], [0, -10, 0]);

  return (
    <div className="relative text-white selection:bg-white selection:text-black">
      <div className="noise-overlay" />
      <CustomCursor scale={cursorScale} text={cursorText} />
      
      {/* Dynamic Progress Indicator */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] h-32 flex flex-col items-center justify-between pointer-events-none">
        <span className="text-[8px] uppercase tracking-widest text-white/20">01</span>
        <div className="w-px flex-1 bg-white/10 mx-auto my-4 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-white origin-top"
            style={{ height: "100%", scaleY: horizontalScrollProgress }}
          />
        </div>
        <span className="text-[8px] uppercase tracking-widest text-white/20">04</span>
      </div>
      <header className="fixed top-0 left-0 w-full z-[100] px-8 md:px-12 py-10 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-light tracking-tighter uppercase"
        >
          Stay<span className="heading-serif">.</span>Studio
        </motion.div>
        
        <nav className="hidden md:flex gap-16">
          {["Work", "Services", "Journey", "About", "Contact"].map((item, i) => (
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item} 
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="nav-link"
            >
              {item}
            </motion.button>
          ))}
        </nav>

        <motion.button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md active:scale-95 transition-all"
        >
          <Menu size={20} />
        </motion.button>
      </header>

      {/* Floating Bottom Nav for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-[100] h-14 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-around px-2 shadow-2xl"
      >
        {[
          { id: "home", label: "Home" },
          { id: "work", label: "Work" },
          { id: "services", label: "Caps" },
          { id: "journey", label: "Life" },
          { id: "contact", label: "Touch" }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[8px] uppercase tracking-widest font-bold text-white/40 active:text-white transition-colors"
          >
            {item.label}
          </button>
        ))}
      </motion.div>

      {/* Full Screen Menu - Re-engineered for Immersive feel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center p-12"
          >
            <motion.button 
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              onClick={() => setMenuOpen(false)} 
              className="absolute top-10 right-10 text-white/40 hover:text-white"
            >
              <Plus size={48} className="rotate-45" />
            </motion.button>
            
            <nav className="flex flex-col gap-6 text-center">
              {["Work", "Services", "Journey", "About", "Contact"].map((item, i) => (
                <motion.button 
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setMenuOpen(false);
                    const el = document.getElementById(item.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mobile-menu-item"
                >
                  {item}
                </motion.button>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-20 flex gap-16 text-white/20"
            >
              <Github size={20} />
              <Linkedin size={20} />
              <Instagram size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Modernist Hero */}
        <section id="home" className="h-screen flex flex-col justify-center px-8 md:px-24">
          <div className="relative">
            <motion.h1 className="heading-display flex flex-col">
              <span className="inline-block overflow-hidden pb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Crafting <span className="heading-serif">Atmosphere</span>
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block opacity-40"
                >
                  Through Digital Art.
                </motion.span>
              </span>
            </motion.h1>
            
            <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-white/40 max-w-sm text-[9px] uppercase tracking-[0.4em] leading-loose"
              >
                Independent UI/UX Specialist focused on creating immersive high-end digital solutions for global clients. Engineered for the extraordinary.
              </motion.p>
              
              <div className="flex flex-col items-end gap-6">
                 <div className="flex gap-16 border-b border-white/5 pb-4">
                    <div className="text-right">
                       <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Success_Rate</p>
                       <p className="text-xl font-light">99.8%</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Global_Clients</p>
                       <p className="text-xl font-light">42+</p>
                    </div>
                 </div>
                 <div className="flex gap-8">
                   {[Github, Linkedin, Instagram].map((Icon, i) => (
                     <motion.div 
                       key={i}
                       whileHover={{ scale: 1.2, color: "#fff" }}
                       className="text-white/20 cursor-pointer transition-colors"
                     >
                       <Icon size={18} />
                     </motion.div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Horizontal Showpiece */}
        <div ref={horizontalScrollRef} className="h-[400vh] md:h-[500vh] relative">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div 
              style={{ x: xTranslate, skewX }}
              className="flex gap-12 md:gap-24 px-8 md:px-24"
            >
              <div id="work" className="flex-shrink-0 flex flex-col justify-center w-[85vw] md:w-[60vw]">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] text-white/20 mb-6 font-bold">Archive_2024</span>
                <h2 className="text-6xl md:text-[12vw] font-light leading-tight tracking-tighter uppercase">
                  Selected <br /> 
                  <span className="heading-serif px-6 md:px-10 border border-white/5 rounded-full inline-block mt-4 hover:bg-white hover:text-black transition-all duration-700">Digital</span>
                </h2>
              </div>

              {PROJECTS.map((project, i) => (
                <HorizontalItem 
                  key={project.id} 
                  project={project} 
                  index={i}
                  hoverIn={() => { setCursorScale(1.5); setCursorText("VIEW"); }}
                  hoverOut={() => { setCursorScale(1); setCursorText(""); }}
                />
              ))}
              
              <div className="flex-shrink-0 flex items-center justify-center w-[40vw]">
                 <motion.button 
                   whileHover={{ x: 20 }}
                   className="heading-serif text-5xl opacity-40 hover:opacity-100 transition-all uppercase tracking-tighter flex items-center gap-6"
                 >
                   View All <Plus size={40} />
                 </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Capabilities */}
        <section id="services" className="section-container">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
              <div className="space-y-6">
                 <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Capabilities</span>
                 <h3 className="text-5xl md:text-8xl font-light uppercase tracking-tighter">Strategic <br /> <span className="heading-serif italic opacity-30">Execution.</span></h3>
              </div>
              <p className="max-w-xs text-[10px] uppercase tracking-widest text-white/40 leading-relaxed font-medium">
                Engineered for performance, designed for human connection. I offer specialized services that push the boundaries of digital architecture.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
           </div>
        </section>

        {/* Career Lifecycle */}
        <section id="journey" className="section-container border-t border-white/5 py-32 md:py-60">
           <div className="mb-32">
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-8 block font-bold">The Lifecycle</span>
              <h2 className="text-4xl md:text-7xl font-light uppercase tracking-tighter">Professional <br /> Journey_</h2>
           </div>
           
           <div className="space-y-4">
              {CAREER.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
           </div>
           
           <div className="mt-32 p-12 bg-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-12 border border-white/10">
              <div className="text-center md:text-left">
                 <p className="text-4xl font-light uppercase tracking-tighter mb-2">Academic Core_</p>
                 <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">B.Sc. In Computer Science & Engineering</p>
              </div>
              <div className="flex items-center gap-8">
                 <div className="text-right">
                    <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Status</p>
                    <p className="font-bold text-xs">Cum Laude</p>
                 </div>
                 <div className="w-px h-12 bg-white/10" />
                 <div className="text-right">
                    <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Alumni</p>
                    <p className="font-bold text-xs">Stanford University</p>
                 </div>
              </div>
           </div>
        </section>

        {/* About Section - Expert Asymmetry */}
        <section id="about" className="section-container min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-7">
                  <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-[8.5vw] font-light uppercase tracking-tighter leading-none mb-24"
                  >
                    I speak the <br /> <span className="heading-serif opacity-30 italic">language</span> of <br /> human desire.
                  </motion.h2>
                  <div className="md:ml-20 max-w-xl space-y-16">
                     <p className="text-2xl font-light text-white/50 leading-relaxed indent-20">
                       Bridging the gap between physical and digital states through meticulous interaction design and spatial awareness. Every pixel is a calculated emotion.
                     </p>
                     <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-4">
                           <div className="h-px w-full bg-white/5" />
                           <span className="text-[8px] uppercase tracking-widest text-white/20">Years_Exp</span>
                           <p className="text-xl font-light uppercase">08+</p>
                        </div>
                        <div className="space-y-4">
                           <div className="h-px w-full bg-white/5" />
                           <span className="text-[8px] uppercase tracking-widest text-white/20">Client_Reach</span>
                           <p className="text-xl font-light uppercase">Global</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-5 relative">
                  <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="aspect-[3/4] bg-white/5 relative overflow-hidden"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1550684847-75bdda21cc95?auto=format&fit=crop&q=80&w=1200" 
                      alt="Studio" 
                      className="w-full h-full object-cover grayscale brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent opacity-60" />
                  </motion.div>
                  <div className="absolute -bottom-10 -left-10 p-12 bg-white text-black hidden md:block">
                     <p className="text-4xl font-light tracking-tighter uppercase leading-none">Studio <br /> Presence.</p>
                  </div>
               </div>
            </div>
        </section>

        {/* Final Connection Call */}
        <section id="contact" className="section-container border-t border-white/5 text-center flex flex-col items-center py-40 md:py-80">
           <span className="text-[8px] uppercase tracking-[0.8em] text-white/20 mb-12">Encryption_Sequence_Verified</span>
           <motion.h3 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="heading-display mb-16 text-white/20 hover:text-white transition-all cursor-default px-4"
           >
             Have a <br /> <span className="heading-serif italic opacity-30">Vision?</span>
           </motion.h3>
           <motion.button 
             whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
             className="px-12 md:px-24 py-8 md:py-10 border border-white/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] transition-all flex items-center gap-6 md:gap-10 active:bg-white active:text-black"
           >
             Start Connection <ArrowRight size={20} />
           </motion.button>
           
           <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 text-white/40 uppercase tracking-widest text-[8px] font-bold">
              <div className="space-y-4">
                 <p>Inquiries</p>
                 <p className="text-white">HI@STAY.STUDIO</p>
              </div>
              <div className="space-y-4">
                 <p>Location</p>
                 <p className="text-white">REMOTE / GLOBAL</p>
              </div>
              <div className="space-y-4">
                 <p>Instagram</p>
                 <p className="text-white">@STAY.VISUALS</p>
              </div>
              <div className="space-y-4">
                 <p>Local Time</p>
                 <p className="text-white">{(new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC</p>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 px-12 flex flex-col md:flex-row justify-between items-start gap-12 text-[8px] uppercase tracking-[0.5em] font-medium text-white/20">
         <div className="space-y-4">
            <p>Designed by Stay.Studio</p>
            <p>© 2024 Archive Edition</p>
         </div>
         <div className="flex flex-col md:flex-row gap-12">
            <div className="space-y-4">
               <p className="text-white/10">Inquiries</p>
               <p className="text-white/60">HQ@STAY.STUDIO</p>
            </div>
            <div className="space-y-4">
               <p className="text-white/10">Follow</p>
               <p className="text-white/60">INSTAGRAM / TWITTER</p>
            </div>
         </div>
      </footer>
    </div>
  );
}
