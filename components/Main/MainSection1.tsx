import React from 'react';
import { videoResources } from 'utils/videoResource';
import { MainSection1CT } from './styles';

export default function MainSection1(): JSX.Element {
  return (
    <MainSection1CT>
      <h1>
        <p>
          <span className="value">
            <strong>Live</strong>Commerce
          </span>
          <span className="bottom_line" />
        </p>
        <p className="verticalFlip">
          <span>동시간대 시청자 수 1위.</span>
          <span>실시간 매출 1위.</span>
          <span>인플루언서 라이브.</span>
          <span>고화질 라이브.</span>
        </p>
        <p>
          <span className="value">
            <strong>Is</strong>Rise Studio
          </span>
          <span className="bottom_line" />
        </p>
      </h1>
      <div className="main_banner_video">
        <video loop autoPlay muted playsInline>
          <source src={videoResources.mainBG.src} type="video/mp4" />
        </video>
      </div>
    </MainSection1CT>
  );
}
