import React from 'react';
import { SocialBox } from './styles';
import Icon from 'components/Icon/Icon';

type SocialProps = {
  type: 'Facebook' | 'Instagram';
  link: string;
};
export default function Social({ type, link }: SocialProps): JSX.Element {
  return (
    <SocialBox href={link} target="_blank">
      <span>{type}</span>
      <Icon name="link_arrow" />
    </SocialBox>
  );
}
