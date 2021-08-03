import React, { useState } from 'react';
import { EmailInputBox } from './styles';

export default function EmailInput(): JSX.Element {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(email + '준비중');
  };

  return (
    <EmailInputBox className="email__form" onSubmit={onSubmit}>
      <input
        onChange={onChangeEmail}
        value={email}
        type="email"
        placeholder="이메일 작성하고 혜택 알림 받기"
      />
      <button type="submit">보내기</button>
    </EmailInputBox>
  );
}
