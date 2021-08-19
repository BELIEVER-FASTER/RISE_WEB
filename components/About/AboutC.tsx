import React from 'react';
import { AboutCContainer } from './styles';

export default function AboutC(): JSX.Element {
  return (
    <AboutCContainer>
      <img src="/img/aboutTmp7.jpg" />
      <article>
        <h2>
          <span>Real-Time Viewer</span>
          <span>No.1 Sales Record</span>
        </h2>
        <p>
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
