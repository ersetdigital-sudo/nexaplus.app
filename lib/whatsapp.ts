import { siteConfig } from '@/data/site-config';

export interface WhatsAppLinkOptions {
  phoneNumber: string;
  message?: string;
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  return /^\d{10,15}$/.test(phoneNumber) && phoneNumber.startsWith('62');
}

export function buildWhatsAppUrl(options: WhatsAppLinkOptions): string {
  const { phoneNumber, message } = options;

  if (!validatePhoneNumber(phoneNumber)) {
    throw new Error(
      `Invalid phone number format: ${phoneNumber}. Must start with country code and contain only digits.`
    );
  }

  const baseUrl = `https://wa.me/${phoneNumber}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function buildServiceWhatsAppUrl(serviceName: string): string {
  return buildWhatsAppUrl({
    phoneNumber: siteConfig.whatsapp.number,
    message: `Halo NexaPlus, saya tertarik dengan layanan ${serviceName}. Bisa konsultasi?`,
  });
}

export function buildPricingWhatsAppUrl(tierName: string): string {
  return buildWhatsAppUrl({
    phoneNumber: siteConfig.whatsapp.number,
    message: `Halo NexaPlus, saya tertarik dengan paket ${tierName}. Bisa info lebih lanjut?`,
  });
}

export function getDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl({
    phoneNumber: siteConfig.whatsapp.number,
    message: siteConfig.whatsapp.defaultMessage,
  });
}
