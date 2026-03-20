import Link from "next/link";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const quickLinks = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About Us" },
  { href: "/services",  label: "Our Services" },
  { href: "/projects",  label: "Projects" },
  { href: "/equipment", label: "Equipment Leasing" },
  { href: "/contact",   label: "Contact" },
];

const serviceLinks = [
  { href: "/services/structural-architectural-design", label: "Structural & Architectural Design" },
  { href: "/services/build-and-fabricate",             label: "Build & Fabricate" },
  { href: "/services/finishing-works",                 label: "Finishing Works" },
  { href: "/services/renovation-works",                label: "Renovation Works" },
  { href: "/services/survey-works",                    label: "Survey Works" },
  { href: "/services/plumbing-electrical",             label: "Plumbing & Electrical" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950" role="contentinfo">

      {/* CTA strip */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-stone-950 font-black text-xl">Ready to start your project?</p>
            <p className="text-stone-800 text-sm mt-0.5">Talk to us today — no obligation, just expertise.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <WhatsAppButton
              label="WhatsApp Us"
              variant="inline"
              className="bg-stone-950 hover:bg-stone-900 text-white shadow-none"
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-amber-500 group-hover:bg-amber-400 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
                  <path d="M8 32L20 8l12 24H8z" fill="currentColor" className="text-stone-950" />
                  <path d="M14 32v-8h12v8" fill="currentColor" className="text-stone-950/60" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base">Ephravilla</p>
                <p className="text-amber-400 text-xs tracking-widest uppercase font-medium">Construction Ltd</p>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-5 max-w-xs">
              Building with integrity since 2024. Professional construction services across Nairobi, Kiambu and Murang&apos;a.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Nairobi", "Kiambu", "Murang'a"].map((a) => (
                <span key={a} className="text-xs border border-stone-700 text-stone-400 px-2.5 py-1 rounded-full">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-400 hover:text-amber-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-400 hover:text-amber-400 text-sm transition-colors leading-snug block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</h3>
            <address className="not-italic space-y-4 text-sm">
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                <a href="tel:+254798900032" className="text-white hover:text-amber-400 transition-colors font-semibold">
                  0798 900 032
                </a>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:accounts@ephravilla.com" className="text-white hover:text-amber-400 transition-colors font-semibold break-all text-xs">
                  accounts@ephravilla.com
                </a>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Hours</p>
                <p className="text-white font-semibold">Mon–Sat</p>
                <p className="text-stone-400">8:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Office</p>
                <p className="text-white font-semibold">Kiambu</p>
                <p className="text-stone-500 text-xs italic">Opening soon</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
          <p>&copy; {year} Ephravilla Construction Limited. All rights reserved.</p>
          <p className="italic text-stone-700">Building with Integrity</p>
        </div>
      </div>
    </footer>
  );
}
