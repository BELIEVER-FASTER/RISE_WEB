import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';
import { ContactPhoneContainer } from './styles';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

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
            onUpdate: self => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -100);
              gsap.to('#contact-animation__box p', { skewX: -skew });
            },
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
        '#contact-animation__box p:nth-of-type(2)',
        {
          xPercent: -50,
        },
        { xPercent: 10 }
      );
  }, []);
  return (
    <ContactPhoneContainer id="contact-animation__box">
      <p className="start">START A</p>
      <img src="/img/live_mock.png" alt="phone" />
      <p className="end">NEW PROJECT</p>
    </ContactPhoneContainer>
  );
}
