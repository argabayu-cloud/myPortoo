"use client";

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  SearchCheck,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap
} from "lucide-react";
import { FormEvent, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const services = [
  {
    title: "Website Development",
    description: "Membangun website company profile, personal brand, dan web bisnis yang cepat, responsive, dan mudah dikembangkan.",
    icon: Globe2
  },
  {
    title: "Landing Page Development",
    description: "Landing page conversion-focused untuk campaign, produk, jasa, dan validasi ide bisnis digital.",
    icon: Rocket
  },
  {
    title: "Frontend Web App",
    description: "Implementasi dashboard, admin panel, SaaS UI, dan aplikasi web interaktif menggunakan React/Next.js.",
    icon: Layers3
  },
  {
    title: "UI Slicing dari Figma",
    description: "Mengubah desain Figma menjadi kode frontend yang pixel-aware, clean, reusable, dan mobile-first.",
    icon: Code2
  },
  {
    title: "Performance & SEO",
    description: "Optimasi Core Web Vitals, struktur semantic, metadata, accessibility, dan pengalaman loading yang ringan.",
    icon: SearchCheck
  },
  {
    title: "Maintenance & Improvement",
    description: "Perbaikan bug, peningkatan UI, refactor komponen, dan pengembangan fitur lanjutan secara bertahap.",
    icon: Wrench
  }
];

const projects = [
  {
    title: "SaaS Dashboard Interface",
    description: "Dashboard analytics modern dengan card statistik, chart area, tabel data, dan layout responsive untuk tim produk.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-blue-600 via-sky-500 to-cyan-400"
  },
  {
    title: "E-Commerce Landing Page",
    description: "Landing page toko online dengan hero campaign, product highlight, testimonial, dan CTA WhatsApp.",
    tags: ["React", "Tailwind", "SEO"],
    gradient: "from-slate-900 via-blue-700 to-sky-400"
  },
  {
    title: "Agency Company Profile",
    description: "Website company profile profesional untuk agensi digital dengan section layanan, case study, dan contact form.",
    tags: ["Next.js", "Responsive", "Vercel"],
    gradient: "from-indigo-600 via-blue-600 to-slate-900"
  },
  {
    title: "Portfolio Personal Branding",
    description: "Portfolio personal yang menonjolkan skill, project, workflow, dan kontak untuk peluang freelance maupun hiring.",
    tags: ["UI Design", "Next.js", "A11y"],
    gradient: "from-sky-400 via-blue-600 to-indigo-700"
  }
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",
  "Accessibility",
  "SEO",
  "Git & GitHub",
  "Vercel",
  "Figma",
  "Performance Optimization"
];

const workflows = [
  "Discovery & requirement",
  "UI planning / slicing",
  "Development",
  "Testing & optimization",
  "Launch & support"
];

const testimonials = [
  {
    quote: "Komunikasi jelas, hasil rapi, dan halaman yang dibuat terasa cepat diakses dari mobile.",
    name: "Client Project",
    role: "Business Owner"
  },
  {
    quote: "Arga mampu menerjemahkan kebutuhan desain menjadi frontend yang clean dan mudah dikembangkan.",
    name: "Product Team",
    role: "Startup Collaboration"
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

    window.location.href = `mailto:arga.bayu@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 rounded-full" aria-label="Arga Bayu Ramadhan Home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-glow">
              AB
            </span>
            <span>
              <span className="block text-sm font-extrabold leading-5 text-slate-950">Arga Bayu</span>
              <span className="block text-xs font-medium text-slate-500">Frontend Developer</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-600 lg:inline-flex"
          >
            Hubungi Saya
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="container-shell pb-5 lg:hidden">
            <div className="grid gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-slate-50 pt-28">
        <div className="absolute inset-0 bg-hero-grid bg-[length:42px_42px]" />
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 top-52 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="container-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Available for freelance & collaboration
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Frontend Developer yang Membangun Website{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                Modern & Cepat.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Saya Arga Bayu Ramadhan, membantu bisnis dan tim produk mengubah ide atau desain menjadi pengalaman web
              yang rapi, responsif, profesional, dan siap digunakan.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Mulai Project <ArrowRight size={19} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-extrabold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
              >
                Lihat Portfolio <ExternalLink size={18} />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["10+", "UI Sections"],
                ["100%", "Responsive"],
                ["90+", "SEO Target"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <strong className="block text-2xl font-black text-slate-950">{value}</strong>
                  <span className="mt-1 block text-xs font-semibold text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-float">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/25 to-sky-300/20 blur-2xl" />
            <div className="glass-card relative rounded-[2rem] p-5">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="overflow-hidden text-sm leading-7 text-slate-300">
                  <code>{`const developer = {
  name: "Arga Bayu Ramadhan",
  role: "Frontend Developer",
  stack: ["React", "Next.js", "Tailwind"],
  focus: "Modern responsive web",
  status: "Ready to build"
};`}</code>
                </pre>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-blue-600 p-5 text-white">
                  <Zap className="mb-5" size={28} />
                  <p className="text-sm font-semibold text-blue-100">Performance-first interface</p>
                  <p className="mt-2 text-2xl font-black">Fast & scalable</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <ShieldCheck className="mb-5 text-blue-600" size={28} />
                  <p className="text-sm font-semibold text-slate-500">Clean implementation</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">Ready to ship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Saya membangun frontend yang tidak hanya terlihat bagus, tetapi juga nyaman digunakan.</h2>
            <p className="section-description">
              Sebagai Frontend Developer, saya fokus pada implementasi antarmuka web yang modern, responsif, dan maintainable. Saya terbiasa mengubah kebutuhan produk maupun desain visual menjadi halaman web yang terstruktur, cepat, dan siap berkembang.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Responsive-first", desc: "Setiap layout dirancang optimal dari mobile hingga desktop.", icon: Smartphone },
              { title: "Clean Code", desc: "Struktur komponen rapi, reusable, dan mudah dipelihara.", icon: Code2 },
              { title: "Detail Oriented", desc: "Memperhatikan spacing, typography, state, dan konsistensi UI.", icon: Award },
              { title: "Product Mindset", desc: "Tidak hanya coding, tetapi juga memikirkan goal bisnis dan user.", icon: BriefcaseBusiness }
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <item.icon className="text-blue-600" size={30} />
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-slate-50">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Services</span>
            <h2 className="section-title">Layanan frontend untuk kebutuhan digital yang profesional.</h2>
            <p className="section-description mx-auto">
              Dari landing page sederhana hingga dashboard web app, saya membantu membangun interface yang cepat, rapi, dan siap digunakan oleh pengguna nyata.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-blue-100 hover:shadow-soft">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="section-label">Selected Projects</span>
              <h2 className="section-title">Contoh portfolio yang relevan untuk bisnis dan produk digital.</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Showcase berikut menggambarkan jenis project yang dapat dikembangkan: landing page, dashboard, company profile, dan portfolio profesional.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-soft">
                <div className={`h-56 bg-gradient-to-br ${project.gradient} p-6`}>
                  <div className="h-full rounded-[1.5rem] border border-white/30 bg-white/15 p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-white">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">Case Study</span>
                      <ExternalLink size={20} />
                    </div>
                    <div className="mt-16 h-3 w-3/4 rounded-full bg-white/60" />
                    <div className="mt-3 h-3 w-1/2 rounded-full bg-white/40" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-slate-950 text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200">Skills & Tools</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Stack modern untuk membangun pengalaman web berkualitas.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Fokus utama saya adalah frontend engineering: struktur UI, interaksi, performa, accessibility, dan kesiapan deploy.
            </p>

            <div className="mt-9 space-y-4">
              {workflows.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 font-black">{index + 1}</span>
                  <span className="font-bold text-slate-100">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white px-4 py-3 text-sm font-extrabold text-slate-950 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Modern UI", "SEO Ready", "Fast Delivery"].map((item) => (
                <div key={item} className="rounded-3xl bg-white/10 p-5">
                  <CheckCircle2 className="text-sky-300" size={26} />
                  <p className="mt-4 font-extrabold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">Diposisikan untuk kolaborasi yang jelas, cepat, dan profesional.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg font-semibold leading-8 text-slate-800">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6">
                  <strong className="block text-slate-950">{testimonial.name}</strong>
                  <span className="text-sm font-medium text-slate-500">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Punya ide website atau butuh Frontend Developer?</h2>
            <p className="section-description">
              Ceritakan kebutuhan project Anda. Saya siap membantu membuat landing page, company profile, dashboard, atau frontend web app yang modern dan profesional.
            </p>

            <div className="mt-9 grid gap-4">
              <a href="mailto:arga.bayu@example.com" className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                <Mail className="text-blue-600" /> arga.bayu@example.com
              </a>
              <a href="https://wa.me/6281234567890" className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                <Send className="text-blue-600" /> WhatsApp: +62 812-3456-7890
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/" aria-label="GitHub" className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-blue-600">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-blue-600">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Nama
                <input name="name" required placeholder="Nama Anda" className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input name="email" type="email" required placeholder="email@domain.com" className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Pesan
                <textarea name="message" required rows={6} placeholder="Ceritakan kebutuhan project Anda..." className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400" />
              </label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-700">
                Kirim Pesan <ArrowRight size={19} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="container-shell flex flex-col justify-between gap-5 text-sm font-semibold text-slate-500 md:flex-row md:items-center">
          <p>© 2026 Arga Bayu Ramadhan. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
