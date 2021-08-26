import gsap from 'gsap';
import React, { useEffect } from 'react';
// import { imageResources } from 'utils/imageResource';
import { MainContainer } from './styles';

export default function MainLayout(): JSX.Element {
  useEffect(() => {
    if (window.innerWidth >= 950) {
      gsap.to('.title__main', {
        fontSize: '5vw',
        height: '5vw',
        delay: 13,
        duration: 1.3,
      });
    }
  }, []);
  return (
    <MainContainer>
      {/* <img draggable={false} src={imageResources.mainBg} alt="main_img" /> */}
      <video loop autoPlay muted playsInline>
        <source
          src="https://rise-resource.s3.ap-northeast-2.amazonaws.com/video/main.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="title__main">
        <span>U</span>
        <span>n</span>
        <span>i</span>
        <span>q</span>
        <span>u</span>
        <span>e</span> <br />
        <span>L</span>
        <span>i</span>
        <span>v</span>
        <span>e</span> <span>M</span>
        <span>C</span>
        <span>N</span>
      </h1>
    </MainContainer>
  );
}
