import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { BrandsData, MagazineData, ProductsData } from './MenuItemData';

const MenuItem = () => {
  const [openP, setOpenP] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openM, setOpenM] = useState(false);
  const toggleP = () => {
    setOpenP(!openP);
  };
  const toggleB = () => {
    setOpenB(!openB);
  };
  const toggleM = () => {
    setOpenM(!openM);
  };

  return (
    <CategorySection>
      <CategoryDiv>
        <CategoryItem title="Products" data={ProductsData} open={openP} toggle={toggleP} />
        <CategoryItem title="Brands" data={BrandsData} open={openB} toggle={toggleB} />
        <CategoryItem title="Magazine" data={MagazineData} open={openM} toggle={toggleM} />
        <CategoryBox>
          <Top>
            <Title>Our Story</Title>
          </Top>
        </CategoryBox>
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

const CategoryBox = styled.div`
  width: 210px;
  align-items: center;
  display: none;
  @media (max-width: 768px) {
    width: 70vw;
    margin: auto;
    display: block;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-family: Stilu-SemiBold;
  margin: 0;
  font-size: 3rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    cursor: pointer;
    font-size: 2.5rem;
  }
`;

export default MenuItem;
