import LottieIcon from 'components/Common/LottieIcon';
import gsap from 'gsap';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import CategoryFilterAside from './CategoryFilter/CategoryFilterAside';
import ModelList from './ModelList';
import { LiveBContainer } from './styles';

const ModelDetail = dynamic(() => import('./ModelDetail/DetailLayout'), { ssr: false });

export default function LiveB(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const { ref: cateRef, inView: cateInView } = useInView({
    threshold: 0,
  });
  const [selectedCate, setSelectedCate] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (inView && ref) {
      gsap.fromTo(
        '.live_b__banner h3',
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        '.live_b__banner p',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.4 }
      );
    }
  }, [inView, ref]);

  useEffect(() => {
    if (!cateRef) return;
  }, [cateInView, cateRef]);

  useEffect(() => {
    const offset = document.documentElement.scrollTop;
    const top = window.innerWidth > 950 ? 700 : 400;
    if (offset > top) {
      scrollTo({ top, behavior: 'smooth' });
      scrollTo({ top, behavior: 'smooth' });
    }
  }, [selectedCate]);

  useEffect(() => {
    if (router.query.model) {
      document.body.style.overflowY = 'hidden';
      if (window.innerWidth > 950) document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflowY = 'initial';
      if (window.innerWidth > 950) document.body.style.paddingRight = '0px';
    }
  }, [router.query]);
  return (
    <>
      <LiveBContainer>
        <section className="live_b__banner" ref={ref}>
          <h3 className="invinsible">
            <span>
              브랜드 컨셉과 <br /> 어울리는 쇼호스트 매칭
            </span>
            <LottieIcon />
          </h3>
          <p className="invinsible" ref={cateRef}>
            <span>쇼호스트, 인플루언서, 유튜버, 아나운서, </span>
            <span>
              미스코리아 등<br /> 100여 명의 전문가로
            </span>
            <span> 구성된 라이즈 팀</span>
          </p>
          <CategoryFilter selectedCate={selectedCate} setSelectedCate={setSelectedCate} />
        </section>
        <ModelList selectedCate={selectedCate} />
        <section className="more__info">{/* <h3>+49</h3> */}</section>
      </LiveBContainer>
      {!cateInView && (
        <CategoryFilterAside
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
      )}
      {router.query.model && <ModelDetail />}
    </>
  );
}
