import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services }  from "@/lib/data/services";
import { projects }  from "@/lib/data/projects";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { JsonLd, serviceSchema } from "@/lib/utils/seo";

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return { title: "Service Not Found" };
  return { title: svc.name, description: svc.shortDescription };
}

const typeColors: Record<string,string> = {
  residential:"bg-blue-50 text-blue-700 border border-blue-200",
  commercial: "bg-purple-50 text-purple-700 border border-purple-200",
  renovation: "bg-amber-50 text-amber-700 border border-amber-200",
  survey:     "bg-green-50 text-green-700 border border-green-200",
};

export default function ServiceDetailPage({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  const related         = services.filter((s) => svc.relatedServices.includes(s.slug));
  const relatedProjects = projects.filter((p) => p.services.includes(svc.slug)).slice(0,3);
  const siteUrl         = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ephravilla.com";

  return (
    <>
      <JsonLd data={serviceSchema({ name:svc.name, description:svc.shortDescription, url:`${siteUrl}/services/${svc.slug}` })} />

      {/* Hero */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage:`url('${svc.heroImage}')`, backgroundSize:"cover", backgroundPosition:"center" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(12,10,9,.65),rgba(12,10,9,.97))" }} aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link><span>/</span>
            <span className="text-stone-300 truncate max-w-xs">{svc.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-800 rounded-2xl text-4xl mb-6" aria-hidden="true">{svc.icon}</div>
              <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize:"clamp(2.2rem,5vw,3.8rem)" }}>{svc.name}</h1>
              <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-xl">{svc.shortDescription}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20 hover:-translate-y-0.5">
                  {svc.ctaText} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <WhatsAppButton message={`Hello, I'm interested in your ${svc.name} service. Please tell me more.`} label="WhatsApp Enquiry" variant="outline" className="border-green-400/40 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 px-7 py-3.5 rounded-xl text-sm" />
              </div>
            </div>
            <div className="bg-stone-900/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-800">
              <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-5">Service overview</p>
              <dl className="space-y-4">
                {[["Service","" +svc.name],["Areas served","Nairobi · Kiambu · Murang'a"],["Timeline","Discussed at consultation"],["Consultation","Free — no obligation"]].map(([k,v]) => (
                  <div key={k} className="flex items-start justify-between gap-4">
                    <dt className="text-stone-500 text-xs uppercase tracking-wide flex-shrink-0">{k}</dt>
                    <dd className="text-white text-xs font-semibold text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 pt-5 border-t border-stone-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <p className="text-green-400 text-xs font-semibold">Available — Mon–Sat, 8 AM–5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white">
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-14 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-14">
              <section aria-labelledby="about-svc-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Overview</span></div>
                <h2 id="about-svc-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-5">About this service</h2>
                <p className="text-stone-600 leading-relaxed text-base">{svc.fullDescription}</p>
              </section>

              <section aria-labelledby="scope-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Scope</span></div>
                <h2 id="scope-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-6">What&apos;s included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {svc.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-xl p-4 transition-colors group">
                      <span className="w-6 h-6 bg-amber-100 group-hover:bg-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                        <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                      </span>
                      <span className="text-stone-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="benefits-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Why Choose Us</span></div>
                <h2 id="benefits-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-6">The Ephravilla advantage</h2>
                <div className="space-y-5">
                  {svc.benefits.map((b, i) => (
                    <div key={b} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-amber-500/20">
                        <span className="text-stone-950 font-black text-xs">{String(i+1).padStart(2,"0")}</span>
                      </div>
                      <p className="text-stone-600 text-base leading-relaxed pt-1">{b}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How we deliver */}
              <section className="bg-stone-950 rounded-2xl p-8 lg:p-10" aria-labelledby="how-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-400">Our Process</span></div>
                <h2 id="how-h2" className="text-white font-black text-xl sm:text-2xl tracking-tight mb-8">How we deliver this service</h2>
                <ol className="grid sm:grid-cols-2 gap-6 list-none">
                  {[["01","Consultation","Discuss, site visit, scope assessment — free."],["02","Proposal","Detailed scope, timeline and fixed price within 3 days."],["03","Execution","Specialist team delivers with regular updates."],["04","Sign-off","Walk-through, certification and warranty issued."]].map(([n,t,d]) => (
                    <li key={n} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-stone-950 font-black text-xs">{n}</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{t}</p>
                        <p className="text-stone-500 text-xs leading-relaxed">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Related projects */}
              {relatedProjects.length > 0 && (
                <section aria-labelledby="rp-h2">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2"><div className="amber-rule" /><span className="eyebrow text-amber-600">Portfolio</span></div>
                      <h2 id="rp-h2" className="text-stone-900 font-black text-2xl tracking-tight">Projects using this service</h2>
                    </div>
                    <Link href="/projects" className="text-amber-600 text-xs font-bold uppercase tracking-wide hover:text-amber-700 flex-shrink-0 transition-colors">All projects →</Link>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedProjects.map((p) => (
                      <Link key={p.id} href={`/projects/${p.slug}`} className="group relative rounded-xl overflow-hidden block" aria-label={`View: ${p.title}`}>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={p.images.thumbnail}
                            alt={`${p.title} — ${p.type} project in ${p.location}`}
                            fill
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(12,10,9,.88) 0%,transparent 55%)" }} aria-hidden="true" />
                          <div className="absolute top-2 left-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${typeColors[p.type]}`}>{p.type.charAt(0).toUpperCase()+p.type.slice(1)}</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-white font-bold text-xs group-hover:text-amber-400 transition-colors line-clamp-1">{p.title}</p>
                            <p className="text-stone-400 text-xs mt-0.5">📍 {p.location}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-stone-950 rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-bold text-lg mb-1">Interested?</h3>
                <p className="text-stone-400 text-sm mb-6 leading-relaxed">Free consultation — no pressure, just expert advice on your project.</p>
                <div className="space-y-3">
                  <Link href="/contact" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3.5 rounded-xl text-sm w-full transition-colors">
                    Request a Free Quote <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <WhatsAppButton message={`Hello, I'm interested in ${svc.name}. Can we discuss my project?`} label="WhatsApp Us" variant="inline" className="w-full justify-center text-sm py-3.5" />
                  <a href="tel:+254798900032" className="flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white py-3.5 rounded-xl text-sm w-full transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    0798 900 032
                  </a>
                </div>
                <ul className="mt-6 pt-5 border-t border-stone-800 space-y-2.5">
                  {["Free initial consultation","Licensed & experienced team","Fixed-price quotes","Post-handover support"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-stone-400 text-xs">
                      <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <p className="text-stone-700 font-bold text-sm mb-4">All services</p>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link href={`/services/${s.slug}`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs transition-colors ${s.slug===svc.slug ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"}`}
                        aria-current={s.slug===svc.slug ? "page" : undefined}>
                        <span className="text-base flex-shrink-0" aria-hidden="true">{s.icon}</span>
                        <span className="leading-tight">{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-stone-50 py-16 lg:py-20 border-t border-stone-100" aria-labelledby="rs-h2">
          <div className="section-container">
            <div className="flex items-center justify-between mb-10 gap-4">
              <h2 id="rs-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight">Related services</h2>
              <Link href="/services" className="text-amber-600 hover:text-amber-700 text-sm font-bold uppercase tracking-wide flex-shrink-0 transition-colors">All services →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 p-6 flex flex-col">
                  <div className="text-3xl w-12 h-12 bg-stone-50 group-hover:bg-amber-50 rounded-xl flex items-center justify-center mb-5 transition-colors" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-stone-900 font-bold text-base mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-bold uppercase tracking-wide">
                    Learn more <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-amber-500 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-stone-950 font-black text-2xl sm:text-3xl tracking-tight mb-3">Ready to start your {svc.name.toLowerCase()} project?</h2>
          <p className="text-stone-800 text-base mb-7">Free consultation, fixed-price quote, no commitment required.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-7 py-3.5 rounded-xl text-sm tracking-wide transition-colors">Get a Free Quote</Link>
            <WhatsAppButton message={`Hello, I'm ready to discuss my ${svc.name} project.`} label="WhatsApp Us" variant="inline" className="bg-green-500 hover:bg-green-600 px-7 py-3.5 rounded-xl text-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
