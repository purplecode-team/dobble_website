import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  background: white;
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
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: rgb(120, 120, 120);
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MenuBox = styled.div`
  margin-top: 5%;
  margin-left: 80px;
  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;

const Text = styled.div`
  color: rgb(100, 100, 100);
  font-size: 1.4rem;
  padding: 10px 0;
`;
export default MainPage;
