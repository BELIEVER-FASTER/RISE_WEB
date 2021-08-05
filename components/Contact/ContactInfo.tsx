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
    const a = gsap.fromTo(
      '#contact__info_address',
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1 }
    );
    const b = gsap.fromTo(
      '.contact__info_email',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 1 }
    );
    const c = gsap.fromTo(
      '.contact__title_email',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.4, duration: 2 }
    );
    if (inView && ref) {
      c.play();
      b.play();
      a.play();
    }
    return () => {
      a.kill();
      b.kill();
      c.kill();
    };
  }, [inView]);
  return (
    <ContactInfoContainer>
      <article ref={ref}>
        <p id="contact__info_address" className="invincible">
          서울특별시 종로구 동숭길 133
          <br />
          상명대학교 대학로 AI융합센터 1층
        </p>
        <p className="tell">+82 02 1234 4324</p>
        <ul className="email invincible">
          <li>
            <span className="contact__info_email">라이브 진행 문의</span>
            <a className="contact__title_email" href="mailto:ProjectOfficial@gmail.com">
              ProjectOfficial@gmail.com
            </a>
          </li>
          <li>
            <span className="contact__info_email">쇼호스트 지원</span>
            <a className="contact__title_email" href="mailto:ProjectOfficial@gmail.com">
              Official@gmail.com
            </a>
          </li>
        </ul>
      </article>
    </ContactInfoContainer>
  );
}
