/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { options } from 'utils/optionData';

const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function checkCorporateRegiNumber(number: string): boolean {
  const numberMap = number
    .replace(/-/gi, '')
    .split('')
    .map(function (d) {
      return parseInt(d, 10);
    });

  if (numberMap.length == 10) {
    const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    let chk = 0;

    keyArr.forEach(function (d, i) {
      chk += d * numberMap[i];
    });

    chk += parseInt((keyArr[8] * numberMap[8]) / 10 + '', 10);
    return Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10;
  }

  return false;
}
export type PaymentFormType = ReturnType<typeof usePaymentForm>;
export default function usePaymentForm(): typeof states {
  const [isSameValue, setIsSameValue] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [selectedOpt, setSelectedOpt] = useState(options[1]);

  const [coName, setCoName] = useState('');
  const onChangeCoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoName(e.target.value);
  };

  const [coNumber, setCoNumber] = useState('');
  const [coNumberErr, setCoNumberErr] = useState(true);
  const onChangeCoNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoNumber(e.target.value);
    if (!checkCorporateRegiNumber(e.target.value)) {
      setCoNumberErr(true);
    } else setCoNumberErr(false);
  };

  const [ceoName, setCeoName] = useState('');
  const onChangeCeoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCeoName(e.target.value);
  };

  const [ceoPhone, setCeoPhone] = useState('');
  const [ceoPhoneErr, setCeoPhoneErr] = useState(true);
  const onChangeCeoPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCeoPhone(e.target.value);
    if (!regPhone.test(e.target.value)) {
      setCeoPhoneErr(true);
    } else setCeoPhoneErr(false);
  };

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const onChangeAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };

  const [lisence, setLisence] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(true);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!regEmail.test(e.target.value)) {
      setEmailErr(true);
    } else setEmailErr(false);
  };

  const [clientName, setClientName] = useState('');
  const onChangeClientName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
    setIsSameValue(false);
  };

  const [clientPhone, setClientPhone] = useState('');
  const [clientPhoneErr, setClientPhoneErr] = useState(true);
  const onChangeClientPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPhone(e.target.value);
    setIsSameValue(false);
    if (!regPhone.test(e.target.value)) {
      setClientPhoneErr(true);
    } else setClientPhoneErr(false);
  };

  const [clientEmail, setClientEmail] = useState('');
  const [clientEmailErr, setClientEmailErr] = useState(true);
  const onChangeClientEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientEmail(e.target.value);
    setIsSameValue(false);
    if (!regEmail.test(e.target.value)) {
      setClientEmailErr(true);
    } else setClientEmailErr(false);
  };

  const [agreeTerm, setAgreeTerm] = useState(false);
  const [method, setMethod] = useState<{
    id: number;
    value: '카드' | '가상계좌' | '계좌이체';
    label: string;
  }>({ id: 1, value: '카드', label: '신용/체크카드' });

  const onChangeSameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSameValue(e.target.checked);
    if (e.target.checked) {
      setClientName(ceoName);
      setClientEmail(email);
      setClientPhone(ceoPhone);
      setClientEmailErr(false);
      setClientPhoneErr(false);
    } else {
      setClientName('');
      setClientEmail('');
      setClientPhone('');
    }
  };
  const [orderId, setOrderId] = useState('');
  const resetForm = () => {
    setAddress1('');
    setAddress2('');
    setCeoName('');
    setCeoPhone('');
    setCeoPhoneErr(true);
    setClientEmail('');
    setClientEmailErr(true);
    setClientName('');
    setClientPhone('');
    setClientPhoneErr(true);
    setCoName('');
    setCoNumber('');
    setCoNumberErr(true);
    setEmail('');
    setEmailErr(true);
    setLisence('');
    setMethod({ id: 1, value: '카드', label: '신용/체크카드' });
    setSelectedOpt(options[1]);
    setSubmitted(false);
    setPaymentInfo(null);
    setOrderId('');
  };

  const fillMock = () => {
    setCoName('라이즈');
    setCoNumber('694-81-02476');
    setCeoName('유원근');
    setCeoPhone('01087310337');
    setAddress1('서울특별시 양재대로2길 90');
    setAddress2('206동 2101호');
    setEmail('yhg0337@gmail.com');
    setClientName('유원근');
    setClientEmail('yhg0337@gmail.com');
    setClientPhone('01087310337');

    setCeoPhoneErr(false);
    setClientEmailErr(false);
    setClientPhoneErr(false);
    setCoNumberErr(false);
    setEmailErr(false);
  };

  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const states = {
    resetForm,
    opt: { selectedOpt, setSelectedOpt },
    coName: { coName, setCoName, onChangeCoName },
    coNumber: { coNumber, setCoNumber, onChangeCoNumber, coNumberErr },
    ceoName: { ceoName, setCeoName, onChangeCeoName },
    ceoPhone: { ceoPhone, setCeoPhone, onChangeCeoPhone, ceoPhoneErr },
    address1: { address1, setAddress1 },
    address2: { address2, setAddress2, onChangeAddress2 },
    lisence: { lisence, setLisence },
    email: { email, setEmail, onChangeEmail, emailErr },
    clientName: { clientName, setClientName, onChangeClientName },
    clientPhone: { clientPhone, setClientPhone, onChangeClientPhone, clientPhoneErr },
    clientEmail: { clientEmail, setClientEmail, onChangeClientEmail, clientEmailErr },
    method: { method, setMethod },
    agreeTerm: { agreeTerm, setAgreeTerm },
    submitted: { submitted, setSubmitted },
    orderId: { setOrderId, orderId },
    isSameValue: { isSameValue, setIsSameValue, onChangeSameValue },
    fillMock,
    paymentInfo: { paymentInfo, setPaymentInfo },
  };

  return states;
}
