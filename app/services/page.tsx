import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Full-spectrum construction services in Kenya — structural design, build and fabricate, finishing works, renovation, survey, plumbing and electrical. Serving Nairobi, Kiambu and Murang'a.",
};

const steps = [
  { n:"01", title:"Consultation",  desc:"We discuss your requirements, walk the site, and assess scope — free, no obligation.", icon:<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg> },
  { n:"02", title:"Proposal",      desc:"You receive a detailed scope, timeline, and fixed-price quotation within 3 business days.", icon:<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg> },
  { n:"03", title:"Execution",     desc:"Our specialist team mobilises and delivers with regular progress updates throughout.", icon:<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg> },
  { n:"04", title:"Sign-off",      desc:"We walk through the completed works, certify and issue a defects warranty.", icon:<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg> },
];

const faqs = [
  { q:"Do you handle all project types?",              a:"Yes — residential homes, commercial buildings, industrial facilities, renovations, surveys and equipment hire. No project is too large or small." },
  { q:"How long does a residential build take?",       a:"A standard 4-bedroom house takes 9–14 months from design approval to handover, depending on complexity. We provide a detailed programme at the start." },
  { q:"Do you handle local authority approvals?",      a:"Yes. Our design team prepares all documentation for county council and NCA submissions. We understand Kenyan building codes and authority requirements thoroughly." },
  { q:"Which areas do you serve?",                     a:"Nairobi, Kiambu and Murang'a are our primary service areas. For larger projects, we can mobilise to other counties — please contact us." },
  { q:"Can I hire just one service, e.g. finishing?",  a:"Absolutely. While we can manage a complete build, we also offer individual services — finishing, MEP, survey, renovation — independently." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:"linear-gradient(rgba(245,158,11,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.8) 1px,transparent 1px)", backgroundSize:"64px 64px" }} aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span><span className="text-stone-300">Services</span>
          </nav>
          <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-400">What We Do</span></div>
          <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize:"clamp(2.6rem,6vw,4.5rem)" }}>Our Services</h1>
          <p className="text-stone-400 text-xl max-w-xl leading-relaxed">End-to-end construction — from the first survey peg to the final coat of paint.</p>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-stone-50 py-20 lg:py-28" aria-labelledby="grid-h2">
        <div className="section-container">
          <h2 id="grid-h2" className="sr-only">All services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article key={svc.id} className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-1 bg-stone-100 group-hover:bg-amber-400 transition-colors" aria-hidden="true" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-3xl w-14 h-14 bg-stone-50 group-hover:bg-amber-50 rounded-2xl flex items-center justify-center mb-6 transition-colors" aria-hidden="true">{svc.icon}</div>
                  <h3 className="text-stone-900 font-bold text-lg mb-3 group-hover:text-amber-600 transition-colors">{svc.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">{svc.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.scope.slice(0,3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-stone-500 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-7 flex items-center gap-3">
                  <Link href={`/services/${svc.slug}`}
                    className="text-amber-600 hover:text-amber-700 text-sm font-bold uppercase tracking-wide inline-flex items-center gap-1.5 group/link transition-colors">
                    Learn more <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <span className="text-stone-200">·</span>
                  <WhatsAppButton message={`Hello, I'm interested in ${svc.name}. Please tell me more.`} label="Enquire" variant="outline" className="text-xs py-1.5 px-3 border-green-300 text-green-600" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone-950 py-20 lg:py-28" aria-labelledby="process-h2">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="amber-rule" /><span className="eyebrow text-amber-400">Our Approach</span><div className="amber-rule" /></div>
            <h2 id="process-h2" className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">How We Work</h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">A clear, accountable process — so you know exactly what to expect.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ n, title, desc, icon }, i) => (
              <div key={n} className="relative">
                {i<3 && <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] right-0 border-t-2 border-dashed border-stone-700" aria-hidden="true" />}
                <div className="relative z-10 text-center lg:text-left">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-5 mx-auto lg:mx-0 shadow-lg shadow-amber-500/20 text-stone-950">{icon}</div>
                  <span className="text-amber-500/40 font-black text-4xl tabular-nums block mb-2">{n}</span>
                  <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-colors shadow-xl shadow-amber-500/20">
              Start Your Project <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="why-h2">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4"><div className="amber-rule" /><span className="eyebrow text-amber-600">Why Ephravilla</span></div>
              <h2 id="why-h2" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight mb-6">The Ephravilla difference</h2>
              <p className="text-stone-600 leading-relaxed mb-8">We deliver on three things that matter most to clients: quality, honesty, and accountability.</p>
              <ul className="space-y-5">
                {[
                  { t:"Licensed & experienced professionals",   d:"Every trade — from structural engineers to electricians — is certified and vetted." },
                  { t:"Transparent, fixed-scope contracts",     d:"No vague BOQs, no surprise costs. You know what you're paying before work begins." },
                  { t:"Kenya-specific expertise",               d:"We understand local building codes, supply chains, climate and authority processes." },
                  { t:"Post-handover support",                  d:"Our defects liability period means we're accountable after the keys are handed over." },
                ].map(({ t, d }) => (
                  <li key={t} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <p className="text-stone-900 font-semibold text-sm mb-0.5">{t}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/projects/column-starters-team.jpg"
                  alt="Ephravilla construction team working on column starter bar positions on a residential site in Kiambu"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-amber-500 rounded-xl p-5 shadow-xl">
                <p className="text-stone-950 font-black text-2xl leading-none">100%</p>
                <p className="text-stone-800 text-xs font-semibold mt-1">Client commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-20 lg:py-24" aria-labelledby="faq-h2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="amber-rule" /><span className="eyebrow text-amber-600">Common Questions</span><div className="amber-rule" /></div>
            <h2 id="faq-h2" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight">Frequently asked questions</h2>
          </div>
          <dl className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-stone-200 p-6">
                <dt className="text-stone-900 font-bold text-base mb-3 flex items-start gap-3">
                  <span className="w-5 h-5 bg-amber-500 rounded text-stone-950 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">?</span>{q}
                </dt>
                <dd className="text-stone-600 text-sm leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-center">
            <p className="text-stone-500 text-sm mb-4">Have a question we haven&apos;t answered?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary rounded-xl text-sm">Ask Us</Link>
              <WhatsAppButton label="WhatsApp a Question" variant="outline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
