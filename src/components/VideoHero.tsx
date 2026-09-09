import React from 'react';

/**
 * VideoHero
 *
 * Plays the finished MAX BURN GYM hero MP4 exactly as provided.
 * The video is an immutable media asset — this component only
 * places it behind the interface, it never modifies, filters,
 * scrubs or regenerates it. Scroll has no effect on playback.
 */
export const VideoHero: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center bg-ink"
      style={{ minHeight: '100svh', height: '100vh' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/max-burn-hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.02), rgba(0,0,0,0.30))',
        }}
      />

      <div className="relative w-full" style={{ zIndex: 10 }}>
        {children}
      </div>
    </section>
  );
};
