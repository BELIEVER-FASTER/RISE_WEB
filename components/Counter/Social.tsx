import React from 'react';
import { SocialBox } from './styles';

type SocialProps = {
  type: 'Facebook' | 'Instagram' | 'Blog' | '쇼호스트 진행문의';
  link: string;
};
export default function Social({ type, link }: SocialProps): JSX.Element {
  return (
    <SocialBox href={link} title={type} target="_blank" className="btn__social">
      <span>{type}</span>
      {/* <Icon name="link_arrow" className="icon__social" /> */}
      {/* <svg
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
      </svg> */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 22C0 9.85189 9.84799 0 21.9961 0C34.1442 0 43.9922 9.85189 43.9922 22C43.9922 34.1481 34.1442 44 21.9961 44C9.84799 44 0 34.1481 0 22Z"
          fill="#167DF7"
        />
        <path d="M25 16H16V17.5H25V16Z" fill="white" />
        <path d="M27.9922 28V19H26.4922V28H27.9922Z" fill="white" />
        <path
          d="M17.108 27.714L25.8462 19L24.7841 17.9408L16.0458 26.6548L17.108 27.714Z"
          fill="white"
        />
      </svg>
    </SocialBox>
  );
}
