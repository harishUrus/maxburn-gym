import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, GYM_CONTACT } from '../data/config';
import { MaxburnLogo } from './MaxburnLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-charcoal border-t border-white/5">
      <div className="container-edit py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 flex flex-col gap-5">
          <MaxburnLogo />
          <p className="text-white/45 text-sm font-light max-w-sm leading-relaxed">
            A training environment built for discipline, performance and transformation.
            Train harder. Build stronger. Become unstoppable.
          </p>
          <Link
            to="/contact"
            className="liquid-glass inline-flex w-fit items-center px-6 py-3 rounded-full bg-crimson text-white text-xs uppercase tracking-[0.18em] font-semibold mt-2"
          >
            Join Now
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="label-eyebrow text-white/40">Navigate</span>
          <nav className="flex flex-col gap-2.5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white/60 hover:text-white text-sm transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="label-eyebrow text-white/40">Contact</span>
          <a
            href={GYM_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-crimson-2 shrink-0" />
            Chat With Us
          </a>
          <a
            href={`tel:${GYM_CONTACT.phoneRaw}`}
            className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-crimson-2 shrink-0" />
            {GYM_CONTACT.phoneDisplay}
          </a>
          <a
            href={GYM_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <MapPin className="w-4 h-4 text-crimson-2 shrink-0 mt-0.5" />
            <span>{GYM_CONTACT.addressLine1}, {GYM_CONTACT.addressLine2}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-edit py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 tracking-wide">
          <span>© {new Date().getFullYear()} MAX BURN GYM. All rights reserved.</span>
          <span className="uppercase tracking-[0.2em]">Burn Beyond Limits</span>
        </div>
      </div>
    </footer>
  );
};
