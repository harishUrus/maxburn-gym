export interface Program {
  id: string;
  title: string;
  description: string;
  cta: 'VIEW PROGRAM' | 'ENQUIRE NOW';
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'foundation',
    title: 'FOUNDATION',
    description: 'For building consistency and learning the fundamentals.',
    cta: 'VIEW PROGRAM',
    image:
      'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'strength',
    title: 'STRENGTH',
    description: 'For progressive strength development.',
    cta: 'VIEW PROGRAM',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'conditioning',
    title: 'CONDITIONING',
    description: 'For stamina and cardiovascular performance.',
    cta: 'ENQUIRE NOW',
    image:
      'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'For advanced training and athletic development.',
    cta: 'ENQUIRE NOW',
    image:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop',
  },
];
