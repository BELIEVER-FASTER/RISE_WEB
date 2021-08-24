import React from 'react';
import { MobileMenuBox } from './styles';

export default function MobileMenu({
  onClick,
  menuOpen,
}: {
  menuOpen: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <MobileMenuBox menuOpen={menuOpen}>
      <svg
        onClick={onClick}
        className="main_header icon_menu "
        width="26"
        height="26"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="26"
          height="26"
        >
          <rect width="26" height="26" />
        </mask>
        <g mask="url(#mask0)">
          <rect y="4" width="26" height="2" className="line line1" />
          <rect y="12" width="26" height="2" className="line line2" />
          <rect y="20" width="26" height="2" className="line line3" />
        </g>
      </svg>
    </MobileMenuBox>
  );
}
