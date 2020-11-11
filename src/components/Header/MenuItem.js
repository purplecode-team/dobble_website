import React, { useState } from 'react';
import styled from 'styled-components';
import DropIcon from '../img/dropIcon.png';
import { ProductsData, BrandsData, MagazineData } from './MenuItemData';

const MenuItem = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <CategorySection>
      <CategoryDiv>
        <CategoryBox>
          <Top onClick={() => toggle()}>
            <Title>Products</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content open={open}>
            {ProductsData.map(({ key, content, link }) => (
              <Text key={key} href={link}>
                {content}
              </Text>
            ))}
          </Content>
        </CategoryBox>
        <CategoryBox mid>
          <Top>
            <Title>Brands</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content>
            {BrandsData.map(({ key, content, link }) => (
              <Text key={key} href={link}>
                {content}
              </Text>
            ))}
          </Content>
        </CategoryBox>
        <CategoryBox>
          <Top>
            <Title>Magazine</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content>
            {MagazineData.map(({ key, content, link }) => (
              <Text key={key} href={link}>
                {content}
              </Text>
            ))}
          </Content>
        </CategoryBox>
        <CategoryBox mobile>
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
  }
`;

const CategoryBox = styled.div`
  width: 210px;
  align-items: center;
  ${(props) => props.mid && `margin-left: 20px;`}
  ${(props) => props.mobile && `display: none;`}

  @media (max-width: 768px) {
    width: 70vw;
    margin: auto;
    ${(props) => props.mobile && `display: block;`}
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Content = styled.div`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
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

const Text = styled.div`
  margin-bottom: 10px;
`;

const DropImg = styled.img`
  visibility: hidden;
  width: 15px;
  height: 15px;
  margin-left: auto;
  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export default MenuItem;
