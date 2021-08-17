import React from 'react';
import { AboutAContainer } from './styles';

export default function AboutA(): JSX.Element {
  return (
    <AboutAContainer>
      <div className="section__title">
        <h3>
          <span>Create Live</span>
          <span>Shopping Content</span>
        </h3>
        <p>
          라이브 커머스 전문 PD와 MD, 작가님들이 <br /> 팀을 이뤄 브랜드와 상품을 분석하고
          방송을 <br /> 스타일링 하며 기획부터 사전 마케팅, 방송 연출, <br /> 라이브
          진행까지 모든 솔루션을 경험해보세요
        </p>
      </div>
      <img src="/img/about/1.png" alt="" />
      <img src="/img/about/2.png" alt="" />
    </AboutAContainer>
  );
}
