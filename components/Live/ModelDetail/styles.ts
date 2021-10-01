import styled, { keyframes } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

const fadeIn = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`;
const slideUp = keyframes`
from{
  opacity: 0;
  transform: translateY(100vh);
}
to{
  opacity:1;
  transform: translateY(30vh);
}
`;
export const DetailLayoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s;
  & > section {
    width: 100%;
    height: 930vh;
    position: relative;
    .a {
      position: sticky;
      top: 0;
    }
  }
  @media ${responSiveSize.mobile} {
    & > section {
      height: 520vh;
    }
  }
`;

export const DetailBox = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  transform: translateY(30vh);
  margin-left: auto;
  animation: ${slideUp} 1s 0.5s forwards;
  opacity: 0;
  .scroll_message {
    top: -45px;
    color: #fff;
    position: absolute;
    font-size: 28px;
  }
  & > section {
    background-color: #fff;
  }
  .name {
    width: 100%;
    text-align: center;
    padding: 280px 0 200px 0;
    h1 {
      font-size: 130px;
      font-weight: 500;
      margin-bottom: 30px;
    }
    p {
      font-size: 20px;
    }
  }
  article {
    background: #fff;
    padding: 0 2.5rem;
  }
  .section-1 {
    width: 100%;
    .img__wrapper-1 {
      margin-left: auto;
      width: 50%;
      img {
        width: 100%;
      }
    }
    & > p {
      width: 50%;
      font-size: 35px;
      margin: 48px 0 48px auto;
      line-height: 52px;
      letter-spacing: 1px;
    }
    .btn__social {
      width: 50%;
      font-size: 36px;
      margin: 48px 0 0px auto;
      span {
        font-size: 30px;
      }
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .section-2 {
    width: 100%;
    padding: 320px 2.5rem;
    display: flex;
    line-height: 1.4;
    .left {
      width: 400px;
      font-size: 40px;
      font-weight: 600;
    }
    .right {
      font-size: 26px;
      li > a {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        white-space: nowrap;
        svg {
          width: 40px;
          height: 40px;
          fill: #000;
        }
        &:hover {
          color: #fa370b;
          svg {
            fill: #fa370b;
          }
        }
      }
    }
  }
  .section-3 {
    display: flex;
    justify-content: center;
    padding-left: 100px;
    .img__wrapper_2 {
      width: 367px;
      height: 650px;
      margin-right: 20px;
      iframe {
        width: 100%;
        height: 100%;
        body {
          overflow: hidden;
        }
      }
    }
    .img__wrapper_3 {
      width: 367px;
      height: 367px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .section-4 {
    padding-top: 320px;
    .img__wrapper_4 {
      width: 741px;
      height: 556px;
      margin: 0 0 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .img__wrapper_5 {
      margin-top: 320px;
      margin-right: auto;
      width: 493px;
      height: 874px;
      iframe {
        width: 100%;
        height: 100%;
        body {
          overflow: hidden;
        }
      }
    }
  }
  .section-5 {
    height: 400px;
    transform: translateY(-2px);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 30%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  @media ${responSiveSize.tablet} {
    .name {
      h1 {
        font-size: 112px;
      }
    }
    .section-1 {
      & > p {
        font-size: 26px;
        margin: 24px 0 24px auto;
      }
      .btn__social {
        width: 50%;
        font-size: 20px;
        margin: 24px 0 0px auto;
        span {
          font-size: 20px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    .section-2 {
      .left {
        width: 340px;
      }
      .right {
        margin-top: 4px;
        font-size: 20px;
        li > a {
          margin-bottom: 26px;
          svg {
            width: 36px;
            height: 36px;
            fill: #000;
          }
        }
      }
    }
    .section-3 {
      .img__wrapper_2 {
        /* width: 360px;
        height: 640px; */
        width: 328px;
        height: 552px;
      }
      .img__wrapper_3 {
        width: 328px;
        height: 328px;
      }
    }
    .section-4 {
      .img__wrapper_4 {
        width: 559px;
        height: 420px;
      }
      .img__wrapper_5 {
        width: 440px;
        height: 780px;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    width: 85%;
    .scroll_message {
      font-size: 16px;
      top: -35px;
    }
    .name {
      padding: 66px 0 80px 0;
      h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }
      p {
        font-size: 12px;
      }
    }
    article {
      background: #fff;
      padding: 0 1.5rem;
    }
    .section-1 {
      width: 80%;
      margin-left: auto;
      .img__wrapper-1 {
        width: 100%;
      }
      & > p {
        width: 100%;
        font-size: 16px;
        margin: 24px 0 16px auto;
        line-height: 1.3;
      }
      .btn__social {
        width: 100%;
        margin: 16px 0 0px auto;
        span {
          font-size: 12px;
        }
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .section-2 {
      flex-direction: column;
      padding: 160px 1.5rem;
      .left {
        width: 159px;
        font-size: 28px;
        margin-bottom: 45px;
      }
      .right {
        font-size: 14px;
        li > a {
          margin-bottom: 20px;
          svg {
            width: 24px;
            height: 24px;
            fill: #000;
          }
        }
      }
    }
    .section-3 {
      flex-direction: column;
      padding: 1.5rem;
      width: 100%;
      .img__wrapper_2 {
        width: 188px;
        height: 332px;
        margin-left: auto;
        margin-right: 0px;
      }
      .img__wrapper_3 {
        width: 190px;
        transform: translateX(2px);
        height: 188px;
        margin: 20px 0 0 auto;
      }
    }
    .section-4 {
      padding-top: 160px;
      padding-bottom: 100px;
      .img__wrapper_4 {
        width: 232px;
        height: 174px;
      }
      .img__wrapper_5 {
        margin-top: 160px;
        width: 220px;
        height: 388px;
      }
    }
    .section-5 {
      height: 200px;
    }
  }
`;
