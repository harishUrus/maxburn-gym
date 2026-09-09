import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/config';
import { MaxburnLogo } from './MaxburnLogo';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-edit">
          <div
            className={`liquid-glass flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
              scrolled ? 'bg-black/55 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'bg-black/25 py-3.5'
            }`}
          >
            <NavLink to="/" aria-label="Max Burn Gym — Home" onClick={() => setMenuOpen(false)}>
              <MaxburnLogo />
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-xs tracking-[0.18em] uppercase font-medium rounded-full transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <NavLink
                to="/contact"
                className="liquid-glass hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-crimson text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-crimson-2 transition-colors"
              >
                Join Now
              </NavLink>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
