import ResultModal from 'components/Common/ResultModal';
import useAsync from 'hooks/useAsync';
import React, { useState, useEffect } from 'react';
import { emailNoti } from 'utils/requests';
import { EmailInputBox } from './styles';

export default function EmailInput(): JSX.Element {
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, fetch] = useAsync(emailNoti, email);

  const onClose = () => {
    setModalOpen(false);
    setEmail('');
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.loading) return;
    if (!email.trim()) return;
    fetch();
  };

  useEffect(() => {
    setIsRegister(state.success ? true : false);

    const timeId = setTimeout(() => {
      setIsRegister(false);
    }, 2500);
    return () => {
      clearTimeout(timeId);
    };
  }, [state]);

  useEffect(() => {
    if (isRegister) {
      setModalOpen(true);
    }
  }, [isRegister]);

  return (
    <>
      <EmailInputBox className="email__form" onSubmit={onSubmit}>
        <input
          onChange={onChangeEmail}
          value={email}
          type="email"
          placeholder="이메일 작성하고 혜택 알림 받기"
        />
        {state.loading ? (
          <button type="submit" disabled>
            <img src="/img/loading.gif" alt="loading" />
          </button>
        ) : (
          <button type="submit" disabled={isRegister}>
            {isRegister ? '등록완료' : '보내기'}
          </button>
        )}
      </EmailInputBox>
      {modalOpen && <ResultModal name={email} onClose={onClose} />}
    </>
  );
}
