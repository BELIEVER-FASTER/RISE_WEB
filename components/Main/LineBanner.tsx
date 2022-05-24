import React from 'react';
import { LineBannerCT } from './styles';
function BannerIcon(): JSX.Element {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g opacity="0.8">
        <path
          d="M7.99609 0C7.99609 6.24839 7.99609 9.75161 7.99609 16M7.99609 0V16"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M4.74414 0.691406C7.28559 6.39959 8.71048 9.59995 11.2519 15.3081M4.74414 0.691406L11.2519 15.3081"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M2.24219 2.44336C6.7369 6.78385 9.25691 9.2174 13.7516 13.5579M2.24219 2.44336L13.7516 13.5579"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M0.53125 5.13281C6.36462 7.37203 9.63516 8.62748 15.4685 10.8667M0.53125 5.13281L15.4685 10.8667"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M0 8C6.24839 8 9.75161 8 16 8M0 8H16"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M0.691406 11.2539C6.39959 8.71246 9.59995 7.28757 15.3081 4.74612M0.691406 11.2539L15.3081 4.74612"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M2.24609 13.5566C6.74081 9.21615 9.26082 6.7826 13.7555 2.44211M2.24609 13.5566L13.7555 2.44211"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M4.49219 15.1875C7.2313 9.57149 8.76701 6.42281 11.5061 0.806795M4.49219 15.1875L11.5061 0.806795"
          stroke="white"
          stroke-width="0.5"
        />
      </g>
    </svg>
  );
}
function BannerText(): JSX.Element {
  return (
    <span>
      라이즈 스튜디오에서 라이브커머스 진행시
      <BannerIcon /> 라이즈 앱상위 노출 광고 서비스가{' '}
      <strong>&nbsp;무료로 진행됩니다.</strong>
    </span>
  );
}
export default function LineBanner(): JSX.Element {
  return (
    <LineBannerCT>
      <div className="text">
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
        <BannerText />
      </div>
    </LineBannerCT>
  );
}
