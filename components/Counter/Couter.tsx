import React, { useState } from 'react';
import { CounterContainer } from './styles';
import { useInterval } from 'hooks/useInterval';
import { useEffect } from 'react';

export default function Couter(): JSX.Element {
  const [day, setDay] = useState<number | string>('0');
  const [hour, setHour] = useState<number | string>('00');
  const [minute, setMinute] = useState<number | string>('00');
  const getDDay = () => {
    const date = new Date();
    let ddate = new Date(`September 1, ${date.getFullYear()} 00:00:00`);
    if (ddate.getTime() < date.getTime()) {
      ddate = new Date(`September 1, ${date.getFullYear() + 1} 00:00:00`);
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
    return {
      day,
      hour,
      minute,
    };
  };
  useInterval(getDDay, 1000);
  useEffect(() => {
    setDay(getDDay().day);
    setHour(getDDay().hour);
    setMinute(getDDay().minute);
  }, []);

  return (
    <CounterContainer>
      <div className="counter">
        <p>Days</p>
        <strong>{day}</strong>
      </div>
      <strong className="comma">:</strong>
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
