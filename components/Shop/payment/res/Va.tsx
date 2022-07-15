import ShopHeader from 'components/Layout/ShopHeader';
import { ResultCT } from 'components/Shop/styles';
import useTossPayments from 'hooks/useTossPayments';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function Va(): JSX.Element {
  const router = useRouter();
  const { onConfirm } = useTossPayments();

  useEffect(() => {
    onConfirm(router);
  }, []);

  return (
    <>
      <ShopHeader />
      <ResultCT>
        <h1>가상계좌를 발급중입니다</h1>
        <p>잠시만 기다려주세요</p>
        <img className="loading" src="/img/payment_loading.gif" alt="" />
      </ResultCT>
    </>
  );
}
