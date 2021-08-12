import React from 'react';
import { VideoBGLayer } from './styles';

type VideoBGProps = {
  videoSrc: string;
  thumbnail?: string;
};
export default function VideoBG({ videoSrc, thumbnail }: VideoBGProps): JSX.Element {
  return (
    <VideoBGLayer loop autoPlay muted poster={thumbnail && thumbnail}>
      <source src={videoSrc} type="video/mp4" />
    </VideoBGLayer>
  );
}
