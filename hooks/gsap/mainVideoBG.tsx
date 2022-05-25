import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function mainVideoBG(): JSX.Element {
  useEffect(() => {
    const a = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '27% 0%',
            end: '70% 0%',
            trigger: '.section5',
            scrub: 0.2,
          },
        },
      })
      .fromTo('.section5 .content video', { scale: 1 }, { scale: 1.7 });
    return () => {
      a.clear();
    };
  }, []);
  return <></>;
}
