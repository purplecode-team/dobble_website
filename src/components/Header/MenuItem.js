import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { brandsData, magazineData, productsData } from './interface';

const MenuItem = () => {
  return (
    <CategorySection>
      <CategoryDiv>
        <CategoryItem title="Products" data={productsData} />
        <CategoryItem title="Brands" data={brandsData} />
        <CategoryItem title="Magazine" data={magazineData} />
      </CategoryDiv>
    </CategorySection>
  );
};

const CategorySection = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
`;

const CategoryDiv = styled.div`
  display: flex;
  width: 64vw;
  justify-content: space-between;
  margin: 7vh auto;
  @media (max-width: 768px) {
    display: block;
    margin: 7vh auto;
    width: 100vw;
    height: 78vh;
    overflow: auto;
  }
`;

export default MenuItem;
