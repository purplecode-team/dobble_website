import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropIcon from '../img/dropIcon.png';

const CategoryItem = ({ title, data, open, toggle }) => {
  return (
    <div>
      <CategoryBox>
        <Top onClick={toggle}>
          <Title>{title}</Title>
          <DropImg src={DropIcon} alt="drop" />
        </Top>
        <Content open={open}>
          {data.map(({ key, content, link }) => (
            <Text key={key} href={link}>
              <StyledLink to={link}>{content}</StyledLink>
            </Text>
          ))}
        </Content>
      </CategoryBox>
    </div>
  );
};

const CategoryBox = styled.div`
  width: 210px;
  align-items: center;
  @media (max-width: 768px) {
    width: 70vw;
    margin: auto;
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

const Content = styled.div`
  font-size: 1.5rem;
  z-index: 10;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.div`
  margin-bottom: 10px;
`;

const DropImg = styled.img`
  visibility: hidden;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-left: auto;
  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export default CategoryItem;
