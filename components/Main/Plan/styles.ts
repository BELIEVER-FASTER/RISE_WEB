import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';
export const CommissionPlanCT = styled.div`
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.25;
  }
  .price {
    padding: 32px 0 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
      position: absolute;
      top: -52px;
      font-weight: 600;
      font-size: 28px;
      left: 0;
    }
    .other_brand {
      position: relative;
      background-color: #000;
      z-index: 3;
      height: 100%;
      p {
        font-size: 36px;
        font-weight: 400;
        transform: translateY(-10px);
        color: #b9b9b9;
        padding: 40px 0 4px 0;
        strong {
          font-size: 64px;
          font-weight: 500;
        }
        .line_through {
          width: 260px;
          height: 5px;
          background-color: #fff;
          position: absolute;
          bottom: 30px;
          transform: rotate(-12deg);
        }
        .line_through:nth-of-type(2) {
          transform: rotate(12deg);
        }
      }
      span {
        color: #b9b9b9;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 300;
      }
    }
    .arrow {
      display: flex;
      align-items: center;
      margin: 0 72px;
      background-color: #000;
      z-index: 2;
    }
    .result {
      h5 {
        background: linear-gradient(90deg, #a4ccfb 9.35%, #74b1fa 90.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      position: relative;
      opacity: 0;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li:nth-of-type(1) {
        p {
          background: linear-gradient(90deg, #a4ccfb 9.35%, #74b1fa 90.29%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      li {
        p {
          position: relative;
          font-size: 72px;
          font-weight: 400;
          transform: translateY(-10px);
          strong {
            font-size: 120px;
            font-weight: 500;
          }
        }
        span {
          font-size: 24px;
          line-height: 1.2;
          font-weight: 300;
        }
      }
      li:nth-of-type(2) {
        width: 1px;
        height: 80px;
        background: #e0e0e0;
        margin: 0 36px;
      }
    }
  }
  .feature {
    border-top: 1px solid #e0e0e0aa;
    padding: 80px 44px;
    display: flex;
    justify-content: space-between;
    li {
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 40px;
          margin-left: 4px;
        }
      }
      & > p {
        margin-top: 16px;
        text-align: center;
        color: #e0e0e0;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
  .warning {
    color: #757577;
    font-size: 12px;
    li + li {
      margin-top: 6px;
    }
  }
  @media ${responSiveSize.mobile} {
    h3 {
      font-size: 24px;
      font-weight: 400;
    }
    .price {
      h5 {
        top: -36px;
        font-size: 20px;
        left: 0;
        right: 0;
        text-align: center;
      }
      flex-direction: column;
      .other_brand {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 28px;
          strong {
            font-size: 52px;
            font-weight: 500;
          }
          .line_through {
            width: 200px;
            height: 5px;
            background-color: #fff;
            position: absolute;
            bottom: 24px;
            transform: rotate(-12deg);
          }
          padding: 12px 0 0px 0;
        }
        span {
          font-size: 18px;
        }
      }
      .arrow {
        margin: 32px 0 56px 0;
        svg {
          transform: rotate(90deg);
          width: 40px;
        }
      }
      .result {
        width: 100%;
        justify-content: space-evenly;

        margin-top: 12px;
        li {
          p {
            font-size: 40px;
            transform: translateY(-10px);
            strong {
              font-size: 80px;
            }
          }
          span {
            font-size: 18px;
            line-height: 1.2;
          }
        }
        li:nth-of-type(2) {
          height: 60px;
          margin: 0 8px;
        }
        li:nth-of-type(2n-1) {
          flex: 1;
          text-align: center;
        }
      }
    }
    .feature {
      flex-direction: column;
      padding: 60px 0px;
      align-items: center;
      li {
        .text {
          span {
            font-size: 36px;
            margin-left: 4px;
          }
        }
        & > p {
          font-size: 14px;
        }
      }
      li + li {
        margin-top: 46px;
      }
    }
  }
`;
export const BillPlanCT = styled.div`
  width: 100%;
  max-width: 1048px;
  & > .plans {
    display: flex;
    justify-content: space-between;
    & > li {
      .collapse_btn {
        display: none;
      }
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        display: flex;
        align-items: center;
        font-size: 26px;
      }
      .badge {
        padding: 5px 8px;
        font-size: 12px;
        margin-left: 4px;
        background: #167df7;
        border-radius: 4px;
        &.red {
          background: #fa370b;
        }
      }

      p.price {
        padding: 24px 0 40px 0;
        font-size: 28px;
        border-bottom: 1px solid #e0e0e0;
        text-align: center;
        width: 100%;
        letter-spacing: 0.9px;
        strong {
          font-size: 44px;
          font-weight: 500;
        }
      }
      & > ul {
        width: 100%;
        & > li:first-of-type {
          margin-top: 32px;
        }
        & > li {
          margin-top: 40px;
          h5 {
            margin-bottom: 16px;
            font-size: 14px;
            color: #b6b6bd;
          }
          & > p {
            font-size: 24px;
            font-weight: 500;
            &.strong {
              color: #a4ccfb;
            }
          }
          dl {
            dt + dt {
              margin-top: 12px;
            }
          }
          &.plus dl dt::before {
            content: '+ ';
          }
        }
      }
      .contact {
        width: 100%;
        span {
          display: block;
          margin: 40px 0 16px 0;
          font-size: 14px;
          color: #b6b6bd;
        }
        a {
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 17px;
          background: #167df7;
          border-radius: 99px;
          cursor: pointer;
        }
      }
    }
    & > li + li {
      margin-left: 62px;
    }
  }
  .warning {
    margin-top: 88px;
    flex-direction: column;
    color: #757577;
    font-size: 12px;
    li + li {
      margin-top: 6px;
    }
  }
  @media ${responSiveSize.mobile} {
    & > .plans {
      flex-direction: column;
      & > li.collapsed {
        .collapse_btn {
          &::after {
            font-size: 36px;
            content: '+';
          }
        }
        & > ul {
          transition: all 0.25s ease;
          height: 0;
          overflow: hidden;
        }
      }
      & > li {
        position: relative;
        .collapse_btn {
          display: initial;
          top: 24px;
          right: 0px;
          font-size: 36px;
          position: absolute;
          &::after {
            font-size: 48px;
            content: '-';
          }
        }
        border-top: 1px solid #e0e0e0;
        align-items: flex-start;
        padding-top: 40px;
        h4 {
          font-size: 17px;
        }
        .badge {
          padding: 4px 7px;
          margin-left: 6px;
        }
        p.price {
          text-align: start;
          font-size: 34px;
          font-weight: 500;
          border-bottom: 1px solid #000;
          padding: 12px 0 30px 0;
          strong {
            font-size: 34px;
          }
        }
        & > ul {
          transition: all 0.25s ease;
        }
      }

      & > li + li {
        margin-left: 0px;
        margin-top: 40px;
      }
    }
  }
`;
