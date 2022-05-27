import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutVideoBG(): JSX.Element {
  useEffect(() => {
    const a = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '0% 0%',
            end: '10% 0%',
            trigger: '.section2',
            scrub: 0.2,
          },
        },
        //
      })
      .fromTo('.section2 .content .dark_wrapper', { opacity: 0 }, { opacity: 0.75 })
      .fromTo('.section2 .content', { width: '75%' }, { width: '100%' });

    const b = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '15% 0%',
            end: '25% 0%',
            trigger: '.section2',
            scrub: 0.2,
          },
        },
        //
      })
      .fromTo('.title1', { opacity: 0, xPercent: 15 }, { opacity: 1, xPercent: 0 });

    const c = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '40% 0%',
            end: '60% 0%',
            trigger: '.section2',
            scrub: 0.2,
          },
        },
        //
      })
      .fromTo('.title1', {}, { opacity: 0.2 })
      .fromTo('.title2', { opacity: 0 }, { opacity: 1 });
    return () => {
      a.clear();
      b.clear();
      c.clear();
    };
  }, []);
  return <></>;
}
