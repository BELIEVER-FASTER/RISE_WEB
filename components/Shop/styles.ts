import styled from 'styled-components';

export const ShopCT = styled.main`
  max-width: 1048px;
  margin: 0 auto;
  padding: 408px 0 212px 0;
  .summary {
    text-align: center;
    h1 {
      font-weight: 500;
      font-size: 72px;
      margin-bottom: 40px;
    }
    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 1.4;
      margin-bottom: 80px;
    }
  }
  button.submit {
    margin-top: 64px;
    outline: none;
    width: 100%;
    height: 80px;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    background: #167df7;
    border: none;
    border-radius: 99px;
    cursor: pointer;
  }
`;
export const OptionCT = styled.section`
  width: 100%;
  & > ul {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    & > li {
      flex: 1;
      border: 1px solid #a4ccfb;
      border-top-width: 16px;
      border-radius: 8px;
      height: 839px;
      padding: 62px 60px 66px;
      display: flex;
      flex-direction: column;
      opacity: 0.5;
      transition: all 0.3s;
      cursor: pointer;
      &.active,
      &:hover {
        opacity: 1;
        box-shadow: 0 10px 30px #aaa;
      }
      &.basic {
        border-color: #737373;
        & > .cta {
          background: #fff;
          border: 1px solid #737373;
          color: #737373;
          &.active {
            background: #737373;
            border: 1px solid #737373;
            color: #fff;
          }
        }
      }
      &.premium {
        border-color: #167df7;
        & > .cta {
          background: #fff;
          border: 1px solid #167df7;
          color: #167df7;
          &.active {
            background: #167df7;
            border: 1px solid #167df7;
            color: #fff;
          }
        }
      }
      .summary_opt {
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        text-align: center;
        padding-bottom: 36px;
        h2 {
          font-weight: 600;
          font-size: 26px;
          margin-bottom: 16px;
        }
        p {
          font-weight: 600;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          strong {
            margin-right: 8px;
            font-weight: 600;
            font-size: 48px;
          }
          .badge {
            font-weight: 600;
            font-size: 16px;
            padding: 10px 13px;
            background: #fa370b;
            border-radius: 4px;
            margin-left: 8px;
            color: #fff;
          }
        }
      }

      .feature {
        display: flex;
        flex-direction: column;
        padding-top: 32px;
        flex: 1;
        h3 {
          color: #737373;
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 16px;
        }
        ul {
          margin-bottom: 32px;
          li {
            font-weight: 500;
            font-size: 20px;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            &::before {
              content: '+';
              font-size: 16px;
              margin-right: 4px;
            }
            &.include {
              font-weight: 600;
              font-size: 24px;
            }
          }
        }
      }

      .cta {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 18px;
        border-radius: 99px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
      }
    }
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #757577;
    margin-top: 10px;
  }
  .description:nth-of-type(1) {
    margin-top: 16px;
  }
`;

export const SelectedInfoCT = styled.section`
  margin: 60px 0 120px;
  .info_table {
    border: 1px solid #d1d6db;
    border-radius: 8px;
    overflow: hidden;
    & > ul {
      display: flex;
      border-bottom: 1px solid #d1d6db;
      li {
        height: 84px;
        padding-left: 76px;
        display: flex;
        align-items: center;
        color: #393938;
        font-size: 22px;
      }
      li:first-of-type {
        flex: 0.3;
        border-right: 1px solid #d1d6db;
        font-weight: 600;
        background: #f2f4f7;
      }
      li:last-of-type {
        flex: 1;
      }
    }
    & > ul:last-of-type {
      border-bottom: 0px solid #d1d6db;
    }
  }
  .divider {
    width: 100%;
    margin: 40px 0;
    background: #d1d6db;
    height: 1px;
  }
  .total_price {
    background: #393938;
    border-radius: 8px;
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    strong {
      font-size: 40px;
      margin: 0 6px;
      font-weight: 600;
    }
  }
`;

export const PolicySectionCT = styled.section`
  .tg {
    /* border-collapse: collapse; */
    border-color: #d1d6db;
    border-width: 1px;
    overflow: hidden;
    /* border-spacing: 0; */
    width: 100%;
    border-radius: 8px;
    td {
      /* background-color: #fff; */
      border-color: #d1d6db;
      border-style: solid;
      border-width: 1px;
      text-align: center;
      padding: 28px 0;
      font-weight: 500;
      font-size: 16px;
      &.desc {
        font-weight: 400;
      }
      &.col {
        position: relative;
        width: 300px;
        div {
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          line-height: 1.5;
          position: absolute;
          left: 0;
          right: 99px;
          top: 0;
          bottom: 0;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
    th {
      padding: 28px 0;
      text-align: center;
      background: #f2f4f7;
      border-color: #d1d6db;
      border-style: solid;
      border-width: 1px;
      font-weight: normal;
      color: #040201;
      font-weight: 500;
      font-size: 22px;
    }
  }
  .tg-0lax {
    text-align: left;
    vertical-align: top;
  }
`;

export const PaymentCT = styled.main`
  padding-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 120px;

  h1 {
    font-weight: 500;
    font-size: 32px;
    padding: 80px 0 28px;
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 36px;
    font-weight: 500;
    font-size: 22px;
  }
  .divider {
    height: 2px;
    width: 100%;
    background: #040201;
  }
  .col_title {
    display: flex;
    align-items: center;
    margin-top: 36px;
    h3 {
      margin-top: 0;
      margin-right: 12px;
    }
    label {
      display: flex;
      align-items: center;
      color: #737373;
      font-size: 14px;
      font-weight: 300;
      margin-left: 20px;
      input {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
    }
  }
  & > .content {
    display: flex;
    gap: 72px;
    align-items: flex-start;
    .left_section {
      flex: 1;
      .col {
        display: flex;
      }
    }
    .right_section {
      position: sticky;
      top: 70px;
      width: 360px;
      border: 1px solid #d1d6db;
      padding-bottom: 72px;
      .cta {
        width: 100%;
        background: #167df7;
        outline: none;
        border: none;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 72px;
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export const ResultCT = styled.main`
  padding: 60px;
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 260px;
    margin-bottom: 76px;
    &.loading {
      width: 150px;
      height: 60px;
      object-fit: cover;
    }
  }
  h1 {
    margin-bottom: 36px;
    color: #040201;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
  }
  p {
    margin-bottom: 56px;
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 2;
    &.col {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    strong {
      font-weight: 500;
      font-size: 16px;
    }
    .info {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 20px;
      width: 500px;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      strong {
        font-weight: 500;
        font-size: 14px;
        font-size: 18px;
        margin-left: 8px;
      }
    }
    .desc {
      font-size: 14px;
      line-height: 1.4;
      strong {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
  .cta {
    background: #167df7;
    border-radius: 99px;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    width: 252px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
