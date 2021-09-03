import React, { useEffect, useState } from 'react';
import { DatePicker } from '@y0c/react-datepicker';
import { DatePickerBox, FixedWrapper } from './styles';
import Icon from 'components/Icon/Icon';

import 'dayjs/locale/ko';

type DatePickerProps = {
  className?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function DatePick({
  className = '',
  setValue,
  value,
}: DatePickerProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleCalender = () => setOpen(prev => !prev);

  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target === e.currentTarget);
    if (e.target === e.currentTarget) setOpen(false);
  };

  useEffect(() => {
    const filter = ['win16', 'win32', 'win64', 'mac', 'macintel', 'macm1'];
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    // const close = (e: MouseEvent) => {
    //   if (document.querySelector('.calendar__container')?.contains(e.target as Node))
    //     return setOpen(false);
    // };
    document
      .querySelector('.picker-input__text')
      ?.addEventListener('click', toggleCalender);
    // window.addEventListener('click', close);
    return () => {
      document
        .querySelector('.picker-input__text')
        ?.removeEventListener('click', toggleCalender);
      // window.removeEventListener('click', close);
    };
  }, []);

  return (
    <>
      <DatePickerBox className={`${className} ${open ? 'open' : ''}`}>
        {isMobile ? (
          <input type="date" value={value} onChange={e => setValue(e.target.value)} />
        ) : (
          <DatePicker
            placeholder="진행일정"
            locale="ko"
            show={open}
            onChange={date => {
              setValue(date.format('YYYY-MM-DD'));
              toggleCalender();
            }}
          />
        )}
        <Icon name="arrow_down" width={32} height={32} />
      </DatePickerBox>
      {open && <FixedWrapper onClick={onClickBG} />}
    </>
  );
}
