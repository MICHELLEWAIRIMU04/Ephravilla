import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { services }  from "@/lib/data/services";
import { projects }  from "@/lib/data/projects";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "Building with Integrity | Ephravilla Construction Limited",
  description:
    "Professional residential and commercial construction across Nairobi, Kiambu and Murang'a. Structural design, renovation, survey, plumbing, electrical and equipment leasing. Est. 2024.",
};

/* ─── Data ───────────────────────────────────────────────────────────────── */
const stats = [
  { value: "2024", label: "Established" },
  { value: "20+",  label: "Projects Delivered" },
  { value: "3",    label: "Service Areas" },
  { value: "100%", label: "Client Commitment" },
];

const coreValues = [
  { icon: "⚖️", title: "Integrity",  desc: "Honest pricing, transparent timelines — no surprises." },
  { icon: "🤝", title: "Empathy",    desc: "We build what you actually need." },
  { icon: "💡", title: "Innovation", desc: "Modern techniques, forward-thinking design." },
  { icon: "👥", title: "Teamwork",   desc: "Great buildings come from great collaboration." },
];

const steps = [
  { n: "01", title: "Consult",  desc: "We listen, walk the site and understand your goals — free." },
  { n: "02", title: "Design",   desc: "Drawings, 3D renders and bill of quantities for your approval." },
  { n: "03", title: "Build",    desc: "Expert site teams execute with weekly progress updates." },
  { n: "04", title: "Deliver",  desc: "We snag, certify and hand over with a defects liability period." },
];

const testimonials = [
  { quote: "Delivered our home on time and on budget. The quality of finishing is outstanding.", author: "A. Kariuki", role: "Homeowner, Kiambu" },
  { quote: "Professional team, honest communication and a build that exceeded our expectations.", author: "M. Waweru",  role: "Developer, Nairobi" },
  { quote: "From initial survey to final handover, every stage was managed with expertise and care.", author: "J. Muthee", role: "Estate Manager, Murang'a" },
];

const typeColor: Record<string, string> = {
  residential: "bg-blue-50 text-blue-700 border border-blue-200",
  commercial:  "bg-purple-50 text-purple-700 border border-purple-200",
  renovation:  "bg-amber-50 text-amber-700 border border-amber-200",
  survey:      "bg-green-50 text-green-700 border border-green-200",
};

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema()} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col bg-stone-950" aria-label="Hero">
        {/* Background — real site photo */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/projects/residential-house-roofed.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(12,10,9,.7) 0%,rgba(12,10,9,.4) 45%,rgba(12,10,9,.95) 100%)" }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 z-10" aria-hidden="true" />

        <div className="relative flex-1 flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10 bg-amber-500" />
                <span className="eyebrow text-amber-400">Nairobi · Kiambu · Murang&apos;a</span>
              </div>
              <h1 className="text-white font-black leading-[1.03] tracking-tight mb-6" style={{ fontSize: "clamp(2.8rem,7vw,5.2rem)" }}>
                Building <span className="text-amber-400">Dreams</span><br />With Integrity
              </h1>
              <p className="text-stone-300 text-xl leading-relaxed mb-10 max-w-2xl">
                From architectural concept to final handover — Ephravilla Construction delivers
                residential homes, commercial buildings and specialist services built to last generations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 hover:-translate-y-0.5">
                  View Our Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-white/60 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all hover:bg-white/5">
                  Get a Free Quote
                </Link>
                <WhatsAppButton variant="outline" label="WhatsApp Us" className="border-green-500/50 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 px-8 py-4 rounded-xl text-sm" />
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-white/10">
                {["Licensed & Insured", "Free Consultation", "Mon–Sat Service"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-stone-400 text-sm">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-stone-900/70 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-6 py-6 text-center">
                  <dt className="text-amber-400 font-black tabular-nums text-4xl">{value}</dt>
                  <dd className="text-stone-400 text-xs font-semibold mt-1.5 uppercase tracking-widest">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ══ ABOUT SNIPPET ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="home-about-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 relative">
                <Image
                  src="/images/projects/column-starters-team.jpg"
                  alt="Ephravilla construction team setting column starter bars on a residential project site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-stone-950 rounded-2xl p-5 shadow-2xl border border-stone-800">
                <p className="text-amber-400 font-black text-3xl leading-none">2024</p>
                <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest mt-1.5">Est.</p>
              </div>
              <div className="absolute top-6 -left-3 sm:-left-6 bg-amber-500 rounded-xl p-4 shadow-xl">
                <p className="text-stone-950 font-black text-sm leading-tight">&ldquo;Building with Integrity&rdquo;</p>
                <p className="text-stone-800 text-xs mt-0.5">Our tagline</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">Who We Are</span></div>
              <h2 id="home-about-h" className="text-stone-900 font-black tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Kenya&apos;s trusted<br /><span className="text-amber-500">construction partner</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Founded in 2024, Ephravilla Construction brings together architects, structural engineers,
                surveyors and skilled tradespeople — united by a commitment to delivering exceptional
                buildings at honest prices.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Our mission: utilise our vast building expertise and actualise your dream home.
                Our vision: create modest, innovative building solutions for communities across Kenya.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {coreValues.map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl">
                    <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                    <div>
                      <p className="text-stone-900 text-sm font-bold leading-tight">{title}</p>
                      <p className="text-stone-500 text-xs mt-0.5 leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                  Our Full Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <WhatsAppButton label="WhatsApp Us" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ═════════════════════════════════════════════════════ */}
      <section className="bg-stone-950 py-20 lg:py-28" aria-labelledby="home-services-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-400">What We Do</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="home-services-h" className="text-white font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Our Services</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">Full-spectrum construction — from the first drawing to final handover.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((svc) => (
              <Link key={svc.id} href={`/services/${svc.slug}`}
                className="group relative bg-stone-900 rounded-2xl border border-stone-800 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
                <div className="p-7">
                  <div className="text-3xl w-12 h-12 bg-stone-800 group-hover:bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 transition-colors" aria-hidden="true">{svc.icon}</div>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-amber-400 transition-colors">{svc.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-5 line-clamp-3">{svc.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-colors shadow-lg shadow-amber-500/20">
              All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="home-process-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">How We Work</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="home-process-h" className="text-stone-900 font-black tracking-tight text-3xl sm:text-4xl">From idea to completion</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <div key={n} className="relative">
                {i < 3 && <div className="hidden lg:block absolute top-6 left-full w-full h-px border-t-2 border-dashed border-stone-200 -translate-x-4 z-0" aria-hidden="true" />}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-amber-500/20">
                    <span className="text-stone-950 font-black text-sm">{n}</span>
                  </div>
                  <h3 className="text-stone-900 font-bold text-lg mb-2">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECTS — Real photos ═══════════════════════════════════ */}
      <section className="bg-stone-50 py-20 lg:py-28" aria-labelledby="home-projects-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">Our Work</span></div>
              <h2 id="home-projects-h" className="text-stone-900 font-black tracking-tight text-3xl sm:text-4xl">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-amber-600 hover:text-amber-700 text-sm font-bold uppercase tracking-wide inline-flex items-center gap-1.5 group flex-shrink-0 transition-colors">
              View all projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid lg:grid-cols-5 gap-5">
            {featuredProjects[0] && (
              <Link href={`/projects/${featuredProjects[0].slug}`}
                className="group lg:col-span-3 relative rounded-2xl overflow-hidden block"
                aria-label={`View project: ${featuredProjects[0].title}`}>
                <div className="relative aspect-[4/3] lg:h-full lg:aspect-auto min-h-[280px]">
                  <Image
                    src={featuredProjects[0].images.thumbnail}
                    alt={`${featuredProjects[0].title} — ${featuredProjects[0].type} construction project in ${featuredProjects[0].location}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(12,10,9,.9) 0%,rgba(12,10,9,.2) 55%,transparent 100%)" }} aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-sm ${typeColor[featuredProjects[0].type]}`}>
                      {featuredProjects[0].type.charAt(0).toUpperCase() + featuredProjects[0].type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-stone-400 text-xs mb-1">📍 {featuredProjects[0].location} · {featuredProjects[0].year}</p>
                    <h3 className="text-white font-black text-xl leading-tight group-hover:text-amber-400 transition-colors">{featuredProjects[0].title}</h3>
                    <p className="text-stone-400 text-sm mt-2 line-clamp-2">{featuredProjects[0].shortDescription}</p>
                  </div>
                </div>
              </Link>
            )}

            <div className="lg:col-span-2 flex flex-col gap-5">
              {featuredProjects.slice(1, 3).map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`}
                  className="group relative rounded-2xl overflow-hidden flex-1 block min-h-[200px]"
                  aria-label={`View project: ${p.title}`}>
                  <Image
                    src={p.images.thumbnail}
                    alt={`${p.title} — ${p.type} construction project in ${p.location}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(12,10,9,.9) 0%,rgba(12,10,9,.1) 60%,transparent 100%)" }} aria-hidden="true" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-sm ${typeColor[p.type]}`}>
                      {p.type.charAt(0).toUpperCase() + p.type.slice(1)}
                    </span>
                    {p.status === "ongoing" && <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-green-500 text-white">Ongoing</span>}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-stone-400 text-xs mb-1">📍 {p.location}</p>
                    <h3 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREAS ═════════════════════════════════════════════════════ */}
      <section className="bg-amber-500 py-14" aria-labelledby="home-areas-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 id="home-areas-h" className="text-stone-950 font-black text-2xl sm:text-3xl mb-2">Serving three counties</h2>
              <p className="text-stone-800 text-sm">Headquartered in Kiambu, operating across Nairobi and Murang&apos;a.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[{ name: "Nairobi", sub: "Capital & metro" }, { name: "Kiambu", sub: "Headquarters" }, { name: "Murang'a", sub: "Central region" }].map(({ name, sub }) => (
                <div key={name} className="bg-stone-950 rounded-2xl px-6 py-4 text-center min-w-[130px]">
                  <p className="text-amber-400 font-black text-base">{name}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-20" aria-labelledby="home-testimonials-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-400">Client Feedback</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="home-testimonials-h" className="text-white font-black text-3xl tracking-tight">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, author, role }) => (
              <blockquote key={author} className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
                <div className="flex gap-0.5 mb-4" aria-label="5-star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-5 italic">&ldquo;{quote}&rdquo;</p>
                <footer>
                  <p className="text-white font-semibold text-sm">{author}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════════ */}
      <section className="bg-stone-950 py-24 lg:py-32" aria-labelledby="home-cta-h">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-400">Start Today</span><div className="h-px w-8 bg-amber-500" /></div>
          <h2 id="home-cta-h" className="text-white font-black tracking-tight mb-5" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>Ready to start building?</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll respond within one business day — no obligation, just expert advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-9 py-4 rounded-xl text-sm tracking-wide transition-all shadow-2xl shadow-amber-500/20 hover:-translate-y-0.5">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <WhatsAppButton label="WhatsApp Us" variant="outline" className="border-green-400/40 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 px-9 py-4 rounded-xl text-sm" />
            <a href="tel:+254798900032" className="inline-flex items-center gap-2 border-2 border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white px-9 py-4 rounded-xl text-sm font-semibold transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0798 900 032
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
