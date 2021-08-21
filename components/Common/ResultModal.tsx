import React from 'react';
import { ModalWrapper } from './styles';

type ResultModal = {
  onClose: () => void;
  name: string;
};
export default function ResultModal({ onClose, name }: ResultModal): JSX.Element {
  const backClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalWrapper onClick={backClick}>
      <div className="modal__content">
        <div className="img__wrapper">
          <img src="/img/success.gif" alt="success" />
        </div>
        <h1>등록이 완료되었습니다.</h1>
        <p>
          <strong>{name}</strong> 님 감사합니다. <br /> 이메일을 확인해주세요!
        </p>
        <button onClick={onClose}>닫기</button>
      </div>
    </ModalWrapper>
  );
}
