import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { TextareaBox } from './styles';

type TextareaProps = {
  id?: string;
  className?: string;
  height?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea({
  id = '',
  className = '',
  height,
  value,
  ...rest
}: TextareaProps): JSX.Element {
  const router = useRouter();
  const isContact = router.route === '/contact';
  return (
    <TextareaBox
      whiteMode={isContact}
      value={value}
      height={height}
      id={id}
      className={className}
    >
      <textarea {...rest}></textarea>
    </TextareaBox>
  );
}
