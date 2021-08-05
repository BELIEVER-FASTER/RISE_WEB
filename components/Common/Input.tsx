import React from 'react';
import { InputBox } from './styles';

type InputProps = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'email' | 'text' | 'password' | 'tel';
};
export default function Input({
  id = '',
  className = '',
  type = 'text',
  ...rest
}: InputProps): JSX.Element {
  return (
    <InputBox id={id} className={className}>
      <input type={type} {...rest} />
    </InputBox>
  );
}
