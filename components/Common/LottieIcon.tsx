import React, { useEffect } from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import scrollDown from 'utils/lottie/scroll_d.json';
import { LottieBox } from './styles';

const lottieOptions = {
  animationData: scrollDown,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'lottie_icon', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function LottieIcon(): JSX.Element {
  const [width, setWidth] = useState('120px');
  useEffect(() => {
    const filter = ['win16', 'win32', 'win64', 'mac', 'macintel', 'macm1'];
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      setWidth('50px');
    } else {
      setWidth('120px');
    }
  }, []);
  return (
    <LottieBox>
      <Lottie
        style={{
          width,
          height: width,
        }}
        options={lottieOptions}
        isClickToPauseDisabled={true}
      />
    </LottieBox>
  );
}
