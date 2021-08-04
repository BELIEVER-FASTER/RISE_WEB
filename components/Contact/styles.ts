import styled from 'styled-components';

export const ContactContainer = styled.div`
  position: relative;
  background-image: url('/img/contact_bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    width: 71.25rem;
    padding-left: 8.125rem;
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
      z-index: 1;
      position: relative;
    }
    img {
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
      margin: 2.75rem 0 7.75rem 0;
    }
    .email {
      display: flex;
      span {
        font-size: 32px;
      }
      a {
        cursor: pointer;
        display: block;
        margin-top: 2rem;
        border-bottom: 3px solid black;
        text-decoration: none;
        color: #000;
      }
      li + li {
        margin-left: 16.25rem;
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
  overflow: hidden;
  p {
    white-space: nowrap;
    position: absolute;
    font-size: 310px;
    font-weight: 500;
    color: #fa370b;
  }
  .start {
    z-index: 0;
    left: 0px;
    top: 4rem;
  }
  .end {
    z-index: 2;
    right: -500px;
    bottom: 4rem;
  }
  img {
    z-index: 1;
    height: 100%;
  }
`;

export const ContactFormContainer = styled.section`
  margin: 3.125rem 0 12rem 0;
  form {
    h3 {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    input[type='checkbox'] {
      width: 1.24rem;
      height: 1.24rem;
      margin-right: 0.56rem;
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
      a {
        color: #000;
        font-weight: 500;
      }
    }
  }
`;
