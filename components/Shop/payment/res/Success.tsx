import ShopHeader from 'components/Layout/ShopHeader';
import { ResultCT } from 'components/Shop/styles';
import useTossPayments from 'hooks/useTossPayments';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function Success(): JSX.Element {
  const router = useRouter();
  const { onConfirm, onCheck } = useTossPayments();

  useEffect(() => {
    const confirm = async () => {
      const { query } = router;
      try {
        const res = await onCheck(query.orderId as string, query.amount as string);
        if (res) {
          await onConfirm(router);
        }
      } catch (e) {
        console.error(e);
        alert('결제정보가 일치하지 않습니다.');
      }
    };
    confirm();
  }, []);

  return (
    <>
      <ShopHeader />
      <ResultCT>
        <h1>결제 처리중입니다</h1>
        <p>잠시만 기다려주세요</p>
        <img className="loading" src="/img/payment_loading.gif" alt="" />
      </ResultCT>
    </>
  );
}
