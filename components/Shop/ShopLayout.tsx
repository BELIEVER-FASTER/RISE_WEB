import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import OptionSection from './OptionSection';
import PolicySection from './PolicySection';
import SelectedInfo from './SelectedInfo';
import { ShopCT } from './styles';

export default function ShopLayout(): JSX.Element {
  const [selected, setSelected] = useState<number>(2);
  const router = useRouter();
  const onSubmit = () => {
    router.push('/shop/payment');
  };
  return (
    <ShopCT className="inner">
      <div className="summary">
        <h1>상품 안내</h1>
        <p>
          기본 제작료 상품 전용 결제창입니다. <br />
          인플루언서 상품은 문의를 통해 진행해주세요.
        </p>
      </div>
      <OptionSection selectedState={{ selected, setSelected }} />
      <SelectedInfo selected={selected} />
      <PolicySection />
      <button type="button" className="submit" onClick={onSubmit}>
        결제하기
      </button>
    </ShopCT>
  );
}
