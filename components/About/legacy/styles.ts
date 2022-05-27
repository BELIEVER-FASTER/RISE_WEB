import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const AboutLayoutContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  .about_section {
    margin: 0 auto;
    max-width: 1440px;
    position: relative;
    .section__title {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 72px;
        font-weight: 500;
        span {
          display: block;
          line-height: 1.2;
        }
      }
      p {
        margin-top: 80px;
        font-size: 26px;
        line-height: 40px;
      }
    }
  }
  @media ${responSiveSize.tablet} {
    .about_section {
      max-width: 1120px;
      .section__title {
        h3 {
          font-size: 60px;
          font-weight: 600;
        }
        p {
          font-size: 20px;
          line-height: 32px;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    overflow-x: hidden;
    section {
      width: 100%;
      padding: 1.5rem;
    }
    .about_section {
      .section__title {
        h3 {
          font-size: 32px !important;
          font-weight: 600;
        }
        p {
          font-weight: 400;
          margin-top: 28px;
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  }
`;

export const AboutAContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 10% auto 30% auto !important;
  .section__title {
    align-items: flex-end;
    margin-bottom: 250px;
    h3 {
      margin-left: 30px;
    }
    h3 > span:last-of-type {
      text-indent: 180px;
    }
    p {
      margin-right: 51px;
    }
  }
  img:first-of-type {
    position: absolute;
    right: 0;
    top: 30%;
    width: 37%;
  }
  img:last-of-type {
    position: absolute;
    left: 14.6%;
    top: 80%;
    width: 25%;
  }

  @media ${responSiveSize.tablet} {
    margin: 10% auto 20% auto !important;
    .section__title {
      h3 {
        width: 100%;
        span:last-of-type {
          text-indent: 163px;
        }
      }
      p {
        margin-right: 102px;
      }
    }
    img:last-of-type {
      top: 68%;
    }
  }
  @media ${responSiveSize.mobile} {
    height: auto;
    flex-direction: column;
    .section__title {
      align-items: flex-start;
      width: 100%;
      margin-top: 100px;
      margin-bottom: 120px;
      h3 {
        width: 100%;
        margin-left: 0px;
        span:last-of-type {
          text-align: end;
          text-indent: 0;
        }
      }
      p {
        margin-right: 0px;
      }
    }
    img:first-of-type {
      position: static;
      width: 100%;
      margin-bottom: 80px;
    }
    img:last-of-type {
      position: static;
      width: 100%;
    }
  }
`;
export const AboutBContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15% auto 23% auto !important;
  .section__title {
    text-align: center;
    h3 {
      span:first-of-type {
        padding-right: 00px;
        line-height: 1.4;
      }
      br.mobile {
        display: none;
      }
    }
    p {
      margin-top: 50px !important;
      br.mobile {
        display: none;
      }
    }
  }
  .img__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img:not(img:first-of-type) {
    position: absolute;
  }
  img:first-of-type {
    margin: 150px auto 0 auto;
    width: 37%;
  }
  img:nth-of-type(2) {
    top: 40%;
    left: 0;
    width: 20%;
  }
  img:nth-of-type(3) {
    top: 45%;
    right: 0;
    width: 18%;
  }
  img:nth-of-type(4) {
    top: 90%;
    left: 10%;
    width: 33%;
  }
  @media ${responSiveSize.tablet} {
  }

  @media ${responSiveSize.mobile} {
    .section__title {
      text-align: center;
      h3 {
        span:first-of-type {
          padding-right: 0px;
        }
        span:last-of-type {
          padding-left: 0px;
          padding-top: 8px;
        }
        br.mobile {
          display: initial;
        }
      }
      p {
        margin-top: 20px !important;
        br.desk {
          display: none;
        }
        br.mobile {
          display: initial;
        }
      }
    }
    .img__wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      img:first-of-type {
        position: static;
        order: 2;
        margin: 0;
        margin-left: auto;
        margin-top: 100px;
        width: 85%;
      }
      img:nth-of-type(2) {
        position: static;
        margin-top: 80px;
        order: 1;
        width: 70%;
      }
      img:nth-of-type(3) {
        position: static;
        margin-top: 175px;
        margin-left: auto;
        order: 3;
        width: 55%;
      }
      img:nth-of-type(4) {
        top: 69%;
        width: 62%;
        left: 1.5rem;
        position: absolute;
      }
    }
  }
`;
export const AboutCContainer = styled.section`
  height: 1300px;
  margin-bottom: 130px !important;
  video {
    width: 100%;
  }
  .section__title {
    overflow: hidden;
    margin-top: 80px;
    flex-direction: row !important;
    justify-content: space-between;
    h3 {
      span:last-of-type {
        padding-left: 200px;
        line-height: 1.4;
      }
    }
    p {
      margin-top: 8px !important;
      line-height: 1.6 !important;
    }
  }
  @media ${responSiveSize.tablet} {
    height: 1100px;
    margin-bottom: 110px !important;
  }
  @media ${responSiveSize.mobile} {
    height: 900px;
    margin-bottom: 30px !important;
    video {
      height: 416px;
      object-fit: cover;
    }
    .section__title {
      flex-direction: column !important;
      margin-top: 60px;
      h3 {
        span:last-of-type {
          padding-left: 00px;
          margin-left: auto;
          text-align: end;
        }
      }
      p {
        margin-top: 20px !important;
      }
    }
  }
`;
export const SectionTitleBox = styled.div`
  h3 {
  }
`;
