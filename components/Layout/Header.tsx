import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Logo from 'components/Common/Logo';
import Icon from 'components/Icon/Icon';
import { navData } from 'utils/navData';
import { LogoContainer, NavContainer } from './styles';

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Link href="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      <NavContainer>
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
