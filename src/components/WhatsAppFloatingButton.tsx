import React, { useState } from 'react';
import { GYM_CONTACT } from '../data/config';

export const WhatsAppFloatingButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed z-[9999] flex items-center bottom-5 right-5 sm:bottom-6 sm:right-6"
      style={{ bottom: '20px', right: '20px' }}
    >
      <span
        className={`hidden sm:block mr-3 px-3.5 py-2 rounded-full bg-black/85 border border-white/10 text-xs uppercase tracking-widest text-white whitespace-nowrap transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with Max Burn Gym
      </span>

      <a
        href={GYM_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Max Burn Gym on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center justify-center w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full transition-transform duration-300 hover:scale-[1.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <span
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
          style={{ animationDuration: '2.6s' }}
        />
        <span className="relative flex items-center justify-center w-full h-full rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(0,0,0,0.5)]">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.8 11.45c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.52.65-.64.79-.12.13-.24.15-.44.05-.2-.1-.85-.31-1.63-1-.6-.53-1.01-1.19-1.13-1.39-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.09-.62-1.5-.16-.39-.33-.34-.45-.35-.12-.01-.25-.01-.39-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66 0 .98.72 1.93.82 2.06.1.13 1.41 2.16 3.42 3.03.48.21.85.33 1.15.42.48.15.92.13 1.26.08.39-.06 1.18-.48 1.35-.95.17-.46.17-.86.12-.95-.05-.08-.18-.13-.38-.23z" />
          </svg>
        </span>
      </a>
    </div>
  );
};
