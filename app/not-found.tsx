import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground max-w-md">
        Halaman yang Anda cari tidak ditemukan. Mungkin sudah dipindahkan atau dihapus.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-4 py-2 font-medium text-white"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
