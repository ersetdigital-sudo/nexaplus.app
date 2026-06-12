'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { pulseVariants } from '@/lib/animations';

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappUrl = getDefaultWhatsAppUrl();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BD5A] transition-colors"
      variants={pulseVariants}
      animate={prefersReducedMotion ? undefined : 'pulse'}
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </motion.a>
  );
}
