import Icon from 'components/Icon/Icon';
import React from 'react';
import RoundLine from './RoundLine';
import { ModelInfoContainer } from './styles';

type ModelDesc = {
  name: string;
  desc1: string;
  desc2: string;
  className?: string;
};
export default function ModelDesc({
  name,
  desc1,
  desc2,
  className = '',
}: ModelDesc): JSX.Element {
  return (
    <ModelInfoContainer className={`model_info ${className}`}>
      <p className="model_info_name">{name}</p>
      <RoundLine />
      <p className="model_info_desc">
        <span>{desc1}</span>
        <br />
        <span>
          {desc2}
          <Icon className="red_arrow" name="red_arrow" width={107} height={67} />
        </span>
      </p>
    </ModelInfoContainer>
  );
}
