import styled from 'styled-components';
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
    .chart {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-weight: 400;
          font-size: 40px;
          margin-left: 24px;
        }
        .bar {
          /* height: 14px;
          background-color: #fff;
          border-radius: 99px; */
          .line {
            width: 0;
            height: 16px;
            display: block;
            background-color: #fff;
            border-radius: 99px;
            margin-bottom: 12px;
          }
          &::after {
            display: block;
            font-weight: 300;
            font-size: 16px;
          }
        }
      }
      li:nth-of-type(1) {
        margin-bottom: 58px;
        span {
          letter-spacing: 1.8px;
        }
        .bar {
          .line {
            /* width: 167px; */
            background: #d1d0d5;
          }
          &::after {
            content: '라이즈 기본 패키지';
            display: block;
          }
        }
      }
      li:nth-of-type(2) {
        .bar {
          width: 327px;
          .line {
            background: #898989;
            /* width: 327px; */
          }
          &::after {
            content: '타사 진행 가격';
            display: block;
          }
        }
      }
      background-color: #000;
      z-index: 3;
    }
    .arrow {
      display: flex;
      align-items: center;
      margin: 0 72px;
      background-color: #000;
      z-index: 2;
    }
    .result {
      opacity: 0;
      z-index: 1;
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      li:nth-of-type(1) {
        p {
          background: linear-gradient(90deg, #a4ccfb 9.35%, #74b1fa 90.29%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          /* text-fill-color: transparent; */
        }
      }
      li {
        p {
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
        span {
          font-size: 44px;
          margin-left: 8px;
        }
      }
      & > p {
        margin-top: 16px;
        text-align: center;
        color: #e0e0e0;
        font-weight: 300;
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
`;
export const BillPlanCT = styled.div`
  width: 100%;
  max-width: 1048px;
  & > .plans {
    display: flex;
    justify-content: space-between;
    & > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
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
            dt {
            }
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
`;
