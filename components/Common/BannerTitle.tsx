import React from 'react';
import { videoResources } from 'utils/videoResource';
import { BannerTitleContainer } from './styles';
import VideoBG from './VideoBG';

type BannerTitleProps = {
  firstTitle?: string;
  secondTitle: string;
  desc: string;
};

export default function BannerTitle({
  firstTitle,
  secondTitle,
  desc,
}: BannerTitleProps): JSX.Element {
  const splitedDesc = desc.split('/');

  return (
    <BannerTitleContainer>
      <VideoBG
        thumbnail={videoResources.aboutBG.thumb}
        videoSrc={videoResources.aboutBG.src}
      />
      <div>
        <h2>{firstTitle}</h2>
        <article>
          <h2>{secondTitle}</h2>
          <p>
            {splitedDesc.map(desc => (
              <span key={desc}>{desc}</span>
            ))}
          </p>
        </article>
      </div>
    </BannerTitleContainer>
  );
}
