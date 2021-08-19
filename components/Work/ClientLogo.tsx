import React from 'react';
import { ClientLogoBox } from './styles';

type ClientLogoProps = {
  src: string;
  name: string;
};
export default function ClientLogo({ src, name }: ClientLogoProps): JSX.Element {
  return (
    <ClientLogoBox>
      <img src={src} alt={name} />
    </ClientLogoBox>
  );
}
