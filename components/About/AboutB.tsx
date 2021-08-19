import React from 'react';
import { AboutBContainer } from './styles';

export default function AboutB(): JSX.Element {
  return (
    <AboutBContainer>
      <article>
        <h2>
          <span>
            Optimized For <br />
            The Brand
          </span>
          <span>Concept And Style</span>
        </h2>
        <p>
          고급스러운 하이엔드 브랜드부터 <br className="mobile-br" />
          10~20대를 사로잡는 캐주얼 브랜드까지
          <br />
          가장 잘 어울리는 쇼핑호스트 <br className="mobile-br" />
          + 크리에이터를 매칭하여
          <br />
          최고의 라이브 컨디션을 위한 <br className="mobile-br" />
          1:1 맞춤형 서비스를 제공합니다.
        </p>
      </article>
      <div>
        <img src="/img/aboutTmp3.png" />
        <img src="/img/aboutTmp4.png" />
        <img src="/img/aboutTmp5.png" />
        <img src="/img/aboutTmp6.png" />
      </div>
    </AboutBContainer>
  );
}
