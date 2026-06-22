export default function LayananLoading() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
          <div className="absolute inset-0 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-slate-400 animate-pulse">Memuat halaman...</p>
      </div>
    </div>
  );
}
