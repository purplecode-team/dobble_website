import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Arrow from '../img/arrow.png';
import MagazineLogo from '../img/magzineLogo.png';

const MagazinePage = () => {
  return (
    <MainLayout>
      <TitleBox>
        <Title>Magazine</Title>
        <span>
          <Link to="/magazine">
            <ArrowImg src={Arrow} alt="arrow" />
          </Link>
        </span>
        <SubTitle>기부 스토어 브랜드와 기부처에 따른 아이템을 확인해 보세요.</SubTitle>
      </TitleBox>
      <ImgBox>
        <ImgStyle src={MagazineLogo} alt="magazine" />
      </ImgBox>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/feature/magazine/src/components/img/magzineLogo.png?raw=true');
  background-repeat: no-repeat;
  background-position: 80% 40%;
  background-size: 500px auto;
  @media (max-width: 768px) {
    background: rgb(246, 246, 246);
  }
  height: 100vh;
`;

const TitleBox = styled.div`
  padding-top: 34vh;
  margin-left: 80px;
  @media (max-width: 768px) {
    margin-left: 10%;
    padding-top: 120px;
  }
`;

const Title = styled.h1`
  display: inline;
  margin: 0;
  padding: 0;
  color: black;
  font-size: 4.6rem;
  font-family: Stilu-Bold;
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const ArrowImg = styled.img`
  display: inline;
  padding-left: 40px;
  width: 80px;
  @media (max-width: 768px) {
    width: 40px;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: rgb(120, 120, 120);
  font-family: Arial;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const ImgBox = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-top: 80px;
    position: static;
    width: 100%;
    text-align: center;
  }
`;

const ImgStyle = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default MagazinePage;
