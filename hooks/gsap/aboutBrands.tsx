import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutBrands(): JSX.Element {
  useEffect(() => {
    const a = gsap
      .timeline({ yoyo: true })
      .to('.section3_title', {
        scrollTrigger: {
          trigger: '.section3',
          scrub: 0.2,
          start: '5% 0%',
          end: '30% 0%',
        },
        translateY: '0%',
        fontWeight: 400,
        scale: 1,
      })
      .to('.section3_brands,.section3_brands_mobile', {
        scrollTrigger: {
          trigger: '.section3',
          scrub: 0.2,
          start: '25% 0%',
          end: '50% 0%',
        },
        opacity: 1,
      });

    return () => {
      a.clear();
    };
  }, []);
  return <></>;
}
