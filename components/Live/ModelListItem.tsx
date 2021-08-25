import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ModelListItemBox } from './styles';

type ModelListItemProps = {
  modelData: { id: number; src: string; name: string; desc: string };
};
export default function ModelListItem({ modelData }: ModelListItemProps): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.45, triggerOnce: true });
  const index = ((modelData.id - 1) % 3) * 3;

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
    <ModelListItemBox ref={ref}>
      <div className="img__wrapper" id={`model_item__image-${modelData.id}`}>
        <img src={modelData.src} alt="model_item__image" />
      </div>
      <article id={`model_item__summary-${modelData.id}`}>
        <h6>{modelData.name}</h6>
        <p>{modelData.desc}</p>
      </article>
    </ModelListItemBox>
  );
}
