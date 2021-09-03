import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ContactInfoContainer } from './styles';

export default function ContactInfo(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.73,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView && ref) {
      gsap.fromTo(
        '#contact__info_address',
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        '#contact__info_tell',
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        '.contact__info_email',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        '.contact__title_email',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: 0.4,
          duration: 2,
        }
      );
    }
  }, [inView, ref]);

  return (
    <ContactInfoContainer>
      <article ref={ref}>
        <p id="contact__info_address" className="invinsible">
          서울특별시 종로구 동숭길 133
          <br />
          대학로 AI융합센터 1층
        </p>
        <p id="contact__info_tell" className="tell invinsible">
          +82. 02. 1688. 6183
        </p>
        <ul className="email ">
          <li>
            <span className="contact__info_email invinsible">라이브 진행 문의</span>
            <a
              className="contact__title_email invinsible"
              href="mailto:contact@riseenm.com"
            >
              contact@riseenm.com
            </a>
          </li>
          <li>
            <span className="contact__info_email invinsible">쇼호스트 지원</span>
            <a className="contact__title_email invinsible" href="mailto:live@riseenm.com">
              live@riseenm.com
            </a>
          </li>
        </ul>
      </article>
    </ContactInfoContainer>
  );
}
