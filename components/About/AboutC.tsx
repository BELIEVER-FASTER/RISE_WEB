import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { AboutCContainer } from './styles';

export default function AboutC(): JSX.Element {
  const [sectionCref, sectionCInView] = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    const c1 = gsap.timeline();
    if (sectionCInView) {
      c1.fromTo('.c_img', { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.5 })
        .fromTo('.c_h', { opacity: 0, y: 150 }, { opacity: 1, y: 0, delay: 0.3 })
        .fromTo('.c_paragraph', { opacity: 0 }, { opacity: 1 });
    }
  }, [sectionCInView]);

  return (
    <AboutCContainer ref={sectionCref}>
      <img className="c_img" src="/img/aboutTmp7.jpg" />
      <article>
        <h2 className="c_h">
          <span>Real-Time Viewer</span>
          <span>No.1 Sales Record</span>
        </h2>
        <p className="c_paragraph">
          브랜드에 가장 효과적인 채널에서 라이브 쇼핑을
          <br />
          진행할 수 있습니다. 지금 라이브 쇼핑 채널이
          <br />
          없다면 패션&뷰티 팬덤이 많은 라이즈 공식
          <br />
          채널에서 진행할 수 있습니다!
        </p>
      </article>
    </AboutCContainer>
  );
}
