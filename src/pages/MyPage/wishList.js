import React from 'react';
import styled from 'styled-components';
import { wishListData } from './wishListData';

const WishList = () => {
  return (
    <WishListContainer>
      {wishListData.map(({ alt, title, link, img, price, brand, banner }) => (
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
    </WishListContainer>
  );
};
const WishListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6vh;
`;
const ProductDiv = styled.div`
  margin-bottom: 3vh;
  width: 105px;
  height: 200px;
  margin-bottom: 5vh;
  margin-right: 1.8vw;
  @media (max-width: 768px) {
    width: 90px;
    height: 180px;
    margin-right: 2.5vw;
  }
`;

const ProductImgDiv = styled.div`
  width: 105px;
  height: 130px;
  overflow: hidden;
  border-radius: 18px 18px;
  background: rgb(220, 220, 220);
  @media (max-width: 768px) {
    width: 90px;
    height: 120px;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const BannerText = styled.div`
  background: yellow;
  font-size: 0.8rem;
  color: rgb(100, 100, 100);
  display: inline-block;
  margin-right: 5px;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default WishList;
