import { usePaymentFormContext } from 'hooks/provider/PaymentProvider';
import React from 'react';
import { PaymentAsideContent } from './styles';

export default function PaymentAside(): JSX.Element {
  const {
    opt: { selectedOpt },
    onSubmit,
    agreeTerm,
  } = usePaymentFormContext();

  return (
    <PaymentAsideContent>
      <article>
        <h2>결제 정보</h2>
        <div className="divider" />
        <h4>결제 상품</h4>
        <div className="col">
          <div className="prd_box">{selectedOpt.name}</div>
          <div className="summary">
            <p>[라이즈 스튜디오]</p>
            <p>{selectedOpt.label.toLocaleString()}</p>
          </div>
        </div>
      </article>

      <div className="billing_info">
        <p>
          <span>상품 금액</span>
          <strong>{selectedOpt.price.toLocaleString()} 원</strong>
        </p>
        <p>
          <span>부가세</span>
          <strong>{selectedOpt.tax.toLocaleString()} 원</strong>
        </p>
        <p>
          <h4>최종 결제 금액</h4>
          <strong>
            {(selectedOpt.price + selectedOpt.tax).toLocaleString()} <span>원</span>
          </strong>
        </p>
      </div>

      <div className="term_box">
        <label className="checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            checked={agreeTerm.agreeTerm}
            onChange={e => {
              agreeTerm.setAgreeTerm(e.target.checked);
            }}
          />
          <span>아래 내용에 모두 동의합니다. (필수)</span>
        </label>
        <ul>
          <li>
            개인정보 수집 이용 및 제3자 제공 동의
            <a href="https://www.craft.do/s/Glcbp41y2TDjm3" target={'_blank'}>
              보기
            </a>
          </li>
          <li>
            결제대행 서비스 이용약관 동의
            <a href="https://www.craft.do/s/NkrG2949WfCvKK" target={'_blank'}>
              보기
            </a>
          </li>
          <li>
            서비스·상품 이용 약관 및 환불 정책
            <a href="https://www.craft.do/s/nlEbJipR9WETyN" target={'_blank'}>
              보기
            </a>
          </li>
        </ul>
      </div>
      <button className="cta" onClick={onSubmit}>
        {(selectedOpt.price + selectedOpt.tax).toLocaleString()}원 결제하기
      </button>
    </PaymentAsideContent>
  );
}
