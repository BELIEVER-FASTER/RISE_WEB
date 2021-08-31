import React from 'react';
import { SocialBox } from './styles';

type SocialProps = {
  type: 'Facebook' | 'Instagram';
  link: string;
};
export default function Social({ type, link }: SocialProps): JSX.Element {
  return (
    <SocialBox href={link} target="_blank">
      <span>{type}</span>
      {/* <Icon name="link_arrow" className="icon__social" /> */}
      <svg
        className="icon__social"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" />
        <g clipPath="url(#clip0)">
          <path d="M9.26141 4.32104H4.69824V4.95954H9.26141V4.32104Z" fill="white" />
          <path d="M10.6797 10.304V5.62061H10.0394V10.304H10.6797Z" fill="white" />
          <path
            d="M5.14901 10.2644L9.50586 5.91968L9.05313 5.4682L4.69628 9.81295L5.14901 10.2644Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="5.98295"
              height="5.98295"
              fill="white"
              transform="translate(4.69629 4.32104)"
            />
          </clipPath>
        </defs>
      </svg>
    </SocialBox>
  );
}
