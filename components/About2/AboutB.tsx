import React from 'react';
import { AboutBContainer } from './styles';

export default function AboutB(): JSX.Element {
  return (
    <AboutBContainer>
      <div className="section__title">
        <h3>
          <span>Optimized for the brand</span>
          <span>Concept And Style.</span>
        </h3>
        <p>
          고급스러운 하이엔드 브랜드부터 10-20대를
          <br className="mobile" /> 사로잡는 캐주얼 브랜드까지
          <br className="desk" /> 가장 잘 어울리는
          <br className="mobile" /> 쇼핑호스트 + 크리에이터를 매칭하여
          <br className="mobile" />
          <br className="desk" /> 최고의 라이브 컨디션을 위한 <br className="mobile" />
          1:1 맞춤형 서비스를 제공합니다.
        </p>
      </div>
      <div className="img__wrapper">
        <img src="/img/about/3.png" alt="" />
        <img src="/img/about/4.png" alt="" />
        <img src="/img/about/5.png" alt="" />
        <img src="/img/about/6.png" alt="" />
      </div>
    </AboutBContainer>
  );
}
