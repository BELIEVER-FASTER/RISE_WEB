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
        title="라이브커머스 대행 프로세스 | 라이즈"
        desc="라이브커머스 대행 라이즈의 성과와, 라이브커머스 진행 프로세스를 살펴보세요"
        url="https://www.riseenm.com/work"
      />
      <WorkLayout />
    </>
  );
}
