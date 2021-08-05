import React, { useState } from 'react';
import { CounterContainer } from './styles';
import { useInterval } from 'hooks/useInterval';

export default function Couter(): JSX.Element {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  const getDDay = () => {
    const date = new Date();
    let ddate = new Date(`August 25, ${date.getFullYear()} 12:00:00`);
    if (ddate.getTime() < date.getTime()) {
      ddate = new Date(`August 25, ${date.getFullYear() + 1} 12:00:00`);
    }
    const between = ddate.getTime() - date.getTime();
    const day = Math.floor(between / (1000 * 60 * 60 * 24));
    const hour = String(
      Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, '0');
    const minute = String(
      Math.floor((between % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, '0');
    setDay(day);
    setHour(hour);
    setMinute(minute);
  };

  useInterval(getDDay, 1000);

  return (
    <CounterContainer>
      <div className="counter">
        <p>Days</p>
        <strong>{day}</strong>
      </div>
      <strong>:</strong>
      <div className="counter">
        <p>Hours</p>
        <strong>{hour}</strong>
      </div>
      <strong className="comma">:</strong>
      <div className="counter">
        <p>Minutes</p>
        <strong>{minute}</strong>
      </div>
    </CounterContainer>
  );
}
