import React from 'react';
import { videoResources } from 'utils/videoResource';
import { BannerTitleContainer } from './styles';
import VideoBG from './VideoBG';

type BannerTitleProps = {
  title1?: string;
  title2: string;
  desc?: string;
};
export default function BannerTitle({
  title1,
  title2,
  desc,
}: BannerTitleProps): JSX.Element {
  return (
    <BannerTitleContainer>
      <VideoBG
        thumbnail={videoResources.aboutBG.thumb}
        videoSrc={videoResources.aboutBG.src}
      />
      <div className="content__bottom">
        <h2>{title1}</h2>
        <article>
          <h2>{title2}</h2>
          <p>
            <span>패션 코스메틱 라이브 쇼핑 MCN</span>
            <span>패션&코스메틱 전문 쇼핑 호스트 +</span>
            <span>크리에이터와 함께하는 라이브 쇼핑의 A-Z</span>
          </p>
        </article>
      </div>
    </BannerTitleContainer>
  );
}
