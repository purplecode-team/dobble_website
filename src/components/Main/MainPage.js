import React, { useEffect, useState } from 'react';
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
  return (
    <div>
      <MainLayout style={{ height: `${windowHeight}px` }}>
        <span>x {windowHeight}</span>
        <TitleBox>
          <Title>doble</Title>
          <Title>Make It Double</Title>
          <SubTitle>기부 스토어 브랜드 통합 사이트</SubTitle>
        </TitleBox>
        <ImgBox>
          <MainImgStyle src={MainImg} alt="main" />
        </ImgBox>
        <MenuBox>
          <Text>Products</Text>
          <Text>Brands</Text>
          <Text>Magazine</Text>
          <Text>Our Story</Text>
        </MenuBox>
      </MainLayout>
    </div>
  );
};

const MainLayout = styled.div`
  background: rgb(246, 246, 246);
`;

const TitleBox = styled.div`
  margin-top: 113px;
  margin-left: 80px;
  @media (max-width: 768px) {
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
  color: black;
  font-size: 1.8rem;
  padding: 10px 0;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  width: 38vw;
  top: 15%;
  left: 55vw;
  @media (max-width: 768px) {
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
