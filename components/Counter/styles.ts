import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const CLayoutContainer = styled.div<{ height: number }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  ${({ height }) =>
    height !== 0 &&
    css`
      height: ${height}px;
    `}
  video {
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .counter_page__content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bottom__content {
      display: flex;
      align-items: flex-end;
      padding: 0 2.5rem;
      justify-content: space-between;
      .social__list {
        display: flex;
        padding-bottom: 4rem;
        & > a + a {
          margin-left: 1rem;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    flex-direction: column;
    .counter_page__content {
      .bottom__content {
        padding: 0 1.23rem;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export const CHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin: 2.5rem auto;
  padding: 0 2.5rem;
  .header__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    img {
      width: 9.5rem;
      height: 3.06rem;
    }
    p {
      flex: 1;
      text-align: center;
      br {
        display: none;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    flex-direction: column;
    padding: 0 1.23rem;
    margin: 1.23rem 0;
    .header__left {
      img {
        width: 5.75rem;
        height: 1.8125rem;
      }
      p {
        font-size: 12px;
        margin-left: 5%;
        text-align: start;
        line-height: 1.3;
        br {
          display: initial;
        }
      }
    }
  }
`;

export const EmailInputBox = styled.form`
  width: 35.43rem;
  height: 4rem;
  display: flex;
  border-radius: 0.4rem;
  overflow: hidden;
  input {
    flex: 1;
    height: 100%;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 0 1rem;
    border-radius: 0;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: #fff;
    &:disabled {
      background-color: #aaa;
      cursor: default;
    }
  }
  button {
    cursor: pointer;
    width: 7.18rem;
    height: 100%;
    background-color: #e74c28;
    outline: none;
    border: none;
    font-size: 20px;
    color: #fff;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    &:disabled {
      background-color: #aaa;
      cursor: default;
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 0 1.23rem;
    width: 100%;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translatey(-50%);
    input {
      font-size: 16px;
      background-color: rgba(255, 255, 255, 0.65);
      &::placeholder {
        color: #222;
      }
    }
    button {
      width: 5.75rem;
      font-size: 16px;
    }
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: sans-serif;
  p {
    font-size: 3.375rem;
    font-weight: bold;
  }
  strong {
    font-size: 17.75rem;
    font-weight: bold;
  }
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .comma {
    animation: tickTok 0.5s alternate infinite;
    @keyframes tickTok {
      0% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    p {
      font-size: 18px;
    }
    strong {
      font-size: 4.5rem;
    }
  }
`;

export const SocialBox = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  span {
    font-size: 18px;
  }
  i {
    margin-left: 0.25rem;
  }
`;
