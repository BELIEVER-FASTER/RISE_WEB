import useAsync from 'hooks/useAsync';
import React, { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { emailNoti, EmailNotiRes } from 'utils/requests';
import { EmailInputBox } from './styles';

export default function EmailInput(): JSX.Element {
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [state, fetch] = useAsync(emailNoti, email);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    TagManager.dataLayer({ dataLayer: { event: '출시 알림 등록' } });
    fetch();
  };
  useEffect(() => {
    setIsRegister((state.success as EmailNotiRes).success);
    const timeId = setTimeout(() => {
      setIsRegister(false);
      setEmail('');
    }, 2500);
    return () => {
      clearTimeout(timeId);
    };
  }, [state]);

  return (
    <EmailInputBox className="email__form" onSubmit={onSubmit}>
      <input
        onChange={onChangeEmail}
        value={email}
        type="email"
        placeholder="이메일 작성하고 혜택 알림 받기"
      />
      <button type="submit" disabled={isRegister}>
        {isRegister ? '등록완료' : '보내기'}
      </button>
    </EmailInputBox>
  );
}
