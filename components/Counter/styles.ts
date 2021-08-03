import styled from 'styled-components';

export const CLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
      padding: 0 2.75rem;
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
`;

export const CHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin: 2.75rem auto;
  padding: 0 2.75rem;
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
    padding: 0 0.8rem;
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
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: NHaasGroteskTXPro sans-serif;
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
