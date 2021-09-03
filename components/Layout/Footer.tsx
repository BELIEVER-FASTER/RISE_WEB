import Social from 'components/Counter/Social';
import React from 'react';
import { FooterContainer } from './styles';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <hr />
      <article>
        <div className="footer__left">
          <p>
            서울특별시 종로구 동숭길 133 <br />
            대학로 AI융합센터 1층
          </p>
          <p>상호명 : Believer</p>
          <p>사업자등록번호 : 772-01-01547</p>
          <p>고객센터 : +82. 02. 1688. 6183</p>
          <p>대표자 : 김정환</p>
          <p>&copy;2021. Rise Co. all rights reserved.</p>
        </div>
        <div className="footer__right">
          <a href="mailto:contact@riseenm.com">contact@riseenm.com</a>
          <Social
            type="Facebook"
            link="https://www.facebook.com/%EB%9D%BC%EC%9D%B4%EC%A6%88-RISE-ENM-108682494840345"
          />
          <Social type="Instagram" link="https://www.instagram.com/riseenm/" />
          <Social type="Blog" link="https://blog.naver.com/riseenm" />
        </div>
      </article>
    </FooterContainer>
  );
}
