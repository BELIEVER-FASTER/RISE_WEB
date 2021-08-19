import React from 'react';
import { WorkProcessContainer } from './styles';

export default function WorkProcess(): JSX.Element {
  return (
    <WorkProcessContainer>
      <section className="process_container client_nh">
        <h3>Live Process</h3>
        <div className="process_info client_nh">
          <div className="shadow s_top"></div>
          <div className="shadow s_bottom"></div>
          <div className="left">
            <h4>
              라이브 프로세스
              <br /> 진행과정
              <br /> 어떻게 되나요?
            </h4>
          </div>
          <div className="right">
            <article>
              <span className="step">STEP 01</span>
              <h5>문의 및 상담</h5>
              <ul>
                <li>브랜드별 담당 MD 배정</li>
                <li>상담 진행</li>
                <li>이메일 / 유선 상담 선택 가능</li>
              </ul>
            </article>

            <article>
              <span className="step">STEP 02</span>
              <h5>라이브 기획</h5>
              <div className="double_list">
                <ul>
                  <li>브랜드 담당 PD + 작가 배정</li>
                  <li>방송 스타일링, 연출 가이드 작성</li>
                  <li>큐시트, 스크립트 작성</li>
                </ul>
                <ul>
                  <li>이벤트 / 프로모션 판넬 제작</li>
                  <li>
                    자사 스튜디오 이용
                    <small>
                      (제휴 스튜디오 및 출장 외부 스튜디오 진행 가능 / 비용 별도)
                    </small>
                  </li>
                  <li>브랜딩 소품 스타일링</li>
                </ul>
              </div>
            </article>

            <article>
              <span className="step">STEP 03</span>
              <h5>쇼호스트 매칭</h5>
              <ul>
                <li>브랜드 컨셉과 맞는 쇼호스트 매칭</li>
                <li>방송 스타일링, 연출 가이드 작성</li>
                <li>큐시트, 스크립트 작성</li>
              </ul>
            </article>

            <article>
              <span className="step">STEP 04</span>
              <div className="double_list">
                <div>
                  <h5>1차 마케팅</h5>
                  <ul>
                    <li>포털사이트 / SNS등 사전 마케팅</li>
                    <li>
                      기본 1명 <small>(추가 섭외 가능 / 비용 별도)</small>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>2차 마케팅</h5>
                  <ul>
                    <li>라이브 영상 클립을 활동한 2차 판매</li>
                  </ul>
                </div>
              </div>
            </article>

            <article>
              <span className="step">STEP 05</span>
              <h5>라이브 진행</h5>
              <div className="double_list">
                <ul>
                  <li>실시간 모니터링</li>
                  <li>현장 스탭 2인 이상</li>
                </ul>
                <ul>
                  <li>
                    촬영용품 <small>(스마트폰,DSLR,조명,모니터,스위처 등)</small>
                  </li>
                </ul>
              </div>
            </article>

            <article>
              <span className="step">STEP 06</span>
              <h5>결과 리포트</h5>
              <div className="double_list">
                <ul>
                  <li>시청자 유형 및 판매 분석 등</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </WorkProcessContainer>
  );
}
