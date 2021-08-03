import Layout from 'components/Layout/Layout';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
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
    font-family: NHaasGroteskTXPro;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    max-width: 1920px;
    font-size: 237px;
    font-weight: 500;
    padding: 0 44px;
    margin: 1rem auto;
    white-space: nowrap;
  }
`;
export default function main(): JSX.Element {
  return (
    <Layout>
      <MainContainer>
        <img src="/img/main_img.png" alt="main_img" />
        <h1>Unique Live&nbsp;Mcn</h1>
      </MainContainer>
    </Layout>
  );
}
