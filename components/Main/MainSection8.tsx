import ContactForm from 'components/Contact/ContactForm';
import React from 'react';
import { MainSection8CT } from './styles';

export default function MainSection8(): JSX.Element {
  return (
    <MainSection8CT>
      <h2>
        상상을 현실로 <em>( inquiry )</em>
      </h2>
      <p>
        상상만 하던 라이브커머스. <br />
        라이즈 스튜디오로 바로 시작해보세요!
      </p>
      <ContactForm />
    </MainSection8CT>
  );
}
