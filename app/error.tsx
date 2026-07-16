'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold">Terjadi Kesalahan</h1>
      <p className="text-muted-foreground max-w-md">
        Maaf, halaman ini mengalami gangguan. Silakan coba lagi atau hubungi kami.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-md bg-primary px-4 py-2 font-medium text-white"
        >
          Coba Lagi
        </button>
        <a
          href="https://wa.me/6281573059442"
          className="rounded-md border border-primary px-4 py-2 font-medium"
        >
          Hubungi WhatsApp
        </a>
      </div>
    </main>
  );
}
