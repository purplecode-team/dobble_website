import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemLayout from '../../components/ItemLayout';
import { brandsData, productsData } from '../../components/Header/interface';
import useList from '../../hooks/useList';
import { useScrollTop } from '../../utils/scrollTop';
import ProductDetail from '../../components/ProductDetail';

const Detail = ({ match }) => {
  useScrollTop(true);
  //경로를 hook에 보내줘서 경로에 맞는 firebase 데이터를 받아온다.
  const [firebaseData, error, loading, empty] = useList(match);

  /* product라면 왼쪽 category에 productsData를 보여주고 brand라면 brandsData를 보여준다 */
  const [category, setCategory] = useState([]);
  const pathArray = match.path.split('/');

  useEffect(() => {
    pathArray[1] === 'product' ? setCategory(productsData) : setCategory(brandsData);
  }, [match]);

  useScrollTop(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner>
        <Desc>
          <Title>{match.params.category}</Title>
          <SubDesc>기부 스토어 브랜드와 기부처에 따른 아이템을 확인해 보세요</SubDesc>
        </Desc>
      </Banner>
      <ItemLayout data={category}>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {empty && <div>상품이 존재하지 않습니다.</div>}
        {firebaseData && firebaseData.map((data) => <ProductDetail key={data.alt} data={data} />)}
      </ItemLayout>
    </div>
  );
};

const Banner = styled.div`
  height: 70vh;
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
  margin-top: 40px;
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
`;

export default Detail;
