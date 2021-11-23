import React, { useEffect } from 'react';
import ContactLayout from 'components/Contact/ContactLayout';
import MetaGe from 'components/Common/MetaGe';

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <MetaGe
        title="라이브커머스진행 문의하기 | 라이즈"
        desc="네이버 쇼핑라이브, 카카오 쇼핑라이브, 11번가 라이브 등 다양한 라이브커머스 플랫폼에서의 라이브쇼핑 진행이 가능합니다."
        url="https://www.riseenm.com/contact"
      />
      <ContactLayout />
    </>
  );
}
