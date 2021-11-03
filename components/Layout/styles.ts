import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const LayoutContainer = styled.div``;

export const LogoContainer = styled.div<{ isBlack: boolean; visible: boolean }>`
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
      fill: #fa370b !important;
      stroke: #fa370b !important;
    }
  }
  ${({ isBlack }) =>
    isBlack &&
    css`
      svg {
        fill: #000;
        stroke: #000;
      }
    `}
  @media ${responSiveSize.mobile} {
    top: 1.5rem;
    left: 1.5rem;
    z-index: 100;
    svg {
      width: 5.125rem;
      height: 1.625rem;
    }
    ${({ visible }) =>
      visible &&
      css`
        svg {
          opacity: 0;
          fill: #fff !important;
          stroke: #fff !important;
        }
      `}
  }
`;

export const NavContainer = styled.nav<{
  menuOpen: boolean;
  isBlack: boolean;
  visible: boolean;
}>`
  position: fixed;
  z-index: 99;
  top: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
  font-size: 48px;
  font-family: 'NHaasGroteskTXPro' sans-serif;
  font-weight: 500;
  .icon_menu {
    display: none;
    fill: #fff;
    stroke: #fff;
  }
  a {
    text-decoration: none;
  }
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
      color: #fa370b !important;
      i {
        width: 2.5rem;
        display: initial;
        opacity: 1;
      }
    }
  }
  li.nav__active {
    color: #fa370b !important;
  }
  .mobile_social {
    display: none;
  }
  ${({ isBlack }) =>
    isBlack &&
    css`
      .icon_menu {
        fill: #000;
        stroke: #000;
      }
      li {
        color: #000;
      }
    `}
  @media ${responSiveSize.mobile} {
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .icon_menu {
      display: initial;
    }
    ul {
      transition: opacity 0.5s;
      height: 0;
      opacity: 0;
      overflow: hidden;
      a {
        position: relative;
        top: -25%;
      }
      li {
        transition: transform 1s;
      }
      .mobile_social {
        display: block;
        margin: 0 0 15px 0;
        a {
          padding: 10px 0;
          span {
            color: #fff;
            font-size: 16px;
          }
        }
        a > .icon__social {
          border: 1px solid #fff;
          border-radius: 50%;
          circle {
            fill: #000;
          }
        }
      }
    }

    ${({ menuOpen }) =>
      menuOpen &&
      css`
        ul {
          z-index: 98;
          padding: 1.5rem;
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          background-color: rgba(0, 0, 0, 0.95);
          li {
            font-weight: 400;
            color: #fff !important;
            transition: transform 1s ease;
            transform: translateX(-200px);
          }
          li.nav__active {
            color: #fa370b !important;
          }
        }
      `}
    ${({ visible }) =>
      visible &&
      css`
        ul {
          opacity: 1;
          transition: opacity 0.5s;
          li {
            transition: transform 1s;
            transform: translateX(0px);
          }
        }
      `}
  }
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
      margin-bottom: 0.6rem;
    }
    p:last-of-type {
      margin-top: 17.5rem;
      color: #aaa;
    }
    .footer__right {
      a:first-of-type {
        text-decoration: none;
        border-bottom: 4px solid #fff;
        margin-bottom: 2rem;
        display: block;
        font-size: 60px;
        &:hover {
          border-bottom: 4px solid #000;
        }
      }
      a {
        margin-bottom: 1rem;
        justify-content: flex-end;
        width: auto;
        span {
          font-size: 30px;
        }
        svg {
          width: 30px;
          height: 30px;
          margin-left: 8px;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 0 1.5rem;
    margin: 1.5rem 0;
    hr {
      margin-bottom: 1.8rem;
    }
    article {
      flex-direction: column;
      p {
        font-size: 16px;
        line-height: 2;
      }
      a {
        font-size: 24px;
      }
      p:first-of-type {
        line-height: 1.7;
        margin-bottom: 1rem;
      }
      p:last-of-type {
        position: absolute;
        bottom: 0;
        font-size: 14px;
      }

      .footer__right {
        margin: 3rem 0 4.5rem 0;
        a:first-of-type {
          text-decoration: none;
          border-bottom: 3px solid #fff;
          margin-bottom: 1.5rem;
          display: inline-block;
          font-size: 26px;
        }
        a {
          margin-bottom: 0.2rem;
          justify-content: flex-start;
          width: auto;
          span {
            font-size: 16px;
          }
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`;

export const MobileMenuBox = styled.i<{ menuOpen: boolean }>`
  display: flex;
  z-index: 99;
  .line {
    transition: all 0.5s;
  }
  ${({ menuOpen }) =>
    menuOpen &&
    css`
      .line {
        fill: #fff !important;
        stroke: #fff !important;
      }
      .line1 {
        transform: translate(25%, -5%) rotate(45deg);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: translate(-45%, 22%) rotate(-45deg);
      }
    `}
`;
