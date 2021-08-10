import React, { useEffect, useState } from 'react';
import { DatePickerBox } from './styles';
import { DatePicker } from '@y0c/react-datepicker';
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

  useEffect(() => {
    const filter = ['win16', 'win32', 'win64', 'mac', 'macintel', 'macm1'];
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      setIsMobile(true);
    }
  }, []);

  return (
    <DatePickerBox className={className}>
      {isMobile ? (
        <input type="date" value={value} onChange={e => setValue(e.target.value)} />
      ) : (
        <DatePicker
          placeholder="진행일정"
          locale="ko"
          onChange={date => setValue(date.format('YYYY-MM-DD'))}
        />
      )}
      <Icon name="arrow_down" width={32} height={32} />
    </DatePickerBox>
  );
}
