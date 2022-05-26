import React from 'react';
import { BillPlanCT } from './styles';

export default function BillPlan(): JSX.Element {
  return (
    <BillPlanCT>
      <ul className="plans">
        <li>
          <h4>Basic</h4>
          <p className="price">
            <strong>50</strong>만 원
          </p>
          <ul>
            <li>
              <h5>방송운영</h5>
              <dl>
                <dt>・PD · 스탭</dt>
                <dt>・라이브 컨셉 및 이벤트 기획 및 현장 스타일링</dt>
                <dt>・라이브 캠 촬영 및 장비 지원 / 실시간 모니터링</dt>
                <dt>・라이즈 스튜디오 제공</dt>
              </dl>
            </li>
            <li>
              <h5>쇼핑 호스트 & 인플루언서</h5>
              <dl>
                <dt>・라이즈 쇼호스트(선택 불가)</dt>
              </dl>
            </li>
            <li>
              <h5>서비스</h5>
              <dl>
                <dt>・라이브 결과 데이터 리포트 제공</dt>
              </dl>
            </li>
          </ul>
        </li>

        <li>
          <h4>
            Premium <div className="badge">인기상품</div>
          </h4>
          <p className="price">
            <strong>200</strong>만 원
          </p>
          <ul>
            <li>
              <h5>기본</h5>
              <p>Basic 의 모든 구성 +</p>
            </li>
            <li>
              <h5>방송운영</h5>
              <dl>
                <dt>작가 · 디자이너</dt>
                <dt>판넬 / 배너 등 컨텐츠 디자인 제공</dt>
              </dl>
            </li>
            <li>
              <h5>쇼핑 호스트 & 인플루언서</h5>
              <dl>
                <dt>라이즈 쇼호스트(선택 가능)</dt>
                <dt>라이브 방송 영상 클립 컨텐츠 제공</dt>
              </dl>
            </li>
            <li>
              <h5>서비스</h5>
              <dl>
                <dt>특수 촬영(DSRL + 스위처 촬영)</dt>
              </dl>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            Influencer
            <div className="badge">인플루언서 라이브</div>
          </h4>
          <p className="price">
            <strong>별도 문의</strong>
          </p>
          <ul>
            <li>
              <h5>기본</h5>
              <p className="strong">Premium 의 모든 구성 +</p>
            </li>
            <li>
              <h5>쇼핑 호스트 & 인플루언서</h5>
              <dl>
                <dt>라이즈 크리에이터(섭외)</dt>
              </dl>
            </li>
            <li>
              <h5>서비스</h5>
              <dl>
                <dt>라이즈 결과 데이터 리포트 제공</dt>
              </dl>
            </li>
          </ul>
          <div className="contact">
            <span>[문의하기]를 통해 라이즈 고객센터와 상담해주세요.</span>
            <a href="#contact">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10C17 14.4183 13.4183 18 9 18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C13.4183 2 17 5.58172 17 10Z"
                  fill="white"
                />
                <path
                  d="M17.411 16.604C17.5835 16.9859 17.2379 17.3979 16.8318 17.2943L13.7707 16.5137C13.4137 16.4226 13.2744 15.99 13.5112 15.7078L15.272 13.6094C15.5088 13.3272 15.9591 13.3892 16.1107 13.7249L17.411 16.604Z"
                  fill="white"
                />
                <path
                  d="M6.5 9.75C6.5 10.1642 6.16421 10.5 5.75 10.5C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9C6.16421 9 6.5 9.33579 6.5 9.75Z"
                  fill="#167DF7"
                />
                <path
                  d="M9.5 9.75C9.5 10.1642 9.16421 10.5 8.75 10.5C8.33579 10.5 8 10.1642 8 9.75C8 9.33579 8.33579 9 8.75 9C9.16421 9 9.5 9.33579 9.5 9.75Z"
                  fill="#167DF7"
                />
                <path
                  d="M12.5 9.75C12.5 10.1642 12.1642 10.5 11.75 10.5C11.3358 10.5 11 10.1642 11 9.75C11 9.33579 11.3358 9 11.75 9C12.1642 9 12.5 9.33579 12.5 9.75Z"
                  fill="#167DF7"
                />
              </svg>
              문의하기
            </a>
          </div>
        </li>
      </ul>
      <ul className="warning">
        <li>※ 쇼호스트 추가 섭외, 인플루언서 섭외, 출장 등은 별도 비용이 발생합니다. </li>
        <li>
          ※ 라이브에 사용될 컨텐츠 디자인 작업을 위한 원본 이미지 및 동영상은 제공받고
          있습니다.
        </li>
      </ul>
    </BillPlanCT>
  );
}
