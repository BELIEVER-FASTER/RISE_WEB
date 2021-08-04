import Layout from 'components/Layout/Layout';
import React from 'react';
import styled from 'styled-components';
// import dynamic from 'next/dynamic';
import Input from 'components/Common/Input';
import Textarea from 'components/Common/Textarea';
import Button from 'components/Common/Button';
import { useEffect } from 'react';

// const Contact = dynamic(() => import('components/Animation/Contact'), { ssr: false });

const ContactContainer = styled.main`
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
  .contact__banner {
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
  }
  .contact__info {
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
  }
  #contact-animation__box {
    height: 50rem;
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
      left: -6.25rem;
      top: 64px;
    }
    .end {
      z-index: 2;
      right: -103rem;
      bottom: 4rem;
    }
    img {
      z-index: 1;
      height: 100%;
    }
  }
  .contact__form {
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
  }
`;

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <Layout>
      <ContactContainer>
        <section className="contact__banner">
          <h1>
            <img src="/img/scroll_down.svg" alt="scroll_down" />
            <span>Contact Us</span>
          </h1>
          <p>
            우리는 패션 & 코스메틱 라이브쇼핑을
            <br />
            디렉팅하는 live mcn ‘rise 기업입니다.
          </p>
        </section>
        <section className="contact__info">
          <article>
            <p>
              서울특별시 종로구 동숭길 133
              <br />
              상명대학교 대학로 AI융합센터 1층
            </p>
            <p className="tell">+82 02 1234 4324</p>
            <ul className="email">
              <li>
                <span>라이브 진행 문의</span>
                <a href="mailto:ProjectOfficial@gmail.com">ProjectOfficial@gmail.com</a>
              </li>
              <li>
                <span>쇼호스트 지원</span>
                <a href="mailto:ProjectOfficial@gmail.com">Official@gmail.com</a>
              </li>
            </ul>
          </article>
        </section>
        <div id="contact-animation__box">
          <p className="start">START A</p>
          <img src="/img/live_mock.png" alt="phone" />
          <p className="end">NEW PROJECT</p>
        </div>
        <section className="contact__form">
          <form>
            <h3>서비스 문의</h3>
            <div className="contact__field">
              <Input placeholder="이름" />
              <Input placeholder="연락처" />
            </div>
            <div className="contact__field">
              <Input placeholder="기업/브랜드명" />
              <Input placeholder="이메일" />
            </div>
            <Textarea
              height={274}
              placeholder="프로젝트 내용, 일정등 자세한 정보를 알려주세요"
            />
            <div className="term_box">
              <input type="checkbox" />
              <a target="_blank" href="/">
                개인정보 수집 및 이용약관
              </a>
              <span>에 동의합니다.</span>
            </div>
            <Button label="문의하기" disabled />
          </form>
        </section>
      </ContactContainer>
    </Layout>
  );
}
