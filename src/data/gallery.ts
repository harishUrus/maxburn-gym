export interface GalleryImage {
  src: string;
  alt: string;
  category: 'Training' | 'Equipment' | 'Environment';
}

// Note: the gym's real Google Business photos are not accessible via
// automated scraping (Google serves them dynamically with no stable
// direct URLs), so this gallery uses curated editorial stock imagery
// matching the brand rather than misattributed or fabricated photos.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Gym training floor with mirrors and equipment',
    category: 'Environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
    alt: 'Barbell rack and free weights',
    category: 'Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    alt: 'Athlete performing a heavy deadlift',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop',
    alt: 'Functional training with kettlebells',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1400&auto=format&fit=crop',
    alt: 'Dumbbell rack in the free weights area',
    category: 'Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop',
    alt: 'Cardio and conditioning zone',
    category: 'Environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1400&auto=format&fit=crop',
    alt: 'Trainer coaching a strength session',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1400&auto=format&fit=crop',
    alt: 'Performance training in progress',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1400&auto=format&fit=crop',
    alt: 'Mobility and stretching area',
    category: 'Environment',
  },
];
