import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';

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
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Jasa pembuatan website profesional untuk UMKM, perusahaan, dan
              organisasi di Indonesia.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Layanan
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <span className="text-sm text-gray-400">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  aria-label="WhatsApp NexaPlus"
                >
                  <Phone className="h-4 w-4" />
                  <span>+{siteConfig.whatsapp.number}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  aria-label="Email NexaPlus"
                >
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              {siteConfig.contact.socialLinks.map((social) => {
                const Icon = getSocialIcon(social.platform);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NexaPlus di ${social.platform}`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
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
