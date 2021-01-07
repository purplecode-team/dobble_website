import React from 'react';
import styled from 'styled-components';
import { MagazineCategory, Season } from './categoryData';
import ItemLayout from './ItemLayout';
import useList from '../../hooks/useList';

const BrandMagazine = ({ history, match }) => {
  //경로를 hook에 보내줘서 경로에 맞는 firebase 데이터를 받아온다.
  const [magazineData, error, loading, empty] = useList(match);

  const onOpen = (_data) => {
    console.log(_data, 'title');
    history.push('/magazinepage');
  };

  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {empty && <div>매거진이 존재하지 않습니다.</div>}
        {magazineData &&
          magazineData.map((data) => (
            <ProductDiv key={data.title}>
              <FlexBox>
                <ProductImgDiv>
                  <ProductImg src={data.mainImg} alt={data.alt} />
                </ProductImgDiv>
                <Title onClick={() => onOpen(data)} style={{ cursor: 'pointer' }}>
                  {data.title}
                </Title>
                <Text>{data.description}</Text>
              </FlexBox>
            </ProductDiv>
          ))}
      </ItemLayout>
    </div>
  );
};

const ProductDiv = styled.div`
  display: inline-block;
  margin: 40px 80px 70px 0px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 200px;
`;
const ProductImgDiv = styled.div`
  width: 200px;
  height: 200px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-size: 1rem;
  margin: 6px 0;
  font-weight: bold;
  font-family: 'Stilu';
`;
const Text = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  font-family: 'Arial';
`;

export default BrandMagazine;
