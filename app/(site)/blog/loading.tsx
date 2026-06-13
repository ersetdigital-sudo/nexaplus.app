export default function BlogLoading() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header skeleton */}
        <div className="mb-12 text-center">
          <div className="mx-auto h-10 w-32 rounded-lg bg-slate-200 animate-pulse" />
          <div className="mx-auto mt-4 h-5 w-80 rounded-lg bg-slate-100 animate-pulse" />
        </div>

        {/* Filter skeleton */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-10 w-60 rounded-lg bg-slate-100 animate-pulse" />
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-8 w-20 rounded-full bg-slate-100 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="aspect-[1200/630] w-full bg-slate-100 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-16 rounded-full bg-slate-100 animate-pulse" />
                  <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
                </div>
                <div className="h-5 w-full rounded bg-slate-200 animate-pulse" />
                <div className="h-4 w-3/4 rounded bg-slate-100 animate-pulse" />
                <div className="h-4 w-1/2 rounded bg-slate-100 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
