import React from 'react';
import Lottie from 'react-lottie';
import scrollDown from 'utils/lottie/scroll_down.json';
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
  return (
    <LottieBox>
      <Lottie
        style={{
          width: '120px',
          height: '120px',
        }}
        options={lottieOptions}
        isClickToPauseDisabled={true}
      />
    </LottieBox>
  );
}
