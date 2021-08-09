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
  const toggleMemuOpen = () => {
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
        {menuOpen ? (
          <Icon
            width={25}
            height={25}
            name={isBlack ? 'close_black' : 'close'}
            className="icon_menu"
            onClick={toggleMemuOpen}
          />
        ) : (
          <Icon
            width={25}
            height={25}
            name={isBlack ? 'menu_black' : 'menu'}
            className="icon_menu"
            onClick={toggleMemuOpen}
          />
        )}
        <ul>
          {navData.map(navItem => (
            <Link href={navItem.link} key={navItem.id}>
              <li className={router.asPath === navItem.link ? 'nav__active' : ''}>
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
