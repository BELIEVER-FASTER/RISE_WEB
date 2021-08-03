import styled from 'styled-components';

export const LayoutContainer = styled.div``;

export const LogoContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 44px;
  left: 44px;
  cursor: pointer;
  svg {
    width: 152px;
    fill: #fff;
    transition: all 0.2s;
  }
  &:hover {
    svg {
      fill: #fa370b;
    }
  }
`;

export const NavContainer = styled.nav`
  position: absolute;
  z-index: 99;
  top: 44px;
  right: 44px;
  cursor: pointer;
  font-size: 48px;
  font-family: NHaasGroteskTXPro sans-serif;
  font-weight: 600;
  li {
    padding: 4px 0;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    i {
      transition: all 0.2s;
      margin-left: 4px;
      opacity: 0;
    }
    &:hover {
      color: #fa370b;
      i {
        display: initial;
        opacity: 1;
      }
    }
  }
`;
export const FooterContainer = styled.footer`
  position: absolute;
  z-index: 99;
`;
