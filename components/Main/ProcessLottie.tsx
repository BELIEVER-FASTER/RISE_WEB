import React, { useEffect } from 'react';
import { useState } from 'react';
import Lottie, { Options } from 'react-lottie';
import lottie1 from 'utils/lottie/process/consulting.json';
import lottie2 from 'utils/lottie/process/planning.json';
import lottie3 from 'utils/lottie/process/showhost.json';
import lottie4 from 'utils/lottie/process/broadcasting.json';
import lottie5 from 'utils/lottie/process/dataReport.json';

type ProcessLottieProps = {
  type: 1 | 2 | 3 | 4 | 5;
  active: boolean;
};
export default function ProcessLottie({ type, active }: ProcessLottieProps): JSX.Element {
  const lottieOptions: Options = {
    animationData: (() => {
      switch (type) {
        case 1:
          return lottie1;
        case 2:
          return lottie2;
        case 3:
          return lottie3;
        case 4:
          return lottie4;
        case 5:
          return lottie5;
        default:
          return lottie1;
      }
    })(),
    loop: (() => {
      switch (type) {
        case 1:
          return 3;
        case 2:
          return 2;
        case 3:
          return 2;
        case 4:
          return 2;
        case 5:
          return 2;
        default:
          return 2;
      }
    })(),
    // autoplay: true,

    rendererSettings: {
      className: 'lottie_icon', // svg에 적용
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [width, setWidth] = useState('280px');
  const [currenetActive, setCurrenetActive] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 951) {
      setWidth('260px');
    } else {
      setWidth('280px');
    }
  }, []);
  useEffect(() => {
    if (active) {
      setCurrenetActive(true);
    }
  }, [active]);
  return (
    <div className="lottie_ct">
      <Lottie
        isStopped={!currenetActive}
        style={{
          width,
          height: width,
        }}
        options={lottieOptions}
        isClickToPauseDisabled={true}
      />
    </div>
  );
}
