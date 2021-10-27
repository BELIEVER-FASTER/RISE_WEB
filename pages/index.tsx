import { useEffect } from 'react';
import MainLayout from 'components/Main/MainLayout';
import MetaGe from 'components/Common/MetaGe';

export default function Home(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <MetaGe
        title="라이즈 MCN | 라이브커머스 대행사"
        desc="패션,코스메틱 전문 라이브커머스 대행사 RISE 입니다. 스튜디오, 쇼호스트, 촬영장비, PD 라이브쇼핑의 A to Z"
        url="https://www.riseenm.com"
      />
      <MainLayout />
    </>
  );
}
