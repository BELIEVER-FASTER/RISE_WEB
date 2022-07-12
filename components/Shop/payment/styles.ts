import styled from 'styled-components';
export const CopFormCT = styled.div`
  background: #ffffff;
  font-size: 14px;
  margin-bottom: 72px;
  .col {
    margin-top: 28px;
    gap: 40px;
  }

  .address {
    .address_col,
    .file_col {
      display: flex;
      .btn {
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #167df7;
        padding: 0 16px;
        color: #fff;
        margin: 0 12px;
        &.file {
          padding: 0 60px;
          margin: 0 0px 0 12px;
          background: #393938;
        }
      }
    }
  }
`;

export const PaymentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PaymentLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #393938;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  &.required::after {
    margin-left: 4px;
    display: block;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 99px;
    background: #167df7;
  }
`;
export const PaymentInput = styled.input`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  height: 48px;
  padding: 16px 20px;
  font-size: 14px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: 2px solid #167df7;
  }
`;

export const PaymentInformation = styled.p`
  margin-top: 8px;
  color: #167df7;
  font-weight: 400;
  font-size: 12px;
`;

export const ClientFormCT = styled.div`
  margin-bottom: 72px;
  .col {
    margin-top: 28px;
    gap: 40px;
  }
`;

export const PaymentMethodCT = styled.div`
  padding: 28px 0 120px;
  & > ul {
    display: flex;
    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      height: 48px;

      border: 1px solid #e0e0e0;
      background: #fff;
      color: #040201;
      svg.pass {
        fill: #fff;
        stroke: #040201;
        transition: all 0.3s;
      }
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
      }
      span {
        margin-left: 4px;
        font-weight: 300;
        font-size: 14px;
      }
      transition: all 0.3s;
    }
    li:hover {
      background-color: #eee;
    }
    li.active {
      background: #167df7;
      color: #fff;
      svg.pass {
        fill: #167df7;
        stroke: #fff;
      }
    }
    li + li {
      margin-left: 16px;
    }
  }
`;

export const PaymentAsideContent = styled.div`
  .col {
    display: flex;
  }
  article {
    padding: 40px 24px;
    h4 {
      font-size: 18px;
      color: #040201;
      margin: 32px 0 16px 0;
    }
    .prd_box {
      width: 120px;
      height: 74px;
      border: 1px solid #d1d6db;
      font-weight: 500;
      font-size: 18px;
      color: #167df7;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .summary {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-weight: 400;
        line-height: 1.9;
        font-size: 14px;
      }
    }
  }

  .billing_info {
    padding: 32px 0 40px;
    margin: 0 28px;
    border-top: 1px dashed #d1d6db;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 300;
      font-size: 14px;
      h4 {
        font-size: 18px;
        color: #040201;
        font-weight: 500;
      }
    }

    p:nth-of-type(1) {
      strong {
        font-weight: 500;
        font-size: 16px;
      }
    }
    p:nth-of-type(2) {
      margin: 20px 0 32px;
      strong {
        font-weight: 400;
        font-size: 16px;
      }
    }
    p:nth-of-type(3) {
      strong {
        color: #167df7;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }

  .term_box {
    padding: 28px 28px 36px 28px;
    background: #f7f8fa;
    .checkbox {
      font-weight: 500;
      font-size: 14px;
      color: #393938;
      display: flex;
      align-items: center;
      input {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }
    }
    & > ul {
      li {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: #393938;
        font-weight: 300;
        font-size: 14px;
        a {
          font-weight: 400;
          font-size: 14px;
          color: #167df7;
          text-decoration: none;
        }
      }
    }
  }
`;
