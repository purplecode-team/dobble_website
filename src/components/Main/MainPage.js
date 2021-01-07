import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MainImg from '../img/illust unit_ae_3.png';

const MainPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const resizeWindow = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  const movePage = (y) => {
    window.scrollTo(0, windowHeight * y);
  };

  return (
    <MainLayout>
      <TitleBox>
        <Title>doble</Title>
        <Title>Make It Double</Title>
        <SubTitle>기부 스토어 브랜드 통합 사이트</SubTitle>
      </TitleBox>
      <ImgBox>
        <MainImgStyle src={MainImg} alt="main" />
      </ImgBox>
      <MenuBox>
        <Text onClick={() => movePage(1)}>Products</Text>
        <Text onClick={() => movePage(2)}>Brands</Text>
        <Text onClick={() => movePage(3)}>Magazine</Text>
        <Text onClick={() => movePage(4)}>Our Story</Text>
      </MenuBox>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/illust%20unit_ae_3.png?raw=true');
  background-repeat: no-repeat;
  background-position: 80% center;
  background-size: 500px 500px;
  height: 100vh;
  @media (max-width: 768px) {
    background: rgb(246, 246, 246);
    overflow: hidden;
  }
`;

const TitleBox = styled.div`
  padding-top: 15vh;
  margin-left: 80px;
  @media (max-width: 768px) {
    padding-top: 120px;
    margin-left: 10%;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: black;
  font-size: 4rem;
  font-family: Stilu-Bold;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: rgb(120, 120, 120);
  font-family: Arial;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MenuBox = styled.div`
  margin-top: 5%;
  margin-left: 80px;
  font-family: Stilu-SemiBold;
  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;

const Text = styled.div`
  width: 150px;
  cursor: pointer;
  color: black;
  font-size: 1.8rem;
  padding: 10px 0;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ImgBox = styled.div`
  display: none;
  width: 38vw;
  top: 15%;
  left: 55vw;
  @media (max-width: 768px) {
    display: block;
    margin-top: 40px;
    position: static;
    width: 100%;
    text-align: center;
  }
`;

const MainImgStyle = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export default MainPage;
