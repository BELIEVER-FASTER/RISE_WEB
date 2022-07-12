import React from 'react';
import { PaymentAsideContent } from './styles';

export default function PaymentAside(): JSX.Element {
  return (
    <PaymentAsideContent>
      <article>
        <h2>결제 정보</h2>
        <div className="divider" />
        <h4>결제 상품</h4>
        <div className="col">
          <div className="prd_box">Premium</div>
          <div className="summary">
            <p>[라이즈 스튜디오]</p>
            <p>프리미엄 제작 패키지</p>
          </div>
        </div>
      </article>

      <div className="billing_info">
        <p>
          <span>상품 금액</span>
          <strong>2,000,000 원</strong>
        </p>
        <p>
          <span>부가세</span>
          <strong>200,000 원</strong>
        </p>
        <p>
          <h4>최종 결제 금액</h4>
          <strong>
            2,200,000 <span>원</span>
          </strong>
        </p>
      </div>

      <div className="term_box">
        <label className="checkbox">
          <input type="checkbox" name="" id="" />
          <span>아래 내용에 모두 동의합니다. (필수)</span>
        </label>
        <ul>
          <li>
            개인정보 수집 이용 및 제3자 제공 동의 <a href="">보기</a>
          </li>
          <li>
            결제대행 서비스 이용약관 동의<a href="">보기</a>
          </li>
          <li>
            서비스·상품 이용 약관 및 환불 정책<a href="">보기</a>
          </li>
        </ul>
      </div>
      {/* <button className="cta">{2000}원 결제하기</button> */}
    </PaymentAsideContent>
  );
}
