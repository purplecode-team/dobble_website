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
      <Text style={{ fontSize: '0.8rem' }}>{brand}</Text>
      <Text>{title}</Text>
      <Price>
        {banner && <BannerText>{banner}</BannerText>}
        {price}
      </Price>
      <Modal open={isOpen} data={data} closeModal={closeModal} />
    </ProductDiv>
  );
};

const ProductDiv = styled.div`
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 60px;
  padding: 10px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ProductImgDiv = styled.div`
  width: 220px;
  height: 269px;
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
  font-size: 0.6rem;
  margin: 10px 0;
`;

const BannerText = styled.div`
  font-size: 1.4rem;
  color: red;
  display: inline-block;
  margin-right: 10px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`;

export default ProductDetail;
