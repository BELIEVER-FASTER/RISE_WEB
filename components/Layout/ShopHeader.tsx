import Logo from 'components/Common/Logo';
import React from 'react';
import { ShopHeaderCT } from './styles';

export default function ShopHeader(): JSX.Element {
  return (
    <ShopHeaderCT>
      <div className="content">
        <i>
          <Logo width={86} height={24} />
        </i>
      </div>
    </ShopHeaderCT>
  );
}
