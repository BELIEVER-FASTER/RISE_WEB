import React from 'react';
import TagManager from 'react-gtm-module';
import { SocialBox } from './styles';
import Icon from 'components/Icon/Icon';

type SocialProps = {
  type: 'Facebook' | 'Instagram';
  link: string;
};
export default function Social({ type, link }: SocialProps): JSX.Element {
  const onClickSocial = () => {
    TagManager.dataLayer({ dataLayer: { event: `소셜 링크 클릭`, type } });
  };

  return (
    <SocialBox onClick={onClickSocial} href={link} target="_blank">
      <span>{type}</span>
      <Icon name="link_arrow" />
    </SocialBox>
  );
}
