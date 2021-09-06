import styled, { keyframes } from 'styled-components';

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
      font-size: 36px;
      margin: 48px 0 48px auto;
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
`;
