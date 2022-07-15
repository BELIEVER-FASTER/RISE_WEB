import Logo from 'components/Common/Logo';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { ShopHeaderCT } from './styles';

export default function ShopHeader(): JSX.Element {
  const { push } = useRouter();
  return (
    <ShopHeaderCT>
      <div className="content">
        <i onClick={() => push('/')}>
          <Logo width={86} height={24} />
        </i>
      </div>
    </ShopHeaderCT>
  );
}
