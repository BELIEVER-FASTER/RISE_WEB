import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RankSectionContainer } from './styles';

export default function WorkRank(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [rnumber, setRnumber] = useState(1);
  const [rnumber2, setRnumber2] = useState(100000);

  useEffect(() => {
    let timeIdA: NodeJS.Timeout;
    let timeIdB: NodeJS.Timeout;
    if (inView && ref) {
      timeIdA = setInterval(() => {
        setRnumber(Math.floor(Math.random() * 9) + 0);
      }, 20);
      timeIdB = setInterval(() => {
        setRnumber2(Math.floor(Math.random() * 100000) + 0);
      }, 20);
      setTimeout(() => {
        clearInterval(timeIdA);
        setRnumber(1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timeIdB);
        setRnumber2(10000);
      }, 1500);
    }
    return () => {
      clearInterval(timeIdA);
      clearInterval(timeIdB);
    };
  }, [inView]);

  return (
    <RankSectionContainer ref={ref}>
      <div className="rank__left client_nh">
        <h3>
          <span>네이버 쇼핑 라이브</span>
          <p>실시간 매출 순위</p>
        </h3>
        <p>
          <strong>{rnumber.toLocaleString()}</strong>위
        </p>
      </div>
      <div className="rank__right client_nh">
        <h3>
          <span>&nbsp;</span>
          <p>동시간 시청자수</p>
        </h3>
        <p>
          <strong>{rnumber2.toLocaleString()}</strong>
        </p>
      </div>
    </RankSectionContainer>
  );
}
