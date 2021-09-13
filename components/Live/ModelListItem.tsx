import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ModelListItemBox } from './styles';
import { ModelDataItem } from 'utils/modelsData';
import { useInterval } from 'hooks/useInterval';
import { useRouter } from 'next/dist/client/router';

type ModelListItemProps = {
  modelData: ModelDataItem;
};
function Count() {
  const [day, setDay] = useState<number | string>('0');
  const [hour, setHour] = useState<number | string>('00');
  const [minute, setMinute] = useState<number | string>('00');
  const getDDay = () => {
    const date = new Date();
    let ddate = new Date(`September 17, ${date.getFullYear()} 14:00:00`);
    if (ddate.getTime() < date.getTime()) {
      ddate = new Date(`September 17, ${date.getFullYear() + 1} 14:00:00`);
    }
    const between = ddate.getTime() - date.getTime();
    const day = Math.floor(between / (1000 * 60 * 60 * 24));
    const hour = String(
      Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, '0');
    const minute = String(
      Math.floor((between % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, '0');
    setDay(day.toString().length === 1 ? '0' + day : day);
    setHour(hour.toString().length === 1 ? '0' + hour : hour);
    setMinute(minute.toString().length === 1 ? '0' + minute : minute);
    return {
      day,
      hour,
      minute,
    };
  };
  useInterval(getDDay, 5000);
  useEffect(() => {
    setDay(getDDay().day);
    setHour(getDDay().hour);
    setMinute(getDDay().minute);
  }, []);
  return (
    <div className="count">
      <p>COMING SOON</p>
      <div className="timer">
        <div>
          <strong>{day}</strong>
          <span>Days</span>
        </div>
        <div>
          <strong>{hour}</strong>
          <span>Hours</span>
        </div>
        <div>
          <strong>{minute}</strong>
          <span>Minutes</span>
        </div>
      </div>
    </div>
  );
}
export default function ModelListItem({ modelData }: ModelListItemProps): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.45, triggerOnce: true });
  const index = ((modelData.id - 3) % 3) * 3;
  const router = useRouter();

  const detailClick = () => {
    if (modelData.id < 4) {
      router.push(
        `${router.basePath}?model=${modelData.id}`,
        `${router.basePath}?model=${modelData.id}`,
        { scroll: false }
      );
    }
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
        {modelData.id < 4 && (
          <div className="circle" id={`circle_${modelData.id}`}>
            <span>View</span>
          </div>
        )}
        <img src={modelData.image1_src} alt="model_item__image" />
        {modelData.id === 4 ? <Count /> : <></>}
      </div>
      <article id={`model_item__summary-${modelData.id}`}>
        <h6>{modelData.name}</h6>
        <p>
          {modelData.desc.split('/').map(v => (
            <p>{v}</p>
          ))}
        </p>
      </article>
    </ModelListItemBox>
  );
}
