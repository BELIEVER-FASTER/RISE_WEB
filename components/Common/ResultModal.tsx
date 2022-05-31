import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { ModalWrapper } from './styles';
import { MdOutlineCancel } from 'react-icons/md';
import { updateInflow } from 'utils/requests';

type ResultModal = {
  onClose: () => void;
  contactId: string;
};
const options = [
  { id: 1, value: '포털사이트 검색' },
  { id: 2, value: '블로그 게시글' },
  { id: 3, value: 'SNS / 커뮤니티' },
  { id: 4, value: '지인추천' },
  { id: 5, value: '광고' },
  { id: 6, value: '기타' },
];
export default function ResultModal({ onClose, contactId }: ResultModal): JSX.Element {
  const backClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  const [selected, setSelected] = useState('어떤 경로를 통해 알게되셨나요?');
  const onSubmit = async () => {
    updateInflow({ _id: contactId, inflow: selected }).finally(() => {
      onClose();
    });
  };
  return (
    <ModalWrapper onClick={backClick}>
      <div className="modal__content">
        <i onClick={onClose}>
          <MdOutlineCancel />
        </i>
        <h1>
          라이브 문의신청이 <br />
          완료되었습니다.
        </h1>
        <p>
          어떤 경로를 통해 라이즈스튜디오에 <br /> 진행문의를 주셨는지에 대해 궁금해요!
        </p>
        <div className="select_wrapper">
          <CustomSelect
            className="budget_input"
            placeholder="광고예산"
            value={selected}
            setValue={setSelected}
            options={options}
          />
        </div>
        <button
          disabled={selected === '어떤 경로를 통해 알게되셨나요?'}
          onClick={onSubmit}
        >
          선택완료
        </button>
      </div>
    </ModalWrapper>
  );
}
{
  /* <CustomSelect
            className="budget_input invinsible"
            placeholder="광고예산"
            value={budget}
            setValue={setBudget}
            options={budgetOptions}
          /> */
}
