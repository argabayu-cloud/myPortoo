"use client";

import {
  ArrowUp,
  Briefcase,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Instagram,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Paperclip,
  Send,
  Smartphone,
  Twitter,
  User,
  X,
  Zap
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

const roles = ["Frontend Developer", "Next.js Developer", "React Developer", "UI Slicing Specialist", "Web Developer"];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { label: "Projects Completed", value: 12 },
  { label: "UI Sections Built", value: 50 },
  { label: "Tech Stack", value: 10 }
];

const services = [
  {
    title: "Web Development",
    icon: Laptop,
    description: "Pembuatan website modern dan responsif menggunakan React, Next.js, dan Tailwind CSS.",
    features: ["React / Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"]
  },
  {
    title: "Landing Page",
    icon: Globe,
    description: "Landing page profesional untuk produk, jasa, campaign, dan validasi ide bisnis.",
    features: ["Conversion Focused", "Clean UI", "Mobile First", "CTA Strategy"]
  },
  {
    title: "UI/UX Implementation",
    icon: Palette,
    description: "Mengubah desain Figma menjadi tampilan frontend yang rapi, konsisten, dan reusable.",
    features: ["Figma Slicing", "Design System", "Pixel-aware UI", "Reusable Components"]
  },
  {
    title: "Frontend Web App",
    icon: Code2,
    description: "Pengembangan dashboard, admin panel, dan interface aplikasi web interaktif.",
    features: ["Dashboard UI", "TypeScript", "Component Architecture", "State Handling"]
  },
  {
    title: "Tech Consulting",
    icon: MessageCircle,
    description: "Diskusi teknis untuk menentukan struktur frontend, stack, dan strategi implementasi.",
    features: ["Stack Selection", "Code Review", "Frontend Planning", "Best Practices"]
  },
  {
    title: "Maintenance & Support",
    icon: Zap,
    description: "Peningkatan UI, fixing bug, refactor komponen, dan optimasi performa website.",
    features: ["Bug Fixing", "UI Improvement", "Performance", "Continuous Support"]
  }
];

const portfolioItems = [
  {
    title: "SaaS Dashboard Interface",
    category: "web",
    icon: Database,
    description: "Dashboard analytics modern dengan card statistik, chart, dan tabel data.",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "E-Commerce Landing Page",
    category: "web",
    icon: Briefcase,
    description: "Landing page toko online dengan product highlight dan CTA WhatsApp.",
    tech: ["React", "SEO", "Responsive"]
  },
  {
    title: "Mobile App Landing",
    category: "mobile",
    icon: Smartphone,
    description: "Halaman promosi aplikasi mobile dengan visual modern dan section fitur.",
    tech: ["Next.js", "UI Design", "A11y"]
  },
  {
    title: "Agency Company Profile",
    category: "design",
    icon: Palette,
    description: "Company profile agensi dengan layanan, portfolio, dan contact form.",
    tech: ["Figma", "Tailwind", "Vercel"]
  },
  {
    title: "Chat App Interface",
    category: "web",
    icon: MessageCircle,
    description: "Interface aplikasi chat real-time dengan layout clean dan responsive.",
    tech: ["React", "Socket UI", "CSS"]
  },
  {
    title: "Portfolio Personal Branding",
    category: "design",
    icon: User,
    description: "Website portfolio profesional untuk personal branding developer.",
    tech: ["Next.js", "Animation", "SEO"]
  }
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", progress: 92 },
      { name: "TypeScript", progress: 88 },
      { name: "HTML5", progress: 95 },
      { name: "CSS3", progress: 94 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: MonitorSmartphone,
    skills: [
      { name: "React / Next.js", progress: 92 },
      { name: "Tailwind CSS", progress: 94 },
      { name: "Framer-style Animation", progress: 82 },
      { name: "Reusable Components", progress: 88 }
    ]
  },
  {
    title: "Tools & Quality",
    icon: Paperclip,
    skills: [
      { name: "Git / GitHub", progress: 90 },
      { name: "Figma Slicing", progress: 86 },
      { name: "SEO", progress: 84 },
      { name: "Performance Optimization", progress: 86 }
    ]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [typedText, setTypedText] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [countStarted, setCountStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${4 + Math.random() * 10}px`,
        delay: `${Math.random() * 12}s`,
        duration: `${10 + Math.random() * 12}s`,
        opacity: 0.12 + Math.random() * 0.25
      })),
    []
  );

  const filteredPortfolio = portfolioItems.filter((item) => activeFilter === "all" || item.category === activeFilter);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIndex];

      if (deleting) {
        setTypedText(current.substring(0, charIndex - 1));
        charIndex -= 1;
      } else {
        setTypedText(current.substring(0, charIndex + 1));
        charIndex += 1;
      }

      let speed = deleting ? 50 : 95;

      if (!deleting && charIndex === current.length) {
        deleting = true;
        speed = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 450;
      }

      timeoutId = setTimeout(tick, speed);
    };

    timeoutId = setTimeout(tick, 700);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 520);

      const about = document.getElementById("about");
      if (about && window.scrollY > about.offsetTop - 300 && !countStarted) {
        setCountStarted(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [countStarted]);

  useEffect(() => {
    if (!countStarted) return;

    const timers = stats.map((stat, statIndex) => {
      let current = 0;
      const increment = Math.max(1, Math.ceil(stat.value / 45));

      return setInterval(() => {
        current += increment;
        setCounts((previous) => {
          const next = [...previous];
          next[statIndex] = Math.min(current, stat.value);
          return next;
        });

        if (current >= stat.value) {
          clearInterval(timers[statIndex]);
        }
      }, 28);
    });

    return () => timers.forEach(clearInterval);
  }, [countStarted]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Project Inquiry");
    const budget = String(form.get("budget") || "Belum ditentukan");
    const message = String(form.get("message") || "");

    const mailSubject = encodeURIComponent(`[${subject}] Project inquiry dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nBudget: ${budget}\n\nPesan:\n${message}`);

    window.location.href = `mailto:arga.bayu@example.com?subject=${mailSubject}&body=${body}`;
  }

  return (
    <main className="bg-white text-slate-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-black text-slate-950" aria-label="Arga Bayu Ramadhan">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 font-mono text-lg text-white shadow-lg shadow-blue-500/25">
              {"</>"}
            </span>
            <span className="font-heading text-xl">Arga Bayu</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700 lg:inline-flex">
            Hire Me
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`fixed right-0 top-0 h-screen w-80 bg-white p-8 pt-24 shadow-2xl transition lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="particle absolute rounded-full bg-blue-500"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-in-right">
            <p className="mb-4 text-lg font-semibold text-blue-600">👋 Hello, I'm</p>
            <h1 className="font-heading text-6xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">Arga Bayu</h1>
            <h2 className="mt-5 min-h-10 text-2xl font-extrabold text-slate-800 sm:text-3xl">
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">{typedText}</span>
              <span className="ml-1 animate-blink text-blue-600">|</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Saya Arga Bayu Ramadhan, Frontend Developer yang membantu Anda mewujudkan ide digital menjadi website modern, cepat, responsif, dan scalable menggunakan Next.js.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-extrabold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">
                <Briefcase size={19} /> View Portfolio
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 px-8 py-4 font-extrabold text-blue-600 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
                <Send size={19} /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/" }
              ].map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden animate-fade-in-left lg:block">
            <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-blue-950/25">
              <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm font-semibold text-slate-400">developer.ts</span>
              </div>
              <pre className="overflow-x-auto p-7 text-sm leading-8 text-slate-300">
                <code>{`const developer = {
  name: 'Arga Bayu Ramadhan',
  role: 'Frontend Developer',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS'
  ],
  passion: 'Building modern UI',
  available: true
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm font-bold text-slate-500 md:flex">
          <span>Scroll Down</span>
          <ChevronDown className="animate-bounce" size={22} />
        </a>
      </section>

      <section id="about" className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader tag="About Me" title="Kenalan dengan Saya 🤝" subtitle="Frontend Developer yang passionate dalam menciptakan pengalaman web modern" />

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-md animate-on-view">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-blue-600 to-sky-400 p-4 shadow-2xl shadow-blue-600/25">
                <div className="grid h-full place-items-center rounded-[1.5rem] bg-white/15 text-white backdrop-blur">
                  <User size={120} strokeWidth={1.3} />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-6 flex items-center gap-3 rounded-2xl bg-white p-5 shadow-2xl">
                <span className="text-4xl font-black text-blue-600">{counts[2]}+</span>
                <span className="text-sm font-bold leading-5 text-slate-600">Tech<br />Stack</span>
              </div>
            </div>

            <div className="animate-on-view">
              <h3 className="font-heading text-3xl font-extrabold text-slate-950">Saya Arga Bayu Ramadhan, Frontend Developer dari Indonesia 🇮🇩</h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Saya fokus membangun website dan interface aplikasi web yang responsif, cepat, dan nyaman digunakan. Saya senang menerjemahkan desain dan kebutuhan bisnis menjadi tampilan frontend yang clean, maintainable, dan siap deploy.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Dengan stack React, Next.js, TypeScript, dan Tailwind CSS, saya membantu bisnis, startup, maupun individu membuat landing page, dashboard, company profile, dan portfolio profesional.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center">
                    <span className="block text-4xl font-black text-blue-600">{counts[index]}+</span>
                    <span className="mt-2 block text-sm font-bold text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-1">
                  <Send size={18} /> Let's Talk
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 px-7 py-4 font-extrabold text-blue-600 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
                  <Download size={18} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-slate-50">
        <div className="container-shell">
          <SectionHeader tag="Services" title="Apa yang Saya Tawarkan? 🚀" subtitle="Layanan profesional untuk kebutuhan digital Anda" />

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="group animate-on-view rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 transition group-hover:scale-110 group-hover:bg-blue-600">
                  <service.icon size={30} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-extrabold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <Check className="text-emerald-500" size={17} /> {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader tag="Portfolio" title="Project Terbaru 💼" subtitle="Beberapa contoh project frontend yang relevan untuk bisnis dan produk digital" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["all", "All"],
              ["web", "Web App"],
              ["mobile", "Mobile App"],
              ["design", "UI/UX"]
            ].map(([key, label]) => (
              <button key={key} type="button" onClick={() => setActiveFilter(key)} className={`rounded-full border-2 px-6 py-3 text-sm font-extrabold transition ${activeFilter === key ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-600"}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolio.map((project, index) => (
              <article key={project.title} className="group animate-fade-in-up overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600 to-sky-400">
                  <div className="grid h-full place-items-center text-white">
                    <project.icon size={76} strokeWidth={1.4} />
                  </div>
                  <div className="absolute inset-0 grid place-items-center bg-slate-950/70 opacity-0 transition group-hover:opacity-100">
                    <div className="flex gap-3">
                      <a href="#" className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue-600 transition hover:scale-110" aria-label="Live demo">
                        <ExternalLink size={20} />
                      </a>
                      <a href="#" className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue-600 transition hover:scale-110" aria-label="Source code">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-extrabold text-slate-950">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-slate-50">
        <div className="container-shell">
          <SectionHeader tag="Skills" title="Keahlian & Teknologi 🛠️" subtitle="Teknologi yang saya gunakan untuk membangun frontend modern" />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="animate-on-view rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
                  <group.icon className="text-blue-600" /> {group.title}
                </h3>
                <div className="mt-7 space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm font-bold text-slate-700">
                        <span>{skill.name}</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                        <div className="skill-progress h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400" style={{ width: `${skill.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader tag="Contact" title="Mari Bekerja Sama! 📬" subtitle="Punya project dalam pikiran? Jangan ragu untuk menghubungi saya" />

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-on-view">
              <h3 className="font-heading text-2xl font-extrabold text-slate-950">Informasi Kontak</h3>
              <p className="mt-4 leading-8 text-slate-600">
                Saya terbuka untuk project baru, peluang kolaborasi, freelance, atau diskusi tentang kebutuhan frontend.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "arga.bayu@example.com", href: "mailto:arga.bayu@example.com" },
                  { icon: MessageCircle, title: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
                  { icon: MapPin, title: "Lokasi", value: "Indonesia (Remote Available)" },
                  { icon: Clock, title: "Availability", value: "Available for Freelance" }
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-950">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-slate-600 hover:text-blue-600">{item.value}</a>
                      ) : (
                        <span className="text-slate-600">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="animate-on-view rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm sm:p-10">
              <div className="grid gap-6">
                <FormField label="Nama Lengkap">
                  <input name="name" required placeholder="Masukkan nama Anda" className="form-control" />
                </FormField>
                <FormField label="Email">
                  <input name="email" type="email" required placeholder="Masukkan email Anda" className="form-control" />
                </FormField>
                <FormField label="Subjek">
                  <select name="subject" required defaultValue="" className="form-control">
                    <option value="" disabled>Pilih subjek</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="UI Slicing">UI Slicing</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </FormField>
                <FormField label="Estimasi Budget">
                  <select name="budget" defaultValue="" className="form-control">
                    <option value="" disabled>Pilih range budget</option>
                    <option value="< Rp 5.000.000">{"< Rp 5.000.000"}</option>
                    <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                    <option value="Rp 10.000.000 - Rp 25.000.000">Rp 10.000.000 - Rp 25.000.000</option>
                    <option value="> Rp 25.000.000">{"> Rp 25.000.000"}</option>
                  </select>
                </FormField>
                <FormField label="Pesan">
                  <textarea name="message" required rows={5} placeholder="Ceritakan tentang project Anda..." className="form-control resize-y" />
                </FormField>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-extrabold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">
                  <Send size={18} /> Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 pt-20 text-slate-300">
        <div className="container-shell">
          <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <a href="#home" className="flex items-center gap-3 font-heading text-xl font-black text-white">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 font-mono">{"</>"}</span>
                Arga Bayu
              </a>
              <p className="mt-4 font-bold text-blue-400">Frontend Developer</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                Membangun solusi frontend modern, cepat, dan berkualitas tinggi untuk membantu bisnis Anda berkembang.
              </p>
            </div>

            <FooterLinks title="Quick Links" links={navItems.slice(0, 5)} />
            <FooterLinks title="Services" links={services.slice(0, 4).map((item) => ({ label: item.title, href: "#services" }))} />
            <div>
              <h4 className="font-heading font-extrabold text-white">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li><a href="mailto:arga.bayu@example.com" className="hover:text-blue-400">arga.bayu@example.com</a></li>
                <li><a href="https://wa.me/6281234567890" className="hover:text-blue-400">+62 812-3456-7890</a></li>
                <li>Indonesia (Remote)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row">
            <p>© 2026 Arga Bayu Ramadhan. All rights reserved.</p>
            <p>Made with ❤️ in Indonesia</p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-xl shadow-blue-600/25 transition ${showTop ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-extrabold text-blue-600">{tag}</span>
      <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{subtitle}</p>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-slate-700">
      {label}
      {children}
    </label>
  );
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-heading font-extrabold text-white">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a href={link.href} className="text-sm text-slate-400 transition hover:pl-1 hover:text-blue-400">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}