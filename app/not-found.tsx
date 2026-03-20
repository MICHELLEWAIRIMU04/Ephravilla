import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <p className="font-black text-stone-900 select-none" style={{ fontSize:"clamp(8rem,20vw,14rem)", lineHeight:1 }} aria-hidden="true">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-amber-500 text-stone-950 font-black text-lg px-6 py-2.5 rounded-full">Page not found</span>
          </div>
        </div>
        <p className="text-stone-400 text-base mb-10 leading-relaxed">This page has been moved or doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}].map(({href,label})=>(
            <Link key={href} href={href} className="bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-sm font-medium py-3 px-4 rounded-xl transition-all text-center">{label}</Link>
          ))}
        </div>
        <Link href="/" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl text-sm tracking-wide transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Go back home
        </Link>
      </div>
    </div>
  );
}
