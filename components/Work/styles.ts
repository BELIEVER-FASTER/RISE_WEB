import styled, { css } from 'styled-components';

export const LivePageContainer = styled.div`
  section {
    height: 100vh;
    margin-left: auto;
  }
`;
export const RankSectionContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1366px;
  h3 {
    margin-bottom: 87px;
    span {
      font-size: 20px;
    }
    p {
      font-size: 40px;
      font-weight: 500;
      margin-top: 16px;
    }
  }
  .rank__left {
    & > p {
      height: 227px;
      font-size: 130px;
      margin-left: 80px;
      strong {
        display: inline-block;
        width: 150px;
        font-size: 227px;
        font-weight: 600;
      }
    }
  }
  .rank__right {
    margin-left: 300px;
    & > p {
      height: 227px;
      display: flex;
      align-items: flex-end;
      font-size: 130px;
      line-height: 1.2;
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
    font-size: 72px;
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
`;

export const WorkProcessContainer = styled.div`
  height: auto;
  .process_container {
    max-width: 1366px;
    height: 800vh;
    padding-right: 2.5rem;
    h3 {
      font-size: 72px;
      font-weight: 500;
      margin: 300px 0 150px 0;
      transition: all 0.5s;
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
      height: 75vh;
      position: sticky;
      top: 100px;
      margin-bottom: 100px;
      .shadow {
        width: 900px;
        position: absolute;
        right: 0;
        height: 60px;
        z-index: 90;
      }
      .s_top {
        top: 0;
        background: linear-gradient(#fff, rgba(255, 255, 255, 0.3));
      }
      .s_bottom {
        bottom: 0;
        background: linear-gradient(rgba(255, 255, 255, 0.3), #fff);
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
          padding: 60px 0 120px 0;
          .step {
            position: absolute;
            top: 64px;
            right: 0;
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
                font-size: 18px;
                margin-top: 7px;
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
`;

export const ClientLogoBox = styled.i``;
