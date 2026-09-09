// ============================================================
// GLOBAL SITE CONFIGURATION
// Real, previously-verified business details (not invented).
// ============================================================

export const MAX_BURN_WHATSAPP_NUMBER = '917904660887';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Max Burn Gym, I want to know more about your membership plans.';

export const buildWhatsAppUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${MAX_BURN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const GYM_CONTACT = {
  name: 'MAX BURN GYM',
  addressLine1: 'LB Rd, Kamaraj Nagar',
  addressLine2: 'Thiruvanmiyur, Chennai, Tamil Nadu 600041',
  phoneDisplay: '+91 79046 60887',
  phoneRaw: '+917904660887',
  email: 'hello@maxburngym.com',
  whatsappUrl: buildWhatsAppUrl(),
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=MAXBURN+GYM+LB+Rd+Kamaraj+Nagar+Thiruvanmiyur+Chennai+Tamil+Nadu+600041',
  hours: {
    weekdays: '5:30 AM – 10:00 PM (Mon – Sat)',
    sunday: '6:00 AM – 1:00 PM',
  },
};

export const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SERVICES', to: '/services' },
  { label: 'PROGRAMS', to: '/programs' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'TESTIMONIALS', to: '/testimonials' },
  { label: 'CONTACT', to: '/contact' },
];
