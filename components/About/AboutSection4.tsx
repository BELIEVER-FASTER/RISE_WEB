import React from 'react';
import { AboutSection4CT } from './styles';
function Quotos({ rotate = false }: { rotate?: boolean }): JSX.Element {
  return (
    <svg
      className={rotate ? 'quotos rotate' : 'quotos'}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      style={rotate ? { rotate: '180deg' } : {}}
    >
      <path
        d="M8.15642 14H0V9.625C0.0165727 7.71954 0.49526 5.84518 1.39665 4.15625C2.28759 2.35694 3.76047 0.895905 5.58659 0L7.82123 1.64063C7.44055 2.08616 7.02996 2.50637 6.59218 2.89844L5.2514 4.04688C4.38199 4.97911 3.8688 6.17706 3.79888 7.4375H8.15642V14ZM20 14H11.7877V9.625C11.8284 7.72263 12.3058 5.85358 13.1844 4.15625C14.0753 2.35694 15.5482 0.895905 17.3743 0L19.6648 1.64063L18.324 2.89844L17.0391 4.04688C16.1603 4.96856 15.6626 6.1769 15.6425 7.4375H20V14Z"
        fill="url(#paint0_linear_2838_532)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2838_532"
          x1="1.87052"
          y1="8.92491"
          x2="18.0576"
          y2="8.92517"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4CCFB" />
          <stop offset="1" stop-color="#74B1FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function ReviewItem({ text, brand }: { text: string[]; brand: string }): JSX.Element {
  return (
    <li>
      <p>
        <Quotos />
        {text.map((t, idx) => (
          <>
            {idx ? <br /> : ''}
            {t}
          </>
        ))}
        <Quotos rotate />
      </p>
      <span>{brand}</span>
    </li>
  );
}
export default function AboutSection4(): JSX.Element {
  return (
    <AboutSection4CT>
      <div className="left">
        <h2>
          라이즈 스튜디오 서비스에 만족한 <br />
          다양한 브랜드와 셀러들
        </h2>
        <p>
          신생 브랜드부터 하이엔드 브랜드까지
          <br />
          라이즈 스튜디오와 함께하고 있습니다.
        </p>
      </div>
      <ul className="right">
        <ReviewItem
          text={['신생 브랜드인데 런칭 이후 1일 매출', '최고 기록을 찍을 수 있었어요']}
          brand="신생 코스메틱 브랜드 R***"
        />
        <li>
          <ReviewItem
            text={[
              '라이브 방송 할때마다 반응이 너무 좋아서',
              '신상품이 나올때마다 진행하고 있어요',
            ]}
            brand="여성 쇼핑몰 N****"
          />
        </li>
        <li>
          <ReviewItem
            text={[
              '첫 라이브 커머스였는데 결과 리포트를',
              '쉽게 확인할 수 있어 좋았어요',
            ]}
            brand="건강기능식품 브랜드 D****"
          />
        </li>
      </ul>
    </AboutSection4CT>
  );
}
