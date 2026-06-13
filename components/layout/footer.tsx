import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';
import { Logo } from '@/components/shared/logo';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-slate-600">
              Jasa pembuatan website profesional untuk UMKM, perusahaan, dan
              organisasi di Indonesia.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="!text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="!text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Layanan
            </h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const slugMap: Record<string, string> = {
                  'website-toko-online': '/layanan/toko-online',
                  'landing-page': '/layanan/landing-page',
                  'company-profile': '/layanan/company-profile',
                  'website-sekolah': '/layanan/website-sekolah',
                  'website-pemerintahan': '/layanan/website-pemerintahan',
                  'website-organisasi': '/layanan/website-organisasi',
                };
                const href = slugMap[service.id] || '/#layanan';
                return (
                  <li key={service.id}>
                    <Link
                      href={href}
                      className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links & Contact Column */}
          <div>
            <h3 className="!text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Kontak
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-slate-600">
                {siteConfig.address.street}
              </li>
              <li className="text-sm text-slate-600">
                {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  +{siteConfig.whatsapp.number}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <h3 className="!text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Ikuti Kami
            </h3>
            <div className="flex items-center gap-3">
              {siteConfig.contact.socialLinks.map((social) => {
                const Icon = getSocialIcon(social.platform);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NexaPlus di ${social.platform}`}
                    className="text-slate-500 transition-colors hover:text-blue-600"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} NexaPlus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return InstagramIcon;
    case 'facebook':
      return FacebookIcon;
    case 'linkedin':
      return LinkedinIcon;
    default:
      return InstagramIcon;
  }
}
