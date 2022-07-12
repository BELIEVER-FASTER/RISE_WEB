/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { CopFormCT, PaymentInput, PaymentInputBox, PaymentLabel } from './styles';

export default function CoperationForm(): JSX.Element {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <CopFormCT>
      <div className="col">
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">상호명(법인명)</PaymentLabel>
          <PaymentInput />
        </PaymentInputBox>
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">사업자 번호</PaymentLabel>
          <PaymentInput />
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">대표자명</PaymentLabel>
          <PaymentInput />
        </PaymentInputBox>
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">대표(자) 전화번호</PaymentLabel>
          <PaymentInput />
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel className="required">회사 주소</PaymentLabel>
          <div className="address_col">
            <PaymentInput value={address} onClick={handleClick} />
            <div className="btn" onClick={handleClick}>
              주소 찾기
            </div>
            <PaymentInput />
          </div>
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel className="required">세금계산서 수취 이메일</PaymentLabel>
          <div className="address_col">
            <PaymentInput type="email" />
          </div>
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel>사업자 등록증</PaymentLabel>
          <div className="file_col">
            <PaymentInput />
            <input
              hidden
              className="file_input"
              type="file"
              formEncType="multipart-formdata"
              ref={fileRef}
              multiple={false}
            />
            <div className="btn file" onClick={() => fileRef.current?.click()}>
              파일 첨부
            </div>
          </div>
        </PaymentInputBox>
      </div>
    </CopFormCT>
  );
}
