import React, { useState } from 'react';
import { CustomSelectBox } from './styles';
import Icon from 'components/Icon/Icon';

type SelectProps = {
  options: { id: number; value: string }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  placeholder?: string;
};
export default function CustomSelect({
  className = '',
  options,
  value,
  setValue,
  placeholder = '',
}: SelectProps): JSX.Element {
  const [selectOpen, setSelectOpen] = useState(false);
  const toggleOpen = () => setSelectOpen(prev => !prev);
  const onClickOption = (current: string) => {
    setValue(current);
    setSelectOpen(false);
  };
  return (
    <CustomSelectBox selectOpen={selectOpen} className={className}>
      <div className="select" onClick={toggleOpen}>
        <span className={placeholder === value ? 'pc' : ''}>{value}</span>
        <Icon name="arrow_down" width={32} height={32} />
      </div>
      {selectOpen && (
        <ul>
          {options.map(option => (
            <li onClick={() => onClickOption(option.value)} key={option.id}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </CustomSelectBox>
  );
}
