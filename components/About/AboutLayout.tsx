import React from 'react';
import { AboutContainer } from './styles';
import BannerTitle from 'components/Common/BannerTitle';
import AboutA from './AboutA';
import AboutB from './AboutB';
import AboutC from './AboutC';

export default function AboutLayout(): JSX.Element {
  return (
    <AboutContainer>
      <BannerTitle
        firstTitle="Rise"
        secondTitle="About"
        desc="패션 코스메틱 라이브 쇼핑 MCN/패션&코스메틱 전문 쇼핑 호스트 +/크리에이터와 함께하는 라이브 쇼핑의 A-Z"
      />
      <AboutA />
      <AboutB />
      <AboutC />
    </AboutContainer>
  );
}
