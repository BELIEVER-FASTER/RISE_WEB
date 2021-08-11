import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ContactBannerContainer } from './styles';
import LottieIcon from 'components/Common/LottieIcon';

export default function ContactBanner(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    const a = gsap.fromTo(
      '#contact_title',
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1 }
    );
    const b = gsap.fromTo(
      '#contact_desc',
      { opacity: 0 },
      { opacity: 1, delay: 0.7, duration: 3 }
    );

    if (inView && ref) {
      a.play();
      b.play();
    }
    return () => {
      a.kill();
      b.kill();
    };
  }, [inView]);
  return (
    <ContactBannerContainer>
      <h1 ref={ref}>
        <LottieIcon />
        <span id="contact_title">Contact Us</span>
      </h1>
      <p id="contact_desc">
        우리는 패션 & 코스메틱 <br />
        라이브쇼핑을
        <br />
        디렉팅하는 <br />
        Live MCN Rise 기업입니다.
      </p>
    </ContactBannerContainer>
  );
}
