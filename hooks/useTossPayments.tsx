import { loadTossPayments } from '@tosspayments/payment-sdk';
import { usePaymentFormContext } from './provider/PaymentProvider';
import uuid from 'react-uuid';
import axios from 'axios';
import { NextRouter } from 'next/dist/client/router';

const clientKey = 'test_ck_ADpexMgkW36egAXbNKB8GbR5ozO0';

export default function useTossPayments(): typeof methods {
  const {
    address1: { address1 },
    address2: { address2 },
    ceoName: { ceoName },
    agreeTerm: { agreeTerm },
    ceoPhone: { ceoPhone, ceoPhoneErr },
    clientEmail: { clientEmail, clientEmailErr },
    clientName: { clientName },
    clientPhone: { clientPhone, clientPhoneErr },
    coName: { coName },
    coNumber: { coNumber, coNumberErr },
    email: { email, emailErr },
    lisence: { lisence },
    method: { method },
    opt: { selectedOpt },
    orderId: { setOrderId },
    submitted: { setSubmitted },
    paymentInfo: { setPaymentInfo },
  } = usePaymentFormContext();

  const onRequest = async () => {
    setSubmitted(true);
    const tossPayments = await loadTossPayments(clientKey);
    const id = uuid();
    setOrderId(id);
    if (
      !address1 ||
      !address2 ||
      !ceoName ||
      !ceoPhone ||
      !clientEmail ||
      !clientName ||
      !clientPhone ||
      !coName ||
      !coNumber ||
      !email ||
      !agreeTerm ||
      coNumberErr ||
      ceoPhoneErr ||
      emailErr ||
      clientEmailErr ||
      clientPhoneErr
    )
      return alert('필수 항목을 모두 입력해주세요');
    const { data } = await axios.post('http://localhost:8080/api/payment/request', {
      order: {
        amount: selectedOpt.price + selectedOpt.tax,
        orderId: id,
        orderName: selectedOpt.label,
        customerName: clientName,
        customerEmail: clientEmail,
        customerMobilePhone: clientPhone.replaceAll('-', ''),
      },
      // paymentKey: qs.paymentKey,
      ProductId: selectedOpt.id,
      paymentMethod: method.value,
      company: {
        address: address1 + address2,
        coName: coName,
        coNumber: coNumber.replaceAll('-', ''),
        ceoName: ceoName,
        ceoPhone: ceoPhone.replaceAll('-', ''),
        lisence: lisence || null,
        email: email,
      },
    });
    if (!data) return alert('결제 시도중 문제가 발생하였습니다.');
    const options = {
      amount: selectedOpt.price + selectedOpt.tax,
      orderId: id,
      orderName: selectedOpt.label,
      customerName: clientName,
      customerEmail: clientEmail,
      customerMobilePhone: clientPhone.replaceAll('-', ''),
      successUrl: 'http://localhost:3000/shop/success',
      failUrl: 'http://localhost:3000/shop/fail',
    };
    try {
      document.body.style.overflowY = 'hidden';
      await tossPayments.requestPayment(
        method.value,
        method.value === '가상계좌'
          ? {
              ...options,
              validHours: 24,
              successUrl: 'http://localhost:3000/shop/va',
              virtualAccountCallbackUrl: 'http://localhost:3000/shop/fail',
            }
          : options
      );
    } catch (e) {
      // 취소 이벤트 처리
      alert('결제를 취소하였습니다.');
    } finally {
      document.body.style.overflowY = 'auto';
    }
  };

  const onCheck = async (orderId: string, amount: string) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/payment/checkPaymentResult',
        {
          orderId,
          amount,
        }
      );
      if (data) return true;
      else return false;
    } catch (e) {
      console.error(e);
      alert('결제정보가 일치하지 않습니다.');
    }
  };

  const onConfirm = async (router: NextRouter) => {
    try {
      const qs = router.query;
      const { data } = await axios.post('http://localhost:8080/api/payment/approval', {
        orderId: qs.orderId,
        paymentKey: qs.paymentKey,
        amount: qs.amount,
      });

      if (data.virtualAccount) {
        //가상계좌
        setPaymentInfo(data);
        return router.push('/shop/result?method=virtualAccount');
      }
      if (data.card || data.easyPay) {
        //카드&간편
        setPaymentInfo(data);
        if (data.easyPay) return router.push('/shop/result?method=easyPay');
        return router.push('/shop/result?method=card');
      }
      if (data.transfer) {
        //계좌이체
        setPaymentInfo(data);
        return router.push('/shop/result?method=transfer');
      }
    } catch (e) {
      console.error(e);
      return router.push('/shop/fail?message=이메일을 확인해주세요.');
    }
  };
  const methods = {
    onRequest,
    onConfirm,
    onCheck,
  };
  return methods;
}
