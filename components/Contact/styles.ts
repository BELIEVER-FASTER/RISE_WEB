import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const ContactContainer = styled.div`
  position: relative;
  background-image: url('/img/contact_bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    width: 71.25rem;
    padding-left: 8.125rem;
  }

  @media ${responSiveSize.mobile} {
    overflow-x: hidden;
    section {
      width: 100%;
      padding-left: 0;
      padding: 24px;
    }
  }
`;

export const ContactBannerContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    position: relative;
    font-size: 8.125rem;
    font-weight: 600;
    span {
      display: block;
      z-index: 1;
      position: relative;
    }
    img {
      z-index: 0;
      position: absolute;
      top: -40%;
      right: -3.125rem;
    }
  }
  p {
    margin: 4rem 0 0 8.75rem;
    line-height: 1.4;
    font-size: 26px;
    br:last-of-type,
    br:first-of-type {
      display: none;
    }
  }
  @media ${responSiveSize.mobile} {
    height: 75vh;
    align-items: center;
    h1 {
      font-size: 3.3rem;
      img {
        width: 52px;
        height: 52px;
        right: -1.125rem;
      }
    }
    p {
      margin: 0;
      margin-top: 28px;
      line-height: 1.4;
      font-size: 20px;
      br:last-of-type,
      br:first-of-type {
        display: initial;
      }
      br:nth-of-type(2) {
        display: none;
      }
    }
  }
`;

export const ContactInfoContainer = styled.section`
  height: 31.25rem;
  display: flex;
  align-items: center;
  article {
    p,
    a {
      font-size: 40px;
      font-weight: 500;
      line-height: 1.2;
    }
    .tell {
      margin: 2.75rem 0 7.75rem 0;
    }
    .email {
      display: flex;
      span {
        display: block;
        font-size: 32px;
        color: #444444;
      }
      a {
        cursor: pointer;
        display: block;
        margin-top: 2rem;
        border-bottom: 3px solid black;
        text-decoration: none;
        color: #000;
      }
      li + li {
        margin-left: 16.25rem;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    article {
      display: flex;
      flex-direction: column;
      margin-left: 10vw;
      p,
      a {
        font-size: 21px;
      }
      .email {
        flex-direction: column;
        span {
          font-size: 18px;
        }
        a {
          margin-top: 1.4rem;
        }
        li + li {
          margin-left: 0;
          margin-top: 60px;
        }
      }
    }
  }
`;

export const ContactPhoneContainer = styled.div`
  height: 49.18rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18.75rem 0;
  p {
    white-space: nowrap;
    position: absolute;
    font-size: 310px;
    font-weight: 500;
    color: #fa370b;
  }
  .start {
    z-index: 0;
    left: 0px;
    top: 4rem;
  }
  .end {
    z-index: 2;
    right: -500px;
    bottom: 4rem;
  }
  img {
    z-index: 1;
    height: 100%;
  }
  @media ${responSiveSize.mobile} {
    margin: 6.75rem 0;
    height: 20rem;
    p {
      font-size: 90px;
    }
    .start {
      z-index: 0;
      left: 0px;
      top: 4rem;
    }
    .end {
      z-index: 2;
      right: -00px;
      bottom: 4rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ContactFormContainer = styled.section`
  margin: 3.125rem 0 12rem 0;
  form {
    h3 {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    input[type='checkbox'] {
      width: 1.24rem;
      height: 1.24rem;
      margin-right: 0.56rem;
    }
    .contact__field {
      display: flex;
      margin: 5rem 0;
      & > div {
        flex: 1;
      }
      & > div:first-of-type,
      & > div:last-of-type {
        margin-right: 2.7rem;
      }
    }
    .term_box {
      margin: 1.75rem 0 5rem 0;
      font-size: 20px;
      display: flex;
      align-items: center;
      a {
        color: #000;
        font-weight: 500;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    form {
      padding: 1rem;
      h3 {
        font-size: 26px;
        margin-bottom: 0rem;
      }
      .contact__field {
        margin: 0 0 0 0;
        flex-direction: column;
        & > div {
          margin-top: 3rem;
        }
        & > div:first-of-type,
        & > div:last-of-type {
          margin-right: 0rem;
        }
      }
      .term_box {
        margin: 1rem 0 4.1rem 0;
        font-size: 14px;
      }
      textarea {
        margin-top: 3rem;
      }
    }
  }
`;
