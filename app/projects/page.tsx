"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { projects } from "@/lib/data/projects";
import type { ProjectType } from "@/types";

type Filter = "all" | ProjectType;
const typeColors: Record<string,string> = {
  residential:"bg-blue-50 text-blue-700 border border-blue-200",
  commercial: "bg-purple-50 text-purple-700 border border-purple-200",
  renovation: "bg-amber-50 text-amber-700 border border-amber-200",
  survey:     "bg-green-50 text-green-700 border border-green-200",
};
const filters: { value:Filter; label:string }[] = [
  { value:"all",         label:"All Projects" },
  { value:"residential", label:"Residential" },
  { value:"commercial",  label:"Commercial" },
  { value:"renovation",  label:"Renovation" },
  { value:"survey",      label:"Survey" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("all");
  const list = useMemo(() => active==="all" ? projects : projects.filter((p)=>p.type===active), [active]);
  const counts = useMemo(()=>{ const c:Record<string,number>={all:projects.length}; projects.forEach((p)=>{c[p.type]=(c[p.type]??0)+1;}); return c; },[]);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=60')", backgroundSize:"cover", backgroundPosition:"center" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(12,10,9,.7),rgba(12,10,9,.98))" }} aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span><span className="text-stone-300">Projects</span>
          </nav>
          <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-400">Our Work</span></div>
          <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize:"clamp(2.6rem,6vw,4.5rem)" }}>Project Gallery</h1>
          <p className="text-stone-400 text-xl max-w-xl leading-relaxed">Every project tells a story. Browse our portfolio across Nairobi, Kiambu and Murang&apos;a.</p>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="gallery-h2">
        <div className="section-container">
          <h2 id="gallery-h2" className="sr-only">Project gallery</h2>
          {/* Filters */}
          <div className="flex flex-wrap gap-2.5 mb-10" role="group" aria-label="Filter projects by type">
            {filters.filter((f)=>(counts[f.value]??0)>0).map(({ value, label }) => (
              <button key={value} onClick={()=>setActive(value)} aria-pressed={active===value}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${active===value ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20" : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"}`}>
                {label}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${active===value ? "bg-stone-950/15 text-stone-950" : "bg-stone-200 text-stone-500"}`}>{counts[value]??0}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {list.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {list.map((p) => (
                <article key={p.id} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col" role="listitem">
                  <Link href={`/projects/${p.slug}`} className="relative aspect-[16/10] block overflow-hidden bg-stone-100" tabIndex={-1} aria-hidden="true">
                    <Image
                      src={p.images.thumbnail}
                      alt={`${p.title} — ${p.type} construction project in ${p.location}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-sm ${typeColors[p.type]}`}>{p.type.charAt(0).toUpperCase()+p.type.slice(1)}</span>
                      {p.status==="ongoing" && <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-green-500 text-white shadow-sm">Ongoing</span>}
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-stone-900 font-bold text-base leading-tight">
                        <Link href={`/projects/${p.slug}`} className="hover:text-amber-600 transition-colors">{p.title}</Link>
                      </h3>
                      <span className="text-stone-400 text-xs tabular-nums flex-shrink-0 mt-0.5">{p.year}</span>
                    </div>
                    <p className="text-stone-500 text-xs flex items-center gap-1.5 mb-3">
                      <svg className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {p.location}
                    </p>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 mb-5 flex-1">{p.shortDescription}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <Link href={`/projects/${p.slug}`} className="text-amber-600 hover:text-amber-700 text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1.5 group/link transition-colors">
                        View project <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </Link>
                      <WhatsAppButton message={`Hello, I saw your ${p.title} project and I'd like to discuss a similar build.`} label="Discuss" variant="outline" className="text-xs py-1.5 px-3 border-green-300 text-green-600" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-stone-400 text-base mb-4">No projects found for this filter.</p>
              <button onClick={()=>setActive("all")} className="text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors">Show all projects</button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-950 py-16" aria-labelledby="pstats-h2">
        <h2 id="pstats-h2" className="sr-only">Project statistics</h2>
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-800">
            {[["20+","Projects delivered"],["3","Counties covered"],["100%","On-time handover"],["2024","Year established"]].map(([v,l]) => (
              <div key={l} className="text-center px-6 py-8">
                <p className="text-amber-400 font-black text-4xl tabular-nums mb-2">{v}</p>
                <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Type explainer */}
      <section className="bg-stone-50 py-16 lg:py-20" aria-labelledby="types-h2">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 id="types-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-3">Types of projects we deliver</h2>
            <p className="text-stone-500 text-base">From a single renovation to a full commercial development.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[{type:"residential",icon:"🏠",title:"Residential",desc:"Family homes, estates, apartment complexes — new builds and extensions."},
              {type:"commercial", icon:"🏢",title:"Commercial", desc:"Office blocks, retail, schools, healthcare and hospitality facilities."},
              {type:"renovation", icon:"🔨",title:"Renovation", desc:"Full refurbishments, structural alterations and interior makeovers."},
              {type:"survey",     icon:"📏",title:"Survey",     desc:"Topographic, boundary and construction surveys across all three counties."}].map(({type,icon,title,desc}) => (
              <button key={type} onClick={()=>{setActive(type as Filter);window.scrollTo({top:400,behavior:"smooth"});}}
                className="group text-left p-6 bg-white rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
                <h3 className="text-stone-900 font-bold text-base mb-2 group-hover:text-amber-600 transition-colors">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                <span className="mt-4 text-amber-500 text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1">View {title} →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-stone-950 font-black text-3xl sm:text-4xl tracking-tight mb-4">Have a project in mind?</h2>
          <p className="text-stone-800 text-lg mb-8 max-w-xl mx-auto">Free consultation, no obligation. We&apos;d love to hear your vision.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-colors">Get a Free Quote <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
            <WhatsAppButton label="WhatsApp Us" variant="inline" className="bg-green-500 hover:bg-green-600" />
          </div>
        </div>
      </section>
    </>
  );
}
