import React, { useEffect } from 'react';
import { MainSection2CT } from './styles';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MainSection2({ blackMode }: { blackMode: boolean }): JSX.Element {
  useEffect(() => {
    const a = gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: '13% 0%',
            end: '60% 50%',
            trigger: '.section2',
            scrub: 0.2,
          },
        },
      })
      .fromTo(
        '.section2 .content h2',
        { scale: 4.5, yPercent: 450 },
        { yPercent: 0, scale: 1, opacity: 1 }
      );

    return () => {
      a.clear();
    };
  }, []);
  return (
    <MainSection2CT
      className="section2"
      style={{ opacity: blackMode ? 1 : 0, transition: '0.2s' }}
    >
      <div className="wrapper">
        <div className="content">
          <h2>
            <p data-glitch="라이브 커머스 최초">라이브 커머스 최초</p>
            <p data-glitch="혁신을 만들다.">혁신을 만들다.</p>
          </h2>
        </div>
      </div>
    </MainSection2CT>
  );
}
