import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { AboutBContainer } from './styles';

export default function AboutB(): JSX.Element {
  const [sectionBref, sectionBInView] = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    const b1 = gsap.timeline();
    if (sectionBInView) {
      b1.fromTo('.b_h', { opacity: 0, y: 150 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo('.b_paragraph', { opacity: 0 }, { opacity: 1 })
        .fromTo('.b_img2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
        .fromTo('.b_img1', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
        .fromTo('.b_img4', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
        .fromTo('.b_img3', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    }
  }, [sectionBInView]);

  return (
    <AboutBContainer ref={sectionBref}>
      <article>
        <h2 className="b_h">
          <span>
            Optimized For <br />
            The Brand
          </span>
          <span>Concept And Style</span>
        </h2>
        <p className="b_paragraph">
          고급스러운 하이엔드 브랜드부터 <br className="mobile-br" />
          10~20대를 사로잡는 캐주얼 브랜드까지
          <br />
          가장 잘 어울리는 쇼핑호스트 <br className="mobile-br" />
          + 크리에이터를 매칭하여
          <br />
          최고의 라이브 컨디션을 위한 <br className="mobile-br" />
          1:1 맞춤형 서비스를 제공합니다.
        </p>
      </article>
      <div>
        <img className="b_img1" src="/img/aboutTmp3.png" />
        <img className="b_img2" src="/img/aboutTmp4.png" />
        <img className="b_img3" src="/img/aboutTmp5.png" />
        <img className="b_img4" src="/img/aboutTmp6.png" />
      </div>
    </AboutBContainer>
  );
}
