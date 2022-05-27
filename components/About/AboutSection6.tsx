import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutSection6CT } from './styles';
import gsap from 'gsap';

export default function AboutSection6(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true });
  useEffect(() => {
    if (inView && ref) {
      gsap.fromTo(
        '.app_img',
        { yPercent: 101 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
        }
      );
    }
  }, [inView, ref]);
  return (
    <AboutSection6CT>
      <h2>라이브가 처음이신가요?</h2>
      <p>그래서 라이즈가 아낌없이 준비했습니다.</p>
      <ul>
        <li>
          <div className="img_wrapper">
            <div className="brands">
              <img src="/img/ver2/about/brands.png" alt="" />
              <img src="/img/ver2/about/brands.png" alt="" />
              <img src="/img/ver2/about/brands.png" alt="" />
              <img src="/img/ver2/about/brands.png" alt="" />
            </div>
          </div>
          <h3>다양한 라이브 채널</h3>
          <p>
            네이버 뿐만 아니라 라이브 커머스를 진행하는 모든 채널에서 가능합니다.
            <br />
            <span>
              브랜드 자체적인 채널 뿐만 아니라, 채널이 없는 경우 <br />
              플랫폼 입점부터 모든 과정을 라이즈가 함께합니다.
            </span>
          </p>
        </li>
        <li ref={ref}>
          <div className="img_wrapper">
            <img className="app_img" src="/img/ver2/about/app_image.png" alt="" />
          </div>
          <h3>라이즈 앱 상위 광고 노출</h3>
          <p>
            놓치면 안될 인기 라이브 방송들을 추천해주는 영역입니다.
            <br />
            <span>
              라이즈 앱 메인화면 최상단에 노출되며 <br />이 외에도 검색탭, 스폐셜 라이브
              등 다양한 영역에서 볼 수 있습니다.
            </span>
          </p>
        </li>
      </ul>
    </AboutSection6CT>
  );
}
