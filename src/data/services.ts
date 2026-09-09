export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'PERSONAL TRAINING',
    description:
      'One-on-one coaching designed around your goals, ability and progression.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'STRENGTH TRAINING',
    description:
      'Structured strength development for beginners through advanced athletes.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'FUNCTIONAL TRAINING',
    description:
      'Movement-focused training for strength, conditioning and everyday performance.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'CONDITIONING',
    description:
      'High-intensity sessions designed to improve stamina and work capacity.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    number: '05',
    title: 'MOBILITY',
    description: 'Build better movement, flexibility and recovery.',
    image:
      'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    number: '06',
    title: 'PERFORMANCE TRAINING',
    description:
      'Train with greater intensity, precision and measurable progression.',
    image:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop',
  },
];
