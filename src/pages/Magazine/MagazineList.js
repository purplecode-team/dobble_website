import React from 'react';
import styled from 'styled-components';
import { MagazineCategory, Season } from './categoryData';
import { dummyData } from './MagazineData';
import ItemLayout from './ItemLayout';

const MagazineList = ({ history }) => {
  const onOpen = () => {
    history.push('/magazinepage');
  };
  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        <Top>All</Top>
        {dummyData.map(({ title, description, content, hashtage, id }) => (
          <ProductDiv key={id}>
            <ProductImgDiv>
              <ProductImg src={content.img} alt={content.alt} />
            </ProductImgDiv>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Title onClick={onOpen} style={{ cursor: 'pointer' }}>
                {title}
              </Title>
              <HashTag>{hashtage}</HashTag>
            </div>
            <Text>{description}</Text>
          </ProductDiv>
        ))}
      </ItemLayout>
    </div>
  );
};
const Top = styled.div`
  font-size: 1.4rem;
  width: 100%;
  padding-bottom: 20px;
`;

const ProductDiv = styled.div`
  display: inline-block;
  margin-right: 90px;
  margin-bottom: 50px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ProductImgDiv = styled.div`
  width: 300px;
  height: 180px;
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
const Title = styled.div`
  font-size: 1rem;
  margin: 6px 0;
  font-weight: bold;
  font-family: 'Stilu';
`;
const HashTag = styled.div`
  font-size: 0.8rem;
  width: 4vw;
  text-align: center;
  color: white;
  overflow: hidden;
  border-radius: 18px 18px;
  background: gray;
  font-family: 'Stilu';
`;
const Text = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  font-family: 'Arial';
`;

export default MagazineList;
