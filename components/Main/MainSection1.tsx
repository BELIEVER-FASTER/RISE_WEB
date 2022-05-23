import React from 'react';
import { videoResources } from 'utils/videoResource';
import { MainSection1CT } from './styles';

export default function MainSection1(): JSX.Element {
  return (
    <MainSection1CT>
      <h1>
        <p>
          <strong>Live</strong> Commerce
        </p>
        <p>동시간대 시청자수 1위.</p>
        <p>
          <strong>Is</strong> Rise Studio
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
