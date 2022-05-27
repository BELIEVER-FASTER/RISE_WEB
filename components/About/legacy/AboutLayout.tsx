import BannerTitle from 'components/Common/BannerTitle';
import React from 'react';
import AboutA from './AboutA';
import AboutB from './AboutB';
import AboutC from './AboutC';
import { AboutLayoutContainer } from './styles';

export default function AboutLayout(): JSX.Element {
  return (
    <AboutLayoutContainer>
      <BannerTitle
        page="about"
        title1="Rise"
        title2="About"
        desc="패션&코스메틱 전문 쇼호스트 /+ 크리에이터와 함께하는 / 라이브커머스의 A-Z"
      />
      <AboutA />
      <AboutB />
      <AboutC />
    </AboutLayoutContainer>
  );
}
