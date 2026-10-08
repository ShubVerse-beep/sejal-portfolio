import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapInit = (isLoaded: boolean, rolesCount: number) => {
  useEffect(() => {
    if (!isLoaded) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.rv').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. 360° rotation tied to scroll + gentle idle wobble
      gsap.to('#ring', {
        rotationY: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('#ring', {
        rotationX: 6,
        rotationZ: -2,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // 2. Pointer-based stage parallax
      const handlePointerMove = (e: PointerEvent) => {
        gsap.to('.stage', {
          x: (e.clientX / window.innerWidth - 0.5) * 30,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
          duration: 0.8,
        });
      };
      window.addEventListener('pointermove', handlePointerMove);

      // 3. Rotating role words
      if (rolesCount > 0) {
        const roleTl = gsap.timeline({ repeat: -1 });
        for (let i = 0; i < rolesCount; i++) {
          roleTl.to('#role div:first-child', {
            marginTop: -(i + 1) * 1.84 + 'em',
            duration: 0.7,
            ease: 'power3.inOut',
            delay: 2,
          });
        }
        roleTl.set('#role div:first-child', { marginTop: 0 });
      }

      // 4. Hero entrance animations
      gsap.from('.hero-t > *', {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.stage', {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      });

      // 5. Scroll reveals (.rv)
      gsap.utils.toArray<HTMLElement>('.rv').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        });
      });

      // 6. About photo card scrub transformation
      gsap.to('#pcard', {
        rotate: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      });

      // 7. Skills rows marquee movement on scroll
      gsap.utils.toArray<HTMLElement>('.skills-row').forEach((r, i) => {
        gsap.to(r, {
          x: i % 2 === 1 ? '+=300' : '-=300',
          ease: 'none',
          scrollTrigger: {
            trigger: '#skills',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // 8. Footer big text scrub reveal
      gsap.from('#fbig', {
        yPercent: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
      };
    });

    return () => {
      ctx.revert();
    };
  }, [isLoaded, rolesCount]);
};
