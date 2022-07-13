import ShopHeader from 'components/Layout/ShopHeader';
import React from 'react';
import ClientForm from './payment/ClientForm';
import CoperationForm from './payment/CoperationForm';
import PaymentAside from './payment/PaymentAside';
import PaymentMethod from './payment/PaymentMethod';
import { PaymentCT } from './styles';

export default function PaymentLayout(): JSX.Element {
  // const handleRouteChange = (url: string) => {
  //   const res = window.confirm('asdasd');
  //   if (res) {
  //     push(url);
  //   } else {
  //     throw `Route change to "${url}" was aborted (this error can be safely ignored).`;
  //   }
  // };
  // useEffect(() => {
  //   events.on('routeChangeStart', handleRouteChange);
  //   return () => {
  //     events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, []);
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
              <span>asd</span>
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
