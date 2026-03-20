"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { equipment } from "@/lib/data/equipment";
import type { EquipmentCategory } from "@/types";

type Filter = "all" | EquipmentCategory;
const cats: { value:Filter; label:string; icon:string }[] = [
  { value:"all",         label:"All Equipment", icon:"🔧" },
  { value:"earthmoving", label:"Earthmoving",   icon:"🚜" },
  { value:"lifting",     label:"Lifting",        icon:"🏗️" },
  { value:"concrete",    label:"Concrete",       icon:"🏛️" },
  { value:"scaffolding", label:"Scaffolding",    icon:"🪜" },
  { value:"compaction",  label:"Compaction",     icon:"🔩" },
  { value:"general",     label:"General",        icon:"🛠️" },
];
const availCfg = {
  available:   { label:"Available",    cls:"bg-green-50  text-green-700  border border-green-200",  dot:"bg-green-500" },
  "on-lease":  { label:"On Lease",     cls:"bg-amber-50  text-amber-700  border border-amber-200",  dot:"bg-amber-500" },
  maintenance: { label:"Maintenance",  cls:"bg-red-50    text-red-700    border border-red-200",    dot:"bg-red-500"   },
} as const;

export default function EquipmentPage() {
  const [active, setActive] = useState<Filter>("all");
  const list   = useMemo(() => active==="all" ? equipment : equipment.filter((e)=>e.category===active), [active]);
  const counts = useMemo(()=>{ const c:Record<string,number>={all:equipment.length}; equipment.forEach((e)=>{c[e.category]=(c[e.category]??0)+1;}); return c; },[]);
  const availNow = list.filter((e)=>e.availability==="available").length;

  return (
    <>
      {/* Hero */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=60')", backgroundSize:"cover", backgroundPosition:"center 30%" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(12,10,9,.75),rgba(12,10,9,.98))" }} aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span><span className="text-stone-300">Equipment Leasing</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-400">Hire &amp; Lease</span></div>
              <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize:"clamp(2.6rem,6vw,4.5rem)" }}>
                Equipment <span className="text-amber-400">Leasing</span>
              </h1>
              <p className="text-stone-400 text-xl leading-relaxed">Professional construction equipment for flexible daily and weekly hire across Nairobi and Kiambu. Operator provision available.</p>
            </div>
            <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-800">
              <p className="text-stone-400 text-xs uppercase tracking-widest font-semibold mb-2">Ready to hire?</p>
              <p className="text-white font-bold text-lg mb-4">Discuss your requirements</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton message="Hello, I'd like to enquire about construction equipment hire. Please advise." label="WhatsApp for a quote" variant="inline" className="flex-1 justify-center" />
                <a href="tel:+254798900032" className="flex-1 flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog */}
      <section className="bg-stone-50 py-16 lg:py-24" aria-labelledby="catalog-h2">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3"><div className="amber-rule" /><span className="eyebrow text-amber-600">Available for Hire</span></div>
              <h2 id="catalog-h2" className="text-stone-900 font-black text-3xl sm:text-4xl tracking-tight mb-2">Equipment Catalog</h2>
              <p className="text-stone-500 text-base">
                {list.length} item{list.length!==1?"s":""}{active!=="all" ? ` in ${cats.find((c)=>c.value===active)?.label}`:""}.{" "}
                {availNow>0 && <span className="text-green-600 font-semibold">{availNow} available now.</span>}
              </p>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5 mb-10" role="group" aria-label="Filter by category">
            {cats.filter((c)=>(counts[c.value]??0)>0).map(({ value, label, icon }) => (
              <button key={value} onClick={()=>setActive(value)} aria-pressed={active===value}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${active===value ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20" : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900"}`}>
                <span aria-hidden="true">{icon}</span>{label}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${active===value ? "bg-stone-950/15 text-stone-950" : "bg-stone-100 text-stone-500"}`}>{counts[value]??0}</span>
              </button>
            ))}
          </div>

          {/* Equipment grid */}
          {list.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" role="list">
              {list.map((item) => {
                const avail = availCfg[item.availability];
                const canHire = item.availability!=="maintenance";
                const catLabel = cats.find((c)=>c.value===item.category)?.label ?? item.category;
                return (
                  <article key={item.id} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col" role="listitem">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <Image
                        src={item.image}
                        alt={`${item.name} — construction equipment available for hire in Nairobi and Kiambu`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-sm ${avail.cls}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${avail.dot}`} aria-hidden="true" />{avail.label}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-stone-950/70 text-stone-200 backdrop-blur-sm font-medium">{catLabel}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-stone-900 font-bold text-sm mb-2 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                      <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                      <dl className="space-y-1.5 mb-4">
                        {Object.entries(item.specifications).slice(0,3).map(([k,v]) => (
                          <div key={k} className="flex items-center justify-between gap-3">
                            <dt className="text-stone-400 text-xs truncate flex-1">{k}</dt>
                            <dd className="text-stone-700 text-xs font-semibold flex-shrink-0">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <div className="border-t border-stone-100 pt-4 mb-4">
                        <div className="flex items-end justify-between gap-2">
                          {item.dailyRate && <div><p className="text-stone-400 text-xs uppercase tracking-wide mb-0.5">Daily</p><p className="text-stone-900 font-black text-base">{item.dailyRate}</p></div>}
                          {item.weeklyRate && <div className="text-right"><p className="text-stone-400 text-xs uppercase tracking-wide mb-0.5">Weekly</p><p className="text-stone-700 font-semibold text-sm">{item.weeklyRate}</p></div>}
                        </div>
                      </div>
                      <div className="mt-auto">
                        {canHire ? (
                          <a href={`https://wa.me/254798900032?text=${encodeURIComponent(item.whatsappMessage)}`} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white w-full py-2.5 rounded-xl text-xs font-bold transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Enquire on WhatsApp
                          </a>
                        ) : (
                          <div className="w-full text-center text-xs text-stone-400 bg-stone-50 border border-stone-200 rounded-xl py-2.5 font-semibold">Currently unavailable</div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-stone-400 text-base mb-4">No equipment in this category.</p>
              <button onClick={()=>setActive("all")} className="text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors">Show all equipment</button>
            </div>
          )}
        </div>
      </section>

      {/* Leasing process */}
      <section className="bg-stone-950 py-20 lg:py-28" aria-labelledby="process-eq-h2">
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="amber-rule" /><span className="eyebrow text-amber-400">Simple Process</span><div className="amber-rule" /></div>
            <h2 id="process-eq-h2" className="text-white font-black text-3xl sm:text-4xl tracking-tight">How equipment leasing works</h2>
          </div>
          <ol className="grid sm:grid-cols-3 gap-8 list-none">
            {[["01","Browse & select","🔍","Choose from the catalog. Use the filter to find the right machine."],
              ["02","Confirm availability","📱","WhatsApp us with your dates. We confirm availability and exact pricing."],
              ["03","Receive on site","🚚","We deliver to your site. Trained operators available on request."]].map(([n,t,i,d]) => (
              <li key={n} className="flex flex-col items-start">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center text-2xl mb-4" aria-hidden="true">{i}</div>
                <span className="text-amber-500 font-black text-3xl tabular-nums mb-3">{n}</span>
                <h3 className="text-white font-bold text-base mb-2">{t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 bg-stone-900 rounded-2xl p-8 border border-stone-800 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[["Service areas","Nairobi & Kiambu"],["Minimum hire","1 day"],["Operator","Available on request"],["Contact","0798 900 032"]].map(([l,v]) => (
              <div key={l}><p className="text-stone-500 text-xs uppercase tracking-widest font-semibold mb-1">{l}</p><p className="text-white font-bold text-sm">{v}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="benefits-eq-h2">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 id="benefits-eq-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-3">Why hire from Ephravilla?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[["🔧","Well-maintained fleet","Every machine is serviced regularly. Reliable equipment, not breakdowns."],
              ["📅","Flexible terms","Daily and weekly hire, no long lock-in. Scale up or down as your project demands."],
              ["🚚","Site delivery","We deliver and collect within Nairobi and Kiambu — no need for your own transport."],
              ["👷","Operator provision","Need a trained operator? We provide experienced, professionally certified staff."],
              ["📞","Support on call","Call us if anything goes wrong on site. We respond quickly and sort issues fast."],
              ["💰","Competitive rates","Transparent pricing — no surprise additions. What you see is what you pay."]].map(([i,t,d]) => (
              <div key={t} className="flex items-start gap-4 p-5 rounded-xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50 transition-all">
                <div className="text-2xl w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">{i}</div>
                <div><h3 className="text-stone-900 font-bold text-sm mb-1">{t}</h3><p className="text-stone-500 text-xs leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-stone-950 font-black text-3xl sm:text-4xl tracking-tight mb-4">Don&apos;t see what you need?</h2>
          <p className="text-stone-800 text-lg mb-8">We can source specialist equipment or advise on the best machine for your job.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <WhatsAppButton message="Hello, I'm looking for construction equipment that may not be in your catalog. Can you help?" label="WhatsApp for custom hire" variant="inline" className="bg-stone-950 hover:bg-stone-800" />
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-950 font-bold px-7 py-3.5 rounded-xl text-sm tracking-wide transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
