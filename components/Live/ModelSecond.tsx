import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ModelSecondContainer } from './styles';

type ModelSecondProps = {
  images: { id: number; src: string }[];
};
export default function ModelSecond({ images }: ModelSecondProps): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) {
      Array.from({ length: 3 }).forEach((_, index) => {
        gsap.timeline().fromTo(
          `.model__image_${index + 1}`,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            delay: (index + 1) * 0.2,
          }
        );
      });
    }
  }, [inView]);
  return (
    <ModelSecondContainer ref={ref}>
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt="model-image"
          className={`model__image model__image_${image.id}`}
        />
      ))}
    </ModelSecondContainer>
  );
}
