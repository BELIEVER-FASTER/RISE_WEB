import React, { useState } from 'react';
import { PaymentMethodCT } from './styles';
import { AiOutlineCreditCard } from 'react-icons/ai';

const Icon = () => {
  return (
    <svg
      className="pass"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_3083_13344" fill="white">
        <rect x="5.75" y="2.5" width="13.3333" height="15" rx="1" />
      </mask>
      <rect
        x="5.75"
        y="2.5"
        width="13.3333"
        height="15"
        rx="1"
        stroke-width="3"
        mask="url(#path-1-inside-1_3083_13344)"
      />
      <path
        d="M5.72805 3.43791C5.75641 3.32733 5.85607 3.25 5.97022 3.25H17.7944C17.9577 3.25 18.0771 3.40395 18.0366 3.56209L15.7716 12.3954C15.7433 12.506 15.6436 12.5833 15.5295 12.5833H3.70526C3.542 12.5833 3.42255 12.4294 3.4631 12.2712L5.72805 3.43791Z"
        stroke-width="1.5"
      />
    </svg>
  );
};

const methods = [
  { id: 1, value: '카드', label: '신용/체크카드', icon: () => <AiOutlineCreditCard /> },
  { id: 2, value: '무통장(가상계좌)', label: '무통장 (가상계좌)', icon: () => <Icon /> },
  { id: 3, value: '계좌 이체', label: '계좌 이체', icon: () => <AiOutlineCreditCard /> },
];
export default function PaymentMethod(): JSX.Element {
  const [method, setMethod] = useState('카드');
  return (
    <PaymentMethodCT>
      <ul>
        {methods.map(v => (
          <li
            className={v.value === method ? 'active' : ''}
            onClick={() => setMethod(v.value)}
          >
            <i>{v.icon()}</i>
            <span>{v.label}</span>
          </li>
        ))}
      </ul>
    </PaymentMethodCT>
  );
}
