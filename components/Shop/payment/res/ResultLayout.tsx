import ShopHeader from 'components/Layout/ShopHeader';
import dayjs from 'dayjs';
import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { ResultCT } from '../../styles';

export default function ResultLayout(): JSX.Element {
  const router = useRouter();
  const { paymentInfo, resetForm } = usePaymentFormContext();

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [router]);

  return (
    <>
      <ShopHeader />
      <ResultCT>
        {paymentInfo.paymentInfo?.virtualAccount ? (
          <>
            <img src="/img/payment_virtual.png" alt="" />
            <h1>가상계좌 입금안내</h1>
            <p className="col">
              <ul className="info">
                <li>
                  <span>주문금액 : </span>{' '}
                  <strong>
                    {(paymentInfo.paymentInfo.totalAmount as number).toLocaleString()}원
                  </strong>
                </li>
                <li>
                  <span>가상 입금계좌 : </span>
                  <strong>
                    [{paymentInfo.paymentInfo.virtualAccount.bank}]{' '}
                    {paymentInfo.paymentInfo.virtualAccount.accountNumber}
                  </strong>
                </li>
                <li>
                  <span>예금주명 : </span> <strong>라이즈이엔엠</strong>
                </li>
              </ul>
              <div className="desc">
                <strong>
                  {dayjs(paymentInfo.paymentInfo.virtualAccount.dueDate).format(
                    'YYYY-MM-DD hh:mm'
                  )}
                </strong>
                까지 입금확인이 안될경우 주문이 취소되며 자세한 사항은
                <br />
                <strong>contact@riseenm.com</strong> 또는
                <strong>1699-6193</strong>으로 연락 남겨주시면 빠르게 도와드리겠습니다.
              </div>
            </p>
            <div className="cta" onClick={() => router.push('/shop')}>
              확인
            </div>
          </>
        ) : (
          <>
            <img src="/img/payment_success.png" alt="" />
            <h1>결제가 완료되었습니다!</h1>
            <p>
              영업일 기준 1일 이내 작성해주신 구매자 이메일로 연락을 드릴 예정입니다.
              <br /> 기타 문의가 있을 경우 <strong>contact@riseenm.com</strong> 또는
              <br /> <strong>1699-6193</strong>으로 연락 남겨주시면 빠르게
              도와드리겠습니다.
            </p>
            <div className="cta" onClick={() => router.push('/shop')}>
              확인
            </div>
          </>
        )}
      </ResultCT>
    </>
  );
}
