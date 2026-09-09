import React from 'react';
import { Star, Quote } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { CTASection } from '../components/CTASection';
import { TESTIMONIALS, AGGREGATE_RATING, AGGREGATE_REVIEW_COUNT } from '../data/testimonials';
import { GYM_CONTACT } from '../data/config';

export const Testimonials: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Words From
            <br />
            Our Members.
          </>
        }
        supporting={`${AGGREGATE_RATING} rating from ${AGGREGATE_REVIEW_COUNT} Google reviews at ${GYM_CONTACT.addressLine1}, ${GYM_CONTACT.addressLine2}.`}
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit">
          <ScrollReveal className="flex items-center gap-3 mb-16">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-crimson-2"
                  fill={i < Math.round(AGGREGATE_RATING) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-white font-semibold">{AGGREGATE_RATING}</span>
            <span className="text-white/40 text-sm">
              · {AGGREGATE_REVIEW_COUNT} Google reviews
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal
                key={t.name}
                delay={(i % 3) * 0.07}
                className="bg-ink p-8 flex flex-col gap-5 min-h-[240px] hover:bg-charcoal transition-colors duration-500"
              >
                <Quote className="w-6 h-6 text-crimson-2/60" />
                <p className="text-white/75 font-light leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{t.meta}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join Them"
        title={
          <>
            Write Your
            <br />
            Own Story.
          </>
        }
        primaryLabel="Start Training"
      />
    </>
  );
};
