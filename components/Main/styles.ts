import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const MainSection1CT = styled.section`
  height: 115vh;
  display: flex;
  justify-content: center;
  padding-top: 280px;
  h1 {
    font-weight: 400;
    font-family: 'NHaasGroteskTXPro';
    font-size: 120px;
    z-index: 99;
    strong {
      font-family: 'Ivy Mode';
      margin-right: 12px;
    }
    .bottom_line {
      transition: all 0.4s;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      background-color: #e0e0e0;
      height: 1px;
      animation: lining 3s ease-in-out;
    }
    p .value {
      animation: liningText 3s ease-in-out;
    }
    p {
      overflow: hidden;
    }
    p:nth-of-type(1) {
      /* margin-left: 185px; */
      display: inline-flex;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 0 185px;
    }
    p:nth-of-type(2) {
      font-family: 'Pretendard';
      color: #167df7;
      font-weight: 600;
      margin: 16px 0;
      font-size: 106px;
      position: relative;
      height: 106px;
      display: flex;
      justify-content: center;
      span {
        position: absolute;
        opacity: 0;
        animation: vertical 4s ease infinite 0s;
      }
      span:nth-of-type(1) {
        animation-delay: 1s;
      }
      span:nth-of-type(2) {
        animation-delay: 2s;
      }
      span:nth-of-type(3) {
        animation-delay: 3s;
      }
      span:nth-of-type(4) {
        animation-delay: 4s;
      }
    }
    p:nth-of-type(3) {
      display: inline-flex;
      margin-left: 270px;
      padding: 0 120px;
      position: relative;
    }
  }

  @keyframes lining {
    0% {
      left: 0;
      right: auto;
      width: 0;
    }
    40% {
      width: 100%;
    }
    65% {
      width: 100%;
    }
    100% {
      left: auto;
      right: 0;
      width: 0;
    }
  }
  @keyframes liningText {
    0% {
      transform: translateY(150px) scale(1.7);
    }
    45% {
      transform: translateY(150px) scale(1.7);
    }
    60% {
      transform: translateY(0) scale(1);
    }
    100% {
    }
  }
  @keyframes vertical {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    30% {
      opacity: 0;
      transform: translateY(-100px);
    }
    32% {
      opacity: 1;
    }
    37% {
      opacity: 1;
      transform: translateY(0px);
    }
    53% {
      opacity: 1;
      transform: translateY(0px);
    }
    58% {
      opacity: 1;
    }
    60% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes verticalMobile {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    30% {
      opacity: 0;
      transform: translateY(-40px);
    }
    32% {
      opacity: 1;
    }
    37% {
      opacity: 1;
      transform: translateY(0px);
    }
    53% {
      opacity: 1;
      transform: translateY(0px);
    }
    58% {
      opacity: 1;
    }
    60% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  position: relative;
  .main_banner_video {
    z-index: 2;
    position: absolute;
    bottom: -28.3vh;
    max-width: 1200px;
    video {
      width: 100%;
    }
  }
  @media ${responSiveSize.mobile} {
    height: 80vh;
    padding-top: 144px;
    h1 {
      font-size: 40px;
      z-index: 2;
      font-weight: 400;
      height: auto;
      strong {
        margin-right: 4px;
      }
      text-align: center;
      p:nth-of-type(1) {
        padding: 0;
      }
      p:nth-of-type(2) {
        font-size: 34px;
        height: 34px;
        span {
          position: absolute;
          opacity: 0;
          animation: verticalMobile 4s ease infinite 0s;
        }
      }
      p:nth-of-type(3) {
        margin-left: 0;
        padding: 0;
      }
    }
    .main_banner_video {
      z-index: 1;
      position: absolute;
      bottom: -10vw;
      left: 24px;
      right: 24px;
      height: 340px;
      max-width: 1200px;
      video {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;
export const MainSection2CT = styled.section`
  height: 350vh;
  position: relative;
  margin-top: 302px;
  z-index: 1;
  .wrapper {
    overflow: hidden;
    height: 100vh;
    position: sticky;
    top: 0;
    color: #fff;
    .content {
      width: 100%;
      height: 100vh;
      background-image: url('/img/ver2/main_background.png');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        margin-bottom: 12%;
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
  }
  @media ${responSiveSize.mobile} {
    height: 250vh;
    margin-top: 50px;
    background-color: #000;
    position: relative;
    .wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      .content {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        h2 {
          font-size: 36px;
          opacity: 0;
        }
      }
    }
  }
`;
export const MainSection3CT = styled.section`
  /* height: 100vh; */
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 140px 0 212px 0;
  h2 {
    text-align: center;
    color: #fff;
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
      right: -1rem;
    }
  }
  & > p {
    text-align: center;
    font-size: 24px;
    line-height: 1.4;
    margin-top: 36px;
    margin-bottom: 68px;
  }
  ul.type_nav {
    display: flex;
    align-items: center;
    margin-bottom: 88px;
    li + li {
      margin-left: 24px;
    }
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      span {
        color: #b6b6bd;
        transition: all 0.25s;
      }
      .dot {
        width: 24px;
        height: 24px;
        border: 2px solid #fff;
        margin-right: 6px;
        border-radius: 99px;
        transition: all 0.25s;
      }
      &.active {
        span {
          color: #fff;
          font-weight: bold;
        }
        .dot {
          border: 6px solid #167df7;
          margin-right: 6px;
          border-radius: 99px;
          background-color: #fff;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 120px 24px 120px 24px;
    overflow: hidden;
    h2 {
      font-size: 34px;
      em {
        font-size: 14px;
        top: -16px;
      }
    }
    & > p {
      font-size: 16px;
      margin-top: 24px;
      margin-bottom: 40px;
    }
  }
`;
export const MainSection4CT = styled.section`
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
    .img_wrapper {
      img {
        width: 100%;
      }
    }
    article {
      width: 824px;
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
          transition: all 0.3s;
          &:hover {
            background-color: #167df7;
            color: #fff;
            border-color: #167df7;
          }
        }
      }
      display: flex;
      justify-content: space-between;
    }
  }
  @media ${responSiveSize.mobile} {
    padding: 80px 0;
    .title {
      padding: 0 24px;
      margin-bottom: 64px;
      position: relative;
      & > span {
        font-size: 14px;
        position: absolute;
        top: -20px;
      }
      article {
        h2 {
          font-size: 36px;
          margin-bottom: 32px;
        }
        p {
          line-height: 1.5;
          font-size: 16px;
        }
      }
    }
    .app_info {
      padding: 0 24px;
      width: 100%;
      .img_wrapper {
        width: 100%;
        img {
          width: 100%;
        }
      }
      article {
        width: auto;
        display: flex;
        flex-direction: column;
        h3 {
          br {
            display: none;
          }
          font-size: 20px;
          font-weight: 400;
        }
        p {
          margin-top: 20px;
          span {
            font-size: 14px;
          }
          a {
            margin-top: 24px;
          }
        }
      }
    }
  }
`;

export const MainSection5CT = styled.section`
  height: 350vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  .text {
    position: relative;
    margin-top: 630px;
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
  br.mobile {
    display: none;
  }
  @media ${responSiveSize.mobile} {
    .content {
      .background_video {
      }
    }
    br.mobile {
      display: initial;
    }
    .text {
      h3 {
        font-size: 36px;
        line-height: 1.1;
        strong {
          font-family: 'Ivy Mode';
          font-style: italic;
        }
      }
      p {
        font-size: 15px;
        line-height: 1.5;
        margin-top: 24px;
      }
    }
  }
`;
export const SectionWithBanner = styled.div`
  position: relative;
`;
export const LineBannerCT = styled.aside`
  z-index: 59;
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
  @media ${responSiveSize.mobile} {
    padding: 120px 0;
    svg {
      display: none;
    }
    h2 {
      font-size: 36px;
      em {
        font-size: 14px;
        top: -20px;
        right: 20%;
      }
    }
    & > p {
      margin-top: 24px;
      font-size: 16px;
      margin-bottom: 46px;
    }
    ul {
      align-items: center;
      padding: 0 24px;
      gap: 60px;
      li {
        display: flex;
        flex-direction: column;
        width: 100%;
        img {
          align-self: center;
          width: 260px;
          height: 260px;
          object-fit: cover;
        }
        h4 {
          font-size: 17px;
          font-weight: 500;
        }
        p {
          font-size: 13px;
        }
      }
      li:nth-of-type(1) {
        margin-left: 0px;
      }
      li:nth-of-type(2) {
        align-self: center;
      }
      li:nth-of-type(3) {
      }
      li:nth-of-type(4) {
        align-self: center;
      }
      li:nth-of-type(5) {
        margin-left: 0px;
      }
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
  .studio_wrapper_mobile {
    display: none;
  }
  @media ${responSiveSize.mobile} {
    h2,
    & > p {
      padding: 0 24px;
    }
    h2 {
      font-size: 36px;
    }
    & > p {
      font-size: 16px;
    }
    .studio_wrapper {
      display: none;
    }
    .studio_wrapper_mobile {
      display: initial;
    }
    .slick-track {
      width: 100%;
      .slick-slide {
        & > div {
          width: 100%;
        }
        .item {
          width: 100%;
          img {
            width: 100%;
            height: 54vw;
            object-fit: cover;
          }
          article {
            margin: 12px 0;
            display: flex;
            justify-content: space-between;
            font-weight: 300;
            p {
              color: #888;
              strong {
                color: #000;
              }
            }
          }
        }
      }
      .slick-slide + .slick-slide {
        padding-left: 12px;
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
  /* background-color: #000; */
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
  @media ${responSiveSize.mobile} {
    padding: 140px 0 60px 0;
    h2 {
      font-size: 36px;
      em {
        font-size: 14px;
        top: -16px;
      }
    }
    & > p {
      font-size: 15px;
      line-height: 1.5;
      margin-top: 24px;
    }
  }
`;
