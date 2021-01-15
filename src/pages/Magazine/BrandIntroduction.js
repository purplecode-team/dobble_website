// 브랜드 설명 (이미지, 브랜드 이름, 브랜드 상세 설명)
import React from 'react';
import styled from 'styled-components';

const BrandIntroduction = ({ data }) => {
  const { title, mainImg, description } = data;
  return (
    <ProductDiv key={title}>
      <FlexBox>
        <ProductImgDiv>
          <ProductImg src={mainImg.img} alt={mainImg.alt} />
        </ProductImgDiv>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </FlexBox>
    </ProductDiv>
  );
};
const ProductDiv = styled.div`
  display: inline-block;
  margin: 40px 60px 80px 0px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 200px;
`;
const ProductImgDiv = styled.div`
  width: 200px;
  height: 200px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-size: 1rem;
  margin: 6px 0;
  font-weight: bold;
  font-family: 'Stilu';
`;
const Text = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  font-family: 'Arial';
`;
export default BrandIntroduction;
