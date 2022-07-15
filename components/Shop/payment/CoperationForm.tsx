/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import React, { useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import AlertMessage from './AlertMessage';
import { CopFormCT, PaymentInput, PaymentInputBox, PaymentLabel } from './styles';

export default function CoperationForm(): JSX.Element {
  const open = useDaumPostcodePopup();
  const fileRef = useRef<HTMLInputElement>(null);
  const {
    address1,
    address2,
    ceoName,
    ceoPhone,
    coName,
    coNumber,
    email,
    lisence,
    submitted: { submitted },
  } = usePaymentFormContext();
  const [fileName, setFileName] = useState('');

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // http://localhost:8080/api/upload/license

    const formData = new FormData();

    if (!e.target.files) return;
    formData.append('image', e.target.files[0]);

    const { data } = await axios.post(
      'http://localhost:8080/api/upload/license',
      formData
    );
    console.log(data);
    if (data) {
      lisence.setLisence(data.src);
      setFileName(e.target.files[0].name);
    }
  };

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
    address1.setAddress1(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <CopFormCT>
      <div className="col">
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">상호명(법인명)</PaymentLabel>
          <PaymentInput
            onChange={coName.onChangeCoName}
            value={coName.coName}
            className={submitted && !coName.coName ? 'error' : ''}
          />
          {submitted && !coName.coName && <AlertMessage />}
        </PaymentInputBox>
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">사업자 번호</PaymentLabel>
          <PaymentInput
            onChange={coNumber.onChangeCoNumber}
            value={coNumber.coNumber}
            className={submitted && coNumber.coNumberErr ? 'error' : ''}
          />
          {submitted && coNumber.coNumberErr && <AlertMessage />}
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">대표자명</PaymentLabel>
          <PaymentInput
            onChange={ceoName.onChangeCeoName}
            value={ceoName.ceoName}
            className={submitted && !ceoName.ceoName ? 'error' : ''}
          />
          {submitted && !ceoName.ceoName && <AlertMessage />}
        </PaymentInputBox>
        <PaymentInputBox className="pib">
          <PaymentLabel className="required">대표(자) 전화번호</PaymentLabel>
          <PaymentInput
            onChange={ceoPhone.onChangeCeoPhone}
            value={ceoPhone.ceoPhone}
            className={submitted && ceoPhone.ceoPhoneErr ? 'error' : ''}
          />
          {submitted && ceoPhone.ceoPhoneErr && <AlertMessage />}
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel className="required">회사 주소</PaymentLabel>
          <div className="address_col">
            <PaymentInput
              value={address1.address1}
              onClick={handleClick}
              className={submitted && !address1.address1 ? 'error' : ''}
            />
            <div className="btn" onClick={handleClick}>
              주소 찾기
            </div>
            <PaymentInput
              value={address2.address2}
              onChange={address2.onChangeAddress2}
              className={submitted && !address2.address2 ? 'error' : ''}
            />
          </div>
          {submitted && (!address1.address1 || !address2.address2) && <AlertMessage />}
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel className="required">세금계산서 수취 이메일</PaymentLabel>
          <div className="address_col">
            <PaymentInput
              type="email"
              onChange={email.onChangeEmail}
              value={email.email}
              className={submitted && email.emailErr ? 'error' : ''}
            />
          </div>
          {submitted && email.emailErr && <AlertMessage />}
        </PaymentInputBox>
      </div>

      <div className="col">
        <PaymentInputBox className="pib address">
          <PaymentLabel>사업자 등록증</PaymentLabel>
          <div className="file_col">
            <PaymentInput value={fileName} />
            <input
              hidden
              className="file_input"
              type="file"
              formEncType="multipart-formdata"
              ref={fileRef}
              multiple={false}
              onChange={onChangeImage}
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
