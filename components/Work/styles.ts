import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const LivePageContainer = styled.div`
  width: 100vw;
  section {
    height: 100vh;
    margin-left: auto;
  }
`;
export const RankSectionContainer = styled.div`
  height: auto !important;
  width: 100%;
  margin-top: 250px;
  margin-bottom: 150px;
  ul {
    width: 70%;
    margin: 0 2.5rem 0 auto;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    li {
      position: relative;
      display: inline-block;
      small {
        font-size: 36px;
      }
      h3 {
        margin-top: 20px;
        line-height: 1.3;
        font-size: 72px;
        font-weight: 500;
      }
      strong {
        display: inline-block;
        width: 30px;
      }
    }
    li + li {
      margin-top: 150px;
    }
    li:nth-of-type(1) {
      align-self: center;
      margin-right: 250px;
    }
    li:nth-of-type(2) {
      align-self: flex-end;
      margin-right: 150px;
    }
    li:nth-of-type(3) {
      right: 0;
    }
  }
  @media ${responSiveSize.tablet} {
    ul {
      width: 75%;
      li {
        h3 {
          font-size: 60px;
        }
        small {
          font-size: 28px;
        }
        strong {
          width: 24px;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    margin-top: 160px;
    margin-bottom: 120px;
    ul {
      width: 100%;
      display: block;
      padding: 0 1.5rem;
      li {
        small {
          font-size: 16px;
        }
        h3 {
          margin-top: 20px;
          font-size: 10vw;
        }
        strong {
          width: 3.5vw;
        }
      }
      li + li {
        margin-top: 120px;
      }
      li:nth-of-type(1) {
        margin-right: 0px;
      }
      li:nth-of-type(2) {
        margin-right: 0px;
      }
    }
  }
`;

export const WorkClientsContainer = styled.div<{ blackMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  transition: all 0.5s;
  h3 {
    margin-top: 100px;
    text-align: center;
    font-size: 92px;
    font-weight: 500;
    color: #000;
    transition: all 0.5s;
  }
  ul {
    margin-top: 150px;
    max-width: 1440px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 70px 0;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 58px;
      }
    }
  }
  p {
    cursor: pointer;
    margin-top: 140px;
    color: #000;
    font-size: 36px;
    font-weight: 500;
    transition: all 0.5s;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ blackMode }) =>
    blackMode &&
    css`
      background-color: #26262e;
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    `}

  @media ${responSiveSize.tablet} {
    ul {
      max-width: 1120px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 40px;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    h3 {
      font-size: 40px;
    }
    ul {
      margin-top: 60px;
      grid-template-columns: repeat(3, 1fr);
      gap: 44px 0;
      li {
        img {
          height: 24px;
        }
      }
    }
    p {
      font-size: 20px;
      margin-top: 70px;
    }
  }
`;

export const WorkProcessContainer = styled.div`
  height: auto;
  .process_container {
    max-width: 70%;
    height: 800vh;
    padding-right: 2.5rem;
    h3 {
      font-size: 92px;
      font-weight: 500;
      margin: 300px 0 150px 0;
    }
    hr {
      height: 3px;
      width: 100%;
      background-color: #000;
    }
    .process_info {
      overflow: hidden;
      display: flex;
      transition: all 0.5s;
      height: 100vh;
      position: sticky;
      top: 0px;
      margin-bottom: 100px;
      padding-top: 100px;
      .shadow {
        width: 900px;
        position: absolute;
        right: 0;
        height: 200px;
        z-index: 90;
      }
      .s_top {
        top: 0;
        background: linear-gradient(
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.85) 42%,
          rgba(255, 255, 255, 0.5) 80%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .s_bottom {
        bottom: 0;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.85) 42%,
          rgba(255, 255, 255, 0.5) 80%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .left {
        height: 240px;
        h4 {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.2;
        }
      }
      .right {
        flex: 1;
        margin-left: 150px;
        margin-bottom: 140px;
        .double_list {
          display: flex;
          justify-content: space-between;
          * {
            flex: 1;
          }
        }
        article {
          position: relative;
          border-top: 1px solid #000;
          padding: 60px 0 110px 0;

          .step {
            position: absolute;
            top: 64px;
            right: 0;
            font-size: 18px;
          }
          .upper {
            margin-top: 60px;
          }
          h5 {
            font-size: 36px;
            font-weight: 500;
          }
          ul {
            margin-top: 38px;
            li {
              font-size: 26px;
              small {
                display: block;
                color: #424242;
                font-size: 17px;
                margin-top: 7px;
                padding-left: 15px;
                line-height: 1.45;
                br.mobile {
                  display: none;
                }
              }
              &::before {
                content: '- ';
              }
            }
            li + li {
              margin-top: 24px;
            }
          }
        }
      }
    }
  }
  @media ${responSiveSize.tablet} {
    .process_container {
      max-width: 75%;
      h3 {
        font-size: 72px;
      }
      .process_info {
        margin-bottom: 0px;
        .left {
          height: 240px;
          h4 {
            font-size: 40px;
          }
        }
        .shadow {
          width: 65%;
          position: absolute;
          right: 0;
          height: 60px;
          z-index: 90;
        }
        .right {
          margin-left: 116px;
          .double_list {
            flex-direction: column;
            ul:last-of-type {
              margin-top: 25px;
            }
          }
          article {
            padding: 48px 0 96px 0;
            .step {
              font-size: 16px;
            }
            h5 {
              font-size: 28px;
            }
            ul {
              li {
                font-size: 20px;
                small {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    .process_container {
      max-width: 100%;
      padding: 0 1.5rem;
      height: auto;
      h3 {
        font-size: 40px;
        margin: 200px 0 0px 0;
      }
      .process_info {
        position: static;
        flex-direction: column;
        margin: 0;
        top: 80px;
        height: auto;
        .shadow {
          width: 100%;
          display: none;
        }
        .s_top {
          top: 133px;
          background: linear-gradient(#fff, rgba(255, 255, 255, 0.3));
        }
        .left {
          height: auto;
          z-index: 1;
          padding-bottom: 60px;
          h4 {
            font-size: 32px;
            font-weight: 500;
            line-height: 1.3;
          }
        }
        .right {
          margin-left: 0;
          article {
            padding: 80px 0 88px 0;

            .upper {
              margin-top: 50px;
            }
            h5 {
              font-size: 28px;
            }
            .step {
              right: auto;
              left: 0;
              top: 50px;
            }
            ul {
              margin-top: 32px;
              li {
                font-size: 20px;
                small {
                  br.mobile {
                    display: initial;
                  }
                }
              }
              li + li {
                margin-top: 20px;
              }
            }
          }
        }
      }
    }
  }
`;

export const ClientLogoBox = styled.i``;
