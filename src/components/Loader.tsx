import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { portfolio } from '../data/portfolio';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 0.3 : 2.0;

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
              setIsVisible(false);
              onComplete();
            },
          });
        } else {
          setIsVisible(false);
          onComplete();
        }
      },
    });

    tl.to(counter, {
      val: 100,
      duration: duration,
      ease: 'power1.inOut',
      onUpdate: () => {
        const rounded = Math.round(counter.val);
        setPercent(rounded);
        if (barRef.current) {
          barRef.current.style.width = `${counter.val}%`;
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div id="loader" ref={loaderRef} aria-hidden={!isVisible} role="status" aria-label="Loading portfolio">
      <span className="s mono">INITIALIZING SYSTEM</span>
      <div className="n">
        {portfolio.personal.firstName.toUpperCase()}{' '}
        <span>{portfolio.personal.lastName.toUpperCase()}</span>
      </div>
      <div
        className="mono"
        style={{ fontSize: '11px', letterSpacing: '.25em', marginTop: '8px' }}
      >
        {portfolio.personal.role.toUpperCase()}
      </div>
      <div className="pct">
        <span>{percent}</span>%
      </div>
      <div className="bar">
        <i ref={barRef} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};
