import React from 'react';

export const MaxburnLogo: React.FC<{ className?: string; showWordmark?: boolean }> = ({
  className = '',
  showWordmark = true,
}) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/maxburn-logo.png"
        alt="MAX BURN GYM"
        width={40}
        height={40}
        className="w-9 h-9 sm:w-10 sm:h-10 object-contain select-none"
        loading="eager"
      />
      {showWordmark && (
        <span className="font-semibold text-base sm:text-lg tracking-[0.08em] text-white uppercase leading-none">
          Max <span className="text-crimson-2">Burn</span> Gym
        </span>
      )}
    </span>
  );
};
