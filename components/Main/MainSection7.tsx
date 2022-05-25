import React, { useState } from 'react';
import { MainSection7CT, StudioBtnBox } from './styles';

type StudioList = 'Fashion' | 'Kitchen' | 'Living' | 'Beauty' | 'kids';
function StudioBtn({
  value,
  onChangeType,
  type,
}: {
  value: StudioList;
  type: StudioList;
  onChangeType: (type: StudioList) => void;
}): JSX.Element {
  return (
    <StudioBtnBox active={type === value} onClick={() => onChangeType(value)}>
      <svg
        width="18"
        height="10"
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
      {value} Room
    </StudioBtnBox>
  );
}

export default function MainSection7(): JSX.Element {
  const [type, setType] = useState<StudioList>('Fashion');
  const onChangeType = (type: StudioList) => setType(type);
  return (
    <MainSection7CT>
      <h2>생산성을 높여주는 스튜디오</h2>
      <p>
        브랜드 컨셉에 맞춘 스튜디오를 통해 <br />
        콘텐츠 품질을 높이고 스마트하게 진행하세요
      </p>
      <div className="studio_wrapper">
        <img src={`/img/ver2/studio/${type.toLowerCase()}.png`} alt="" />
        <ul>
          {(['Fashion', 'Kitchen', 'Living', 'Beauty', 'Kids'] as StudioList[]).map(v => (
            <StudioBtn value={v} onChangeType={onChangeType} type={type} />
          ))}
        </ul>
      </div>
    </MainSection7CT>
  );
}
