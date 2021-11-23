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
        title="라이즈 | 라이브커머스 대행사"
        desc="라이브커머스 대행사 라이즈 입니다. 기획, 촬영, 송출 및 스튜디오, 촬영장비, PD, 라이브쇼핑의 모든것"
        url="https://www.riseenm.com"
      />
      <MainLayout />
    </>
  );
}
