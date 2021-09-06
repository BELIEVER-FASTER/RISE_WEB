import gsap from 'gsap';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ModelSecondContainer } from './styles';

type ModelSecondProps = {
  images: { id: number; src: string }[];
  modelId: number;
};
export default function ModelSecond({ images, modelId }: ModelSecondProps): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const router = useRouter();
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
  }, [inView, ref]);

  const detailClick = () => {
    router.push(
      `${router.basePath}?model=${modelId}`,
      `${router.basePath}?model=${modelId}`,
      { scroll: false }
    );
  };
  return (
    <ModelSecondContainer
      id={`model_item__image-main-${modelId}`}
      ref={ref}
      onMouseMove={e => {
        const dim = (
          document.querySelector(`#model_item__image-main-${modelId}`) as HTMLElement
        ).getBoundingClientRect();
        const mouseY = e.clientY - dim.top;
        const mouseX = e.clientX - dim.left;
        gsap.set(`#circle_main_${modelId}`, {
          opacity: 1,
          top: `${mouseY - 30}px`,
          left: `${mouseX - 30}px`,
        });
      }}
      onMouseLeave={() => {
        gsap.set(`#circle_main_${modelId}`, {
          opacity: 0,
        });
      }}
    >
      {images.map(image => (
        <img
          onClick={detailClick}
          key={image.id}
          src={image.src}
          alt="model-image"
          className={`model__image model__image_${image.id}`}
        />
      ))}
      <div className="circle" id={`circle_main_${modelId}`} onClick={detailClick}>
        <span>View</span>
      </div>
    </ModelSecondContainer>
  );
}
