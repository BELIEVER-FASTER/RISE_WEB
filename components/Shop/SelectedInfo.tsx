import React from 'react';
import { Option } from 'utils/optionData';
import { SelectedInfoCT } from './styles';

type SelectedInfoProps = {
  selectedOpt: Option;
};
export default function SelectedInfo({ selectedOpt }: SelectedInfoProps): JSX.Element {
  return (
    <SelectedInfoCT>
      <div className="info_table">
        <ul>
          <li>상품 정보</li>
          <li>라이브 커머스 제작료 상품 - {selectedOpt.name}</li>
        </ul>
        <ul>
          <li>상품 정보</li>
          <li>{selectedOpt.price.toLocaleString()}원 / 1회</li>
        </ul>
        <ul>
          <li>부가세</li>
          <li>{selectedOpt.tax.toLocaleString()}원 / 1회</li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="total_price">
        총 결제 금액 :{' '}
        <strong>{(selectedOpt.price + selectedOpt.tax).toLocaleString()}</strong>원
      </div>
    </SelectedInfoCT>
  );
}
