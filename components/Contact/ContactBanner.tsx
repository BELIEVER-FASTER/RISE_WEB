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
  }, [inView, ref]);
  return (
    <ContactBannerContainer>
      <h1 ref={ref}>
        <LottieIcon />
        <span id="contact_title">Contact Us</span>
      </h1>
      <p id="contact_desc">
        라이즈 스튜디오는 브랜드 컨셉에 맞는 라이브 진행과 결과 리포트까지
        <br />
        하나의 콘텐츠로서 제공하여 여러분들의 성장을 함께합니다.
      </p>
      <p style={{ opacity: 0, height: 0 }}>
        하나의 콘텐츠로서 제공하여 여러분들의 성장을 함께합니다.
      </p>
    </ContactBannerContainer>
  );
}
