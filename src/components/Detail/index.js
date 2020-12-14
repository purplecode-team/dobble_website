import React from 'react';
import styled from 'styled-components';
import ItemLayout from '../ItemLayout';
import { productsData } from '../Header/interface';
import { dummyData } from '../dummyData';

const Detail = ({ match }) => {
  return (
    <div>
      <Banner>
        <Desc>
          <Title>{match.params.category}</Title>
          <SubDesc>기부 스토어 브랜드와 기부처에 따른 아이템을 확인해 보세요</SubDesc>
        </Desc>
      </Banner>
      <ItemLayout data={productsData}>
        {dummyData.map(({ alt, title, link, img, price, brand, banner }) => (
          <ProductDiv key={alt} href={link}>
            <ProductImgDiv>
              <ProductImg src={img} alt={alt} />
            </ProductImgDiv>
            <Text>{brand}</Text>
            <Text>
              <BannerText>{banner}</BannerText>
              {title}
            </Text>
            <Price>{price}</Price>
          </ProductDiv>
        ))}
      </ItemLayout>
    </div>
  );
};

const ProductDiv = styled.div`
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 10px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ProductImgDiv = styled.div`
  width: 220px;
  height: 300px;
  overflow: hidden;
  border-radius: 18px 18px;
  background: rgb(220, 220, 220);
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Text = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
`;

const BannerText = styled.div`
  background: yellow;
  font-size: 0.8rem;
  color: rgb(100, 100, 100);
  display: inline-block;
  margin-right: 5px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Banner = styled.div`
  height: 70vh;
  width: 100%;
  background: rgb(212, 212, 212);
`;

const Desc = styled.div`
  padding: 0 80px;
  padding-top: 140px;
  @media (max-width: 768px) {
    padding: 0 40px;
    padding-top: 140px;
  }
`;

const SubDesc = styled.div`
  color: rgb(70, 70, 70);
  font-size: 0.8rem;
  margin-top: 40px;
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
`;

export default Detail;
