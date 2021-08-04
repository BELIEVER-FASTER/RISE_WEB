import React from 'react';
import { TextareaBox } from './styles';
type TextareaProps = {
  height?: number;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export default function Textarea({ height, ...rest }: TextareaProps): JSX.Element {
  return (
    <TextareaBox height={height}>
      <textarea {...rest}></textarea>
    </TextareaBox>
  );
}
