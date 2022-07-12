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
      fill: #167df7 !important;
      /* stroke: #fa370b !important; */
    }
  }
  ${({ isBlack }) =>
    isBlack &&
    css`
      svg {
        fill: #000;
        /* stroke: #000; */
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
      display: flex;
      align-items: center;
      border-radius: 99px;
      background: #167df7;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    &:hover {
      color: #167df7 !important;
      i {
        width: auto;
        font-size: 24px;
        padding: 11px 22px 8px 22px;
        display: initial;
        opacity: 1;
      }
    }
  }
  li.nav__active {
    color: #167df7 !important;
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
            color: #167df7 !important;
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
export const FooterContainer = styled.footer<{ isBlack: boolean }>`
  background-color: #000;
  .contact_us {
    padding: 216px 0 216px 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    text-align: center;
    h2 {
      &:hover {
        text-decoration: underline;
        .arrow {
          border-color: #167df7;
          &::before {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
      cursor: pointer;
      font-size: 120px;
      font-weight: 500;
      display: flex;
      align-items: center;
      .arrow {
        transition: all 0.3s;
        cursor: pointer;
        margin-left: 12px;
        font-size: 46px;
        padding: 24px 44px;
        border: 3px solid #fff;
        border-radius: 120px;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        svg {
          width: 46px;
          height: 46px;
          stroke: #fff;
          z-index: 1;
        }
        &::before {
          background-color: #167df7;
          transition: all 0.3s ease-in-out;
          position: absolute;
          content: '';
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 200px;
          height: 200px;
          border-radius: 99px;
        }
      }
    }
    & > p {
      margin-top: 40px;
      font-weight: 300;
      font-size: 24px;
      line-height: 1.4;
    }
  }
  .footer_info {
    margin: 0 42px;
    border-top: 1px solid #fff;
    display: flex;
    color: #fff;
    line-height: 1.6;
    font-size: 14px;
    .left {
      padding: 20px 0 68px 0;
      flex: 6.5;
      display: flex;
      justify-content: space-between;
      span {
      }
      & > p {
        span + span {
          margin-left: 60px;
        }
      }
    }
    .right {
      padding: 0px 0 68px 0;
      flex: 3.5;
      display: flex;
      justify-content: flex-end;
      li + li {
        margin-left: 12px;
      }
      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: bold;
        a {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
        }
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  ${({ isBlack }) =>
    !isBlack &&
    css`
      background-color: #fff;
      .contact_us {
        color: #000;
        h2 > .arrow {
          border: 3px solid #000;
          svg {
            stroke: #000;
          }
        }
      }
      .footer_info {
        border-top: 1px solid #000;
        color: #000;
        .right {
          li {
            a {
              color: #000;
            }
          }
        }
      }
    `}

  @media ${responSiveSize.mobile} {
    .contact_us {
      padding: 120px 0 120px 0;
      h2 {
        font-size: 36px;
        .arrow {
          border-width: 2px;
          padding: 8px 16px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
      & > p {
        margin-top: 20px;
        font-size: 14px;
        line-height: 1.6;
      }
    }
    .footer_info {
      flex-direction: column;
      margin: 0 24px;
      .left {
        flex-direction: column;
        font-weight: 300;
        padding: 24px 0 32px 0;
        gap: 32px;
        & > p {
          span {
            display: block;
          }
          span + span {
            margin-left: 0px;
          }
        }
      }
      .right {
        justify-content: flex-start;
        li {
          font-weight: 300;
          font-size: 16px;
          a {
            color: #fff;
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

export const ShopHeaderCT = styled.header`
  width: 100%;
  position: fixed;
  background-color: #fff;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      cursor: pointer;
      svg {
        fill: #000;
      }
      &:hover svg {
        fill: #167df7;
      }
    }
  }
`;
