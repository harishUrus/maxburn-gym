import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  supporting?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  supporting,
  align = 'left',
  className = '',
}) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} gap-5 ${className}`}>
      {eyebrow && (
        <ScrollReveal>
          <span className="label-eyebrow text-crimson-2 flex items-center gap-3">
            <span className="w-8 h-px bg-crimson-2" />
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2 className="font-normal uppercase leading-[0.92] tracking-tight text-[clamp(2.5rem,6vw,5.5rem)] max-w-4xl">
          {title}
        </h2>
      </ScrollReveal>
      {supporting && (
        <ScrollReveal delay={0.16}>
          <p className="text-white/55 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            {supporting}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};
