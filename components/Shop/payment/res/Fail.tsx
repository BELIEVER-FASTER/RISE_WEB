import ShopHeader from 'components/Layout/ShopHeader';
import { ResultCT } from 'components/Shop/styles';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function Fail(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <ShopHeader />
      <ResultCT>
        <img src="/img/payment_fail.png" alt="" />
        <h1>결제에 실패 하였습니다.</h1>
        <p>실패 사유 : {router.query.message}</p>
        <div className="cta" onClick={() => router.push('/shop')}>
          돌아가기
        </div>
      </ResultCT>
    </>
  );
}
