import React from 'react';
import { useState } from 'react';
import { videoResources } from 'utils/videoResource';
import { BannerTitleContainer } from './styles';
import VideoBG from './VideoBG';

type BannerTitleProps = {
  title1: string;
  title2: string;
  desc: string;
  page: 'work' | 'about';
};

export default function BannerTitle({
  title1,
  title2,
  desc,
  page,
}: BannerTitleProps): JSX.Element {
  const [splitedDesc] = useState(desc.split('/'));

  return (
    <BannerTitleContainer>
      <VideoBG
        thumbnail={
          page === 'work' ? videoResources.work_mov.src : videoResources.aboutBG.src
        }
        videoSrc={
          page === 'work' ? videoResources.work_mov.src : videoResources.aboutBG.src
        }
      />
      <div className="content__bottom">
        <h2>
          {title1.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h2>
        <article>
          <h2>
            {title2.split('').map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </h2>
          <p>
            {splitedDesc.map(descPart => (
              <span key={descPart}>
                {descPart} <br />
              </span>
            ))}
          </p>
        </article>
      </div>
    </BannerTitleContainer>
  );
}
