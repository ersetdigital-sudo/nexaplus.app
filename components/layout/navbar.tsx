'use client';

import { useState, useEffect, useCallback } from 'react';
import { Drawer } from 'vaul';
import { Menu } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { getDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = getDefaultWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center" aria-label="NexaPlus beranda">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </div>

          {/* Mobile — Vaul Drawer trigger */}
          <div className="md:hidden">
            <Drawer.Root open={isOpen} onOpenChange={setIsOpen} direction="right">
              <Drawer.Trigger asChild>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Menu navigasi"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Drawer.Trigger>

              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-[60] bg-black/40" />
                <Drawer.Content
                  className="fixed inset-y-0 right-0 z-[70] flex w-[280px] max-w-[85vw] flex-col bg-white shadow-2xl outline-none"
                  aria-describedby={undefined}
                >
                  <Drawer.Title className="sr-only">Menu Navigasi</Drawer.Title>

                  {/* Handle bar for swipe indication */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-1 rounded-full bg-slate-300" />

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <Logo />
                    <Drawer.Close asChild>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                        aria-label="Tutup menu"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </Drawer.Close>
                  </div>

                  {/* Links */}
                  <div className="flex-1 overflow-y-auto px-4 py-5">
                    <div className="flex flex-col gap-0.5">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="flex h-12 items-center rounded-xl px-4 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="border-t border-slate-100 px-5 py-4">
                    <Button asChild className="w-full" size="lg">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Konsultasi Gratis
                      </a>
                    </Button>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </nav>
    </header>
  );
}
