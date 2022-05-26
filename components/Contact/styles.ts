import styled from 'styled-components';
import { imageResources } from 'utils/imageResource';
import { responSiveSize } from 'utils/style_opt';

export const ContactContainer = styled.div`
  position: relative;
  background-image: url(${imageResources.contactBg});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  section {
    width: 71.25rem;
    padding-left: 8.125rem;
  }
  @media ${responSiveSize.tablet} {
    section {
      width: 100%;
      padding-left: 0;
      padding: 1.5rem;
    }
  }
  @media ${responSiveSize.mobile} {
    overflow-x: hidden;
    section {
      width: 100%;
      padding-left: 0;
      padding: 1.5rem;
    }
  }
`;

export const ContactBannerContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    position: relative;
    font-size: 8.125rem;
    font-weight: 600;
    span {
      display: block;
      z-index: 1;
      position: relative;
    }
    .lottie_contact {
      z-index: 0;
      position: absolute;
      top: -40%;
      right: -3.125rem;
    }
  }
  p {
    margin: 4rem 0 0 8.75rem;
    line-height: 1.4;
    font-size: 26px;
    br:last-of-type,
    br:first-of-type {
      display: none;
    }
  }
  @media ${responSiveSize.tablet} {
    align-items: center;
    p {
      margin: 4rem 0 0 0;
    }
  }
  @media ${responSiveSize.mobile} {
    height: 75vh;
    align-items: center;
    h1 {
      font-size: 3.3rem;
      & > div {
        top: -1rem;
        right: -1rem;
      }
      img {
        width: 3.25rem;
        height: 3.25rem;
        right: -1.125rem;
      }
    }
    p {
      margin: 0;
      margin-top: 1.75rem;
      line-height: 1.4;
      font-size: 20px;
      br:last-of-type,
      br:first-of-type {
        display: initial;
      }
      br:nth-of-type(2) {
        display: none;
      }
    }
  }
`;

export const ContactInfoContainer = styled.section`
  height: 31.25rem;
  display: flex;
  align-items: center;
  article {
    p,
    a {
      font-size: 40px;
      font-weight: 500;
      line-height: 1.2;
    }
    .tell {
      margin: 2.25rem 0 7.75rem 0;
    }
    .email {
      display: flex;
      span {
        display: block;
        font-size: 32px;
        color: #444444;
      }
      a {
        cursor: pointer;
        display: inline-block;
        margin-top: 2rem;
        text-decoration: none;
        border-bottom: 3px solid #fff;
        color: #000;
        &:hover {
          border-bottom: 3px solid black;
        }
      }
      li + li {
        margin-left: 16.25rem;
      }
    }
  }
  @media ${responSiveSize.tablet} {
    article {
      max-width: 878.406px;
      margin-left: 10vw;
      margin: 0 auto;
      .email {
        flex-wrap: wrap;
        gap: 50px;
        li + li {
          margin-left: 0;
        }
      }
    }
  }
  @media ${responSiveSize.mobile} {
    article {
      display: flex;
      flex-direction: column;
      margin-left: 10vw;
      p,
      a {
        font-size: 21px;
      }
      .email {
        flex-direction: column;
        span {
          font-size: 18px;
        }
        a {
          margin-top: 1.4rem;
        }
        li + li {
          margin-left: 0;
          margin-top: 1.75rem;
        }
      }
    }
  }
`;

export const ContactPhoneContainer = styled.div`
  height: 49.18rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18.75rem 0;
  p {
    white-space: nowrap;
    position: absolute;
    font-size: 310px;
    font-weight: 500;
    color: #167df7;
    font-family: 'NHaasGroteskTXPro';
  }
  .start {
    z-index: 0;
    left: 0px;
    top: 4rem;
  }
  .end {
    z-index: 2;
    right: -500px;
    bottom: 0rem;
  }
  img {
    z-index: 1;
    width: 1130px;
    object-fit: cover;
    margin-bottom: 230px;
  }
  @media ${responSiveSize.mobile} {
    margin: 6.75rem 0;
    height: 20rem;
    p {
      font-size: 90px;
    }
    .start {
      z-index: 0;
      left: 0px;
      top: 4rem;
    }
    .end {
      z-index: 2;
      right: -00px;
      bottom: 4rem;
    }
    img {
      width: 95%;
      height: auto;
      margin-bottom: 100px;
    }
  }
`;

export const ContactFormContainer = styled.section`
  margin: 3.125rem 0 12rem 0;
  form {
    padding-bottom: 10rem;
    width: 1200px;
    h3 {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 1rem;
      br.mobile {
        display: none;
      }
    }
    input[type='checkbox'] {
      width: 1.24rem;
      height: 1.24rem;
      margin-right: 0.56rem;
    }
    .budget__field {
      display: flex;
      margin-bottom: 10rem;
      margin-top: 3rem;
      & > div {
        flex: 1;
      }
      & > div:first-of-type {
        margin-right: 2.7rem;
      }
      & > .date_input {
        margin-left: 2.7rem;
      }
    }
    .contact__field {
      display: flex;
      margin: 5rem 0;
      & > div {
        flex: 1;
      }
      & > div:first-of-type {
        margin-right: 2.7rem;
      }
      & > div:last-of-type {
        margin-left: 2.7rem;
      }
    }
    .term_box {
      margin: 1.75rem 0 5rem 0;
      font-size: 20px;
      display: flex;
      align-items: center;
      color: #fff;
      strong {
        color: #000;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;

        color: #fff;
      }
    }
  }

  button {
    color: #fff;
    background: #167df7;
    border-radius: 99px;
    outline: none;
    border: none;
    width: 100%;
    padding: 40px 0;
    font-size: 40px;
    cursor: pointer;
    &:disabled {
      cursor: no-drop;
      background: #c4c4c4;
    }
  }
  @media ${responSiveSize.tablet} {
    margin: 0 auto;
    max-width: 1010px;
  }
  @media ${responSiveSize.mobile} {
    form {
      padding: 1rem;
      padding-bottom: 5rem;
      h3 {
        font-size: 32px;
        margin-bottom: 0rem;
        line-height: 1.4;
        br.mobile {
          display: initial;
        }
      }
      .budget__field {
        display: block;
        margin-bottom: 0rem;
        margin-top: 0rem;
        & > div {
          flex: auto;
          margin-top: 3rem;
        }
        & > div:first-of-type {
          margin-right: 0rem;
          z-index: 90;
        }
        & > .date_input {
          margin-left: 0rem;
          margin-bottom: 4rem;
        }
      }
      .contact__field {
        margin: 0 0 0 0;
        flex-direction: column;
        & > div {
          margin-top: 3rem;
        }
        & > div:first-of-type,
        & > div:last-of-type {
          margin: 0rem;
          margin-top: 3rem;
        }
      }
      .term_box {
        margin: 1rem 0 4.1rem 0;
        font-size: 14px;
      }
      #contact_content {
        margin-top: 3rem;
      }
      textarea {
        height: 100%;
      }
    }
  }
`;
