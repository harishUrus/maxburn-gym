import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  supporting?: string;
  image: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, supporting, image }) => {
  return (
    <section className="relative w-full overflow-hidden flex items-end" style={{ minHeight: '72svh' }}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.35) 45%, rgba(8,8,10,0.96) 100%)',
        }}
      />
      <div className="relative container-edit pb-16 pt-40 sm:pt-48" style={{ zIndex: 10 }}>
        <ScrollReveal>
          <span className="label-eyebrow text-crimson-2">{eyebrow}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="mt-4 font-normal uppercase leading-[0.9] tracking-tight text-[clamp(2.75rem,7vw,6.5rem)] max-w-4xl text-white">
            {title}
          </h1>
        </ScrollReveal>
        {supporting && (
          <ScrollReveal delay={0.16}>
            <p className="mt-6 text-white/60 text-base sm:text-lg font-light max-w-lg leading-relaxed">
              {supporting}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
