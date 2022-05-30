import dynamic from 'next/dynamic';
import React from 'react';
import { AboutSection5CT } from './styles';
const Gsap = dynamic(import('../../hooks/gsap/aboutProcess'), { ssr: false });
export default function AboutSection5(): JSX.Element {
  return (
    <AboutSection5CT className="section5">
      <Gsap />
      <h2>올인원 프로세스</h2>
      <ul>
        <li className="list_1">
          <article>
            <h3>
              <em>Step 1.</em> 문의 / 상담
            </h3>
            <dl>
              <dt>
                ・이메일 / 유선 / 온라인 / 오프라인 미팅을 <br className="mobile" /> 통해
                프로세스와 비용 등을 조정합니다.
              </dt>
              <dt>・계약 시 브랜드 컨셉이나 상품에 따라 담당 PD가 배정됩니다.</dt>
            </dl>
          </article>
          <img src="/img/ver2/about/process1.png" alt="" />
        </li>
        <li className="list_2">
          <article>
            <h3>
              <em>Step 2.</em> 라이브 기획
            </h3>
            <dl>
              <dt>・담당 PD와 연출 스탭들로 TF팀이 만들어집니다.</dt>
              <dt>・라이브 방송을 기획하고 최적의 연출을 위한 스타일링을 구성합니다.</dt>
            </dl>
          </article>
          <img src="/img/ver2/about/process2.png" alt="" />
        </li>
        <li className="list_3">
          <article>
            <h3>
              <em>Step 3.</em> 쇼호스트 매칭
            </h3>
            <dl>
              <dt>・브랜드 컨셉에 맞춰 쇼호스트 혹은 인플루언서를 선정합니다. </dt>
              <dt>
                ・라이즈는 160명 이상의 전속, 프리랜서 쇼호스트와 함께하고 있습니다.{' '}
              </dt>
            </dl>
          </article>
          <div className="img_list">
            <img src="/img/ver2/about/process3.2.png" alt="" />
            <img src="/img/ver2/about/process3.1.png" alt="" />
          </div>
        </li>
        <li className="list_4">
          <article>
            <h3>
              <em>Step 4.</em> 라이브 송출
            </h3>
            <dl>
              <dt>・PD / 스탭 / 쇼핑 호스트로 구성된 TF팀이 라이브를 진행합니다.</dt>
              <dt>
                ・방송 전 촬영장 스타일링과 원활한 송출을 위한 테스트 방송(리허설)을
                진행합니다.
              </dt>
            </dl>
          </article>
          <img src="/img/ver2/about/process4.png" alt="" />
        </li>
        <li className="list_5">
          <article>
            <h3>
              <em>Step 5.</em> 결과 데이터 리포트
            </h3>
            <dl>
              <dt>
                ・라이브 진행 시점부터 판매량을 실시간으로 모니터링하며 데이터를
                수집합니다.
              </dt>
              <dt>
                ・라이브 종료 이후 시청자 유형, 구매자 유형, 판매 상품 수량, 총 판매 금액
                등을 <br /> &nbsp;&nbsp;&nbsp;리포트로 작성하여 전달드리며 해당 데이터를
                바탕으로 다음 전략을 수립합니다.
              </dt>
            </dl>
          </article>
          <img src="/img/ver2/about/process5.png" alt="" />
        </li>
      </ul>
    </AboutSection5CT>
  );
}
