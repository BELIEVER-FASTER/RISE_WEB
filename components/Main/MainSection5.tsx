import React, { useEffect, useState } from 'react';
import { videoResources } from 'utils/videoResource';
import { MainSection5CT } from './styles';

export default function MainSection5(): JSX.Element {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handler = () => {
      const container = document.querySelector('.section5') as HTMLDivElement;
      const elOffsetStart = container.offsetHeight + window.innerHeight;
      const currentOffset = document.documentElement.scrollTop - window.innerHeight;

      if (elOffsetStart < currentOffset) {
        const scale =
          (currentOffset - elOffsetStart + container.clientHeight - window.innerHeight) /
          (container.clientHeight - window.innerHeight);

        if (scale > 1.7) return;
        setScale(scale);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <MainSection5CT className="section5" scale={scale}>
      <div className="content">
        <video loop autoPlay muted playsInline>
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
          촬영부터 마케팅까지 One-Stop 서비스로 당신의 비즈니스를 <br />
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
    </MainSection5CT>
  );
}
