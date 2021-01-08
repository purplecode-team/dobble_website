import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from '../../components/img/arrow.png';
import ProductLogo from '../../components/img/productLogo.png';

const ProductPage = () => {
  return (
    <MainLayout>
      <TitleBox>
        <Title>Products</Title>
        <span>
          <Link to="/product">
            <ArrowImg src={Arrow} alt="arrow" />
          </Link>
        </span>
        <SubTitle>좋은 영향력을 공유할 수 있는 다양한 아이템을 만나보세요.</SubTitle>
      </TitleBox>
      <ImgBox>
        <ImgStyle src={ProductLogo} alt="product" />
      </ImgBox>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/productLogo.png?raw=true');
  background-repeat: no-repeat;
  background-position: 90% center;
  background-size: 700px 700px;
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
    margin-top: 40px;
    position: static;
    width: 100%;
    text-align: center;
  }
`;

const ImgStyle = styled.img`
  width: 100%;
`;

export default ProductPage;
