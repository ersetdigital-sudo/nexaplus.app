'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Drawer } from 'vaul';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navigation';
import { getDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = getDefaultWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => {
          if (link.href.startsWith('/#')) {
            const id = link.href.split('#')[1];
            return document.getElementById(id);
          }
          return null;
        });

      // Check if we're on a specific page
      const path = window.location.pathname;
      const pageIndex = navLinks.findIndex(
        (link) => !link.href.startsWith('/#') && link.href === path
      );
      if (pageIndex !== -1 && path !== '/') {
        setActiveIndex(pageIndex);
        return;
      }

      // Check sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveIndex(i);
            return;
          }
        }
      }

      if (path === '/') setActiveIndex(0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
      setIsOpen(false);
      setActiveIndex(index);

      if (!href.startsWith('#') && !href.startsWith('/#')) {
        return;
      }

      const hash = href.includes('#') ? href.split('#')[1] : '';
      if (!hash) return;

      if (window.location.pathname === '/' || href.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)]'
          : 'bg-white/0'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10 flex items-center" aria-label="NexaPlus beranda">
            <Logo />
          </a>

          {/* Desktop Navigation — Centered */}
          <div
            ref={navRef}
            className="hidden md:flex md:items-center md:absolute md:left-1/2 md:-translate-x-1/2"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm px-2 py-1.5 shadow-sm">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
                >
                  {/* Hover background pill */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-slate-100"
                        layoutId="navbar-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {activeIndex === index && hoveredIndex === null && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-blue-50"
                      layoutId="navbar-active"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className={`relative z-10 ${activeIndex === index ? 'text-blue-600' : ''}`}>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button asChild size="sm" className="rounded-full shadow-sm">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Menu navigasi"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Drawer.Trigger>

              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" />
                <Drawer.Content
                  className="fixed inset-y-0 right-0 z-[70] flex w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl outline-none"
                  aria-describedby={undefined}
                >
                  <Drawer.Title className="sr-only">Menu Navigasi</Drawer.Title>

                  <div className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-1 rounded-full bg-slate-300" />

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <Logo />
                    <Drawer.Close asChild>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
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
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link, index) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href, index)}
                          className={`flex h-12 items-center rounded-xl px-4 text-[15px] font-medium transition-colors ${
                            activeIndex === index
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="border-t border-slate-100 px-5 py-4">
                    <Button asChild className="w-full rounded-full" size="lg">
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
