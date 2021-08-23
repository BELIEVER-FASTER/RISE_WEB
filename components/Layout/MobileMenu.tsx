import React from 'react';

export default function MobileMenu({
  onClick,
  menuOpen,
}: {
  menuOpen: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <>
      {menuOpen ? (
        <svg
          onClick={onClick}
          className="icon_menu main_header"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <line
              x1="26.6936"
              y1="-0.27968"
              x2="-0.306359"
              y2="25.7203"
              stroke-width="2"
            />
            <path d="M0 0L26 26" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="26" height="26" />
            </clipPath>
          </defs>
        </svg>
      ) : (
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
            <rect y="4" width="26" height="2" />
            <rect y="12" width="26" height="2" />
            <rect y="20" width="26" height="2" />
          </g>
        </svg>
      )}
    </>
  );
}
