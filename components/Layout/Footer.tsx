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
    } else if (router.asPath === '/shop/list') {
      setFooterEx(false);
      setIsBlack(false);
    } else if (router.asPath === '/shop/payment') {
      setFooterEx(false);
      setIsBlack(false);
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
            사업자등록번호 : 694-81-02476 | 대표 : 김정환
            <br />
            통신판매업 번호 : 2022-서울강남-04181
            <br />
            서울시 강남구 선릉로 551 새롬빌딩 디캠프1층, 라이즈이엔엠 <br />
            상호명 : 라이즈이엔엠 주식회사
          </span>
          <p>
            <span>contact@riseenm.com</span>
            <span>1688-6183(24시간 연중무휴)</span>
          </p>
        </div>
        <ul className="right">
          <li>
            <a target="_blank" href="https://www.instagram.com/riseenm/">
              Instagram <FiArrowUpRight />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://blog.naver.com/riseenm">
              Blog
              <FiArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
