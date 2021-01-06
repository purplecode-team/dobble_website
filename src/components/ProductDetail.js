import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ProductDetail = ({ data }) => {
  const { alt, title, img, price, brand, banner } = data;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ProductDiv>
      <ProductImgDiv onClick={openModal}>
        <ProductImg src={img} alt={alt} />
      </ProductImgDiv>
      <Text>{brand}</Text>
      <Text>
        <BannerText>{banner}</BannerText>
        {title}
      </Text>
      <Price>{price}</Price>
      <Modal open={isOpen} data={data} closeModal={closeModal} />
    </ProductDiv>
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

export default ProductDetail;
