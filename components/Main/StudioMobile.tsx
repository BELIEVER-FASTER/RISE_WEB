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
    <Slider
      className="studio_wrapper_mobile"
      centerMode={true}
      centerPadding={'24px'}
      arrows={false}
      {...settings}
    >
      {(['Fashion', 'Kitchen', 'Living', 'Beauty', 'Kids'] as StudioList[]).map(
        (v, idx) => (
          <div className="item" key={v}>
            <img
              src={`/img/ver2/studio/${v.toLowerCase()}.png`}
              alt={v + '스튜디오 이미지'}
            />
            <article>
              <span>{v}</span>
              <p>
                <strong>0{idx + 1} / </strong> 05
              </p>
            </article>
          </div>
        )
      )}
    </Slider>
  );
}
