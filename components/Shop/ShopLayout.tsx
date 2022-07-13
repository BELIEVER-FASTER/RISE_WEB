import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import OptionSection from './OptionSection';
import PolicySection from './PolicySection';
import SelectedInfo from './SelectedInfo';
import { ShopCT } from './styles';

export default function ShopLayout(): JSX.Element {
  const { opt, resetForm } = usePaymentFormContext();
  const { selectedOpt, setSelectedOpt } = opt;

  const router = useRouter();
  const onSubmit = () => {
    router.push('/shop/payment');
  };

  useEffect(() => {
    resetForm();
  }, []);
  return (
    <ShopCT className="inner">
      <div className="summary">
        <h1>상품 안내</h1>
        <p>
          기본 제작료 상품 전용 결제창입니다. <br />
          인플루언서 상품은 문의를 통해 진행해주세요.
        </p>
      </div>
      <OptionSection selectedState={{ selectedOpt, setSelectedOpt }} />
      <SelectedInfo selectedOpt={selectedOpt} />
      <PolicySection />
      <button type="button" className="submit" onClick={onSubmit}>
        결제하기
      </button>
    </ShopCT>
  );
}
