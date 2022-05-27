import dynamic from 'next/dynamic';
import React from 'react';
import { AboutSection2CT } from './styles';
const Gsap = dynamic(import('../../hooks/gsap/aboutVideoBG'), { ssr: false });

export default function AboutSection2(): JSX.Element {
  return (
    <AboutSection2CT className="section2">
      <div className="content">
        <div className="video_wrapper">
          <video loop autoPlay muted playsInline>
            <source src="/video/about_bg.mp4" type="video/mp4" />
          </video>
          <div className="dark_wrapper" />
        </div>
        <div className="content_layer">
          <h2 className="title1 hide">
            <p>Media & Live Commerce</p>
            <p>Rise Studio</p>
          </h2>
          <h3 className="title2 hide">
            든든한
            <em className="top_gap">( About Us )</em> <br />
            솔루션으로 채우다
          </h3>
          <ul className="title2 hide">
            <li>
              <em>( Our Mission )</em>
              <h4>지속성 있는 라이브 미디어 콘텐츠</h4>
              <span>
                지속적으로 보고싶은 콘텐츠를 통해 기획부터
                <br />
                연출, 라이브 진행과 방송 송출까지 브랜드와
                <br />
                셀러들에게 최선의 선택지를 제안합니다.
              </span>
            </li>
            <li>
              <em>( Our Vision )</em>
              <h4>차세대 이커머스의 새로운 패러다임</h4>
              <span>
                빠르게 변화하는 시대에 맞춰 함께 고민하며
                <br />
                차세대 이커머스에서의 성공을 위해
                <br />
                새로운 성공방식을 제안하는 파트너로서 존재합니다.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Gsap />
    </AboutSection2CT>
  );
}
