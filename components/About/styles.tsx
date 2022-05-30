import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const AboutLayoutCT = styled.main``;
export const AboutSection1CT = styled.section`
  background-color: #fff;
  height: 90vh;
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    padding: 369px 0 80px 0;
    font-size: 96px;
    line-height: 1.2;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    p {
      position: relative;
      display: inline-block;
    }
    p:nth-of-type(2) {
      margin-left: 80px;
    }
    svg {
      bottom: 50%;
      right: -25%;
      position: absolute;
      width: 448px;
      height: 131px;
    }
  }
  .title_info {
    h2 {
      font-size: 32px;
      font-weight: 400;
    }
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
    font-size: 24px;
    font-weight: 300;
  }
  @media ${responSiveSize.mobile} {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-bottom: 120px;
    h1 {
      font-size: 36px;
      padding: 192px 0 12px 0;
      p:nth-of-type(2) {
        margin-left: 40px;
      }
      /* margin-right: 48px; */
      svg {
        bottom: 50%;
        right: -25%;
        position: absolute;
        width: 170px;
        height: 50px;
      }
    }
    .title_info {
      flex-direction: column;
      h2 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      font-size: 14px;
    }
  }
`;

export const AboutSection2CT = styled.section`
  height: 500vh;
  position: relative;
  /* background-color: #fffaaa; */
  .content {
    position: sticky;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 75%;
    margin: 0 auto;
    .video_wrapper {
      width: 100%;
      video {
        object-fit: cover;
        height: 100vh;
        width: 100%;
      }
      .dark_wrapper {
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
      }
    }
    .content_layer {
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      max-width: 1019px;
      margin: 0 auto;
      display: flex;
      padding: 60px 0;
      flex-direction: column;
      justify-content: space-evenly;
      .hide {
        opacity: 0;
        scale: 0.95;
      }
      em {
        font-weight: 200;
        color: #ffffffaa;
        font-family: 'Ivy Mode';
        font-size: 16px !important;
      }

      h2 {
        font-weight: 500;
        font-size: 72px;
      }
      h3 {
        font-size: 72px;
        margin-top: 120px;
        line-height: 1.2;
        em {
          vertical-align: text-top;
        }
        em.top_gap {
          position: absolute;
          transform: translate(4px, 8px);
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        li {
          h4 {
            font-size: 32px;
            margin: 0px 0 16px 0;
          }
          line-height: 1.4;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    .content {
      width: 90%;
      .content_layer {
        padding: 20% 24px;
        justify-content: space-between;
        em {
          font-size: 14px;
        }
        h2 {
          font-size: 36px;
        }
        h3 {
          font-size: 36px;
          margin-top: 20%;
          font-weight: 500;
          em.top_gap {
            position: absolute;
            transform: translate(8px, 4px);
          }
        }
        ul {
          flex-direction: column;
          li {
            h4 {
              font-size: 24px;
              margin: 0px 0 10px 0;
            }
            span {
              font-size: 14px;
            }
          }
          li + li {
            margin-top: 44px;
          }
        }
      }
    }
  }
`;

export const AboutSection3CT = styled.section`
  height: 250vh;
  position: relative;
  .content {
    position: sticky;
    top: 0;
    padding: 200px 0;
    text-align: center;
    overflow: hidden;
    h2 {
      font-size: 72px;
      line-height: 1.2;
      margin-bottom: 88px;
      font-weight: 500;
      &.hide {
        transform: translateY(130%) scale(1.3);
      }
    }
    ul {
      overflow: hidden;
      &.hide {
        opacity: 0;
      }
      li + li {
        margin-top: 60px;
      }
      li {
        display: flex;
      }
      li:nth-of-type(1) {
        animation: slide2 34s linear infinite;
      }
      li:nth-of-type(2) {
        animation: slide 40s linear infinite reverse;
      }
      li:nth-of-type(3) {
        animation: slide3 34s linear infinite;
      }
      @keyframes slide {
        0% {
          transform: translateX(-2222px);
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes slide2 {
        0% {
          transform: translateX(-2252px);
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes slide3 {
        0% {
          transform: translateX(-2222px);
        }
        100% {
          transform: translateX(0px);
        }
      }
    }
  }
  .section3_brands_mobile {
    display: none;
  }
  @media ${responSiveSize.mobile} {
    .content {
      height: 100vh;
      padding: 80px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 36px;
        line-height: 1.2;
        margin-bottom: 60px;
      }
      ul.section3_brands {
        display: none;
      }
      .section3_brands_mobile {
        display: block;
        width: 100%;
        opacity: 0;
        /* height: 130vw; */
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;

export const AboutSection4CT = styled.section`
  height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 172px 0;
  display: flex;
  /* max-width: 1200px; */
  justify-content: center;
  gap: 140px;
  .left {
    h2 {
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 32px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      line-height: 1.4;
      font-weight: 300;
    }
  }
  .right {
    align-self: flex-end;
    gap: 88px;
    display: flex;
    flex-direction: column;
    li {
      p {
        position: relative;
        font-size: 24px;
        line-height: 1.3;
        .quotos {
          position: absolute;
          top: 0;
          transform: translate(-32px, -6px);
          &.rotate {
            top: auto;
            bottom: 0;
            transform: translate(-12px, -6px);
          }
        }
        margin-bottom: 24px;
      }
      span {
        font-size: 14px;
        color: #737373;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    flex-direction: column;
    padding: 120px 24px;
    align-items: center;
    gap: 88px;
    .left {
      text-align: center;
      h2 {
        font-size: 24px;
        margin-bottom: 24px;
        line-height: 1.4;
      }
      p {
        font-size: 14px;
        line-height: 1.6;
      }
    }
    .right {
      align-self: center;
      gap: 40px;
      li {
        text-align: center;
        p {
          font-size: 16px;
          text-align: center;
          line-height: 1.6;
          font-weight: 300;
          .quotos {
            transform: translate(-32px, 6px);
            &.rotate {
              top: auto;
              bottom: 0;
              transform: translate(-12px, 6px);
            }
          }
          margin-bottom: 16px;
        }
        span {
        }
      }
    }
  }
`;

export const AboutSection5CT = styled.section`
  padding: 200px 0 140px;
  h2 {
    font-size: 80px;
    font-weight: 500;
    text-align: center;
  }
  ul {
    max-width: 1120px;
    margin: 88px auto 0 auto;
    li {
      padding: 46px 0 80px 0;
      border-top: 1px solid #000;
      display: flex;
      justify-content: space-between;
      h3 {
        transition: all 0.3s;
        font-size: 22px;
        margin-bottom: 28px;
        em {
          font-family: 'Ivy mode';
        }
      }
      dl {
        dt {
          margin-bottom: 4px;
          line-height: 1.4;
          font-size: 20px;
        }
      }
      img {
        transition: all 0.3s;
        filter: grayscale(1);
        transform: scale(0.8);
      }
      .img_list {
        display: flex;
        flex-direction: row-reverse;
      }
      &.active {
        h3 {
          font-size: 28px;
          font-weight: bold;
        }
        img {
          transform: rotate(5deg);
          filter: grayscale(0);
          box-shadow: 0 20px 20px -10px #00000055;
        }
      }
      &:nth-of-type(1).active img {
        transform: rotate(5deg);
      }
      &:nth-of-type(2).active img {
        transform: rotate(-5deg);
      }
      &:nth-of-type(3).active {
        img {
          transform: translateX(25px) rotate(-10deg);
          z-index: 2;
        }
        img:nth-of-type(1) {
          transform: rotate(3deg);
          z-index: 1;
        }
      }
      &:nth-of-type(4).active img {
        transform: rotate(7deg);
      }
      &:nth-of-type(5).active img {
        transform: rotate(-6deg);
        border: 3px solid #000;
        border-radius: 4px;
      }
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 80px 24px;
    h2 {
      font-size: 36px;
    }
    ul {
      margin: 60px auto 0 auto;
      li {
        padding: 20px 0 40px 0;
        flex-direction: column;
        h3 {
          transition: all 0.3s;
          font-size: 18px;
          margin-bottom: 20px;
        }
        dl {
          dt {
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 1.7;
          }
        }
        img {
          display: none;
        }
        &.active {
          h3 {
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
export const AboutSection6CT = styled.section`
  padding: 140px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 72px;
    margin-bottom: 24px;
  }
  & > p {
    margin-bottom: 72px;
    font-size: 24px;
  }
  & > ul {
    display: flex;
    li {
      .img_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 532px;
        height: 532px;
        background: #ced1d3;

        overflow: hidden;
      }
      h3 {
        margin: 32px 0 24px 0;
        font-size: 24px;
      }
      p {
        font-weight: 500;
        line-height: 1.5;
        span {
          font-weight: 300;
        }
      }
      &:nth-of-type(1) {
        .img_wrapper {
          justify-content: flex-start;
          .brands {
            display: flex;
            justify-content: flex-start;
            animation: brandsSlide 10s linear infinite;
            img + img {
              margin-left: 28px;
            }
          }
        }
      }
      &:nth-of-type(2) {
        .img_wrapper {
          background: #e9f3ff;
          align-items: flex-end;
          img {
            /* animation: brandsSlide2 5s ease-out infinite; */
          }
          .app_img {
            opacity: 0;
          }
        }
      }
      @keyframes brandsSlide {
        0% {
          transform: translateX();
        }
        100% {
          transform: translateX(-51%);
        }
      }
      @keyframes brandsSlide2 {
        0% {
          transform: translateY(101%);
        }
        100% {
          transform: translateX();
        }
      }
    }
    li + li {
      margin-left: 56px;
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 80px 24px;
    h2 {
      font-size: 36px;
    }
    & > p {
      margin-bottom: 36px;
      font-size: 16px;
    }
    & > ul {
      flex-direction: column;
      width: 100%;
      li {
        width: 100%;
        .img_wrapper {
          width: 100%;
          height: 80vw;
          img {
            width: 390px;
          }
        }
        &:nth-of-type(1) {
          .img_wrapper {
            .brands {
              img + img {
                margin-left: 16.42px;
              }
            }
          }
        }
        &:nth-of-type(2) {
          .img_wrapper {
            img {
              width: 75vw;
              /* animation: brandsSlide2 5s ease-out infinite; */
            }
          }
        }
        h3 {
          font-size: 20px;
          margin: 24px 0 20px 0;
        }
        p {
          font-size: 14px;
        }
      }
      li + li {
        margin-left: 0px;
        margin-top: 48px;
      }
    }
  }
`;
