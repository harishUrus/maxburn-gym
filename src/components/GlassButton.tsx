import React from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'glass';
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] rounded-full transition-colors duration-300 whitespace-nowrap';

const variants: Record<string, string> = {
  solid: 'bg-white text-black hover:bg-white/90',
  glass: 'liquid-glass text-white bg-white/[0.04] hover:bg-white/[0.09]',
};

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'solid',
  to,
  href,
  external,
  onClick,
  className = '',
  icon,
}) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <MagneticButton
        as="a"
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </MagneticButton>
    );
  }

  return (
    <MagneticButton onClick={onClick} className={classes}>
      {content}
    </MagneticButton>
  );
};
