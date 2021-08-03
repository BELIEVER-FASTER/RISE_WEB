import Logo from 'components/Common/Logo';
import Icon from 'components/Icon/Icon';
import React from 'react';
import { LogoContainer, NavContainer } from './styles';

export default function Header(): JSX.Element {
  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavContainer>
        <ul>
          <li>
            <span>About</span>
            <Icon name="link_arrow" width={40} height={40} />
          </li>
          <li>
            <span>Live</span>
            <Icon name="link_arrow" width={40} height={40} />
          </li>
          <li>
            <span>Work</span>
            <Icon name="link_arrow" width={40} height={40} />
          </li>
          <li>
            <span>Content</span>
            <Icon name="link_arrow" width={40} height={40} />
          </li>
        </ul>
      </NavContainer>
    </>
  );
}
