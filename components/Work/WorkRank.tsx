import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { RankSectionContainer } from './styles';

export default function WorkRank(): JSX.Element {
  const { ref: refA, inView: inViewA } = useInView({ threshold: 1, triggerOnce: true });
  const { ref: refB, inView: inViewB } = useInView({ threshold: 1, triggerOnce: true });
  const { ref: refC, inView: inViewC } = useInView({ threshold: 1, triggerOnce: true });

  const [rnumber, setRnumber] = useState(1);
  const [rnumber2, setRnumber2] = useState(1);
  const [rnumber3, setRnumber3] = useState(1000000);

  useEffect(() => {
    let timeIdA: NodeJS.Timeout;

    if (inViewA && refA) {
      gsap.fromTo('.rank1', { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.2 });
      timeIdA = setInterval(() => {
        setRnumber(Math.floor(Math.random() * 9) + 0);
      }, 25);

      setTimeout(() => {
        clearInterval(timeIdA);
        setRnumber(1);
      }, 1000);
    }
    return () => {
      clearInterval(timeIdA);
    };
  }, [inViewA, refA]);

  useEffect(() => {
    let timeIdB: NodeJS.Timeout;
    if (inViewB && refB) {
      gsap.fromTo('.rank2', { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.2 });
      timeIdB = setInterval(() => {
        setRnumber2(Math.floor(Math.random() * 9) + 0);
      }, 25);
      setTimeout(() => {
        clearInterval(timeIdB);
        setRnumber2(1);
      }, 1000);
    }
    return () => {
      clearInterval(timeIdB);
    };
  }, [inViewB, refB]);

  useEffect(() => {
    let timeIdC: NodeJS.Timeout;
    if (inViewC && refC) {
      gsap.fromTo('.rank3', { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.2 });
      timeIdC = setInterval(() => {
        setRnumber3(Math.floor(Math.random() * 100000) + 0);
      }, 25);
      setTimeout(() => {
        clearInterval(timeIdC);
        setRnumber3(100000);
      }, 1000);
    }
    return () => {
      clearInterval(timeIdC);
    };
  }, [inViewC, refC]);

  return (
    <RankSectionContainer id="work_rank">
      <ul className="client_nh">
        <li className="rank1 invinsible" ref={refA}>
          <small>네이버 쇼핑 라이브 기준</small>
          <h3>
            패션 라이브커머스
            <br /> 실시간 매출 <strong>{rnumber}</strong> 위
          </h3>
        </li>
        <li className="rank2 invinsible" ref={refB}>
          <small>네이버 쇼핑 라이브 기준</small>
          <h3>
            동시간대
            <br /> 시청자수 <strong>{rnumber2}</strong> 위
          </h3>
        </li>
        <li className="rank3 invinsible" ref={refC}>
          <small>네이버 쇼핑 라이브 1개월 기준</small>
          <h3>
            라이브 평균 시청자수
            <br /> {rnumber3.toLocaleString()} 명 시청
          </h3>
        </li>
      </ul>
    </RankSectionContainer>
  );
}
