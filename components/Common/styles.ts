import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const InputBox = styled.div<{ value: string | number }>`
  height: 4.125rem;
  z-index: 30;
  input {
    height: 100%;
    width: 100%;
    font-size: 32px;
    border: none;
    outline: none;
    border-bottom: 3px solid #e0e0e0;
    border-radius: 0;
    &::placeholder {
      color: #838383;
    }
  }
  ${({ value }) =>
    value &&
    css`
      input {
        border-bottom: 3px solid #000;
      }
    `}
  @media ${responSiveSize.mobile} {
    input {
      font-size: 20px;
    }
  }
`;
export const CustomSelectBox = styled.div<{ selectOpen: boolean }>`
  height: 4.125rem;
  width: 100%;
  position: relative;
  z-index: 40;
  select {
    display: none;
  }
  .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 32px;
    border-bottom: 3px solid #000;
    cursor: default;
    img {
      transition: all 0.2s;
    }
    .pc {
      color: #838383;
    }
  }
  ${({ selectOpen }) =>
    selectOpen &&
    css`
      .select {
        img {
          transform: rotate(180deg) translateX(-10px);
        }
      }
    `}
  ul {
    border: 3px solid #000;
    border-top: none;
    position: absolute;
    top: 4.125rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    li {
      font-size: 32px;
      padding: 20px 1.625rem;
      &.active {
        background-color: #000;
        color: #fff;
      }
      &:hover {
        background-color: #000;
        color: #fff;
        cursor: default;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    .select {
      font-size: 20px;
    }
    ul {
      li {
        font-size: 20px;
      }
    }
  }
`;

export const TextareaBox = styled.div<{ value?: string; height?: number }>`
  width: 100%;
  height: 100%;
  textarea {
    padding: 2rem;
    font-family: sans-serif;
    letter-spacing: 0.9px;
    min-height: 6.25rem;
    font-size: 32px;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    border: 3px solid #e0e0e0;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
  ${({ value }) =>
    value &&
    css`
      textarea {
        border: 3px solid #000;
      }
    `}
  @media ${responSiveSize.mobile} {
    textarea {
      font-size: 20px;
      min-height: 3.25rem;
      height: 70%;
    }
  }
`;

export const ButtonBox = styled.button`
  border-radius: 0.5rem;
  font-size: 32px;
  font-weight: 500;
  outline: none;
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: #ef242f;
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
  @media ${responSiveSize.mobile} {
    font-size: 20px;
  }
`;

export const DatePickerBox = styled.div`
  width: 100%;
  height: 4.125rem;
  position: relative;
  z-index: 40;
  .picker {
    height: 100%;
    .picker__trigger {
      height: 100%;
      .picker-input {
        height: 100%;
      }
    }
  }
  input {
    background: none;
    padding: 0 !important;
    height: 4.125rem;
    outline: none;
    border: none;
    border-radius: 0;
    border-bottom: 3px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 32px;
    border-bottom: 3px solid #000;
    cursor: default;
    z-index: 1;
    position: absolute;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  }
  & > i {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 0;
  }
  .calendar__container {
    border: 3px solid #000;
    border-top: none;
    background-color: #fff;
    padding: 2.75rem;
  }
  .calendar__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      border: none;
      background: none;
      svg {
        height: 2.25rem;
        width: 2.25rem;
      }
    }
    .calendar__head--title {
      font-size: 2.25rem;
    }
  }
  .calendar__body {
    .calendar__body--table {
      width: 100%;
      height: 100%;
      th {
        line-height: 3;
        font-size: 24px;
        color: #969696;
        font-weight: 200;
      }
      .calendar__day {
        height: 2.5rem;
        width: 2.5rem;
        div {
          font-size: 24px;
          height: 3.125rem;
          width: 3.125rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 200;
          border-radius: 100px;
          cursor: default;
          &:hover {
            background-color: #eee;
          }
        }
      }
      .calendar__day--selected {
        div {
          background-color: #000;
          color: #fff;
          border-radius: 100px;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    input {
      font-size: 20px;
    }
  }
`;
