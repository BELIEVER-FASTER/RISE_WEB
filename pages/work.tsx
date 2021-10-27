import React, { useEffect } from 'react';
import MetaGe from 'components/Common/MetaGe';
import WorkLayout from 'components/Work/WorkLayout';

export default function work(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <MetaGe
        title="클라이언트 소개 | 라이즈 MCN"
        desc="네이버 쇼핑라이브 패션 부문 1위 대행사인 RISE MCN의 성과와, 라이브쇼핑 프로세스 진행과정을 살펴보세요"
        url="https://www.riseenm.com/work"
      />
      <WorkLayout />
    </>
  );
}
