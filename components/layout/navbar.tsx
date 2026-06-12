'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { getDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const whatsappUrl = getDefaultWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsDrawerOpen(false);
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
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

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsDrawerOpen(true)}
            aria-expanded={isDrawerOpen}
            aria-label="Menu navigasi"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — fullscreen overlay style */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer Panel — slide from right, full height */}
            <motion.div
              className="fixed inset-y-0 right-0 z-[70] w-[280px] max-w-[85vw] bg-white shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex h-full flex-col">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <Logo />
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Tutup menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto px-5 py-6">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="flex h-12 items-center rounded-lg px-3 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer CTA */}
                <div className="border-t border-slate-100 px-5 py-4">
                  <Button asChild className="w-full" size="lg">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
