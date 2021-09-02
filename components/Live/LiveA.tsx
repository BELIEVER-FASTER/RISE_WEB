import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';
import ModelDesc from './ModelDesc';
import ModelSecond from './ModelSecond';
import { Live1Container, LiveLayoutContainer } from './styles';
import { laelImages, seraImages } from 'utils/modelsData';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

export default function LiveA(): JSX.Element {
  useEffect(() => {
    const a1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: '10% top',
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
        start: '55% top',
        end: '68% top',
        scrub: 1,
      },
    });
    const b2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_a',
        start: '80% top',
        end: '85% top',
        scrub: 1,
      },
    });

    a1.to('.a1_img', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
      .to('#section1_title', { opacity: 0, scale: 0.5, y: 60 })
      .from('.section1_model .model_info_name', { opacity: 0, translateY: 300 })
      .to('.section1_model .line__round_wrapper', {
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      })
      .from('.section1_model .model_info_desc', { opacity: 0, translateY: 300 });

    a2.set('.model__image', { opacity: 0 })
      .from('#section2', { x: '100vw' })
      .set(`.model__image`, {
        opacity: 1,
      });

    b1.from('#section3', { x: '100vw' })
      .from('.section3_model .model_info_name', { opacity: 0, translateY: 300 })
      .to('.section3_model .line__round_wrapper', {
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      })
      .from('.section3_model .model_info_desc', { opacity: 0, translateY: 300 });

    b2.set('.model__image', { opacity: 0 })
      .from('#section4', { x: '100vw' })
      .to('.red_arrow', { rotate: 90 })
      .set(`.model__image`, {
        opacity: 1,
      });
    return () => {
      a1.kill();
      a2.kill();
      b1.kill();
      b2.kill();
      window.scrollTo({ top: 0 });
    };
  }, []);

  return (
    <LiveLayoutContainer id="section_a">
      <Live1Container>
        <section id="section1">
          <h1 id="section1_title">
            <span>Not A Just Showhost.</span> <br />
            <span>
              Only One
              <br /> Creator
            </span>
          </h1>
          <ModelDesc
            className="section1_model main_header"
            name="Seola"
            desc1="Popular"
            desc2="Showhost"
          />
          <div className="a1_img"></div>
        </section>
        <section id="section2">
          <ModelSecond images={seraImages} />
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
