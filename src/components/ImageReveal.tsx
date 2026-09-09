import React, { useRef, useEffect } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    if (prefersReducedMotion()) {
      gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set(img, { scale: 1 });
      return;
    }

    gsap.set(wrap, { clipPath: 'inset(0% 0% 100% 0%)' });
    gsap.set(img, { scale: 1.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top 85%',
        once: true,
      },
    });

    tl.to(wrap, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.out' }).to(
      img,
      { scale: 1, duration: 1.4, ease: 'power3.out' },
      '-=1.0',
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};
