import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkProcessContainer } from './styles';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);
export default function WorkProcess(): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.35, triggerOnce: true });
  useEffect(() => {
    const a1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.process_container',
        start: '2% top',
        end: '65% top',
        scrub: 1.3,
      },
    });

    const y = () => {
      if (window.innerHeight > 720) return '-1650';
      else if (window.innerHeight > 630) return '-1720';
      else return '-1850';
    };
    if (innerWidth > 950) {
      a1.from('.s_top', { opacity: 0, duration: 0.1 }).to('.right', { y: y() });
    }
  }, []);

  useEffect(() => {
    if (inView && ref) {
      gsap.fromTo('.process_title', { opacity: 0, y: 300 }, { opacity: 1, y: 0 });
    }
  }, [inView, ref]);

  return (
    <WorkProcessContainer>
      <section className="process_container client_nh">
        <h3 ref={ref} className="invinsible process_title">
          Live Process
        </h3>
        <div className="process_info client_nh">
          <div className="shadow s_top"></div>
          <div className="shadow s_bottom"></div>
          <div className="left client_nh">
            <h4>
              라이브커머스,
              <br /> 어떻게
              <br /> 진행 되나요?
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
                      (제휴 스튜디오 및 출장 외부 <br className="mobile" /> 스튜디오 진행
                      가능 / 비용 별도)
                    </small>
                  </li>
                  <li>
                    브랜딩 소품 스타일링
                    <small>(제작 가능 / 비용 별도)</small>
                  </li>
                </ul>
              </div>
            </article>

            <article>
              <span className="step">STEP 03</span>
              <h5>쇼호스트 매칭</h5>
              <ul>
                <li>브랜드 컨셉과 맞는 쇼호스트 매칭</li>
                <li>
                  기본 1명 <small>(추가 섭외 가능 / 비용 별도)</small>
                </li>
              </ul>
            </article>

            <article>
              <span className="step">STEP 04</span>
              <h5>1차 마케팅</h5>
              <ul>
                <li>포털사이트 / SNS등 사전 마케팅</li>
              </ul>
              <h5 className="upper">2차 마케팅</h5>
              <ul>
                <li>라이브 영상 클립을 활동한 2차 판매</li>
              </ul>
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
