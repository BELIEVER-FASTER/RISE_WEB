import React, { useEffect, useState } from 'react';
import { options } from 'utils/optionData';
import { SelectedInfoCT } from './styles';

type SelectedInfoProps = {
  selected: number;
};
export default function SelectedInfo({ selected }: SelectedInfoProps): JSX.Element {
  const [data, setData] = useState(options[0]);
  useEffect(() => {
    setData(options.find(v => v.id === selected) || options[0]);
  }, [selected]);

  return (
    <SelectedInfoCT>
      <div className="info_table">
        <ul>
          <li>상품 정보</li>
          <li>라이브 커머스 제작료 상품 - {data.name}</li>
        </ul>
        <ul>
          <li>상품 정보</li>
          <li>{data.price.toLocaleString()}원 / 1회</li>
        </ul>
        <ul>
          <li>부가세</li>
          <li>{data.tax.toLocaleString()}원 / 1회</li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="total_price">
        총 결제 금액 : <strong>{(data.price + data.tax).toLocaleString()}</strong>원
      </div>
    </SelectedInfoCT>
  );
}
