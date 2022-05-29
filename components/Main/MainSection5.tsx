import dynamic from 'next/dynamic';
import React from 'react';
import { videoResources } from 'utils/videoResource';
import { MainSection5CT } from './styles';
const Gsap = dynamic(import('../../hooks/gsap/mainVideoBG'), { ssr: false });
export default function MainSection5(): JSX.Element {
  return (
    <MainSection5CT className="section5">
      <div className="content">
        <video className="background_video" loop autoPlay muted playsInline>
          <source src={videoResources.about_mov.src} type="video/mp4" />
        </video>
        <div className="content_layer"></div>
      </div>
      <div className="text text_1">
        <h3>
          <strong>Content </strong>로 <br />
          가능성을 더하다.
        </h3>
        <p>
          촬영부터 마케팅까지 One-Stop <br className="mobile" /> 서비스로 당신의
          비즈니스를 <br />
          성장시키는 방법을 살펴보세요.
        </p>
      </div>
      <div className="text text_2">
        <h3>
          <strong>Live </strong>로 <br />
          디테일을 더하다.
        </h3>
        <p>
          기획부터 연출, 라이브 진행과 방송 송출까지
          <br /> 모든 솔루션을 제공합니다.
        </p>
      </div>
      <Gsap />
    </MainSection5CT>
  );
}
