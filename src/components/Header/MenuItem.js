import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { BrandsData, MagazineData, ProductsData } from './MenuItemData';

const MenuItem = () => {
  return (
    <CategorySection>
      <CategoryDiv>
        <CategoryItem title="Products" data={ProductsData} />
        <CategoryItem title="Brands" data={BrandsData} />
        <CategoryItem title="Magazine" data={MagazineData} />
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
  width: 65vw;
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
