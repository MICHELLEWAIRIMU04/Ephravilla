export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20" aria-label="Loading…" aria-busy="true">
      <div className="bg-stone-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-4 max-w-xl">
          <div className="h-3 bg-stone-800 rounded w-32" />
          <div className="h-12 bg-stone-800 rounded w-3/4" />
          <div className="h-12 bg-stone-800 rounded w-1/2" />
          <div className="h-5 bg-stone-800 rounded w-full mt-4" />
          <div className="h-5 bg-stone-800 rounded w-4/5" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-white rounded-2xl border border-stone-100 overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="aspect-[16/10] bg-stone-200" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-stone-200 rounded w-3/4" />
                <div className="h-3 bg-stone-100 rounded w-full" />
                <div className="h-3 bg-stone-100 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
