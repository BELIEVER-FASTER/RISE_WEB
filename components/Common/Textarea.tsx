import React from 'react';
import { TextareaBox } from './styles';
type TextareaProps = {
  id?: string;
  className?: string;
  height?: number;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export default function Textarea({
  id = '',
  className = '',
  height,
  ...rest
}: TextareaProps): JSX.Element {
  return (
    <TextareaBox height={height} id={id} className={className}>
      <textarea {...rest}></textarea>
    </TextareaBox>
  );
}
