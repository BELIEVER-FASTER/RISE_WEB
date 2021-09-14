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
        title="라이즈 RISE - Unique Live MCN"
        desc="패션&코스메틱 전문 쇼호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A~Z, 라이브커머스의 시작을 라이즈와 함께하세요."
        url="https://www.riseenm.com"
      />
      <MainLayout />
    </>
  );
}
