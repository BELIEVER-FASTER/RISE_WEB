import React from 'react';
import { AlertMessageBox } from './styles';

export default function AlertMessage(): JSX.Element {
  return (
    <AlertMessageBox>
      <i>!</i>
      <span>올바른 값을 입력해주세요.</span>
    </AlertMessageBox>
  );
}
