import styled, { css, keyframes } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const slideUp = keyframes`
  from{
    opacity: 0;
    transform: translateY(500px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

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
  img {
    height: 25px;
    width: 111px;
    object-fit: contain;
  }
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
  @media ${responSiveSize.mobile} {
    font-size: 20px;
    img {
      height: 20px;
      width: 70px;
    }
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

export const LottieBox = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -35px;
  right: 30px;
`;
export const VideoBGLayer = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
`;
export const BannerTitleContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  .content__bottom {
    width: 100%;
    position: relative;
    z-index: 1;
    font-size: 227px;
    h2 {
      font-family: 'NHaasGroteskTXPro';
      font-weight: 500;
    }
    & > h2 {
      text-align: right;
    }
    article {
      display: flex;
      h2 {
        line-height: 0.75;
      }
      p {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 3rem;
        font-size: 26px;
        span {
          line-height: 1.4;
        }
      }
    }
  }
  @media ${responSiveSize.tablet} {
    .content__bottom {
      font-size: 200px;
    }
  }
  @media ${responSiveSize.mobile} {
    width: 100%;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: flex-end;
    .content__bottom {
      font-size: 88px;
      article {
        flex-direction: column;
        p {
          margin: 0;
          margin: 24px 0 32px 0;
          font-size: 20px;
          span {
            line-height: 1.64;
          }
        }
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  z-index: 999;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
  .modal__content {
    border-radius: 0.53rem;
    min-height: 250px;
    background-color: #fff;
    padding: 1.7rem 2rem;
    min-width: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 5px 20px #555;
    animation: ${slideUp} 0.3s;
    .img__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 150px;
      margin-bottom: 30px;
      img {
        width: 80%;
      }
    }
    h1 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.7;
      font-size: 18px;
      padding-bottom: 35px;
      flex: 1;
      text-align: center;
      strong {
        font-weight: 500;
      }
    }
    button {
      width: 100%;
      border: none;
      color: #fff;
      font-size: 20px;
      padding: 0.8rem 2rem;
      border-radius: 5px;
      outline: none;
      background-color: #e74c28;
      cursor: pointer;
    }
  }
  @media ${responSiveSize.mobile} {
    .modal__content {
      width: 95%;
      min-width: auto;
      margin-bottom: 100px;
      .img__wrapper {
        height: 110px;
        margin-bottom: 20px;
        img {
          width: 70%;
        }
      }
    }
  }
`;

export const PrivacyModalWrapper = styled(ModalWrapper)`
  .modal__content {
    max-width: 90%;
    position: relative;
    & > span {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .privacy {
      max-width: 600px;
      height: 500px;
      overflow-y: scroll;
      .content {
        font-size: 15px;
      }
      h2 {
        font-size: 30px;
        margin: 10px 0;
      }
      h3 {
        padding-top: 30px;
        font-size: 22px;
      }
      p {
        font-size: 18px;
        padding: 20px 0 10px 0;
      }
    }
    .table {
      li {
        margin: 15px 0;
        h5 {
          font-size: 18px;
          margin-bottom: 5px;
        }
      }
    }
  }
`;
