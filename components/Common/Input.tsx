import { useRouter } from 'next/dist/client/router';
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
  value = '',
  placeholder = '',
  ...rest
}: InputProps): JSX.Element {
  const router = useRouter();
  const isContact = router.route === '/contact';
  return (
    <InputBox whiteMode={isContact} value={value} id={id} className={className}>
      <input value={value} type={type} {...rest} />
      {placeholder && <label>{placeholder}</label>}
    </InputBox>
  );
}
