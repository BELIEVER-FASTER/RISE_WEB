import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Logo from 'components/Common/Logo';
import Icon from 'components/Icon/Icon';
import { navData } from 'utils/navData';
import { LogoContainer, NavContainer } from './styles';

export default function Header(): JSX.Element {
  const [isBlack, setIsBlack] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(prev => !prev);
  };
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/main' || router.asPath === '/') {
      setIsBlack(false);
    } else {
      setIsBlack(true);
    }
  }, []);

  return (
    <>
      <Link href="/">
        <LogoContainer isBlack={isBlack}>
          <Logo />
        </LogoContainer>
      </Link>
      <NavContainer isBlack={isBlack} menuOpen={menuOpen}>
        <Icon
          width={25}
          height={25}
          name={
            menuOpen
              ? isBlack
                ? 'close_black'
                : 'close'
              : isBlack
              ? 'menu_black'
              : 'menu'
          }
          className="icon_menu"
          onClick={toggleMenuOpen}
        />
        <ul className="main_nav">
          {navData.map(navItem => (
            <Link href={navItem.link} key={navItem.id}>
              <li
                className={
                  router.asPath === navItem.link
                    ? 'nav__active main_header'
                    : 'main_header'
                }
              >
                <span>{navItem.name}</span>
                <Icon name="link_arrow" width={40} height={40} />
              </li>
            </Link>
          ))}
        </ul>
      </NavContainer>
    </>
  );
}
