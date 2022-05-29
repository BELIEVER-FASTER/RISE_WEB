import React from 'react';
import { StudioList } from './MainSection7';
import Slider from 'react-slick';

export default function StudioMobile(): JSX.Element {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider centerMode={true} centerPadding={'24px'} arrows={false} {...settings}>
      {(['Fashion', 'Kitchen', 'Living', 'Beauty', 'Kids'] as StudioList[]).map(v => (
        <div className="item" key={v}>
          <img src={`/img/ver2/studio/${v.toLowerCase()}.png`} alt="" />
          <span>{v}</span>
        </div>
      ))}
    </Slider>
  );
}
