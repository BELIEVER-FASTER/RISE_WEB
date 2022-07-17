import ShopHeader from 'components/Layout/ShopHeader';
import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import React, { useEffect } from 'react';
import ClientForm from './payment/ClientForm';
import CoperationForm from './payment/CoperationForm';
import PaymentAside from './payment/PaymentAside';
import PaymentMethod from './payment/PaymentMethod';
import { PaymentCT } from './styles';

export default function PaymentLayout(): JSX.Element {
  const { isSameValue, fillMock } = usePaymentFormContext();
  useEffect(() => {
    fillMock();
  }, []);

  return (
    <>
      <ShopHeader />
      <PaymentCT>
        <h1>주문/결제</h1>
        <div className="content">
          <section className="left_section">
            <div className="divider" />
            <h3>회사 식별정보</h3>
            <CoperationForm />
            <div className="divider" />
            <div className="col_title">
              <h3>구매자 식별정보</h3>
              <label>
                <input
                  type="checkbox"
                  checked={isSameValue.isSameValue}
                  onChange={isSameValue.onChangeSameValue}
                />
                <span>위의 내용과 같습니다.</span>
              </label>
            </div>
            <ClientForm />

            <div className="divider" />
            <h3>결제 수단</h3>
            <PaymentMethod />
          </section>
          <aside className="right_section">
            <PaymentAside />
          </aside>
        </div>
      </PaymentCT>
    </>
  );
}
