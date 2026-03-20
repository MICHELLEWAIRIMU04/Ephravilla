import type { Metadata } from "next";
import Link from "next/link";
import ContactForm   from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { JsonLd, localBusinessSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ephravilla Construction Limited — call 0798 900 032, email accounts@ephravilla.com, or use our online form. Free consultation, respond within one business day.",
};

const contactDetails = [
  { icon:"📞", label:"Phone / WhatsApp", value:"0798 900 032",            href:"tel:+254798900032",                note:"Call or WhatsApp — we respond promptly" },
  { icon:"✉️", label:"Email",            value:"accounts@ephravilla.com",   href:"mailto:accounts@ephravilla.com",    note:"Reply within one business day" },
  { icon:"🕐", label:"Working Hours",    value:"Monday–Saturday",          href:null,                               note:"8:00 AM – 5:00 PM", sub:"Closed Sundays & public holidays" },
  { icon:"📍", label:"Office",           value:"Kiambu, Kenya",             href:null,                               note:"Opening soon", sub:"Currently serving clients on-site" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* Hero */}
      <div className="relative bg-stone-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:"linear-gradient(rgba(245,158,11,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.8) 1px,transparent 1px)", backgroundSize:"64px 64px" }} aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link><span>/</span><span className="text-stone-300">Contact</span>
          </nav>
          <div className="flex items-center gap-3 mb-5"><div className="amber-rule" /><span className="eyebrow text-amber-400">Get in Touch</span></div>
          <h1 className="text-white font-black tracking-tight leading-tight mb-5" style={{ fontSize:"clamp(2.6rem,6vw,4.5rem)" }}>
            Let&apos;s talk about<br /><span className="text-amber-400">your project</span>
          </h1>
          <p className="text-stone-400 text-xl max-w-xl leading-relaxed">Free consultation, no obligation — just expert advice on bringing your project to life.</p>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="contact-h2">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-20">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 id="contact-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-2">Send us a message</h2>
              <p className="text-stone-500 text-base mb-8">Fill in the form and a member of our team will reply within one business day.</p>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <aside className="lg:col-span-2" aria-label="Contact information">
              {/* WhatsApp card */}
              <div className="bg-green-500 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Prefer WhatsApp?</p>
                    <p className="text-green-100 text-xs mt-0.5">Fastest way to reach our team</p>
                  </div>
                </div>
                <p className="text-green-50 text-sm leading-relaxed mb-4">Start a conversation directly — we typically respond within minutes during working hours.</p>
                <a href="https://wa.me/254798900032?text=Hello%2C%20I'd%20like%20to%20discuss%20a%20construction%20project%20with%20Ephravilla." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 font-bold w-full py-3 rounded-xl text-sm transition-colors">
                  Start a WhatsApp conversation
                </a>
              </div>

              {/* Contact details */}
              <address className="not-italic space-y-3 mb-6">
                {contactDetails.map(({ icon, label, value, href, note, sub }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 text-xl">{icon}</div>
                    <div className="min-w-0">
                      <p className="text-stone-400 text-xs uppercase tracking-widest font-semibold mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-stone-900 font-bold text-sm hover:text-amber-600 transition-colors block truncate">{value}</a>
                      ) : (
                        <p className="text-stone-900 font-bold text-sm">{value}</p>
                      )}
                      {sub && <p className="text-stone-500 text-xs">{sub}</p>}
                      {note && <p className="text-stone-400 text-xs mt-0.5 italic">{note}</p>}
                    </div>
                  </div>
                ))}
              </address>

              {/* Service areas */}
              <div className="bg-stone-950 rounded-2xl p-5 mb-6">
                <p className="text-stone-400 text-xs uppercase tracking-widest font-semibold mb-3">We serve</p>
                <div className="flex flex-wrap gap-2">
                  {[["Nairobi","Capital & metro"],["Kiambu","Headquarters"],["Murang'a","Central region"]].map(([n,s]) => (
                    <div key={n} className="bg-stone-800 rounded-xl px-3.5 py-2">
                      <p className="text-amber-400 font-bold text-xs">{n}</p>
                      <p className="text-stone-500 text-xs">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="text-amber-800 font-bold text-sm mb-3 flex items-center gap-2"><span aria-hidden="true">💡</span>Helpful to include</p>
                <ul className="space-y-2">
                  {["Your project location","Project type (residential/commercial/renovation)","Approximate size or scope","Desired start date","Budget range (optional)"].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-amber-900 text-xs"><span className="text-amber-500 mt-0.5" aria-hidden="true">·</span>{t}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="bg-stone-50 py-16 lg:py-20" aria-labelledby="channels-h2">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 id="channels-h2" className="text-stone-900 font-black text-2xl sm:text-3xl tracking-tight mb-3">Other ways to connect</h2>
            <p className="text-stone-500 text-base">Choose whichever channel works best for you.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[{href:"tel:+254798900032",icon:"📞",title:"Call Us",sub:"0798 900 032",note:"Mon–Sat, 8 AM–5 PM",hoverBorder:"hover:border-amber-300"},
              {href:"https://wa.me/254798900032",icon:"💬",title:"WhatsApp",sub:"Message us now",note:"Fastest response",hoverBorder:"hover:border-green-300",target:true},
              {href:"mailto:accounts@ephravilla.com",icon:"✉️",title:"Email",sub:"accounts@ephravilla.com",note:"Reply within 1 day",hoverBorder:"hover:border-amber-300"}].map(({href,icon,title,sub,note,hoverBorder,target}) => (
              <a key={href} href={href} {...(target?{target:"_blank",rel:"noopener noreferrer"}:{})}
                className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-stone-200 ${hoverBorder} hover:shadow-lg transition-all duration-300`}>
                <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-colors" aria-hidden="true">{icon}</div>
                <p className="text-stone-900 font-bold text-base mb-1">{title}</p>
                <p className="text-amber-600 font-semibold text-xs mb-2 break-all">{sub}</p>
                <p className="text-stone-400 text-xs">{note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-stone-950 py-16 lg:py-20" aria-labelledby="areas-contact-h2">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3"><div className="amber-rule" /><span className="eyebrow text-amber-400">Where We Work</span><div className="amber-rule" /></div>
            <h2 id="areas-contact-h2" className="text-white font-black text-2xl sm:text-3xl tracking-tight">Our service areas</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[{county:"Nairobi",  desc:"Capital city — residential, commercial and renovation projects throughout Nairobi's 17 sub-counties.", areas:["Westlands","Karen","Gigiri","Thika Road","South B/C"]},
              {county:"Kiambu",   desc:"Our headquarters county. Extensive experience across Kiambu's towns and rural areas.", areas:["Kiambu Town","Ruiru","Limuru","Githunguri","Thika"], hq:true},
              {county:"Murang'a", desc:"Survey, residential and commercial projects serving clients across Murang'a County.", areas:["Murang'a Town","Kangema","Kigumo","Maragua","Kandara"]}].map(({county,desc,areas,hq}) => (
              <div key={county} className={`rounded-2xl p-7 ${hq ? "bg-amber-500" : "bg-stone-900 border border-stone-800"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <p className={`font-black text-xl ${hq ? "text-stone-950" : "text-white"}`}>{county}</p>
                  {hq && <span className="bg-stone-950 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">HQ</span>}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${hq ? "text-stone-800" : "text-stone-400"}`}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <span key={a} className={`text-xs px-2.5 py-1 rounded-full font-medium ${hq ? "bg-stone-950/15 text-stone-950" : "bg-stone-800 text-stone-300"}`}>{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
