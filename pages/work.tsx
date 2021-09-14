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
        title="라이즈 RISE | WORK"
        desc="쇼핑 라이브 패션 부문 동시간대 실시간 시청자수 1위, 매출 1위를 하고있는 라이즈MCN의 다양한 클라이언트와 협업을 통해 전문화된 PD,스튜디오,쇼호스트 와 함께 라이브커머스를 경험할 수 있습니다."
        url="https://www.riseenm.com/work"
      />
      <WorkLayout />
    </>
  );
}
