import React from 'react';
import {
  ClientFormCT,
  PaymentInformation,
  PaymentInput,
  PaymentInputBox,
  PaymentLabel,
} from './styles';

export default function ClientForm(): JSX.Element {
  return (
    <ClientFormCT>
      <div className="col">
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 이름</PaymentLabel>
          <PaymentInput type="email" />
        </PaymentInputBox>
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 휴대폰번호</PaymentLabel>
          <PaymentInput type="email" />
        </PaymentInputBox>
      </div>
      <div className="col">
        <PaymentInputBox>
          <PaymentLabel className="required">구매자 이메일</PaymentLabel>
          <PaymentInput type="email" />
          <PaymentInformation>
            * 작성하신 이메일 주소로 라이브커머스 진행관련 사항이 전달됩니다. 오타가
            발생하지 않도록 주의해주세요.
          </PaymentInformation>
        </PaymentInputBox>
      </div>
    </ClientFormCT>
  );
}
