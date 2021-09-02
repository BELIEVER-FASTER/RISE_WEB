import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ModelListItemBox } from './styles';
import { useRouter } from 'next/dist/client/router';

type ModelListItemProps = {
  modelData: { id: number; src: string; name: string; desc: string };
};
export default function ModelListItem({ modelData }: ModelListItemProps): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.45, triggerOnce: true });
  const index = ((modelData.id - 1) % 3) * 3;
  const router = useRouter();

  const detailClick = () => {
    router.push(
      `${router.basePath}?model=${modelData.id}`,
      `${router.basePath}?model=${modelData.id}`,
      { scroll: false }
    );
  };

  useEffect(() => {
    if (inView) {
      let delay1 = 0;
      let delay2 = 0.4;
      if (innerWidth > 950) {
        delay1 = index / 10;
        delay2 = index / 10 + 0.4;
      }
      gsap.to(`#model_item__image-${modelData.id}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay1,
      });
      gsap.from(`#model_item__summary-${modelData.id}`, {
        opacity: 0,
        y: -40,
        delay: delay2,
      });
    }
  }, [inView, ref]);

  return (
    <ModelListItemBox className={`model__item-${modelData.id}`} ref={ref}>
      <div
        onClick={detailClick}
        className="img__wrapper"
        id={`model_item__image-${modelData.id}`}
        onMouseMove={e => {
          const dim = (
            document.querySelector(`#model_item__image-${modelData.id}`) as HTMLElement
          ).getBoundingClientRect();
          const mouseY = e.clientY - dim.top;
          const mouseX = e.clientX - dim.left;
          gsap.set(`#circle_${modelData.id}`, {
            opacity: 1,
            top: `${mouseY - 30}px`,
            left: `${mouseX - 30}px`,
          });
        }}
        onMouseLeave={() => {
          gsap.set(`#circle_${modelData.id}`, {
            opacity: 0,
          });
        }}
      >
        <div className="circle" id={`circle_${modelData.id}`}>
          <span>View</span>
        </div>
        <img src={modelData.src} alt="model_item__image" />
      </div>
      <article id={`model_item__summary-${modelData.id}`}>
        <h6>{modelData.name}</h6>
        <p>{modelData.desc}</p>
      </article>
    </ModelListItemBox>
  );
}
