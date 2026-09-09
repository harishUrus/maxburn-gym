import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { CTASection } from '../components/CTASection';
import { PROGRAMS } from '../data/programs';
import { GYM_CONTACT } from '../data/config';

export const Programs: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Your Training.
            <br />
            Your Next Level.
          </>
        }
        image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROGRAMS.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.08}>
              <a
                href={
                  program.cta === 'ENQUIRE NOW'
                    ? GYM_CONTACT.whatsappUrl
                    : '/programs'
                }
                target={program.cta === 'ENQUIRE NOW' ? '_blank' : undefined}
                rel={program.cta === 'ENQUIRE NOW' ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[4/5] isolate"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(8,8,10,0.95) 0%, rgba(8,8,10,0.35) 55%, rgba(8,8,10,0.1) 100%)',
                  }}
                />
                <div className="relative p-7 sm:p-9 flex flex-col gap-3">
                  <h3 className="text-3xl sm:text-4xl uppercase font-normal tracking-tight text-white">
                    {program.title}
                  </h3>
                  <p className="text-white/60 font-light">{program.description}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-crimson-2 group-hover:text-white transition-colors">
                    {program.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Not Sure Where To Start?"
        title={
          <>
            Talk To
            <br />
            Our Coaches.
          </>
        }
        primaryLabel="Enquire Now"
      />
    </>
  );
};
