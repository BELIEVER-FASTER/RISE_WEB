import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { videoResources } from 'utils/videoResource';
import { AboutCContainer } from './styles';

export default function AboutC(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (inView && ref && scrollTop) {
      gsap.fromTo(
        '.about_c_video',
        { opacity: 0, y: 70, scale: 1.3 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      );
      gsap
        .timeline()
        .fromTo(
          '.about_c__title',
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.8 }
        )
        .fromTo(
          '.about_c__desc',
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 0.7 }
        );
    }
  }, [inView]);

  return (
    <AboutCContainer className="about_section" ref={ref}>
      <video loop autoPlay muted className="about_c_video invinsible" playsInline>
        <source src={videoResources.counterBG.src} type="video/mp4" />
      </video>
      <div className="section__title">
        <h3 className="about_c__title invinsible">
          <span>Real-Time Viewer</span>
          <span>No. 1 Sales Record</span>
        </h3>
        <p className="about_c__desc invinsible">
          브랜드에 가장 효과적인 채널에서 라이브 쇼핑을 <br /> 진행할 수 있습니다. 지금
          라이브 쇼핑 채널이 <br /> 없다면 패션&뷰티 팬덤이 많은 라이즈 공식 <br />{' '}
          채널에서 진행할 수 있습니다!
        </p>
      </div>
    </AboutCContainer>
  );
}
