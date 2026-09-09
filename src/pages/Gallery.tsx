import React, { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { CTASection } from '../components/CTASection';
import { GALLERY_IMAGES, type GalleryImage } from '../data/gallery';

const FILTERS = ['All', 'Training', 'Equipment', 'Environment'] as const;

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [active, setActive] = useState<GalleryImage | null>(null);

  const images = useMemo(
    () => (filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Inside The
            <br />
            Floor.
          </>
        }
        supporting="A look at the space, the equipment and the work that happens here."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <ScrollReveal className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${
                  filter === f
                    ? 'bg-white text-black'
                    : 'liquid-glass bg-white/[0.04] text-white/60 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <ScrollReveal
                key={img.src + img.alt}
                delay={(i % 6) * 0.05}
                className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}
              >
                <button
                  type="button"
                  onClick={() => setActive(img)}
                  className="group relative block w-full h-full overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[9998] bg-black/92 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <CTASection
        eyebrow="See It Yourself"
        title={
          <>
            Come Train
            <br />
            With Us.
          </>
        }
        primaryLabel="Visit The Gym"
        primaryTo="/contact"
      />
    </>
  );
};
