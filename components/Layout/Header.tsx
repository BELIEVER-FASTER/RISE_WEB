import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Logo from 'components/Common/Logo';
import { navData } from 'utils/navData';
import { LogoContainer, NavContainer } from './styles';
import MobileMenu from './MobileMenu';
import Social from 'components/Counter/Social';
import TagManager from 'react-gtm-module';

export default function Header(): JSX.Element {
  const [isBlack, setIsBlack] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleMenuOpen = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setVisible(true);
    } else {
      setVisible(false);
      setTimeout(() => setMenuOpen(false), 500);
    }
  };
  const router = useRouter();

  useEffect(() => {
    setIsBlack(true);
  }, [router]);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setMenuOpen(false), 500);
  }, [router.asPath]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [menuOpen]);

  const sendEvnet = (navName: string): void => {
    TagManager.dataLayer({ dataLayer: { event: `nav_click`, to: navName } });
  };
  return (
    <>
      <Link href="/">
        <LogoContainer isBlack={isBlack} visible={visible}>
          <Logo />
        </LogoContainer>
      </Link>
      <NavContainer isBlack={isBlack} menuOpen={menuOpen} visible={visible}>
        <MobileMenu onClick={toggleMenuOpen} menuOpen={visible} />
        <ul className="main_nav">
          {navData.map(navItem => (
            <Link href={navItem.link} key={navItem.id}>
              <a
                title={navItem.name}
                id={`nav_${navItem.name}`}
                onClick={() => sendEvnet(navItem.name)}
              >
                <li
                  className={
                    router.pathname === navItem.link
                      ? 'nav__active main_header'
                      : 'main_header'
                  }
                >
                  <span>{navItem.name}</span>
                  <i>
                    <svg
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2.5H48.5M48.5 2.5V37.5M48.5 2.5L2 49"
                        stroke="white"
                        stroke-width="4"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </i>
                  {/* <Icon name="link_arrow" width={40} height={40} /> */}
                </li>
              </a>
            </Link>
          ))}
          <div className="mobile_social">
            <Social
              type="Facebook"
              link="https://www.facebook.com/%EB%9D%BC%EC%9D%B4%EC%A6%88-RISE-ENM-108682494840345"
            />
            <Social type="Instagram" link="https://www.instagram.com/riseenm/" />
            <Social type="Blog" link="https://blog.naver.com/riseenm" />
          </div>
        </ul>
      </NavContainer>
    </>
  );
}
