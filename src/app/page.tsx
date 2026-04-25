"use client";

import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence,
  useMotionValue,
  useInView
} from "framer-motion";
import { 
  ArrowUpRight, 
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
  Database,
  Rocket,
  BookOpen,
  Briefcase,
  TrendingUp,
  Target
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="2"/><circle cx="4" cy="4" r="2"/></svg>
);

const Instagram = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

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
    id: "01",
    phase: "AWAL PERJALANAN",
    label: "START",
    year: "2019",
    role: "Menginjakkan Kaki di Dunia Digital",
    details: "Memulai perjalanan dengan rasa ingin tahu dan semangat untuk terus belajar hal baru.",
    icon: Rocket,
    color: "#5562ff",
    glowColor: "rgba(85,98,255,0.4)"
  },
  {
    id: "02",
    phase: "BELAJAR & EKSPLORASI",
    label: "TAHAP 2",
    year: "2019 — 2020",
    role: "Membangun Fondasi yang Kuat",
    details: "Fokus pada pembelajaran, eksplorasi berbagai bidang, dan membangun fondasi yang kuat.",
    icon: BookOpen,
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.4)"
  },
  {
    id: "03",
    phase: "PENGALAMAN & KONTRIBUSI",
    label: "TAHAP 3",
    year: "2021 — 2022",
    role: "Terjun ke Proyek Nyata",
    details: "Mulai terlibat dalam proyek nyata, berkontribusi dalam tim, dan memberikan solusi yang berdampak.",
    icon: Briefcase,
    color: "#06b6d4",
    glowColor: "rgba(6,182,212,0.4)"
  },
  {
    id: "04",
    phase: "BERTUMBUH & MEMIMPIN",
    label: "TAHAP 4",
    year: "2023 — 2024",
    role: "Mengambil Tanggung Jawab Lebih",
    details: "Mengembangkan skill lebih dalam, menangani tanggung jawab lebih besar, dan mulai memimpin.",
    icon: TrendingUp,
    color: "#f59e0b",
    glowColor: "rgba(245,158,11,0.4)"
  },
  {
    id: "05",
    phase: "BERDAMPAK & BERKEMBANG",
    label: "SEKARANG",
    year: "2025",
    role: "Memberikan Dampak Nyata",
    details: "Fokus pada memberikan dampak yang lebih luas dan terus belajar tanpa henti menuju versi terbaik.",
    icon: Target,
    color: "#ec4899",
    glowColor: "rgba(236,72,153,0.4)"
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

// ── Winding Road Career Journey ──────────────────────────────────────────────

function CareerCard({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="career-card"
      style={{ "--card-glow": item.glowColor } as React.CSSProperties}
    >
      {/* Top: phase label + number */}
      <div className="career-card__top">
        <p className="career-card__phase" style={{ color: item.color }}>{item.phase}</p>
        <span className="career-card__number" style={{ color: item.color }}>{item.id}</span>
      </div>

      {/* Icon */}
      <div className="career-card__icon"
        style={{ background: `${item.color}15`, borderColor: `${item.color}35` }}>
        <Icon size={20} style={{ color: item.color }} />
      </div>

      {/* Title - role name (same as phase but displayed as big heading) */}
      <h4 className="career-card__title">{item.role}</h4>

      {/* Description */}
      <p className="career-card__desc">{item.details}</p>

      <div className="career-card__glow" />
    </motion.div>
  );
}

function WindingRoadCareer() {
  const spineRef = useRef<HTMLDivElement>(null);
  
  // Directly map scroll without useSpring to eliminate the lagging effect ("tertinggal")
  // Using start 60% and end 40% ensures it draws in rhythm with what's visible
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start 60%", "end 40%"],
  });

  // A responsive path scaled precisely from Y=10 to Y=90.
  // With 5 equal-height flex rows, their centers are exactly at 10%, 30%, 50%, 70%, 90%
  const pathData = `M 50 10 C 90 15, 90 25, 50 30 C 10 35, 10 45, 50 50 C 90 55, 90 65, 50 70 C 10 75, 10 85, 50 90`;

  return (
    <div className="career-road">
      <div className="career-road__bg" />

      <div ref={spineRef} className="relative z-10 w-full h-full flex flex-col">
        {/* MOBILE */}
        <div className="cr-mobile">
          <div className="cr-spine-col relative">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-full">
              <defs>
                <linearGradient id="mg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#5562ff" stopOpacity="0.85"/>
                  <stop offset="25%"  stopColor="#a855f7" stopOpacity="0.85"/>
                  <stop offset="50%"  stopColor="#06b6d4" stopOpacity="0.85"/>
                  <stop offset="75%"  stopColor="#f59e0b" stopOpacity="0.85"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.95"/>
                </linearGradient>
                <filter id="glowM">
                  <feGaussianBlur stdDeviation="2" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <mask id="mm">
                  <motion.path d={pathData} stroke="white" strokeWidth="6" fill="none"
                    strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    style={{ pathLength: scrollYProgress }}/>
                </mask>
              </defs>
              <path d={pathData} stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <path d={pathData} stroke="rgba(255,255,255,0.09)" strokeWidth="8" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <path d={pathData} stroke="url(#mg)" strokeWidth="4" fill="none"
                strokeLinecap="round" vectorEffect="non-scaling-stroke" filter="url(#glowM)" mask="url(#mm)"/>
              <path d={pathData} stroke="rgba(255,255,255,0.15)" strokeWidth="2"
                strokeDasharray="6 8" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          <div className="cr-cards-col">
            {CAREER.map((item, i) => (
              <div key={item.id} className="cr-row">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="cr-dot"
                  style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.glowColor}` }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="cr-year-tag"
                  style={{ color: item.color }}
                >
                  {item.year}
                </motion.span>
                <CareerCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="cr-desktop">
          <div className="cr-desktop-spine" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="dg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#5562ff" stopOpacity="0.9"/>
                  <stop offset="25%"  stopColor="#a855f7" stopOpacity="0.9"/>
                  <stop offset="50%"  stopColor="#06b6d4" stopOpacity="0.9"/>
                  <stop offset="75%"  stopColor="#f59e0b" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="1"/>
                </linearGradient>
                <filter id="glowD">
                  <feGaussianBlur stdDeviation="2.5" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <mask id="dm">
                  <motion.path d={pathData} stroke="white" strokeWidth="6" fill="none"
                    strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    style={{ pathLength: scrollYProgress }}/>
                </mask>
              </defs>
              <path d={pathData} stroke="rgba(255,255,255,0.04)" strokeWidth="24" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <path d={pathData} stroke="rgba(255,255,255,0.09)" strokeWidth="12" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <path d={pathData} stroke="url(#dg)" strokeWidth="6" fill="none"
                strokeLinecap="round" vectorEffect="non-scaling-stroke" filter="url(#glowD)" mask="url(#dm)"/>
              <path d={pathData} stroke="rgba(255,255,255,0.15)" strokeWidth="2"
                strokeDasharray="8 12" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          {CAREER.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.id} className="cr-desktop-row">
                <div className="cr-slot">
                  {isLeft ? (
                    <CareerCard item={item} index={i} />
                  ) : (
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }} className="cr-meta cr-meta--right">
                      <span style={{ color: item.color }} className="cr-meta__year">{item.year}</span>
                      <p className="cr-meta__label">{item.label}</p>
                    </motion.div>
                  )}
                </div>
                
                <div className="cr-spine-gap">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="cr-dot-desktop"
                    style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.glowColor}` }}
                  >
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                  </motion.div>
                </div>
                
                <div className="cr-slot">
                  {!isLeft ? (
                    <CareerCard item={item} index={i} />
                  ) : (
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }} className="cr-meta">
                      <span style={{ color: item.color }} className="cr-meta__year">{item.year}</span>
                      <p className="cr-meta__label">{item.label}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="career-quote">
        <div className="career-quote__star">✦</div>
        <p className="career-quote__text">
          "Perjalanan ini bukan tentang menjadi yang terbaik,{" "}
          tapi tentang menjadi lebih baik dari hari kemarin."
        </p>
      </motion.div>
    </div>
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
      
      {/* Dynamic Progress Indicator - Adjusted for less interference */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[50] h-32 flex flex-col items-center justify-between pointer-events-none opacity-40">
        <span className="text-[8px] uppercase tracking-widest text-white">01</span>
        <div className="w-px flex-1 bg-white/20 mx-auto my-4 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-white origin-top"
            style={{ height: "100%", scaleY: horizontalScrollProgress }}
          />
        </div>
        <span className="text-[8px] uppercase tracking-widest text-white">04</span>
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

        {/* Career Lifecycle - Winding Road */}
        <section id="journey" className="border-t border-white/5 overflow-hidden pt-20 md:pt-40">
          {/* Header */}
          <div className="section-container pb-0 pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase block mb-6" style={{ color: '#5562ff' }}>Perjalanan Karir</span>
              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-tight">
                Perjalanan <br />
                <span className="heading-serif opacity-40 italic">Karir</span> Saya
              </h2>
              <p className="text-white/40 text-sm mt-8 max-w-sm leading-relaxed">
                Setiap langkah membentuk saya hari ini. <br />Terus belajar, bertumbuh, dan memberikan dampak.
              </p>
            </motion.div>
          </div>

          {/* Winding Road Component */}
          <WindingRoadCareer />
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
                 <p className="text-white" suppressHydrationWarning>{(new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC</p>
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
