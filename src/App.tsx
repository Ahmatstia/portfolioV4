import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Database, 
  Figma, 
  Send, 
  Download,
  Plus,
  Terminal,
  Home,
  Briefcase,
  Layers,
  Inbox
} from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";

const PROJECTS = [
  {
    title: "DIP CNN Model",
    category: "AI Research",
    description: "Developing a Convolutional Neural Network model for advanced Digital Image Processing as part of my undergraduate thesis.",
    tags: ["Python", "TensorFlow", "CNN"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Portfolio v4",
    category: "Web",
    description: "A premium portfolio experience built with React, Vite, and Framer Motion to showcase digital craftsmanship.",
    tags: ["React", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const TECH_STACK = [
  { name: "Web Development", icon: Code2, color: "text-cyan-400" },
  { name: "Android Development", icon: Smartphone, color: "text-violet-400" },
  { name: "AI & Machine Learning", icon: Terminal, color: "text-emerald-400" },
  { name: "Digital Image Processing", icon: Layers, color: "text-pink-400" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const sections = ["home", "work", "tech", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080808]">
      {/* Dynamic Aura Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container rounded-full filter blur-[150px] opacity-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-10 h-20 bg-[#080808]/90 backdrop-blur-md border-b border-outline">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-black tracking-tighter">LEXANOVA</div>
          <nav className="flex gap-8">
            {["HOME", "WORK", "TECH", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative
                  ${activeTab === item.toLowerCase() ? "text-tertiary" : "text-white/40 hover:text-white"}`}
              >
                {item}
                {activeTab === item.toLowerCase() && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 w-full h-px bg-tertiary shadow-[0_0_8px_#5562ff]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
        <button className="brutalist-border px-6 py-2 rounded-full text-[10px] font-bold tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">RESUME.PDF</button>
      </header>

      <div className="flex relative z-10">
        {/* Left Vertical Rail */}
        <aside className="hidden lg:flex fixed left-0 top-0 h-full w-24 flex-col justify-between items-center py-12 border-r border-outline">
          <div className="vertical-rail text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">ARCHIVE_OS_V2</div>
          <div className="w-px h-24 bg-outline" />
          <div className="vertical-rail text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">SPRING_2024</div>
        </aside>

        <main className="flex-1 lg:ml-24 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32 md:pb-12 space-y-32">
          {/* Hero Section */}
          <section id="home" className="flex flex-col justify-center min-h-[90vh] py-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-tertiary" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-tertiary">Portfolio Entry Point</span>
              </div>
              <h1 className="display-text uppercase">
                ahmt<br />
                <span className="text-tertiary">stia</span>
              </h1>
            </motion.div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <motion.p 
                className="text-xl font-serif italic text-white/70 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "I am a Web and Android Developer dedicated to building seamless digital experiences. Currently exploring the intersection of Software Engineering and Artificial Intelligence."
              </motion.p>
              
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button 
                  onClick={() => scrollToSection("work")}
                  className="w-16 h-16 rounded-full border border-outline flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
                >
                  <ArrowRight size={24} />
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary px-10 rounded-full font-bold text-xs tracking-widest uppercase"
                >
                  Initiate Transmission
                </button>
              </motion.div>
            </div>
          </section>

        {/* Stats Section */}
        <section className="grid grid-cols-3 gap-4 border-y border-white/10 py-12">
          {[
            { val: "CS", label: "Informatics Student" },
            { val: "AI", label: "CNN Research" },
            { val: "DEV", label: "Web & Android" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="text-center space-y-2 border-r border-white/10 last:border-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-tertiary">{stat.val}</h2>
              <p className="font-display text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Featured Work */}
        <section id="work" className="space-y-16">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-tertiary">Portfolio Archives</div>
              <h2 className="font-display text-5xl font-bold tracking-tighter">Selected Works</h2>
            </div>
            <button className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase border border-outline px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
              VIEW_ALL
              <Plus size={14} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                className="bg-[#080808] p-8 md:p-12 space-y-6 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 p-8 text-white/20 group-hover:text-tertiary transition-colors">
                  <ExternalLink size={24} />
                </div>
                <div className="aspect-[16/9] overflow-hidden brutalist-border rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">{project.category}</span>
                    <div className="h-px flex-1 bg-outline" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase">{project.title}</h3>
                  <p className="text-white/50 text-sm font-serif italic">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 border border-outline rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="space-y-16">
          <div className="text-center space-y-2">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-tertiary opacity-60">System Core</div>
            <h2 className="text-4xl font-black tracking-tighter uppercase">Infrastructure</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-outline divide-x divide-outline">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="p-12 space-y-6 hover:bg-white group transition-all duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <tech.icon className={`w-10 h-10 group-hover:scale-110 transition-transform ${tech.color} group-hover:text-black`} />
                <div className="space-y-1">
                  <span className="block text-[10px] font-black tracking-[0.2em] uppercase group-hover:text-black transition-colors">{tech.name}</span>
                  <div className="w-8 h-px bg-tertiary group-hover:bg-black transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#5562ff]" />
                <span className="text-[10px] text-tertiary font-bold tracking-[0.2em] uppercase">Available for commission</span>
              </div>
              <h2 className="text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                Let's<br />
                <span className="text-white/20">Connect</span>
              </h2>
              <p className="text-white/50 leading-relaxed font-serif italic text-xl">
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <button key={i} className="brutalist-border h-16 flex items-center justify-center hover:bg-tertiary hover:text-black hover:border-tertiary transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="brutalist-border p-8 md:p-16 relative overflow-hidden bg-white/[0.02]">
               {showSuccess ? (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="h-full flex flex-col items-start justify-center space-y-6 py-12"
                 >
                   <div className="text-5xl font-black tracking-tighter uppercase text-tertiary">Received</div>
                   <p className="text-white/60 font-serif italic text-xl">"Your transmission has been logged. Syncing response soon."</p>
                   <button onClick={() => setShowSuccess(false)} className="text-[10px] font-bold tracking-widest uppercase border-b border-tertiary pb-1">Reset Buffer</button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Identifier</label>
                      <input required type="text" className="w-full bg-transparent border-b border-outline py-4 text-white focus:outline-none focus:border-tertiary transition-colors" placeholder="NAME / BRAND" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Return Address</label>
                      <input required type="email" className="w-full bg-transparent border-b border-outline py-4 text-white focus:outline-none focus:border-tertiary transition-colors" placeholder="EMAIL@DOMAIN.COM" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Payload</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-outline py-4 text-white focus:outline-none focus:border-tertiary transition-colors resize-none" placeholder="PROJECT PARAMETERS..." />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full h-16 brutalist-border font-bold uppercase tracking-[0.3em] text-[12px] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all group"
                  >
                    {isSubmitting ? "Syncing..." : "Execute Transmission"}
                    {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                 </form>
               )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline">
          <div className="space-y-4">
            <div className="text-xl font-black tracking-tighter uppercase">LEXANOVA</div>
            <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">© 2024 ahmtstia. All Rights Reserved.</div>
          </div>
          
          <div className="flex gap-20">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Data Rate</div>
              <div className="text-sm font-mono text-tertiary">144.2 GB/S</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Integrity</div>
              <div className="text-sm font-mono text-tertiary">VERIFIED</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Status</div>
              <div className="text-sm font-mono text-tertiary">LIVE</div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-4">
            <div className="flex gap-8 text-[10px] font-bold tracking-widest text-white/40">
              <a href="#" className="hover:text-tertiary transition-colors">SECURITY</a>
              <a href="#" className="hover:text-tertiary transition-colors">ARCHIVE</a>
              <a href="#" className="hover:text-tertiary transition-colors">GITHUB</a>
            </div>
            <div className="flex items-center gap-4 text-white/30">
              <span className="text-[10px] font-bold tracking-widest uppercase">Back to Top</span>
              <button 
                onClick={() => scrollToSection("home")}
                className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Plus className="rotate-45" size={20} />
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>

    {/* Mobile Nav */}
    <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <div className="bg-[#080808]/90 backdrop-blur-2xl border border-outline rounded-full h-16 flex items-center justify-around px-8 shadow-2xl">
        {[
          { id: "home", icon: Home },
          { id: "work", icon: Briefcase },
          { id: "tech", icon: Layers },
          { id: "contact", icon: Inbox },
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-all ${activeTab === item.id ? "text-tertiary" : "text-white/30"}`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </nav>
  </div>
);
}
