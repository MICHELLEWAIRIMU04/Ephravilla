import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import WhatsAppButton from "@/components/common/WhatsAppButton";

interface Props { params: { slug: string }; }

export async function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) return { title: "Project Not Found" };
  return { title: p.title, description: p.shortDescription, openGraph: { images: [{ url: p.images.hero, width: 1200, height: 630, alt: p.title }] } };
}

const typeConfig: Record<string,{label:string;color:string;bg:string}> = {
  residential:{label:"Residential",color:"text-blue-700 border-blue-200",  bg:"bg-blue-50"},
  commercial: {label:"Commercial", color:"text-purple-700 border-purple-200",bg:"bg-purple-50"},
  renovation: {label:"Renovation", color:"text-amber-700 border-amber-200", bg:"bg-amber-50"},
  survey:     {label:"Survey",     color:"text-green-700 border-green-200", bg:"bg-green-50"},
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const type        = typeConfig[project.type] ?? typeConfig.residential;
  const usedSvcs    = services.filter((s) => project.services.includes(s.slug));
  const sameType    = projects.filter((p) => p.type === project.type && p.slug !== project.slug).slice(0,3);
  const idx         = projects.findIndex((p) => p.slug === project.slug);
  const prev        = idx > 0 ? projects[idx-1] : null;
  const next        = idx < projects.length-1 ? projects[idx+1] : null;

  return (
    <>
      {/* Hero */}
      <div className="relative bg-stone-950 pt-20">
        <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
          <Image
            src={project.images.hero}
            alt={`${project.title} — ${project.type} construction project in ${project.location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.65]"
          />
          <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(12,10,9,.3) 0%,rgba(12,10,9,.98) 90%)" }} aria-hidden="true" />
        </div>
        <div className="section-container relative -mt-32 pb-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span>
            <Link href="/projects" className="hover:text-amber-400 transition-colors">Projects</Link><span>/</span>
            <span className="text-stone-300 truncate max-w-[220px]">{project.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${type.bg} ${type.color}`}>{type.label}</span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${project.status==="ongoing" ? "bg-green-500/20 border border-green-400/30 text-green-400" : "bg-stone-700/60 border border-stone-600 text-stone-300"}`}>
              {project.status==="ongoing" ? "Ongoing" : "Completed"}
            </span>
          </div>
          <h1 className="text-white font-black tracking-tight leading-tight mb-4" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>{project.title}</h1>
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5 text-stone-400 text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {project.location}
            </span>
            <span className="flex items-center gap-1.5 text-stone-400 text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white">
        <div className="section-container py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-14 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-14">
              <section aria-labelledby="overview-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Project Overview</span></div>
                <h2 id="overview-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-5">About this project</h2>
                <p className="text-stone-600 text-base leading-relaxed">{project.fullDescription}</p>
              </section>

              {/* Gallery */}
              {project.images.gallery.length >= 1 && (
                <section aria-labelledby="gallery-h2">
                  <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Photography</span></div>
                  <h2 id="gallery-h2" className="text-stone-900 font-black text-2xl tracking-tight mb-6">Project gallery</h2>
                  {project.images.gallery.length===1 ? (
                    <div className="rounded-2xl overflow-hidden relative h-72 lg:h-96">
                      <Image
                        src={project.images.gallery[0]}
                        alt={`${project.title} — site photograph`}
                        fill
                        sizes="(max-width:1024px) 100vw, 66vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2 rounded-2xl overflow-hidden relative h-64 lg:h-80">
                        <Image
                          src={project.images.gallery[0]}
                          alt={`${project.title} — main site photograph`}
                          fill
                          sizes="(max-width:1024px) 100vw, 66vw"
                          className="object-cover"
                        />
                      </div>
                      {project.images.gallery.slice(1).map((src,i) => (
                        <div key={src} className="rounded-xl overflow-hidden relative h-48 lg:h-56">
                          <Image
                            src={src}
                            alt={`${project.title} — site detail photograph ${i+2}`}
                            fill
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Services delivered */}
              <section aria-labelledby="svc-delivered-h2">
                <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-600">Scope</span></div>
                <h2 id="svc-delivered-h2" className="text-stone-900 font-black text-2xl tracking-tight mb-6">Services delivered</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {usedSvcs.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`}
                      className="group flex items-start gap-4 p-5 bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-xl transition-all duration-200">
                      <div className="text-2xl w-11 h-11 bg-white group-hover:bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-colors" aria-hidden="true">{s.icon}</div>
                      <div>
                        <p className="text-stone-900 font-semibold text-sm mb-0.5 group-hover:text-amber-700 transition-colors">{s.name}</p>
                        <p className="text-stone-500 text-xs leading-snug line-clamp-2">{s.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Prev / Next */}
              <div className="flex items-center justify-between pt-8 border-t border-stone-100 gap-4">
                {prev ? (
                  <Link href={`/projects/${prev.slug}`} className="group flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 border border-stone-200 group-hover:border-amber-300 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-all flex-shrink-0">
                      <svg className="w-4 h-4 text-stone-500 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                    </div>
                    <div className="min-w-0"><p className="text-stone-400 text-xs">Previous</p><p className="text-stone-700 text-sm font-semibold truncate group-hover:text-amber-600 transition-colors">{prev.title}</p></div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link href={`/projects/${next.slug}`} className="group flex items-center gap-3 text-right min-w-0">
                    <div className="min-w-0"><p className="text-stone-400 text-xs">Next</p><p className="text-stone-700 text-sm font-semibold truncate group-hover:text-amber-600 transition-colors">{next.title}</p></div>
                    <div className="w-10 h-10 border border-stone-200 group-hover:border-amber-300 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-all flex-shrink-0">
                      <svg className="w-4 h-4 text-stone-500 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <p className="text-stone-700 font-bold text-sm uppercase tracking-widest mb-5">Project details</p>
                <dl className="space-y-4">
                  {[["Client type",type.label],["Location",project.location],["Year",String(project.year)],["Status",project.status==="ongoing"?"Ongoing":"Completed"],["Services",`${usedSvcs.length} delivered`]].map(([k,v]) => (
                    <div key={k} className="flex items-start justify-between gap-3">
                      <dt className="text-stone-400 text-xs font-semibold uppercase tracking-wide">{k}</dt>
                      <dd className={`text-stone-900 text-xs font-bold text-right ${k==="Status"&&project.status==="ongoing"?"text-green-600":""}`}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-stone-950 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Have a similar project?</h3>
                <p className="text-stone-400 text-sm mb-5 leading-relaxed">We&apos;d love to discuss your vision. Free consultation, fixed-price quote.</p>
                <div className="space-y-3">
                  <Link href="/contact" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3.5 rounded-xl text-sm w-full transition-colors">
                    Get a Free Quote <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <WhatsAppButton message={`Hello, I saw your ${project.title} project and I'd like to discuss a similar ${project.type} build.`} label="Discuss on WhatsApp" variant="inline" className="w-full justify-center text-sm py-3.5" />
                  <a href="tel:+254798900032" className="flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white py-3.5 rounded-xl text-sm w-full transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    0798 900 032
                  </a>
                </div>
              </div>
              <Link href="/projects" className="flex items-center gap-2 text-stone-500 hover:text-amber-600 text-sm font-medium transition-colors group">
                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                Back to all projects
              </Link>
            </aside>
          </div>
        </div>
      </div>

      {/* More projects */}
      {sameType.length > 0 && (
        <section className="bg-stone-50 py-16 lg:py-20 border-t border-stone-100">
          <div className="section-container">
            <div className="flex items-center justify-between gap-4 mb-10">
              <h2 className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight">More {type.label.toLowerCase()} projects</h2>
              <Link href="/projects" className="text-amber-600 hover:text-amber-700 text-sm font-bold uppercase tracking-wide flex-shrink-0 transition-colors">View all →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sameType.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className="group relative rounded-2xl overflow-hidden block">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.images.thumbnail}
                      alt={`${p.title} — ${p.type} construction project in ${p.location}`}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(12,10,9,.9) 0%,transparent 55%)" }} aria-hidden="true" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-sm ${type.bg} ${type.color}`}>{type.label}</span>
                      {p.status==="ongoing" && <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-green-500 text-white">Ongoing</span>}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-stone-400 text-xs mb-1">📍 {p.location} · {p.year}</p>
                      <h3 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors line-clamp-1">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">Inspired by this project?</h2>
          <p className="text-stone-400 text-lg mb-10 leading-relaxed">Let&apos;s build something exceptional together. Free consultation today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-9 py-4 rounded-xl text-sm tracking-wide transition-all shadow-2xl shadow-amber-500/20 hover:-translate-y-0.5">
              Start Your Project <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <WhatsAppButton message="Hello, I was inspired by one of your projects and would like to discuss something similar." label="WhatsApp Us" variant="outline" className="border-green-400/40 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 px-9 py-4 rounded-xl text-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
