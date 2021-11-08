import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContactPhoneContainer } from './styles';
import { imageResources } from 'utils/imageResource';

gsap.registerPlugin(ScrollTrigger);

export default function Contact(): JSX.Element {
  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: '#contact-animation__box',
            scrub: 2,
            // onUpdate: self => {
            //   const clamp = gsap.utils.clamp(-20, 20);
            //   const skew = clamp(self.getVelocity() / -100);
            //   gsap.to('#contact-animation__box p', { skewX: -skew });
            // },
          },
        },
      })
      .fromTo(
        '#contact-animation__box p:first-of-type',
        {
          xPercent: 100,
        },
        { xPercent: -50 }
      )
      .fromTo(
        '#contact-animation__box p:last-of-type',
        {
          xPercent: -50,
        },
        { xPercent: 20 }
      );
  }, []);

  return (
    <ContactPhoneContainer id="contact-animation__box">
      <p className="start">START A</p>
      <img
        src={imageResources.phoneMock}
        title="라이브커머스를 보여주는 아이폰을 닮은 휴대폰"
        alt="라이브커머스를 진행하고 있는 두명의 쇼호스트"
      />
      <p className="end">NEW PROJECT</p>
    </ContactPhoneContainer>
  );
}
