import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { AboutAContainer } from './styles';

export default function AboutA(): JSX.Element {
  const [sectionAref, sectionAInView] = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    const a1 = gsap.timeline();
    if (sectionAInView) {
      a1.fromTo('.a_h', { opacity: 0, y: 150 }, { opacity: 1, y: 0 })
        .fromTo('.a_paragraph', { opacity: 0 }, { opacity: 1 })
        .fromTo('.a_img1', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
        .fromTo('.a_img2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    }
  }, [sectionAInView]);

  return (
    <AboutAContainer ref={sectionAref}>
      <article>
        <h2 className="a_h">
          <span>Create Live</span>
          <span>Shopping Content</span>
        </h2>
        <p className="a_paragraph">
          라이브 커머스 전문 PD와 MD, 작가님들이
          <br />
          팀을 이뤄 브랜드와 상품을 분석하고 방송을
          <br />
          스타일링 하며 기획부터 사전 마케팅, 방송 연출,
          <br />
          라이브 진행까지 모든 솔루션을 경험해보세요
        </p>
      </article>
      <img className="a_img1" src="/img/aboutTmp1.png" />
      <img className="a_img2" src="/img/aboutTmp2.png" />
    </AboutAContainer>
  );
}
