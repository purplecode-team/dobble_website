import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemLayout from '../../components/ItemLayout';
import { brandsData, productsData } from '../../components/Header/interface';
import { useScrollTop } from '../../utils/scrollTop';
import ProductDetail from '../../components/ProductDetail';
import useLoadData from '../../hooks/useLoadData';

const Detail = ({ match }) => {
  /* product라면 왼쪽 category에 productsData를 보여주고 brand라면 brandsData를 보여준다 */
  const [category, setCategory] = useState([]);
  const [distinct, setDistinct] = useState(false);
  const pathArray = match.path.split('/');

  useEffect(() => {
    pathArray[1] === 'product' ? setCategory(productsData) : setCategory(brandsData);
  }, [match]);

  // true일때는 brandBanner 적용
  useEffect(() => {
    pathArray[1] === 'product' ? setDistinct(false) : setDistinct(true);
  }, [match]);

  useScrollTop(true);

  //firebase database ref key와 category 이름을 hook에 보내줘서 해당 테이블 해당 카테고리에 맞는 데이터를 받아온다.
  const [firebaseData, loading, error, empty] = useLoadData(
    'product',
    match.params.category,
    pathArray[1],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner distinct={distinct}>
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
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/productBanner.png?raw=true');
  ${(props) =>
    props.distinct &&
    `background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/brandBanner.png?raw=true');
    `}
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
