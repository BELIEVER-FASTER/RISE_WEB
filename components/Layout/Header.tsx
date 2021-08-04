import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Logo from 'components/Common/Logo';
import Icon from 'components/Icon/Icon';
import { navData } from 'utils/navData';
import { LogoContainer, NavContainer } from './styles';

export default function Header(): JSX.Element {
  const [isBlack, setIsBlack] = useState(true);
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
      <NavContainer isBlack={isBlack}>
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
