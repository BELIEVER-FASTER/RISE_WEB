import React from 'react';
import { MainSection4CT } from './styles';

export default function MainSection4(): JSX.Element {
  return (
    <MainSection4CT>
      <div className="title">
        <span>( Rise Enm )</span>
        <article>
          <h2>함께 성장하는 플랫폼</h2>
          <p>
            Rise Studio는 라이브커머스 대행사로 <br />
            다양한 미디어 콘텐츠를 제공하고 라이브 커머스 <br className="mobile" /> 통합
            플랫폼
            <br className="desktop" />
            RiSE를 통해 차세대 이커머스의
            <br className="mobile" /> 새로운 성공방식을 만듭니다.
          </p>
        </article>
      </div>
      <div className="app_info">
        <div className="img_wrapper">
          <img src="/img/ver2/main_app.png" alt="라이즈 앱 이미지" />
        </div>

        <article>
          <h3>
            라이브커머스 통합 <br />
            플랫폼 <strong>Rise</strong>
          </h3>
          <p>
            <span>
              하루 평균 1,000회 이상의 라이브커머스가 진행되는 요즘,
              <br />
              라이즈는 누구나 관심있는 라이브 쇼핑을 즐길 수
              <br className="mobile" /> 있도록
              <br className="desktop" />
              도와주는 AI 기반 1:1 맞춤형 라이브 쇼핑 추천
              <br className="mobile" /> 서비스입니다.
            </span>
            <a target="_blank" href="https://rise.onelink.me/IBR6/ao8f5nmr">
              앱 다운로드
            </a>
          </p>
        </article>
      </div>
    </MainSection4CT>
  );
}
