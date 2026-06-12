import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tighter text-white sm:text-9xl">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-400">Halaman tidak ditemukan</p>
      <p className="mt-2 text-gray-500">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </section>
  );
}
