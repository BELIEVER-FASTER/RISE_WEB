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
    <EmailInputBox onSubmit={onSubmit}>
      <input
        onChange={onChangeEmail}
        value={email}
        type="email"
        placeholder="이메일 주소 작성"
      />
      <button type="submit">알림 받기</button>
    </EmailInputBox>
  );
}
