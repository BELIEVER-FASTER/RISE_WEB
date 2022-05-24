import styled, { css } from 'styled-components';

export const MainSection1CT = styled.section`
  height: 115vh;
  display: flex;
  justify-content: center;
  padding-top: 280px;
  h1 {
    font-weight: 500px;
    font-family: 'NHaasGroteskTXPro';
    font-size: 120px;
    z-index: 99;
    strong {
      font-family: 'Ivy Mode';
    }
    p:nth-of-type(1) {
      text-indent: 185px;
    }
    p:nth-of-type(2) {
      font-family: 'Pretendard';
      color: #167df7;
      font-weight: 600;
      margin: 16px 0;
      font-size: 106px;
    }
    p:nth-of-type(3) {
      text-indent: 490px;
    }
  }
  position: relative;
  .main_banner_video {
    position: absolute;
    bottom: -29vh;
    max-width: 1200px;
    /* height: 658px; */
    video {
      width: 100%;
    }
  }
`;
export const MainSection2CT = styled.section`
  /* height: 1581px; */
  padding-top: 302px;
  background-color: #000000;
  color: #fff;
  .content {
    width: 100%;
    height: 100vh;
    background-image: url('/img/ver2/main_background.png');
    background-size: cover;
    background-position: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      margin-bottom: 20%;
      font-family: 'Pretendard';
      font-size: 120px;
      line-height: 1.1;
      font-weight: 600;
      text-align: center;
      background: linear-gradient(90deg, #74b1fa 0%, #a4ccfb 30%, #167df7 70%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;
export const MainSection3CT = styled.section`
  background-color: #000000;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainSection4CT = styled.section`
  background-color: #fff;
  padding: 224px 0;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .title {
    align-self: start;
    display: flex;
    margin-bottom: 116px;
    & > span {
      font-size: 20px;
      font-family: 'Ivy Mode';
      font-style: italic;
      letter-spacing: 0.01em;
      margin-right: 0.5rem;
    }
    article {
      font-family: 'Pretendard';
      h2 {
        font-size: 72px;
        margin-bottom: 32px;
      }
      p {
        line-height: 1.5;
        font-size: 24px;
      }
    }
  }
  .app_info {
    align-self: flex-end;
    max-width: 824px;
    img {
      width: 100%;
    }
    article {
      margin-top: 24px;
      h3 {
        font-weight: 400;
        font-size: 32px;
        line-height: 1.2;
        letter-spacing: 0.06rem;
        strong {
          font-family: 'Ivy Mode';
          font-style: italic;
        }
      }
      p {
        display: flex;
        flex-direction: column;
        span {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }
        a {
          align-self: start;
          display: inline;
          padding: 18px 28px;
          border: 1px solid black;
          margin-top: 32px;
          color: #000;
          border-radius: 30px;
          text-decoration: none;
        }
      }
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const MainSection5CT = styled.section<{ scale: number }>`
  height: 350vh;
  position: relative;
  .content {
    overflow: hidden;
    width: 100%;
    top: 0;
    position: sticky;
    left: 0;
    right: 0;
    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      translate: all 0.5s;
    }
    .content_layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #040201bb;
    }
  }
  ${({ scale }) => css`
    .content > video {
      transform: scale(${scale});
    }
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text {
    position: relative;
    margin-top: 330px;
    text-align: center;
    color: #fff;
    h3 {
      font-size: 72px;
      line-height: 1.1;
      strong {
        font-family: 'Ivy Mode';
        font-style: italic;
      }
    }
    p {
      font-size: 24px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 36px;
    }
  }
  .text + .text {
    margin-top: 600px;
  }
`;
export const SectionWithBanner = styled.div`
  position: relative;
`;
export const LineBannerCT = styled.aside`
  z-index: 99;
  position: sticky;
  top: calc(100vh - 52px);
  overflow: hidden;
  background: #167df7;
  width: 100%;
  height: 52px;
  padding: 18px 0;
  color: #fff;
  strong {
    color: #fff855;
    font-weight: 600;
  }
  .text {
    animation: bannermove 80s linear infinite;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin-right: 64px;
      svg {
        margin: 0 8px;
      }
    }
  }
  @keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -7400px;
    }
  }
`;

export const MainSection6CT = styled.section`
  padding: 276px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    color: #040201;
    font-weight: 500;
    font-size: 72px;
    position: relative;
    em {
      position: absolute;
      font-family: 'Ivy Mode';
      font-style: italic;
      font-weight: 300;
      font-size: 20px;
      top: -30px;
      right: 20%;
    }
  }
  & > p {
    text-align: center;
    font-size: 24px;
    line-height: 1.4;
    margin-top: 36px;
    margin-bottom: 112px;
  }

  ul {
    display: flex;
    flex-direction: column;
    li {
      img {
        width: 280px;
        height: 280px;
      }
      h4 {
        font-weight: 400;
        font-size: 24px;
        strong {
          font-family: 'Ivy Mode';
          font-style: italic;
        }
      }
      p {
        font-size: 16px;
        margin-top: 16px;
        line-height: 1.5;
      }
    }
    li:nth-of-type(1) {
      margin-left: 150px;
    }
    li:nth-of-type(2) {
      align-self: flex-end;
    }
    li:nth-of-type(3) {
    }
    li:nth-of-type(4) {
      align-self: flex-end;
    }
    li:nth-of-type(5) {
      margin-left: 130px;
    }
  }
`;

export const MainSection7CT = styled.section`
  h2 {
    text-align: center;
    color: #040201;
    font-weight: 500;
    font-size: 72px;
    position: relative;
    em {
      position: absolute;
      font-family: 'Ivy Mode';
      font-style: italic;
      font-weight: 300;
      font-size: 20px;
      top: -30px;
      right: 20%;
    }
  }
  & > p {
    text-align: center;
    font-size: 24px;
    line-height: 1.4;
    margin-top: 36px;
    margin-bottom: 72px;
  }
  padding-bottom: 170px;
  .studio_wrapper {
    margin: 0 auto;
    max-width: 1200px;
    height: 740px;
    position: relative;
    img {
      width: 100%;
    }
    & > ul {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      bottom: 40px;
      color: #dddddd;
      font-size: 20px;
      li + li {
        margin-left: 52px;
      }
    }
  }
`;
export const StudioBtnBox = styled.li<{ active: boolean }>`
  transition: all 0.25s;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 0;
    transition: all 0.25s;
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
      color: #fff;
      transform: translateY(-3px);
      svg {
        width: 18px;
        margin: 0 3px;
      }
    `};
`;
export const MainSection8CT = styled.section`
  padding: 224px 0 120px 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #fff;
    display: inline;
    text-align: center;
    font-weight: 500;
    font-size: 72px;
    position: relative;
    em {
      position: absolute;
      font-family: 'Ivy Mode';
      font-style: italic;
      font-weight: 300;
      font-size: 20px;
      top: -30px;
      right: -7%;
    }
  }
  & > p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: 1.4;
    margin-top: 36px;
    /* margin-bottom: 112px; */
  }
`;
