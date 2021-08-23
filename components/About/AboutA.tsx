import gsap from 'gsap';
import React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutAContainer } from './styles';

export default function AboutA(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (inView && ref && scrollTop) {
      gsap.fromTo(
        '.about_a__title',
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap
        .timeline()
        .fromTo('.about_a__desc', { opacity: 0 }, { opacity: 1, delay: 0.35 })
        .fromTo(
          '.about_a_img1',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
        .fromTo(
          '.about_a_img2',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
    }
  }, [inView, ref]);

  return (
    <AboutAContainer className="about_section">
      <div className="section__title" ref={ref}>
        <h3 className="about_a__title invinsible">
          <span>Create Live</span>
          <span>Shopping Content</span>
        </h3>
        <p className="about_a__desc invinsible">
          라이브 커머스 전문 PD와 MD, 작가님들이 <br /> 팀을 이뤄 브랜드와 상품을 분석하고
          방송을 <br /> 스타일링 하며 기획부터 사전 마케팅, 방송 연출, <br /> 라이브
          진행까지 모든 솔루션을 경험해보세요
        </p>
      </div>
      <img className="about_a_img1 invinsible" src="/img/about/1.png" alt="" />
      <img className="about_a_img2 invinsible" src="/img/about/2.png" alt="" />
    </AboutAContainer>
  );
}
