import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemLayout from './ItemLayout';
import { MagazineCategory, Season } from './categoryData';
import { dummyData } from './MagazineData';
import firebase from '../../firebase/firebase';

const Detail = ({ match, history }) => {
  //firebase database에서 메거진 데이터를 가져와서 magazineData에 저장시켜주기 위한 변수
  const [magazineData, setMagazineData] = useState();

  /* 현재 클릭한 카테고리에 따라서 데이터베이스에 저장된 메거진 중 카테고리에 해당하는 것만 나타낸다 */
  useEffect(() => {
    const magazineArray = [];
    const currentCategory = match.params.category;

    const query = firebase.database().ref('/magazines').orderByKey();

    query.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        if (childData.category === currentCategory) {
          magazineArray.push(childData);
          setMagazineData(magazineArray);
        }
      });
    });
  }, [match.params.category]);

  const onOpen = () => {
    history.push('/magazinepage');
  };
  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        <Top>{match.params.category}</Top>
        {magazineData &&
          magazineData.map(({ title, description, content, hashtag, id }) => (
            <ProductDiv key={title}>
              <ProductImgDiv>
                <ProductImg src={content.img} alt={content.alt} />
              </ProductImgDiv>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Title onClick={onOpen} style={{ cursor: 'pointer' }}>
                  {title}
                </Title>
                <HashTag>{hashtag}</HashTag>
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
