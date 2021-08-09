import React from 'react';
import styled, { css } from 'styled-components';

const IconBox = styled.i<{ width: number; height: number; round: boolean }>`
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
  ${({ round }) =>
    round &&
    css`
      border-radius: 50%;
    `}
`;

type IconProps = {
  name: 'link_arrow' | 'menu' | 'menu_black' | 'close' | 'close_black';
  width?: number;
  height?: number;
  round?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Icon({
  width = 0,
  height = 0,
  name,
  round = true,
  className = '',
  onClick = () => null,
}: IconProps): JSX.Element {
  return (
    <IconBox
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      round={round}
    >
      <img src={`/icon/${name}.svg`} alt="icon" />
    </IconBox>
  );
}
