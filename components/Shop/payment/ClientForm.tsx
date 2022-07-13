import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import React from 'react';
import AlertMessage from './AlertMessage';
import {
  ClientFormCT,
  PaymentInformation,
  PaymentInput,
  PaymentInputBox,
  PaymentLabel,
} from './styles';

export default function ClientForm(): JSX.Element {
  const {
    clientEmail,
    clientName,
    clientPhone,
    submitted: { submitted },
  } = usePaymentFormContext();
  return (
    <ClientFormCT>
      <div className="col">
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 이름</PaymentLabel>
          <PaymentInput
            type="text"
            className={submitted && !clientName.clientName ? 'error' : ''}
            onChange={clientName.onChangeClientName}
            value={clientName.clientName}
          />
          {submitted && !clientName.clientName && <AlertMessage />}
        </PaymentInputBox>
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 휴대폰번호</PaymentLabel>
          <PaymentInput
            type="phone"
            className={submitted && clientPhone.clientPhoneErr ? 'error' : ''}
            value={clientPhone.clientPhone}
            onChange={clientPhone.onChangeClientPhone}
          />
          {submitted && clientPhone.clientPhoneErr && <AlertMessage />}
        </PaymentInputBox>
      </div>
      <div className="col">
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 이메일</PaymentLabel>
          <PaymentInput
            className={submitted && clientEmail.clientEmailErr ? 'error' : ''}
            type="email"
            value={clientEmail.clientEmail}
            onChange={clientEmail.onChangeClientEmail}
          />
          <PaymentInformation>
            * 작성하신 이메일 주소로 라이브커머스 진행관련 사항이 전달됩니다. 오타가
            발생하지 않도록 주의해주세요.
          </PaymentInformation>
          {submitted && clientEmail.clientEmailErr && <AlertMessage />}
        </PaymentInputBox>
      </div>
    </ClientFormCT>
  );
}
