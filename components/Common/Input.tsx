import React from 'react';
import { InputBox } from './styles';

type InputProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'email' | 'text' | 'password' | 'tel';
};
export default function Input({ type = 'text', ...rest }: InputProps): JSX.Element {
  return (
    <InputBox>
      <input type={type} {...rest} />
    </InputBox>
  );
}
