import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VideoHero } from '../components/VideoHero';
import { GlassButton } from '../components/GlassButton';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageReveal } from '../components/ImageReveal';
import { CTASection } from '../components/CTASection';

const PILLARS = [
  {
    number: '01',
    title: 'STRENGTH',
    description: 'Build raw power and functional strength.',
  },
  {
    number: '02',
    title: 'PERFORMANCE',
    description: 'Train with purpose, intensity and measurable progression.',
  },
  {
    number: '03',
    title: 'DISCIPLINE',
    description: 'Create consistency that changes your body and your life.',
  },
];

const STANDARD_ITEMS = [
  { number: '01', label: 'STRENGTH' },
  { number: '02', label: 'CONDITIONING' },
  { number: '03', label: 'MOBILITY' },
  { number: '04', label: 'PERFORMANCE' },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* ============================================================ HERO ============================================================ */}
      <VideoHero>
        <div className="container-edit flex flex-col justify-center min-h-[100svh] py-32">
          <ScrollReveal y={16}>
            <span className="label-eyebrow text-white/70">Max Burn Gym</span>
          </ScrollReveal>

          <ScrollReveal y={24} delay={0.06}>
            <h1
              className="mt-4 font-normal uppercase text-white leading-[0.85] tracking-tight text-[clamp(3rem,11vw,10.5rem)]"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.55)' }}
            >
              Burn
              <br />
              Beyond
              <br />
              Limits.
            </h1>
          </ScrollReveal>

          <ScrollReveal y={16} delay={0.14}>
            <div className="mt-7 text-white/75 text-base sm:text-lg font-light tracking-wide space-y-0.5 max-w-md">
              <p>Train harder.</p>
              <p>Build stronger.</p>
              <p className="text-white font-medium">Become unstoppable.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={16} delay={0.22}>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <GlassButton variant="solid" to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                Start Training
              </GlassButton>
              <GlassButton variant="glass" to="/programs">
                Explore Membership
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-8 left-6 sm:left-10 hidden sm:block">
          <span className="label-eyebrow text-white/50">Est. For Performance</span>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-10 hidden sm:flex flex-col items-end gap-2">
          <span className="label-eyebrow text-white/50">Scroll To Explore</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </VideoHero>

      {/* ============================================================ SECTION 2 — BUILT FOR THE DISCIPLINED ============================================================ */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit">
          <SectionHeading
            eyebrow="Our Standard"
            title={
              <>
                Built For
                <br />
                The Disciplined.
              </>
            }
            supporting="A training environment designed for people who refuse average."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.08} className="bg-ink p-8 sm:p-10 min-h-[280px] flex flex-col justify-between group hover:bg-charcoal transition-colors duration-500">
                <span className="text-[clamp(3rem,6vw,4.5rem)] font-normal text-white/10 group-hover:text-crimson/40 transition-colors duration-500 leading-none">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl uppercase font-normal tracking-tight mb-3">{p.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ SECTION 3 — YOUR BODY. YOUR STANDARD. ============================================================ */}
      <section className="bg-ink py-24 sm:py-32 overflow-hidden">
        <div className="container-edit grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionHeading
              eyebrow="The Body"
              title={
                <>
                  Your Body.
                  <br />
                  Your Standard.
                </>
              }
            />
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-sm">
              {STANDARD_ITEMS.map((item, i) => (
                <ScrollReveal key={item.number} delay={i * 0.06} className="flex items-baseline gap-3">
                  <span className="text-crimson-2 text-sm font-semibold">{item.number}</span>
                  <span className="text-white/70 uppercase text-sm tracking-[0.1em]">{item.label}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ImageReveal
              src="/images/editorial-silhouette.jpg"
              alt="Silhouetted athlete flexing, lit in dramatic red"
              className="rounded-2xl aspect-[16/10] w-full"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ SECTION 4 — NO SHORTCUTS. NO EXCUSES. ============================================================ */}
      <section className="relative bg-charcoal py-28 sm:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-30 blur-[110px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(226,16,26,0.6) 0%, transparent 70%)' }}
        />
        <div className="relative container-edit flex flex-col items-start gap-8 max-w-2xl">
          <SectionHeading
            eyebrow="Philosophy"
            title={
              <>
                No Shortcuts.
                <br />
                No Excuses.
              </>
            }
            supporting="Progress is earned through consistency, intelligent programming and relentless execution."
          />
          <ScrollReveal delay={0.2}>
            <GlassButton variant="glass" to="/about" icon={<ArrowRight className="w-4 h-4" />}>
              Discover Our Approach
            </GlassButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ SECTION 5 — FINAL CTA ============================================================ */}
      <CTASection
        eyebrow="Get Started"
        title={
          <>
            Ready To
            <br />
            Burn More?
          </>
        }
        supporting="Your next level starts with one decision."
        primaryLabel="Start Your Journey"
      />
    </>
  );
};
