"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Global error:", error); }, [error]);
  return (
    <html lang="en"><body className="bg-stone-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <h1 className="text-white font-black text-2xl mb-3">Something went wrong</h1>
        <p className="text-stone-400 text-sm mb-8">We encountered an unexpected error. Please try again or contact us directly.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors">Try again</button>
          <a href="/" className="border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">Go home</a>
        </div>
        {process.env.NODE_ENV === "development" && error.message && (
          <pre className="mt-8 text-left text-xs text-red-400 bg-red-950/30 border border-red-900 rounded-xl p-4 overflow-auto max-h-40">{error.message}</pre>
        )}
      </div>
    </body></html>
  );
}
