import React from 'react';
import { MainSection6CT } from './styles';

export default function MainSection6(): JSX.Element {
  return (
    <MainSection6CT>
      <h2>
        라이브 커머스의 모든 것 <em>(Production)</em>
      </h2>
      <p>
        브랜드 컨셉부터 데이터 리포트까지 <br />5 Step으로 쉽고 빠르게 시작해보세요.
      </p>
      <ul>
        <li>
          <img src="/img/ver2/process/Consulting.png" alt="" />
          <h4>
            <strong>Step 1. </strong>문의 및 상담
          </h4>
          <p>
            온라인 및 오프라인 미팅을 통해 프로세스와 비용 등을 조정합니다. <br />
            계약 시 브랜드 컨셉과 상품에 따라 담당 PD가 배정됩니다.
          </p>
        </li>
        <li>
          <img src="/img/ver2/process/Planning.png" alt="" />
          <h4>
            <strong>Step 2. </strong>라이브/상품 기획
          </h4>
          <p>
            담당 PD와 연출 스탭들로 만들어진 TF팀이 라이브 방송을 기획합니다. <br />
            사전 미팅 내용을 기반으로 방송에 필요한 판넬 및 디자인 소스부터 <br />
            큐시트, 스크립트, 스토리보드, 콘티까지 최적의 연출을 위한 스타일링을
            구성합니다.
          </p>
        </li>
        <li>
          <img src="/img/ver2/process/Showhost.png" alt="" />
          <h4>
            <strong>Step 3. </strong>쇼호스트 매칭
          </h4>
          <p>
            브랜드 컨셉에 맞춘 쇼호스트와 인플루언서를 선정합니다. <br />
            (라이즈 스튜디오는 160명 이상의 쇼호스트와 함께 하고 있습니다.)
          </p>
        </li>
        <li>
          <img src="/img/ver2/process/Broadcasting.png" alt="" />
          <h4>
            <strong>Step 4. </strong>라이브 송출
          </h4>
          <p>
            방송 전 촬영장 스타일링과 원활한 송출을 위한 리허설을 진행하고
            <br />
            PD, 스탭, 쇼호스트로 구성된 TF팀이 라이브 방송을 진행합니다.
          </p>
        </li>
        <li>
          <img src="/img/ver2/process/Data.png" alt="" />
          <h4>
            <strong>Step 5. </strong>데이터 리포트
          </h4>
          <p>
            라이브 진행 시점부터의 판매량을 실시간으로 모니터링하여 데이터를 수집합니다.
            <br />
            시청자 및 구매자 유형, 판매 상품 수량, 총 판매 금액 등을 리포트로 작성하여
            <br />
            데이터를 생성하여 다음 전략을 수립합니다.
          </p>
        </li>
      </ul>
    </MainSection6CT>
  );
}
