import React from 'react';
import { ContactInfoContainer } from './styles';

export default function ContactInfo(): JSX.Element {
  return (
    <ContactInfoContainer>
      <article>
        <p>
          서울특별시 종로구 동숭길 133
          <br />
          상명대학교 대학로 AI융합센터 1층
        </p>
        <p className="tell">+82 02 1234 4324</p>
        <ul className="email">
          <li>
            <span>라이브 진행 문의</span>
            <a href="mailto:ProjectOfficial@gmail.com">ProjectOfficial@gmail.com</a>
          </li>
          <li>
            <span>쇼호스트 지원</span>
            <a href="mailto:ProjectOfficial@gmail.com">Official@gmail.com</a>
          </li>
        </ul>
      </article>
    </ContactInfoContainer>
  );
}
