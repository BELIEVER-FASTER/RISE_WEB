import styled from 'styled-components';

export const LiveLayoutContainer = styled.div`
  position: relative;
  height: 1100vh;
`;

export const Live1Container = styled.div`
  position: sticky;
  top: 0;
  #section1 {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    h1 {
      position: absolute;
      top: 27%;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 116px;
      font-weight: 500;
      z-index: 1;
    }
    .a1_img {
      width: 100%;
      height: 100vh;
      pointer-events: none !important;
      background-image: url('https://lh3.googleusercontent.com/gi2gw9Pp94p42I7hbc3PBQemUMKkB6vv0u9jDAxxyG3djMJXztvtblwTKQOAKpdiOAp83z-iwzff80HAsrR6fzmXzv9AFRF6Jj289g9vHF2vRNfFSjprbPIQqC8v07ab1U8OXyeU=w2400');
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
      background-image: url('https://lh3.googleusercontent.com/9eelykYI_qN9EdegIfP7SprjrVkF1p6mvagkgEWYTN1RzNdf3ggMSgLzYtIIqH-d0xMtiK1ll_4poh1nLxQm2R7zwPkQA6CynyIJi_GTwXWJAQjDqKBjg98_NPQ1TW9u7NHMLpru=w2400');
      background-size: cover;
      background-position: bottom;
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
`;

export const ModelInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2.5rem;
  .model_info_name {
    font-size: 227px;
    font-weight: 500;
  }
  .model_info_desc {
    font-size: 130px;
    font-weight: 500;
    span {
      align-items: center;
    }
    span:last-of-type {
      padding-left: 5rem;
      display: flex;
    }
  }
  .line__round {
    margin-bottom: 4%;
  }
  &.section3_model {
    transform: translateY(300px);
    z-index: 9;
    position: absolute;
    bottom: 0;
    color: #fff;
    stroke: #fff;
    opacity: 0;
  }
  &.section1_model {
    z-index: 3;
    position: absolute;
    bottom: 0;
    color: #fff;
    stroke: #fff;
  }
`;

export const ModelSecondContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    transform: translateY(100px);
  }
  .model__image_1 {
    opacity: 0;
    top: 38%;
    position: absolute;
    width: 18vw;
    z-index: 2;
    right: 59%;
  }
  .model__image_2 {
    opacity: 0;
    top: 10%;
    position: absolute;
    width: 28vw;
    z-index: 1;
    right: 33%;
  }
  .model__image_3 {
    opacity: 0;
    position: absolute;
    width: 13vw;
    z-index: 0;
    top: 30%;
    right: 10%;
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
    width: 100%;
    max-width: 1369px;
    padding-right: 2.5rem;
  }
  .live_b__banner {
    margin-top: 23rem;
    margin-bottom: 21.25rem;
    h3 {
      font-size: 72px;
      font-weight: 600;
      line-height: 1.3;
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
    gap: 9.75rem 2.25rem;
  }
  .more__info {
    height: 25rem;
    font-size: 72px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    h3 {
      border-bottom: 2px solid #fff;
    }
    h3:hover {
      cursor: pointer;
      border-bottom: 2px solid #000;
    }
  }
`;

export const ModelListItemBox = styled.li`
  transform: translateY(0);
  width: 100%;
  height: 46.9rem;
  list-style: none;
  .img__wrapper {
    opacity: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    overflow: hidden;
    padding: 2rem 1rem;
    h6 {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      font-size: 18px;
      line-height: 1.4;
    }
  }
`;
