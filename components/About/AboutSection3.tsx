import dynamic from 'next/dynamic';
import React from 'react';
import { AboutSection3CT } from './styles';
const Gsap = dynamic(import('../../hooks/gsap/aboutBrands'), { ssr: false });
export default function AboutSection3(): JSX.Element {
  return (
    <AboutSection3CT className="section3">
      <Gsap />
      <div className="content">
        <h2 className="section3_title hide">
          라이즈 스튜디오와 <br />
          함께 성장하는
          <br className="mobile" /> 브랜드와 셀러들
        </h2>
        <ul className="section3_brands hide">
          <li>
            <img src="/img/ver2/brands/logo1.png" alt="협력사로고1" />
            <img src="/img/ver2/brands/logo1.png" alt="협력사로고1_복제" />
            <img src="/img/ver2/brands/logo1.png" alt="협력사로고1_복제2" />
          </li>
          <li>
            <img src="/img/ver2/brands/logo2.png" alt="협력사로고2" />
            <img src="/img/ver2/brands/logo2.png" alt="협력사로고2_복제" />
          </li>
          <li>
            <img src="/img/ver2/brands/logo3.png" alt="협력사로고3" />
            <img src="/img/ver2/brands/logo3.png" alt="협력사로고3_복제" />
            <img src="/img/ver2/brands/logo2.png" alt="협력사로고3_복제2" />
          </li>
        </ul>
        <div className="section3_brands_mobile section3_brands hide">
          <img
            src="/img/ver2/about/brands_mobile.png"
            alt="협력사 로고 리스트 모바일버전"
          />
        </div>
      </div>
    </AboutSection3CT>
  );
}
