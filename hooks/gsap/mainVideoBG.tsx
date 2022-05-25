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
        //
      })
      .fromTo('.section5 .content video', { scale: 1 }, { scale: 1.7 });
    const b = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '10% 0%',
            end: '26% 0%',
            trigger: '.section5',
            scrub: 0.2,
          },
        },
        //
      })
      .fromTo('.section5 .content .content_layer', { opacity: 0 }, { opacity: 1 });

    return () => {
      a.clear();
      b.clear();
    };
  }, []);
  return <></>;
}
