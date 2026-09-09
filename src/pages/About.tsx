import React from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageReveal } from '../components/ImageReveal';
import { CTASection } from '../components/CTASection';

const VALUES = [
  { title: 'DISCIPLINE', description: 'We believe consistency creates results.' },
  { title: 'INTENSITY', description: 'Train with purpose.' },
  { title: 'PROGRESS', description: 'Measure improvement and keep moving.' },
  { title: 'COMMUNITY', description: 'Surround yourself with people who push higher.' },
];

export const About: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About Max Burn"
        title={
          <>
            More Than
            <br />A Gym.
          </>
        }
        supporting="A place built around discipline, performance and transformation."
        image="/images/gym-floor.webp"
      />

      {/* STORY */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-6">
            <ImageReveal
              src="/images/editorial-silhouette.jpg"
              alt="Silhouetted athlete lit in dramatic red, mid pose"
              className="rounded-2xl aspect-[4/5] w-full"
            />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our Philosophy"
              title={
                <>
                  Built On
                  <br />
                  Discipline.
                </>
              }
              supporting="Max Burn Gym exists for people who refuse average. We build a training environment centered on discipline, strength, consistency and community — where every session moves you closer to the standard you set for yourself. Transformation is not an event. It is a practice, repeated, until it becomes who you are."
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-charcoal py-24 sm:py-32">
        <div className="container-edit">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" align="center" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {VALUES.map((v, i) => (
              <ScrollReveal
                key={v.title}
                delay={i * 0.07}
                className="bg-charcoal p-10 sm:p-12 min-h-[220px] flex flex-col justify-center gap-3 hover:bg-ink transition-colors duration-500"
              >
                <h3 className="text-3xl sm:text-4xl uppercase font-normal tracking-tight">{v.title}</h3>
                <p className="text-white/50 font-light text-lg">{v.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Take The Step"
        title={
          <>
            Become
            <br />
            Harder To Break.
          </>
        }
        primaryLabel="Join Max Burn"
      />
    </>
  );
};
