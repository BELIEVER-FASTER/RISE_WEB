import MetaGe from 'components/Common/MetaGe';
import Fail from 'components/Shop/payment/res/Fail';
import Success from 'components/Shop/payment/res/Success';
import Va from 'components/Shop/payment/res/Va';
import PaymentLayout from 'components/Shop/PaymentLayout';
import ResultLayout from 'components/Shop/payment/res/ResultLayout';
import ShopLayout from 'components/Shop/ShopLayout';
import PaymentProvider, { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function Step(): JSX.Element {
  const router = useRouter();
  const form = usePaymentFormContext();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => {
      window.scrollTo({ top: 0 });
    };
  }, []);

  const render = React.useCallback(() => {
    switch (router.query.step as string) {
      case 'list':
        return <ShopLayout />;
      case 'payment':
        return <PaymentLayout />;
      case 'result':
        return <ResultLayout />;
      case 'va':
        return <Va />;
      case 'success':
        return <Success />;
      case 'fail':
        return <Fail />;
      default:
        return <></>;
    }
  }, [router.query.step]);
  console.log({ name: router.asPath, form });
  return (
    <>
      <MetaGe
        title="라이즈 소개 | 라이즈"
        desc="라이브커머스를 한편의 콘텐츠 처럼 자체 스튜디오, 쇼호스트, 전문PD, 전문 촬영장비를 통해 각 브랜드의 컨셉과 카테고리에 맞춘 최적화 방송을 진행합니다."
        url="https://www.riseenm.com/about"
      />
      {render()}
    </>
  );
}
