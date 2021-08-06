import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
import CHeader from './CHeader';
import Counter from './Couter';
import Social from './Social';
import VideoBG from './VideoLayer';
import { CLayoutContainer } from './styles';

// const VideoBG = dynamic(() => import('./VideoLayer'), { ssr: false });

export default function CLayout(): JSX.Element {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const filter = ['win16', 'win32', 'win64', 'mac', 'macintel', 'macm1'];
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      setHeight(window.innerHeight);
    } else {
      setHeight(0);
    }
  }, []);

  return (
    <CLayoutContainer height={height}>
      <VideoBG />
      <div className="counter_page__content">
        <CHeader />
        <div className="bottom__content">
          <Counter />
          <div className="social__list">
            <Social
              type="Facebook"
              link="https://www.facebook.com/%EB%9D%BC%EC%9D%B4%EC%A6%88-RISE-ENM-108682494840345"
            />
            <Social type="Instagram" link="https://www.instagram.com/riseenm/" />
          </div>
        </div>
      </div>
    </CLayoutContainer>
  );
}
