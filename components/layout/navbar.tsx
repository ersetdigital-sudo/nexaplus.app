'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer } from 'vaul';
import { Menu, ChevronDown, ShoppingCart, Layout, Building2, GraduationCap, Landmark, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { getDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

const layananItems = [
  { icon: ShoppingCart, title: 'Website Toko Online', desc: 'E-commerce dengan payment & ongkir', href: '/layanan/toko-online' },
  { icon: Layout, title: 'Landing Page', desc: 'Halaman konversi tinggi untuk promosi', href: '/layanan/landing-page' },
  { icon: Building2, title: 'Company Profile', desc: 'Website profesional untuk perusahaan', href: '/layanan/company-profile' },
  { icon: GraduationCap, title: 'Website Sekolah', desc: 'Portal akademik modern', href: '/layanan/website-sekolah' },
  { icon: Landmark, title: 'Website Pemerintahan', desc: 'Website resmi instansi pemerintah', href: '/layanan/website-pemerintahan' },
  { icon: Users, title: 'Website Organisasi', desc: 'Website untuk komunitas & yayasan', href: '/layanan/website-organisasi' },
];

// Pages with dark hero sections
const darkHeroPages = ['/layanan/toko-online', '/layanan/landing-page', '/layanan/company-profile', '/layanan/website-sekolah', '/layanan/website-pemerintahan', '/layanan/website-organisasi'];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showLayanan, setShowLayanan] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const layananTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = getDefaultWhatsAppUrl();
  const hasDarkHero = darkHeroPages.some((p) => pathname.startsWith(p));
  // Light mode: not scrolled + dark hero page
  const isLightMode = hasDarkHero && !isScrolled;

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

      const path = window.location.pathname;
      const pageIndex = navLinks.findIndex(
        (link) => !link.href.startsWith('/#') && link.href === path
      );
      if (pageIndex !== -1 && path !== '/') {
        setActiveIndex(pageIndex);
        return;
      }

      // Check if on a layanan page
      if (path.startsWith('/layanan')) {
        setActiveIndex(navLinks.findIndex((l) => l.label === 'Layanan'));
        return;
      }

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

  const handleLayananEnter = () => {
    if (layananTimeoutRef.current) clearTimeout(layananTimeoutRef.current);
    setShowLayanan(true);
  };

  const handleLayananLeave = () => {
    layananTimeoutRef.current = setTimeout(() => setShowLayanan(false), 150);
  };

  const layananIndex = navLinks.findIndex((l) => l.label === 'Layanan');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)]'
          : hasDarkHero
          ? 'bg-transparent'
          : 'bg-white/0'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10 flex items-center" aria-label="NexaPlus beranda">
            <Logo variant={isLightMode ? "light" : "dark"} />
          </a>

          {/* Desktop Navigation — Centered */}
          <div
            ref={navRef}
            className="hidden md:flex md:items-center md:absolute md:left-1/2 md:-translate-x-1/2"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`flex items-center gap-1 rounded-full border px-2 py-1.5 shadow-sm transition-all duration-300 ${
              isLightMode
                ? 'border-white/20 bg-white/10 backdrop-blur-md'
                : 'border-slate-200/80 bg-white/90 backdrop-blur-sm'
            }`}>
              {navLinks.map((link, index) => {
                const isLayanan = link.label === 'Layanan';

                if (isLayanan) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => { setHoveredIndex(index); handleLayananEnter(); }}
                      onMouseLeave={handleLayananLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href, index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        className={`relative flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                          isLightMode ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.span
                              className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-white/15' : 'bg-slate-100'}`}
                              layoutId="navbar-hover"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          )}
                        </AnimatePresence>
                        {activeIndex === index && hoveredIndex === null && (
                          <motion.span
                            className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-white/20' : 'bg-blue-50'}`}
                            layoutId="navbar-active"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className={`relative z-10 ${activeIndex === index ? (isLightMode ? 'text-white' : 'text-blue-600') : ''}`}>
                          {link.label}
                        </span>
                        <ChevronDown className={`relative z-10 h-3.5 w-3.5 transition-transform duration-200 ${showLayanan ? 'rotate-180' : ''}`} />
                      </a>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {showLayanan && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl border border-slate-200/80 bg-white backdrop-blur-xl p-4 shadow-xl shadow-slate-200/50"
                            onMouseEnter={handleLayananEnter}
                            onMouseLeave={handleLayananLeave}
                          >
                            <div className="grid grid-cols-2 gap-1">
                              {layananItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50/70"
                                  onClick={() => setShowLayanan(false)}
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                    <item.icon className="h-4.5 w-4.5 text-blue-600" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                      {item.title}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isLightMode ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-white/15' : 'bg-slate-100'}`}
                          layoutId="navbar-hover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    {activeIndex === index && hoveredIndex === null && (
                      <motion.span
                        className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-white/20' : 'bg-blue-50'}`}
                        layoutId="navbar-active"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${activeIndex === index ? (isLightMode ? 'text-white' : 'text-blue-600') : ''}`}>
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button asChild size="sm" className={`rounded-full shadow-sm ${isLightMode ? 'bg-white text-slate-900 hover:bg-white/90' : ''}`}>
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
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    isLightMode ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
                  }`}
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
                      {navLinks.map((link, index) => {
                        const isLayanan = link.label === 'Layanan';

                        if (isLayanan) {
                          return (
                            <div key={link.href}>
                              <button
                                type="button"
                                onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                                className={`flex h-12 w-full items-center justify-between rounded-xl px-4 text-[15px] font-medium transition-colors ${
                                  activeIndex === index
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                Layanan
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileLayananOpen ? 'rotate-180' : ''}`} />
                              </button>

                              <AnimatePresence>
                                {mobileLayananOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4 py-1 space-y-0.5">
                                      {layananItems.map((item) => (
                                        <Link
                                          key={item.href}
                                          href={item.href}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                          <item.icon className="h-4 w-4 text-blue-500" />
                                          {item.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        }

                        return (
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
                        );
                      })}
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
