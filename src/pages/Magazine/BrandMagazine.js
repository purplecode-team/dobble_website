// 메거진 첫 페이지로 브랜드 소개해주는 페이지
import React from 'react';
import styled from 'styled-components';
import { MagazineCategory, Season } from './categoryData';
import ItemLayout from './ItemLayout';
import useLoadData from '../../hooks/useLoadData';
import { useScrollTop } from '../../utils/scrollTop';

const BrandMagazine = () => {
  useScrollTop(true);

  //firebase database ref key와 category 이름을 hook에 보내줘서 해당 테이블 해당 카테고리에 맞는 데이터를 받아온다.
  const [magazineData, loading, error, empty] = useLoadData('magazine', 'Brand', 'magazine');

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
                  <ProductImg src={data.mainImg.img} alt={data.mainImg.alt} />
                </ProductImgDiv>
                <Title>{data.title}</Title>
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
  margin: 40px 60px 80px 0px;
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
