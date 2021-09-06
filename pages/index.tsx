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
        title="RISE"
        desc="패션&코스메틱 전문 쇼호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A~Z"
        url="https://www.riseenm.com"
      />
      <MainLayout />
    </>
  );
}
