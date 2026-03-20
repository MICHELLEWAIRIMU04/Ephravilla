import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { services } from "@/lib/data/services";
import { JsonLd, localBusinessSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ephravilla Construction Limited — our story, mission, vision, core values and the team behind every project we build across Nairobi, Kiambu and Murang'a.",
};

const milestones = [
  { year: "2024", event: "Ephravilla Construction Limited incorporated in Kiambu, Kenya." },
  { year: "2024", event: "First residential project completed — Kimathi Family Residence, Kiambu Town." },
  { year: "2024", event: "Equipment leasing division launched, serving Nairobi and Kiambu contractors." },
  { year: "2024", event: "20+ projects delivered across residential, commercial and survey categories." },
  { year: "2025", event: "Office opening in Kiambu — expanding capacity to serve more clients." },
];

const values = [
  { icon: "⚖️", bg: "bg-amber-50 border-amber-100", title: "Integrity", desc: "We do exactly what we say. Honest pricing, transparent timelines, and no hidden costs — ever." },
  { icon: "🤝", bg: "bg-blue-50 border-blue-100",   title: "Empathy",   desc: "Your project is personal. We listen to understand your goals, budget and vision before we build." },
  { icon: "💡", bg: "bg-stone-50 border-stone-200", title: "Innovation", desc: "We stay current with modern techniques and sustainable materials — so your build benefits from the best." },
  { icon: "👥", bg: "bg-green-50 border-green-100", title: "Teamwork",   desc: "Great buildings come from great collaboration — across trades, disciplines and with you, the client." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* PAGE HERO */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.8) 1px,transparent 1px)", backgroundSize: "64px 64px" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-stone-300">About</span>
          </nav>
          <div className="flex items-center gap-3 mb-5"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-400">Our Story</span></div>
          <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)" }}>
            About <span className="text-amber-400">Ephravilla</span>
          </h1>
          <p className="text-stone-400 text-xl max-w-xl leading-relaxed">A construction company built on a simple belief — every client deserves expertise, honesty and a building they can be proud of.</p>
        </div>
      </div>

      {/* COMPANY STORY */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="story-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                <Image
                  src="/images/projects/residential-build-progress.jpg"
                  alt="Ephravilla construction team working on a residential project in Kiambu — aerial view of active build site"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-stone-950 rounded-2xl p-5 shadow-2xl border border-stone-800">
                <p className="text-amber-400 font-black text-3xl leading-none">2024</p>
                <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest mt-1.5">Est.</p>
              </div>
              <div className="absolute -bottom-6 left-4 sm:left-6 bg-amber-500 rounded-xl px-5 py-4 shadow-xl">
                <p className="text-stone-950 font-black text-sm">20+ projects delivered</p>
                <p className="text-stone-800 text-xs">across 3 counties</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">How We Started</span></div>
              <h2 id="story-h" className="text-stone-900 font-black tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Built on a foundation<br />of <span className="text-amber-500">trust</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">Ephravilla Construction Limited was incorporated in 2024 with a clear purpose: to bring professional, integrity-driven construction services to homeowners and businesses across Nairobi, Kiambu and Murang&apos;a.</p>
              <p className="text-stone-600 leading-relaxed mb-5">Our founders recognised a gap — too many clients were experiencing poor communication, budget overruns and substandard workmanship. Ephravilla was built as a direct response to that problem.</p>
              <p className="text-stone-600 leading-relaxed mb-8">Today our team brings together experienced architects, structural engineers, licensed surveyors, certified electricians and skilled tradespeople — unified by a shared commitment to quality and honest client relationships.</p>
              <div className="flex flex-wrap gap-2">
                {["Nairobi", "Kiambu", "Murang'a"].map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-sm font-medium px-3.5 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />{a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-stone-50 py-20" aria-labelledby="mission-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">Purpose & Direction</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="mission-h" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight">What drives us every day</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-950 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <p className="text-amber-400 eyebrow mb-3">Our Mission</p>
              <h3 className="text-white font-black text-xl mb-4 leading-tight">Actualise your dream home</h3>
              <p className="text-stone-400 leading-relaxed">To utilise our vast building expertise and actualise your dream home — delivering construction that exceeds expectations on quality, timing and value, every single time.</p>
              <div className="mt-6 pt-6 border-t border-stone-800 flex flex-wrap gap-2">
                {["On time", "On budget", "Superior quality"].map((t) => (
                  <span key={t} className="text-xs bg-stone-800 text-stone-300 px-3 py-1.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <p className="text-amber-700 eyebrow mb-3">Our Vision</p>
              <h3 className="text-stone-900 font-black text-xl mb-4 leading-tight">Building solutions for the universe</h3>
              <p className="text-stone-600 leading-relaxed">To create modest, innovative building solutions that serve communities across Kenya and beyond — making quality construction accessible to every family and business.</p>
              <div className="mt-6 pt-6 border-t border-amber-200 flex flex-wrap gap-2">
                {["Accessible", "Innovative", "Community-focused"].map((t) => (
                  <span key={t} className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[{ v: "20+", l: "Projects delivered" }, { v: "3", l: "Counties served" }, { v: "7", l: "Service lines" }, { v: "8+", l: "Equipment units" }].map(({ v, l }) => (
              <div key={l} className="bg-white rounded-2xl p-6 text-center border border-stone-100 shadow-sm">
                <p className="text-amber-500 font-black text-4xl tabular-nums mb-1">{v}</p>
                <p className="text-stone-500 text-sm font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="values-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">What We Stand For</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="values-h" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight mb-4">Our Core Values</h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">These shape how we work on every project, every day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, bg, title, desc }) => (
              <div key={title} className={`rounded-2xl p-7 border ${bg} group hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-3xl mb-5 w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center" aria-hidden="true">{icon}</div>
                <h3 className="text-stone-900 font-bold text-lg mb-3">{title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-stone-950 py-20 lg:py-28" aria-labelledby="timeline-h">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-400">Our Journey</span><div className="h-px w-8 bg-amber-500" /></div>
            <h2 id="timeline-h" className="text-white font-black text-3xl sm:text-4xl tracking-tight">Key milestones</h2>
          </div>
          <ol className="relative border-l border-stone-700 space-y-8 ml-4">
            {milestones.map(({ year, event }, i) => (
              <li key={i} className="ml-6">
                <div className="absolute -left-2.5 w-5 h-5 bg-amber-500 rounded-full border-4 border-stone-950" aria-hidden="true" />
                <span className="inline-block bg-stone-800 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full mb-2">{year}</span>
                <p className="text-stone-300 text-sm leading-relaxed">{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="services-about-h">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3"><div className="h-px w-8 bg-amber-500" /><span className="eyebrow text-amber-600">What We Offer</span></div>
              <h2 id="services-about-h" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight">Our service lines</h2>
            </div>
            <Link href="/services" className="text-amber-600 hover:text-amber-700 text-sm font-bold uppercase tracking-wide inline-flex items-center gap-1.5 group flex-shrink-0 transition-colors">
              All services <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((svc) => (
              <Link key={svc.id} href={`/services/${svc.slug}`}
                className="group flex items-start gap-4 p-5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200">
                <div className="text-2xl w-11 h-11 bg-stone-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" aria-hidden="true">{svc.icon}</div>
                <div>
                  <h3 className="text-stone-900 font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">{svc.name}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{svc.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-950 py-20 lg:py-24" aria-labelledby="about-cta-h">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta-h" className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">Let&apos;s build something great together</h2>
          <p className="text-stone-400 text-lg mb-10 leading-relaxed">Reach out to discuss your project — we&apos;d love to hear what you have in mind.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20">
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <WhatsAppButton label="WhatsApp" variant="outline" className="border-green-400/40 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 px-8 py-4 rounded-xl text-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
