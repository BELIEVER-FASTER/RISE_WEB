import ShopHeader from 'components/Layout/ShopHeader';
import React from 'react';
import { ResultCT } from './styles';

export default function ResultLayout(): JSX.Element {
  return (
    <>
      <ShopHeader />
      <ResultCT>
        <img src="/img/payment_success.png" alt="" />
        <h1>결제가 완료되었습니다!</h1>
        <p>
          영업일 기준 1일 이내 작성해주신 구매자 이메일로 연락을 드릴 예정입니다.
          <br /> 기타 문의가 있을 경우 <strong>contact@riseenm.com</strong> 또는
          <br /> <strong>1699-6193</strong>으로 연락 남겨주시면 빠르게 도와드리겠습니다.
        </p>
        <div className="cta">확인</div>
      </ResultCT>
    </>
  );
}
