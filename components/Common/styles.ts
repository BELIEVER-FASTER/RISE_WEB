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
  position: relative;
  input {
    height: 100%;
    width: 100%;
    font-size: 26px;
    border: none;
    outline: none;
    border-bottom: 3px solid #838383;
    border-radius: 0;
    background: none;
    color: #fff;
    z-index: 9;
    position: relative;
    &::placeholder {
      color: #838383;
    }
  }
  label {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #838383;
    transition: all 0.25s;
  }
  input:focus + label {
    top: -30px;
    font-size: 14px;
  }
  ${({ value }) =>
    value &&
    css`
      input {
        border-bottom: 3px solid #838383;
      }
      label {
        top: -30px;
        font-size: 14px;
      }
    `}
  @media ${responSiveSize.mobile} {
    input {
      font-size: 20px;
      padding: 20px 0;
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
    padding: 1.5rem;
    font-family: sans-serif;
    letter-spacing: 0.9px;
    min-height: 6.25rem;
    font-size: 26px;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    background: none;
    border: 3px solid #838383;
    color: #fff;
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
        border: 3px solid #838383;
      }
    `}
  @media ${responSiveSize.mobile} {
    textarea {
      padding: 1rem;
      font-size: 16px;
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
  & > i {
    transition: all 0.2s;
  }
  &.open {
    & > i {
      transform: rotate(-180deg) translate(-10px, 20px);
    }
  }
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
    display: none;
  }
  .calendar--show {
    display: block;
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
  z-index: 20;
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
  width: 100%;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  @keyframes showUp {
    from {
      transform: translateY(20.6vw);
    }
    to {
      opacity: 1;
      transform: translateY(0vw);
    }
  }
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
      overflow: hidden;
      span {
        display: inline-block;
        transform: translateY(21vw);
      }
      ${() => {
        const arr = [1, 2, 3, 4, 5];
        return css`
          ${arr.map(
            num => `span:nth-of-type(${num}){
                        animation: showUp 0.4s ease ${num * 0.1 + 0.5}s forwards;
                      }`
          )}
        `;
      }}
    }
    article {
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      h2 {
        line-height: 0.85;
        overflow: hidden;
        span {
          display: inline-block;
          transform: translateY(21vw);
        }
        ${() => {
          const arr = [1, 2, 3, 4, 5];
          return css`
            ${arr.map(
              num => `span:nth-of-type(${num}){
                        animation: showUp 0.4s ease ${num * 0.1 + 1.1}s forwards;
                      }`
            )}
          `;
        }}
      }
      p {
        margin-left: 3rem;
        font-size: 26px;
        animation: showUp 0.4s ease 1.8s forwards;
        display: inline-block;
        transform: translateY(30.6vw);
        span {
          line-height: 40px;
        }
        span:nth-of-type(3) {
          br {
            display: none;
          }
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
      h2 {
        margin-bottom: 10px;
      }
      article {
        flex-direction: column;
        align-items: flex-start;
        p {
          margin: 0;
          margin: 24px 0 32px 0;
          font-size: 20px;
          transform: translateY(45.6vw);
          span {
            line-height: 1.64;
          }
          span:nth-of-type(3) {
            br {
              display: initial;
            }
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
    padding: 1.7rem 0;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
    color: #000;
    br.mobile {
      display: none;
    }
    & > span {
      .close_icon {
        width: 22px;
        height: 22px;
      }
      position: fixed;
      width: 60px;
      height: 60px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      top: 60px;
      right: 60px;
      background-color: #fff;
      border-radius: 30px;
      border: 1px solid #000;
      cursor: pointer;
    }
    .privacy {
      max-width: 984px;
      padding-bottom: 500px;
      .content {
        section {
          width: 100%;
          padding: 0;
        }
        line-height: 1.7;
        font-size: 20px;
        b {
          font-size: 26px;
          letter-spacing: 0.9px;
          padding-bottom: 90px;
          display: block;
        }
        h2 {
          font-size: 72px;
          font-weight: 500;
          margin: 280px 0 60px 0;
        }
        h3 {
          padding-top: 80px;
          font-size: 24px;
        }
        h4 {
          margin-top: 50px;
          margin-bottom: 20px;
        }
        strong {
          cursor: default;
          font-weight: 400;
          text-decoration: none;
          color: #000;
        }
        p {
          font-size: 28px;
          padding: 20px 0 20px 0;
          font-weight: 500;
          text-align: left;
        }
        ol:first-of-type {
          margin-top: 30px;
        }
        ol {
          margin: 10px 0;
          li {
            display: flex;
            line-height: 1.6;
            margin-bottom: 12px;
            strong {
              padding-right: 8px;
            }
          }
        }
        & > ul {
          margin: 35px 0;
          li {
            display: flex;
            margin: 20px 0;
            strong {
              padding-right: 8px;
            }
          }
        }
      }
      .grid {
        width: 100%;
        margin-bottom: 80px;
        .row {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #ddd;
          &:first-of-type {
            border-bottom: 2px solid #000;
          }
          &:last-of-type {
            border-bottom: 2px solid #fff;
          }
          .title {
            flex: 1;
            font-weight: 500;
            padding: 16px 0;
          }
          span {
            letter-spacing: 0.7px;
            line-height: 28px;
            padding: 20px 25px 32px 0;
            font-size: 16px;
            width: 33%;
            display: block;
          }
          span:last-of-type {
            flex: 1;
            padding-right: 0px;
          }
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    .modal__content {
      margin-bottom: 0;
      margin-top: 0px;
      & > span {
        .close_icon {
          width: 14px;
          height: 14px;
        }
        width: 36px;
        height: 36px;
        top: 61px;
        right: 20px;
        border-radius: 30px;
      }
      .privacy {
        width: 100%;
        padding-bottom: 200px;
        .content {
          overflow: hidden;
          section {
            width: 100%;
            padding: 0 1.5rem;
          }
          .padding-left {
            padding-left: 1.5rem;
          }
          font-size: 14px;
          br.desktop {
            display: none;
          }
          br.mobile {
            display: initial;
          }
          b {
            font-size: 16px;
            padding-bottom: 60px;
          }
          h2 {
            padding-top: 30px;
            font-size: 32px;
            margin: 120px 0 20px 0;
          }
          h3 {
            font-size: 16px;
            font-weight: 600;
            margin: 64px 0 16px 0;
            padding: 0;
          }
          h5 {
            display: inline;
          }
          p {
            font-weight: 600;
            font-size: 16px;
            padding: 20px 0 20px 0;
          }
          .scroll-x {
            overflow-x: scroll;
          }
          .grid {
            width: 556px;
            padding: 0 1.5rem;
            .row {
              .title {
              }
              span {
                letter-spacing: 0.6px;
                font-size: 12px;
                line-height: 22px;
                width: 30%;
              }
              span:last-of-type {
                flex: 1;
                padding-right: 0px;
              }
            }
          }
          & > section > ul {
            margin: 20px 0;
            li {
              display: flex;
              margin: 10px 0;
              strong {
                padding-right: 8px;
              }
            }
          }
          ol {
            margin: 10px 0;
            li {
              display: flex;
              line-height: 1.6;
              margin-bottom: 10px;
              strong {
                padding-right: 8px;
              }
            }
          }
        }
      }
    }
  }
`;

export const FixedWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background-color: none;
`;
