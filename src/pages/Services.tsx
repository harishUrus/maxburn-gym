import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageReveal } from '../components/ImageReveal';
import { CTASection } from '../components/CTASection';
import { SERVICES } from '../data/services';

export const Services: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Train With
            <br />
            Purpose.
          </>
        }
        supporting="Everything you need to build strength, improve performance and stay consistent."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-ink py-8 sm:py-12">
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={service.number} className="container-edit py-16 sm:py-20 border-b border-white/5 last:border-b-0">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-6">
                  <ImageReveal
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl aspect-[4/3] w-full"
                  />
                </div>
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <ScrollReveal>
                    <span className="text-crimson-2 text-sm font-semibold tracking-[0.2em]">
                      {service.number}
                    </span>
                  </ScrollReveal>
                  <ScrollReveal delay={0.08}>
                    <h2 className="text-[clamp(2rem,4vw,3.25rem)] uppercase font-normal leading-[0.95] tracking-tight">
                      {service.title}
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={0.14}>
                    <p className="text-white/55 font-light text-lg max-w-md leading-relaxed">
                      {service.description}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTASection
        eyebrow="Next Step"
        title={
          <>
            Train With
            <br />
            The Right Team.
          </>
        }
        primaryLabel="Start Training"
      />
    </>
  );
};
