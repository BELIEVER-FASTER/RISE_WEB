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
        title="라이즈 RISE MCN - 패션&뷰티 라이브쇼핑 대행사"
        desc="패션 & 코스메틱 모바일 쇼호스트 + 크리에이터와 함께하는 라이브커머스 대행사 입니다. 라이브쇼핑의 시작을 라이즈 MCN과 함께하세요."
        url="https://www.riseenm.com"
      />
      <MainLayout />
    </>
  );
}
