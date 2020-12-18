import React from 'react';
import styled from 'styled-components';
import ItemLayout from './ItemLayout';
import { MagazineCategory, Season } from './categoryData';
import useList from '../../hooks/useList';

const Detail = ({ match, history }) => {
  //경로를 hook에 보내줘서 경로에 맞는 firebase 데이터를 받아온다.
  const [magazineData, error, loading] = useList(match);

  const onOpen = () => {
    history.push('/magazinepage');
  };
  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        <Top>{match.params.category}</Top>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {magazineData &&
          magazineData.map((data) => (
            <ProductDiv key={data.title}>
              <ProductImgDiv>
                <ProductImg src={data.contents.img} alt={data.contents.alt} />
              </ProductImgDiv>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Title onClick={() => onOpen(data)} style={{ cursor: 'pointer' }}>
                  {data.title}
                </Title>
                <HashTag>{data.hashtag}</HashTag>
              </div>
              <Text>{data.description}</Text>
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
  width: 60px;
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
export default Detail;
