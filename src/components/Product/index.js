import React from 'react';
import styled from 'styled-components';

import PLayout from './PLayout';

const Product = () => {
  return (
    <div>
      <Banner>
        <Desc>
          <SubDesc>기부 스토어 브랜드와 기부처에 따른 아이템을 확인해 보세요</SubDesc>
          <Title>Product</Title>
          <Title>2020 F/W</Title>
        </Desc>
      </Banner>
      <PLayout>
        <div>page</div>
      </PLayout>
    </div>
  );
};

const Banner = styled.div`
  height: 80vh;
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
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  margin-top: 10px;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
`;

export default Product;
