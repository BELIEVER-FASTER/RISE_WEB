import gsap from 'gsap';
import React, { useEffect } from 'react';
import ContentPlus from './ContentPlus';
import { AboutSection1CT } from './styles';

export default function AboutSection1(): JSX.Element {
  useEffect(() => {
    gsap.from('.section1 h1', { opacity: 0, delay: 0.4, duration: 1 });
    gsap.from('.section1 h2', { opacity: 0, yPercent: -100, delay: 0.9, duration: 1 });
    gsap.from('.section1 div p', { opacity: 0, xPercent: -100, delay: 1.4, duration: 1 });
    gsap.from('.section2 .video_wrapper', { yPercent: 30, delay: 1.6, duration: 1 });
  }, []);
  return (
    <AboutSection1CT className="section1">
      <h1>
        <p>콘텐츠로</p>
        <p>
          가능성을 더하다
          <ContentPlus />
        </p>
      </h1>
      <div className="title_info">
        <h2>미디어 라이브 커머스 대행사</h2>
        <p>
          지속적으로 보고싶은 콘텐츠를 통해 기획부터 <br />
          연출, 라이브 진행과 방송 송출까지 브랜드와
          <br />
          셀러들에게 최선의 선택지를 제안합니다.
        </p>
      </div>
    </AboutSection1CT>
  );
}
