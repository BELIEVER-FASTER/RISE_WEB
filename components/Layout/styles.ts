import styled, { css } from 'styled-components';

export const LayoutContainer = styled.div``;

export const LogoContainer = styled.div<{ isBlack: boolean }>`
  position: fixed;
  z-index: 99;
  top: 2.5rem;
  left: 2.5rem;
  cursor: pointer;
  svg {
    width: 9.5rem;
    fill: #fff;
    transition: all 0.2s;
  }
  &:hover {
    svg {
      fill: #fa370b;
    }
  }
  ${({ isBlack }) =>
    isBlack &&
    css`
      svg {
        fill: #000;
      }
    `}
`;

export const NavContainer = styled.nav<{ isBlack: boolean }>`
  position: fixed;
  z-index: 99;
  top: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
  font-size: 48px;
  font-family: 'NHaasGroteskTXPro' sans-serif;
  font-weight: 600;
  li {
    padding: 0.25rem 0;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    justify-content: flex-end;
    color: #fff;
    i {
      width: 0;
      transition: all 0.2s;
      margin-left: 0.25rem;
      opacity: 0;
    }
    &:hover {
      color: #fa370b;
      i {
        width: 40px;
        display: initial;
        opacity: 1;
      }
    }
  }
  li.nav__active {
    color: #fa370b;
  }
  ${({ isBlack }) =>
    isBlack &&
    css`
      li {
        color: #000;
      }
    `}
`;
export const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 2.5rem;
  margin: 2.5rem 0;
  hr {
    width: 100%;
    height: 3px;
    background-color: #000;
    margin-bottom: 3.75rem;
  }
  article {
    display: flex;
    justify-content: space-between;
    p,
    a {
      color: #000;
      font-size: 30px;
      line-height: 1.5;
    }
    p:first-of-type {
      margin-bottom: 1rem;
    }
    p:last-of-type {
      margin-top: 17.5rem;
      color: #aaa;
    }
    .footer__right {
      a:first-of-type {
        text-decoration: none;
        border-bottom: 1px solid black;
        margin-bottom: 2rem;
        display: block;
      }
      a {
        margin-bottom: 1rem;
        justify-content: flex-end;
        width: auto;
      }
    }
  }
`;
