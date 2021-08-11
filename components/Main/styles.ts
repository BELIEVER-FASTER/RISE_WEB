import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    max-width: 120rem;
    font-family: 'NHaasGroteskTXPro';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 11.3vw;
    font-weight: 500;
    padding: 0 2.5rem;
    margin: 1.6rem auto;
    text-align: justify;
    height: 11.6vw;
    overflow: hidden;
    white-space: nowrap;
    br {
      display: none;
    }
    span {
      opacity: 0;
      display: inline-block;
      transform: translateY(11.6vw);
    }
    @keyframes showUp {
      from {
        transform: translateY(11.6vw);
      }
      to {
        opacity: 1;
        transform: translateY(0vw);
      }
    }
    ${() => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      return css`
        ${arr.map(
          num => `span:nth-of-type(${num}){
        animation: showUp 0.4s ease ${num * 0.1 + 0.5}s forwards;
    }`
        )}
      `;
    }}
  }
  h1:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
  @media ${responSiveSize.mobile} {
    h1 {
      height: 40.2vw;
      padding: 0 1.5rem;
      white-space: normal;
      text-align: left;
      font-size: 18.3vw;
      line-height: 1.2;
      br {
        display: initial;
      }
    }
  }
`;
