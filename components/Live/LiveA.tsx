import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModelDesc from './ModelDesc';
import ModelSecond from './ModelSecond';
import { Live1Container, LiveLayoutContainer } from './styles';
import { laelImages, serraImages } from 'utils/modelImages';

gsap.registerPlugin(ScrollTrigger);

export default function LiveA(): JSX.Element {
  useEffect(() => {
    const a1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: 'top top',
        end: '25% top',
        scrub: 1,
      },
    });
    const a2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: '35% top',
        end: '40% top',
        scrub: 1,
      },
    });
    const b1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: '50% top',
        end: '55% top',
        scrub: 1,
      },
    });
    const b2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: '70% top',
        end: '75% top',
        scrub: 1,
      },
    });

    a1.to('.a1_img', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
      .to('#section1_title', { opacity: 0, scale: 0.5, y: 60 })
      .to('.main_header', { color: '#fff', fill: '#fff', stroke: '#fff' })
      .from('.model_info', { opacity: 0, translateY: 300 })
      .set('.model__image', { opacity: 0 });

    a2.from('#section2', { x: '100vw' }).to('.main_header', {
      color: '#000',
      fill: '#000',
      stroke: '#000',
    });

    b1.from('#section3', { x: '100vw' })
      .to('.section3_model', {
        opacity: 1,
        translateY: 0,
      })
      .to('.main_header', { color: '#fff', fill: '#fff', stroke: '#fff' })
      .set('.model__image', { opacity: 0 });

    b2.from('#section4', { x: '100vw' })
      .to('.main_header', { color: '#000', fill: '#000', stroke: '#000' })
      .to('.red_arrow', { rotate: 90 });
  }, []);
  return (
    <LiveLayoutContainer id="section_a">
      <Live1Container>
        <section id="section1">
          <h1 id="section1_title">
            Not A Just Showhost. <br />
            Only One Creator
          </h1>
          <ModelDesc
            className="section1_model main_header"
            name="Serra"
            desc1="Popular"
            desc2="Showhost"
          />
          <div className="a1_img"></div>
        </section>
        <section id="section2">
          <ModelSecond images={serraImages} />
        </section>
        <section id="section3">
          <div className="a2_img"></div>
        </section>
        <ModelDesc
          className="section3_model main_header"
          name="Lael"
          desc1="Popular"
          desc2="Showhost"
        />
        <section id="section4">
          <ModelSecond images={laelImages} />
        </section>
      </Live1Container>
    </LiveLayoutContainer>
  );
}
