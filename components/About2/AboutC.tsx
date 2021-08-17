import React from 'react';
import { videoResources } from 'utils/videoResource';
import { AboutCContainer } from './styles';

export default function AboutC(): JSX.Element {
  return (
    <AboutCContainer>
      <video loop autoPlay muted>
        <source src={videoResources.counterBG.src} type="video/mp4" />
      </video>
      <div className="section__title">
        <h3>
          <span>Rreal-Time Viewer</span>
          <span>No. 1 Sales Record</span>
        </h3>
        <p>
          브랜드에 가장 효과적인 채널에서 라이브 쇼핑을 <br /> 진행할 수 있습니다. 지금
          라이브 쇼핑 채널이 <br /> 없다면 패션&뷰티 팬덤이 많은 라이즈 공식 <br />{' '}
          채널에서 진행할 수 있습니다!
        </p>
      </div>
    </AboutCContainer>
  );
}
