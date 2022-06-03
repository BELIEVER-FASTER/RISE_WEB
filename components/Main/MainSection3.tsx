import React, { useState } from 'react';
import BillPlan from './Plan/BillPlan';
import CommissionPlan from './Plan/CommissionPlan';
import { MainSection3CT } from './styles';

export default function MainSection3(): JSX.Element {
  const [type, setType] = useState<'commision' | 'bill'>('commision');
  return (
    <MainSection3CT>
      <h2>
        상상도 못한 가격으로<em>( Plans )</em>
      </h2>
      <p>미디어 콘텐츠의 품질을 높이세요</p>
      <ul className="type_nav">
        <li
          onClick={() => setType('commision')}
          className={type === 'commision' ? 'active' : ''}
        >
          <div className="dot"></div>
          <span>수수료 플랜</span>
        </li>
        <li onClick={() => setType('bill')} className={type === 'bill' ? 'active' : ''}>
          <div className="dot"></div>
          <span>제작료 플랜</span>
        </li>
      </ul>
      {type === 'commision' ? <CommissionPlan /> : <BillPlan />}
    </MainSection3CT>
  );
}
