import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { imageResources } from 'utils/imageResource';
import { AboutBContainer } from './styles';

export default function AboutB(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (inView && ref && scrollTop) {
      gsap.fromTo(
        '.about_b__title',
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap
        .timeline()
        .fromTo('.about_b__desc', { opacity: 0 }, { opacity: 1, delay: 0.35 })
        .fromTo(
          '.about_b_img1',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
        .fromTo(
          '.about_b_img2',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.2 }
        )
        .fromTo(
          '.about_b_img3',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.2 }
        )
        .fromTo(
          '.about_b_img4',
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.2 }
        );
    }
  }, [inView, ref]);

  return (
    <AboutBContainer className="about_section">
      <div className="section__title" ref={ref}>
        <h3 className="about_b__title invinsible">
          <span>
            브랜드의 컨셉과
            <br className="mobile" />
            &nbsp;스타일에 최적화 방송
          </span>
          <span></span>
        </h3>
        <p className="about_b__desc invinsible">
          고급스러운 하이엔드 브랜드부터 10-20대를
          <br className="mobile" /> 사로잡는 캐주얼 브랜드까지
          <br className="desk" /> 가장 잘 어울리는
          <br className="mobile" /> 쇼호스트 + 크리에이터를 매칭하여
          <br className="mobile" />
          <br className="desk" /> 최고의 라이브 컨디션을 위한 <br className="mobile" />
          1:1 맞춤형 서비스를 제공합니다.
        </p>
      </div>
      <div className="img__wrapper">
        <img
          className="about_b_img1 invinsible"
          src={imageResources.about3}
          alt="품격있는 하이텐션 윤라엘 쇼호스트"
          title="윤라엘 쇼호스트"
        />
        <img
          className="about_b_img2 invinsible"
          src={imageResources.about4}
          alt="하이텐션 입담과 반전매력을 소유한 샵테이너 박설아 쇼호스트"
          title="박설아 쇼호스트"
        />
        <img
          className="about_b_img3 invinsible"
          src={imageResources.about5}
          alt="다양한 라이브커머스 경험으로 브랜드 가치를 높이며 재미있는 방송으로 선보이는 김동현 쇼호스트"
          title="김동현 쇼호스트"
        />
        <img
          className="about_b_img4 invinsible"
          src={imageResources.about6}
          alt="다양한 라이브커머스 경험으로 브랜드 가치를 높이며 재미있는 방송으로 선보이는 이아윤 쇼호스트"
          title="이아윤 쇼호스트"
        />
      </div>
    </AboutBContainer>
  );
}
