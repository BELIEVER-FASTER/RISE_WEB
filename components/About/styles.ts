import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const AboutContainer = styled.div`
  section:not(section:first-of-type) {
    width: 90rem;
    margin: 17rem auto;
  }
  @media ${responSiveSize.tablet} {
    section:not(section:first-of-type) {
      max-width: 70rem;
      width: 100%;
    }
  }
  @media ${responSiveSize.mobile} {
    section:not(section:first-of-type) {
      width: 100%;
      padding: 0 1.5rem;
      margin: 10rem auto !important;
    }
  }
`;

export const AboutAContainer = styled.section`
  width: 100%;
  height: 64.75rem;
  position: relative;
  article {
    width: 44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 72px;
      font-weight: 500;
      span {
        display: inline-block;
      }
      span:first-of-type {
        margin-bottom: 1.5rem;
      }
      span:last-of-type {
        text-indent: 4.75rem;
      }
    }
    p {
      font-size: 26px;
      line-height: 1.54;
      margin: 5rem 0 0 5.5rem;
    }
  }
  img {
    position: absolute;
  }
  img:first-of-type {
    width: 556px;
    right: 0;
    top: 9.4rem;
  }
  img:last-of-type {
    width: 374px;
    left: 10rem;
    bottom: 0;
  }
  @media ${responSiveSize.tablet} {
    height: 57.5rem;
    article {
      width: 37.5rem;
      h2 {
        font-size: 60px;
      }
      p {
        font-size: 20px;
      }
    }
    img:first-of-type {
      width: 432px;
      top: 9.5rem;
    }
    img:last-of-type {
      width: 320px;
      left: 9.5rem;
    }
  }
  @media ${responSiveSize.mobile} {
    height: auto;
    position: static;
    article {
      width: 100%;
      align-items: flex-start;
      h2 {
        display: inline;
        width: 20rem;
        font-size: 32px;
        span:first-of-type {
          margin-bottom: 0.75rem;
        }
        span:last-of-type {
          text-indent: 2.5rem;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.75;
        margin: 1.75rem 0 0 0;
      }
    }
    img {
      position: static;
    }
    img:first-of-type {
      width: 100%;
      margin-top: 7.5rem;
    }
    img:last-of-type {
      width: 100%;
      margin-top: 5rem;
    }
  }
`;

export const AboutBContainer = styled.section`
  width: 100%;
  height: 91rem;
  article {
    width: 64rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    h2 {
      font-size: 72px;
      font-weight: 500;
      span {
        display: inline-block;
      }
      span:first-of-type {
        margin-bottom: 1.5rem;
        br {
          display: none;
        }
      }
      span:last-of-type {
        text-indent: 22rem;
      }
    }
    p {
      text-align: center;
      font-size: 26px;
      line-height: 1.54;
      margin-top: 5rem;
      .mobile-br {
        display: none;
      }
    }
  }
  div {
    position: relative;
    margin-top: 9.625rem;
    img {
      position: absolute;
    }
    img:nth-of-type(1) {
      width: 292px;
      left: 0;
      top: 10rem;
    }
    img:nth-of-type(2) {
      width: 552px;
      left: 29.25rem;
      top: 0;
    }
    img:nth-of-type(3) {
      width: 480px;
      left: 11.875rem;
      top: 42.875rem;
    }
    img:nth-of-type(4) {
      width: 244px;
      left: 74.75rem;
      top: 13.625rem;
    }
  }
  @media ${responSiveSize.tablet} {
    height: 76.5rem;
    article {
      width: 56.25rem;
      h2 {
        font-size: 60px;
        span:last-of-type {
          text-indent: 21rem;
        }
      }
      p {
        font-size: 26px;
        margin-top: 3.125rem;
      }
    }
    div {
      img:nth-of-type(1) {
        width: 226px;
        top: 7.75rem;
      }
      img:nth-of-type(2) {
        width: 428px;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
      }
      img:nth-of-type(3) {
        width: 372px;
        left: 9.25rem;
        top: 33.375rem;
      }
      img:nth-of-type(4) {
        width: 188px;
        right: 0;
        left: auto;
        top: 10.5rem;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    height: auto;
    position: static;
    display: flex;
    flex-direction: column;
    article {
      width: 100%;
      align-items: center;
      h2 {
        display: inline;
        width: 17.5rem;
        font-size: 32px;
        text-align: center;
        span:first-of-type {
          margin-bottom: 0.75rem;
          line-height: 1.25;
          br {
            display: initial;
          }
        }
        span:last-of-type {
          text-indent: 0rem;
        }
      }
      p {
        font-size: 16px;
        margin: 1.75rem 0 0 0;
        .mobile-br {
          display: initial;
        }
      }
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      img:nth-of-type(1) {
        position: static;
        width: 72%;
        align-self: flex-start;
      }
      img:nth-of-type(2) {
        position: static;
        width: 83%;
        transform: none;
        margin-top: 7.5rem;
        align-self: flex-end;
      }
      img:nth-of-type(3) {
        position: absolute;
        width: 72%;
        left: 0;
        top: 56%;
      }
      img:nth-of-type(4) {
        position: static;
        width: 60%;
        margin-top: 14rem;
        align-self: flex-end;
      }
    }
  }
`;

export const AboutCContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    margin-bottom: 5rem;
  }
  article {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2 {
      display: flex;
      flex-direction: column;
      font-size: 72px;
      font-weight: 500;
      span {
        display: inline-block;
      }
      span:first-of-type {
        margin-bottom: 1.5rem;
      }
      span:last-of-type {
        text-indent: 9rem;
      }
    }
    p {
      text-align: left;
      font-size: 26px;
      line-height: 1.54;
    }
  }
  @media ${responSiveSize.tablet} {
    img {
      margin-bottom: 4.5rem;
    }
    article {
      h2 {
        font-size: 60px;
        span:last-of-type {
          text-indent: 7.5rem;
        }
      }
      p {
        font-size: 20px;
        line-height: 1.85;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    height: auto;
    position: static;
    img {
      margin-bottom: 3.75rem;
    }
    article {
      flex-direction: column;
      h2 {
        display: inline;
        width: 19.5rem;
        font-size: 32px;
        span:first-of-type {
          margin-bottom: 0.75rem;
        }
        span:last-of-type {
          text-indent: 3.25rem;
        }
      }
      p {
        font-size: 16px;
        margin-top: 1.75rem;
        align-self: flex-start;
      }
    }
  }
`;
