import React, { useMemo } from "react";
import { Mail, Phone, MapPin, MessageCircle, ChevronRight, Star } from "lucide-react";

// ====== QUICK EDIT CONTENT ======
const content = {
  brand: {
    name: "IDCPrep360",
    logoText: "IDCPrep360",
    tagline: "Multilingual IDC prep + job board connecting dive pros & dive centers",
    ctaPrimary: { label: "Start IDC Prep", href: "#contact" },
    ctaSecondary: { label: "WhatsApp", href: "https://wa.me/6285190401338" },
  },
  hero: {
    headline: "Ace your PADI IDC with EN / FR / 中文 content",
    sub: "Videos (cours standards, physics/physiology, skills & briefings) and IE‑style practice exams with corrections.",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1600&auto=format&fit=crop",
  },
  highlights: [
    { title: "IDC mastery", desc: "Structured videos + quizzes mapped to the IE." },
    { title: "Job board", desc: "Connections between DCs, managers, OWSI & DMs." },
    { title: "Multilingual", desc: "English, Français, 中文." },
  ],
  about: {
    title: "Why IDCPrep360",
    body: "Designed by a PADI Course Director, IDCPrep360 gives candidates everything they need to feel ready: step‑by‑step video lessons, downloadable checklists, realistic mock exams, and a curated job board to launch your teaching career.",
    image: "https://images.unsplash.com/photo-1544551763-7ef420be2a87?q=80&w=1200&auto=format&fit=crop",
  },
  services: {
    title: "What you get",
    items: [
      { title: "Video training (EN/FR/中文)", desc: "Covering standards, physics/physiology, skills & briefings.", bullet: ["Indexed playlists", "Downloadable notes", "Updates each IE cycle"] },
      { title: "Practice exams", desc: "IE‑style question banks with corrections and explanations.", bullet: ["Standards & Procedures", "Physics & Physiology", "RDP/ERDP"] },
      { title: "Pro job board", desc: "Private network connecting dive centers & hiring managers with certified pros.", bullet: ["Global listings", "Direct messaging", "Verified employers"] },
    ],
  },
  testimonials: {
    title: "Happy candidates",
    items: [
      { name: "Alex", text: "IDCPrep360 made complex theory simple — I passed with confidence!", rating: 5 },
      { name: "Maya", text: "The videos in French and English helped me master tricky standards.", rating: 5 },
      { name: "Jun", text: "中文 explanations were a game changer for me. I felt fully prepared.", rating: 5 },
    ],
  },
  faq: {
    title: "FAQs",
    items: [
      { q: "Is there a pass guarantee?", a: "We don’t promise results, but the course is built to maximize your IE readiness with targeted training and realistic practice." },
      { q: "Which languages are supported?", a: "All core videos and key documents are available in English, French and Chinese." },
      { q: "How do I access the job board?", a: "Enrollment includes a member profile and direct apply links to partner dive centers." },
    ],
  },
  contact: {
    title: "Get started",
    email: "elise@idcprep360.com",
    phone: "+62 851-9040-1338",
    address: "Labuan Bajo, Indonesia",
    formspreeEndpoint: "https://formspree.io/f/your-id",
    whatsapp: "https://wa.me/6285190401338",
    mapLink: "https://maps.google.com?q=Labuan+Bajo",
  },
  footer: {
    note: "© " + new Date().getFullYear() + " IDCPrep360. All rights reserved.",
  }
};

// ====== UI ======
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`w-full max-w-6xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
  );
}

function Badge({ children }) {
  return <span className="inline-block text-xs uppercase tracking-wide px-2 py-1 rounded-full border border-[#0057A7] text-[#0057A7]">{children}</span>;
}

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: n }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current text-[#ED1C24]" />)}
    </div>
  );
}

export default function App() {
  const hasForm = Boolean(content.contact.formspreeEndpoint);
  const features = useMemo(() => content.highlights || [], []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-[#0057A7]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <div className="font-bold text-lg text-[#ED1C24]">{content.brand.logoText}</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-[#ED1C24]">About</a>
            <a href="#services" className="hover:text-[#ED1C24]">Services</a>
            <a href="#contact" className="hover:text-[#ED1C24]">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={content.brand.ctaSecondary.href} className="hidden sm:inline-block border rounded-xl px-3 py-2 text-sm border-[#ED1C24] text-[#ED1C24]">{content.brand.ctaSecondary.label}</a>
            <a href={content.brand.ctaPrimary.href} className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm bg-[#0057A7] text-white">
              {content.brand.ctaPrimary.label}
              <ChevronRight className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative">
        <Section id="home" className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge>IDC • Job Board • EN/FR/中文</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#0057A7]">{content.hero.headline}</h1>
            <p className="mt-4 text-gray-600 md:text-lg">{content.hero.sub}</p>
            <div className="mt-6 flex gap-3">
              <a href={content.brand.ctaPrimary.href} className="rounded-xl px-5 py-3 bg-[#0057A7] text-white">{content.brand.ctaPrimary.label}</a>
              <a href={content.brand.ctaSecondary.href} className="rounded-xl px-5 py-3 border inline-flex items-center gap-2 border-[#ED1C24] text-[#ED1C24]">
                <MessageCircle className="w-4 h-4"/> {content.brand.ctaSecondary.label}
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-4 rounded-2xl border border-[#0B1F3A]/10">
                  <div className="font-medium text-[#0057A7]">{f.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={content.hero.image} alt="Hero" className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow ring-4 ring-[#ED1C24]/10"/>
          </div>
        </Section>
      </header>

      {/* ABOUT */}
      <Section id="about" className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src={content.about.image} alt="About" className="w-full h-72 md:h-96 object-cover rounded-3xl shadow"/>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">{content.about.title}</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{content.about.body}</p>
          <div className="mt-6">
            <a href="#services" className="inline-block rounded-xl px-5 py-3 border border-[#0057A7] text-[#0057A7]">Discover services</a>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{content.services.title}</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {content.services.items.map((s, i) => (
            <div key={i} className="p-6 rounded-3xl border border-[#0B1F3A]/10 h-full flex flex-col">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {s.bullet.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-block rounded-xl px-4 py-2 border border-[#0057A7] text-[#0057A7]">Ask about {s.title}</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{content.testimonials.title}</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {content.testimonials.items.map((t, i) => (
            <div key={i} className="p-6 rounded-3xl border border-[#0B1F3A]/10 bg-white">
              <div className="flex items-center gap-1">{Array.from({length: t.rating}).map((_,k)=>(<Star key={k} className="w-4 h-4 fill-current text-[#ED1C24]" />))}</div>
              <p className="mt-3 text-gray-800">“{t.text}”</p>
              <div className="mt-3 text-sm text-gray-600">— {t.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{content.faq.title}</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {content.faq.items.map((f, i) => (
            <div key={i} className="p-6 rounded-3xl border border-[#0B1F3A]/10">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{content.contact.title}</h2>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5"/> {content.contact.email}</div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5"/> {content.contact.phone}</div>
              <a href={content.contact.whatsapp} className="flex items-center gap-3 hover:underline"><MessageCircle className="w-5 h-5"/> WhatsApp</a>
              <a href={content.contact.mapLink} className="flex items-center gap-3 hover:underline"><MapPin className="w-5 h-5"/> Map</a>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={content.brand.ctaSecondary.href} className="rounded-xl px-5 py-3 border inline-flex items-center gap-2 border-[#ED1C24] text-[#ED1C24]">
                <MessageCircle className="w-4 h-4"/> {content.brand.ctaSecondary.label}
              </a>
              <a href={`mailto:${content.contact.email}`} className="rounded-xl px-5 py-3 bg-[#0057A7] text-white">Email us</a>
            </div>
          </div>
          <div>
            {hasForm ? (
              <form action={content.contact.formspreeEndpoint} method="POST" className="p-6 rounded-3xl border border-[#0B1F3A]/10 bg-white shadow-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Name</label>
                    <input name="name" required className="mt-1 w-full border rounded-xl px-3 py-2"/>
                  </div>
                  <div>
                    <label className="text-sm">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full border rounded-xl px-3 py-2"/>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm">Message</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full border rounded-xl px-3 py-2"/>
                </div>
                <button className="mt-4 w-full rounded-xl px-4 py-2 bg-[#0057A7] text-white">Send</button>
              </form>
            ) : (
              <div className="p-6 rounded-3xl border border-[#0B1F3A]/10 bg-gray-50 text-gray-700">
                <p>Contact form is disabled — add your Formspree endpoint in the content above to enable it.</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-10 py-10 border-t">
        <Section id="footer" className="flex items-center justify-between">
          <div className="text-sm text-gray-600">{content.footer.note}</div>
          <a href="#home" className="text-sm">Back to top ↑</a>
        </Section>
      </footer>
    </div>
  );
}
