import React from 'react';
import { MainContainer } from './styles';

export default function MainLayout(): JSX.Element {
  return (
    <MainContainer>
      <img draggable={false} src="/img/main_img.png" alt="main_img" />
      <h1>
        <span>U</span>
        <span>n</span>
        <span>i</span>
        <span>q</span>
        <span>u</span>
        <span>e</span>
        <strong> </strong>
        <span>L</span>
        <span>i</span>
        <span>v</span>
        <span>e</span>
        <strong> </strong>
        <span>M</span>
        <span>c</span>
        <span>n</span>
      </h1>
    </MainContainer>
  );
}
