import React, { useEffect, useState } from 'react';
import { FooterContainer } from './styles';
import { FiArrowUpRight } from 'react-icons/fi';
import { useRouter } from 'next/dist/client/router';

export default function Footer(): JSX.Element {
  const router = useRouter();
  const [isBlack, setIsBlack] = useState(false);
  const [footerEx, setFooterEx] = useState(false);
  useEffect(() => {
    if (router.pathname === '/about') {
      setFooterEx(true);
      setIsBlack(true);
    } else if (router.pathname === '/contact') {
      setFooterEx(false);
      setIsBlack(false);
    } else if (router.pathname === '/showhost') {
      setFooterEx(true);
      setIsBlack(true);
    } else if (router.pathname === '/') {
      setFooterEx(false);
      setIsBlack(true);
    }
  }, [router]);
  return (
    <FooterContainer isBlack={isBlack}>
      {footerEx && (
        <div className="contact_us">
          <h2 onClick={() => router.push('/contact')}>
            Contact Us
            <div className="arrow">
              <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 2.5H48.5M48.5 2.5V37.5M48.5 2.5L2 49"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </h2>
          <p>
            궁금한 점이 있으신가요?
            <br />
            라이즈 스튜디오가 함께 고민하고 들어드릴게요.
          </p>
        </div>
      )}
      <div className="footer_info">
        <div className="left">
          <span>&copy; 2022 Riseenm inc All rights reserved.</span>
          <span>
            서울특별시 강남구 신사동 628-26 2층 <br />
            사업자등록번호 772-01-01547
          </span>
          <p>
            <span>contact@riseenm.com</span>
            <span>02. 1688. 6183</span>
          </p>
        </div>
        <ul className="right">
          <li>
            Instagram <FiArrowUpRight />
          </li>
          <li>
            Blog
            <FiArrowUpRight />
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
