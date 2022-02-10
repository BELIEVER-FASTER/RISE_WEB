import styled from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const LiveLayoutContainer = styled.div`
  position: relative;
  /* height: 1200vh; */
  @media ${responSiveSize.mobile} {
    /* height: 900vh; */
  }
`;

export const Live1Container = styled.div`
  position: sticky;
  top: 0;
  overflow: hidden;
  #section1 {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    h1 {
      position: absolute;
      top: 28%;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 6vw;
      font-weight: 500;
      z-index: 1;
      span > br {
        display: none;
      }
    }
    .a1_img {
      width: 100%;
      height: 100vh;
      pointer-events: none !important;
      background-image: url('${process.env.NEXT_PUBLIC_S3_SRC}/image/live/sera_0.png');
      background-size: cover;
      background-position: bottom;
      clip-path: polygon(20% 45%, 80% 45%, 80% 100%, 20% 100%);
    }
  }

  #section2 {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
  }
  #section3 {
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .a2_img {
      width: 100%;
      height: 100vh;
      pointer-events: none !important;
      background-size: cover;
      background-position: bottom;
      background-image: url('${process.env.NEXT_PUBLIC_S3_SRC}/image/live/lael_0.png');
    }
  }
  #section4 {
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
  }
  @media ${responSiveSize.mobile} {
    #section1 {
      height: 100%;
      h1 {
        position: absolute;
        left: 0;
        font-size: 44px;
        font-weight: 600;
        top: 29%;
        span > br {
          display: initial;
        }
        span:last-of-type {
          display: block;
          margin-top: 1rem;
        }
      }
      .a1_img {
        background-position: 47% 0;
        clip-path: polygon(12% 50%, 88% 50%, 88% 100%, 12% 100%);
      }
    }
  }
`;

export const ModelInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2.5rem;
  .model_info_name {
    font-size: 12vw;
    font-weight: 500;
  }
  .model_info_desc {
    font-size: 7vw;
    font-weight: 500;
    line-height: 1.1;
    span {
      align-items: center;
    }
    span:last-of-type {
      padding-left: 5rem;
      display: flex;
      gap: 0 1.5rem;
    }
  }
  .line__round_box {
    margin-bottom: 2%;
    padding: 0 3%;
    flex: 1;
    .line__round_wrapper {
      clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
      width: 100%;
      .line__round {
        width: 100%;
      }
    }
  }

  &.section3_model {
    z-index: 5;
    position: absolute;
    bottom: 0;
    color: #000;
    stroke: #000;
  }
  &.section1_model {
    z-index: 3;
    position: absolute;
    bottom: 0;
    color: #000;
    stroke: #000;
  }
  @media ${responSiveSize.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    color: #000 !important;
    svg {
      display: none;
    }
    .model_info_name {
      font-size: 88px;
      margin-bottom: 24px;
    }
    .model_info_desc {
      font-size: 44px;
      span:last-of-type {
        padding-left: 0;
        .red_arrow {
          display: none;
        }
      }
    }
  }
`;

export const ModelSecondContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    transform: translateY(100px);
    opacity: 0;
  }
  .circle {
    align-items: center;
    justify-content: center;
    cursor: none;
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    color: #fff;
    border-radius: 50%;
    background-color: #fa370b;
    z-index: 30;
    opacity: 0;
    font-size: 20px;
    transition: opacity 0.5s;
    span {
      font-weight: 500;
    }
  }
  .model__image_1 {
    top: 38%;
    position: absolute;
    width: 18vw;
    z-index: 2;
    right: 59%;
  }
  .model__image_2 {
    top: 10%;
    position: absolute;
    width: 28vw;
    z-index: 1;
    right: 33%;
  }
  .model__image_3 {
    position: absolute;
    width: 13vw;
    z-index: 0;
    top: 30%;
    right: 10%;
  }
  @media ${responSiveSize.mobile} {
    .model__image_1 {
      width: 28%;
      top: 42%;
      right: 62%;
    }
    .model__image_2 {
      width: 55%;
      top: 21%;
      right: 13%;
    }
    .model__image_3 {
      width: 26%;
      top: 62%;
      right: 10%;
    }
  }
`;

export const LiveBContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  h2 {
    font-size: 40px;
  }
  section {
    width: 72%;
    max-width: 1369px;
    padding-right: 2.5rem;
  }
  .live_b__banner {
    margin-top: 20rem;
    margin-bottom: 4rem;
    h3 {
      font-size: 72px;
      font-weight: 600;
      line-height: 1.3;
      position: relative;
      display: inline-block;
      span {
        z-index: 0;
        position: relative;
      }
      & > div {
        top: 20px;
        z-index: 0;
      }
    }
    p {
      margin-top: 2.5rem;
      line-height: 1.4;
      font-size: 26px;
    }
  }
  .live_b__model_list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5.75rem 2.25rem;
  }
  .more__info {
    height: 25rem;
    font-size: 72px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  @media ${responSiveSize.mobile} {
    section {
      padding: 1.5rem;
      width: 100%;
    }
    .live_b__banner {
      margin-top: 10rem;
      margin-bottom: 10rem;
      h3 {
        font-size: 32px;
        & > div {
          top: 0.6rem;
          right: -0.3rem;
        }
      }
      p {
        margin-top: 1.3rem;
        font-size: 16px;
        br {
          display: none;
        }
        span {
          display: block;
          line-height: 1.5;
        }
      }
    }
    .live_b__model_list {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.75rem 0;
    }
    .more__info {
      font-size: 32px;
      height: 13rem;
    }
  }
`;

export const ModelListItemBox = styled.li`
  transform: translateY(0);
  width: 100%;
  list-style: none;

  .img__wrapper {
    overflow: hidden;
    position: relative;
    transform: translateY(100px);
    opacity: 0;
    z-index: 3;
    img {
      z-index: 3;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .count {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 52px;
      }
      .timer {
        display: flex;
        & > div {
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0 13px;
        }
        span {
          display: block;
          font-size: 0.8vw;
        }
        strong {
          display: block;
          font-size: 3.8vw;
          font-weight: 500;
        }
      }
    }
  }
  article {
    overflow: hidden;
    padding: 2rem 1rem;
    z-index: 1;
    h6 {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      line-height: 1.4;
    }
  }
  .circle {
    align-items: center;
    justify-content: center;
    cursor: none;
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    color: #fff;
    border-radius: 50%;
    background-color: #fa370b;
    z-index: 30;
    opacity: 0;
    font-size: 20px;
    transition: opacity 0.5s;
    span {
      font-weight: 500;
    }
  }
  @media ${responSiveSize.mobile} {
    height: auto;
    margin-bottom: 2rem;
    .img__wrapper {
      .count {
        .timer {
          span {
            font-size: 4vw;
          }
          strong {
            font-size: 12vw;
          }
        }
      }
    }
    article {
      padding: 1.5rem 0.7rem;
    }
    .circle {
      display: none;
    }
  }
`;
