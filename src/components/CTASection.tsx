import React from 'react';
import { MessageCircle } from 'lucide-react';
import { GlassButton } from './GlassButton';
import { ScrollReveal } from './ScrollReveal';
import { GYM_CONTACT } from '../data/config';

interface CTASectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  supporting?: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = 'JOIN MAX BURN',
  title,
  supporting,
  primaryLabel = 'START TRAINING',
  primaryTo = '/contact',
}) => {
  return (
    <section className="relative bg-ink overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full opacity-40 blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(226,16,26,0.55) 0%, rgba(226,16,26,0) 70%)',
        }}
      />
      <div className="relative container-edit flex flex-col items-center text-center gap-7">
        <ScrollReveal>
          <span className="label-eyebrow text-crimson-2">{eyebrow}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="font-normal uppercase leading-[0.92] tracking-tight text-[clamp(2.75rem,7vw,6rem)] max-w-4xl">
            {title}
          </h2>
        </ScrollReveal>
        {supporting && (
          <ScrollReveal delay={0.14}>
            <p className="text-white/55 text-lg font-light max-w-md">{supporting}</p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <GlassButton variant="solid" to={primaryTo}>
              {primaryLabel}
            </GlassButton>
            <GlassButton
              variant="glass"
              href={GYM_CONTACT.whatsappUrl}
              external
              icon={<MessageCircle className="w-4 h-4" />}
            >
              CHAT ON WHATSAPP
            </GlassButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
