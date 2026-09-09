import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { NAV_LINKS, GYM_CONTACT } from '../data/config';
import { gsap, prefersReducedMotion } from '../lib/gsap';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: open ? 1 : 0 });
      return;
    }

    if (open) {
      gsap.to(el, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' });
      gsap.fromTo(
        el.querySelectorAll('[data-menu-item]'),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, delay: 0.1, ease: 'power3.out' },
      );
    } else {
      gsap.to(el, { autoAlpha: 0, duration: 0.25, ease: 'power2.in' });
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      ref={overlayRef}
      id="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <nav className="flex flex-col items-center gap-6" aria-label="Mobile primary">
        {NAV_LINKS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            data-menu-item
            onClick={onClose}
            className={({ isActive }) =>
              `text-4xl uppercase font-normal tracking-wide transition-colors ${
                isActive ? 'text-crimson-2' : 'text-white/85 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div data-menu-item className="flex flex-col items-center gap-4 mt-4">
        <a
          href={GYM_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="liquid-glass inline-flex items-center gap-2 px-8 py-4 rounded-full bg-crimson text-white uppercase text-sm tracking-[0.15em] font-semibold"
        >
          <MessageCircle className="w-4 h-4" />
          JOIN NOW
        </a>
      </div>
    </div>
  );
};
