import React from 'react';
import ContentPlus from './ContentPlus';
import { AboutSection1CT } from './styles';

export default function AboutSection1(): JSX.Element {
  return (
    <AboutSection1CT>
      <h1>
        <p>콘탠츠로</p>
        <p>
          가능성을 더하다
          <ContentPlus />
        </p>
      </h1>
      <div className="title_info">
        <h2>미디어 라이브 커머스 대행사</h2>
        <p>
          지속적으로 보고싶은 콘텐츠를 통해 기획부터 <br />
          연출, 라이브 진행과 방송 송출까지 브랜드와
          <br />
          셀러들에게 최선의 선택지를 제안합니다.
        </p>
      </div>
    </AboutSection1CT>
  );
}
