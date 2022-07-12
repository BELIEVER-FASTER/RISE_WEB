import React from 'react';
import { OptionCT } from './styles';

type OptionSectionProps = {
  selectedState: {
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    selected: number;
  };
};
export default function OptionSection({
  selectedState,
}: OptionSectionProps): JSX.Element {
  const { selected, setSelected } = selectedState;
  return (
    <OptionCT>
      <ul>
        <li className={`basic ${selected === 1 ? 'active' : ''}`}>
          <div className="summary_opt">
            <h2>Basic</h2>
            <p>
              <strong>50</strong>만원
            </p>
          </div>
          <div className="feature">
            <h3>방송운영</h3>
            <ul>
              <li>PD · 스탭</li>
              <li>라이브 컨셉 및 이벤트 기획 및 현장 스타일링</li>
              <li>라이브 캠 촬영 및 장비 지원 / 실시간 모니터링</li>
              <li>라이즈 스튜디오 제공</li>
            </ul>
            <h3>쇼핑호스트 & 인플루언서</h3>
            <ul>
              <li>라이즈 쇼호스트 1명 (선택 불가)</li>
            </ul>
            <h3>서비스</h3>
            <ul>
              <li>라이브 결과 데이터 리포트 제공</li>
            </ul>
          </div>
          <button
            onClick={() => setSelected(1)}
            className={`cta ${selected === 1 ? 'active' : ''}`}
          >
            {selected === 1 ? '베이직' : '베이직 선택'}
          </button>
        </li>
        <li className={`premium ${selected === 2 ? 'active' : ''}`}>
          <div className="summary_opt">
            <h2>Premium </h2>
            <p>
              <strong>200</strong>만원<div className="badge">인기상품</div>
            </p>
          </div>
          <div className="feature">
            <h3>방송운영</h3>
            <ul>
              <li className="include">Basic의 모든 구성 +</li>
            </ul>
            <h3>방송운영</h3>
            <ul>
              <li>작가 · 디자이너 </li>
              <li>판넬 / 배너 등 컨텐츠 디자인 제공</li>
            </ul>
            <h3>쇼핑호스트 & 인플루언서</h3>
            <ul>
              <li>라이즈 쇼호스트(선택 가능)</li>
              <li>라이브 방송 영상 클립 컨텐츠 제공</li>
            </ul>
            <h3>서비스</h3>
            <ul>
              <li>특수 촬영(DSRL + 스위처 촬영)</li>
            </ul>
          </div>
          <button
            onClick={() => setSelected(2)}
            className={`cta ${selected === 2 ? 'active' : ''}`}
          >
            {selected === 2 ? '프리미엄' : '프리미엄 선택'}
          </button>
        </li>
      </ul>
      <div className="description">
        ※ 쇼호스트 추가 섭외, 인플루언서 섭외, 출장 등은 별도 비용이 발생하며,
        세금계산서를 발급 이후 계좌이체를 요청드립니다.
      </div>
      <div className="description">
        ※ 라이브에 사용될 컨텐츠 디자인 작업을 위한 원본 이미지 및 동영상은 제공받고
        있습니다.
      </div>
    </OptionCT>
  );
}
