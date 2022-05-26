import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CommissionPlanCT } from './styles';

export default function CommissionPlan(): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView) {
      gsap.fromTo('.bar1 .line', { width: 0 }, { width: 167, duration: 0.5, delay: 0.5 });
      gsap.fromTo('.bar2 .line', { width: 0 }, { width: 327, duration: 0.75 });
      gsap.fromTo('.arrow', { xPercent: -250 }, { xPercent: 0, duration: 0.3, delay: 1 });
      gsap.fromTo(
        '.result',
        { scale: 0, opacity: 0 },
        { scale: 1, duration: 0.5, delay: 1.3, opacity: 1 }
      );
    }
  }, [inView, ref]);
  return (
    <CommissionPlanCT ref={ref}>
      <h3>
        고정 비용 없는 <br />
        라이즈 파트너 브랜드 전용 상품
      </h3>
      <div className="price">
        <ul className="chart">
          <li>
            <div className="bar bar1">
              <div className="line" />
            </div>
            <span>50-200만 원</span>
          </li>
          <li>
            <div className="bar bar2">
              <div className="line" />
            </div>
            <span>300만 원 + @ </span>
          </li>
        </ul>
        <div className="arrow">
          <svg
            width="79"
            height="43"
            viewBox="0 0 107 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M107 32.7511L74.4485 67L67.5895 60.2423L88.4139 37.603L0 37.6696V28.0989L88.4055 28.024L65.6483 6.79101L72.5158 0L107 32.7511Z"
              fill="#fff"
            />
          </svg>
        </div>
        <ul className="result">
          <li>
            <p>
              <strong>0</strong>원
            </p>
            <span>
              라이브 커머스 <br />
              제작비용
            </span>
          </li>
          <li>
            <p>
              <strong>11</strong>%
            </p>
            <span>
              라이브 방송 <br />
              판매 수수료
            </span>
          </li>
        </ul>
      </div>
      <ul className="feature">
        <li>
          <div className="text">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.6046 13.1476C44.3635 13.0038 44.0582 13.0038 43.8011 13.1476L35.8308 17.6203L18.6688 8.38728L25.5625 4.69725L39.5588 11.4703C39.9606 11.662 40.4426 11.5022 40.6355 11.1029C40.8283 10.7035 40.6676 10.2243 40.2659 10.0326L25.8839 3.08386C25.659 2.97205 25.3858 2.97205 25.1447 3.08386L6.40803 13.1316C6.15093 13.2754 5.99023 13.5309 5.99023 13.8345V33.6264C5.99023 33.9139 6.15093 34.1855 6.39196 34.3293L25.1287 44.8882C25.2572 44.9521 25.3858 45 25.5304 45C25.675 45 25.8036 44.9681 25.9321 44.8882L44.5885 34.1536C44.8295 34.0098 44.9902 33.7542 44.9902 33.4667V13.8345C44.9902 13.5469 44.8456 13.2913 44.5885 13.1476H44.6046ZM16.9816 9.28183L34.1917 18.5309L25.5465 23.387L8.46489 13.8504L16.9816 9.28183ZM7.59716 15.1923L24.743 24.7608V42.7956L7.59716 33.1472V15.1923ZM43.3994 32.9874L26.3499 42.7956V24.7608L43.3994 15.1923V32.9715V32.9874Z"
                fill="white"
              />
            </svg>
            <span>무료 제작</span>
          </div>
          <p>프리미엄 패키지를 200만원 → 0원</p>
        </li>
        <li>
          <div className="text">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.8345 23.9971C44.8345 13.0533 35.9369 4.15576 24.9932 4.15576C14.0494 4.15576 5.15186 13.0533 5.15186 23.9971C5.15186 34.9408 14.0494 43.8384 24.9932 43.8384C35.9369 43.8384 44.8345 34.9408 44.8345 23.9971ZM4.49023 23.9971C4.49023 12.6751 13.6712 3.49414 24.9932 3.49414C36.3152 3.49414 45.4961 12.6751 45.4961 23.9971C45.4961 35.3191 36.3152 44.5 24.9932 44.5C13.6712 44.5 4.49023 35.3191 4.49023 23.9971Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M16.5898 16.6465L19.7495 32.3987L25.0205 16.6465L29.9815 32.3987L33.3922 16.6465"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3398 25.0479H38.6437"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>합리적인 수수료</span>
          </div>
          <p>매출 만큼만 발생하는 합리적인 수수료</p>
        </li>
        <li>
          <div className="text">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6582 31.4673L16.6415 17.334H19.7749L24.7749 31.4673H22.0582L20.8749 27.9673H15.5582L14.3915 31.4673H11.6582ZM20.1915 25.9173L18.2749 20.2173H18.1582L16.2415 25.9173H20.1915Z"
                fill="white"
              />
              <path
                d="M26.4395 17.334H31.3228C32.7228 17.334 33.9228 17.6173 34.9395 18.184C35.9561 18.7507 36.7395 19.5507 37.2728 20.6173C37.8061 21.684 38.0895 22.934 38.0895 24.384C38.0895 25.834 37.8228 27.1173 37.2728 28.184C36.7228 29.2507 35.9395 30.0673 34.9061 30.634C33.8728 31.2007 32.6561 31.484 31.2395 31.484H26.4395V17.334ZM31.1061 29.2673C34.0728 29.2673 35.5561 27.6507 35.5561 24.384C35.5561 22.7673 35.1895 21.5507 34.4561 20.7507C33.7228 19.9507 32.6228 19.534 31.1895 19.5507H28.9895V29.284H31.1228L31.1061 29.2673Z"
                fill="white"
              />
              <rect
                x="5.74023"
                y="4.75"
                width="38.5"
                height="38.5"
                rx="1.25"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <span>상위 노출 광고</span>
          </div>
          <p>라이즈앱 기획전 + 상위 노출 광고 랜트프리</p>
        </li>
      </ul>
      <ul className="warning">
        <li>※ 쇼호스트 추가 섭외, 인플루언서 섭외, 출장 등은 별도 비용이 발생합니다. </li>
        <li>
          ※ 라이브에 사용될 컨텐츠 디자인 작업을 위한 원본 이미지 및 동영상은 제공받고
          있습니다.
        </li>
        <li>※ 수수료 플랜은 라이브 방송후 판매 총 금액의 11%의 비용만 발생됩니다. </li>
      </ul>
    </CommissionPlanCT>
  );
}
