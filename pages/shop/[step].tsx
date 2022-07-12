import MetaGe from 'components/Common/MetaGe';
import PaymentLayout from 'components/Shop/PaymentLayout';
import ShopLayout from 'components/Shop/ShopLayout';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function Step(): JSX.Element {
  const { query } = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => {
      window.scrollTo({ top: 0 });
    };
  }, []);
  console.log(query.step);

  const render = React.useCallback(() => {
    switch (query.step as string) {
      default:
      case 'list':
        return <ShopLayout />;
      case 'payment':
        return <PaymentLayout />;
    }
  }, [query.step]);
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
