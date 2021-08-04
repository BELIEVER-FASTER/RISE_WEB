import React from 'react';
import { ButtonBox } from './styles';
type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};
export default function Button({
  type = 'button',
  disabled = false,
  label,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ButtonBox disabled={disabled} type={type} {...rest}>
      {label}
    </ButtonBox>
  );
}
