import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MagazineCategory, Season } from './categoryData';
import ItemLayout from './ItemLayout';
import firebase from '../../firebase/firebase';

const MagazineList = ({ history }) => {
  //firebase database에서 메거진 데이터를 가져와서 magazineData에 저장시켜주기 위한 변수
  const [magazineData, setMagazineData] = useState();

  useEffect(() => {
    const magazineRef = firebase.database().ref('/magazines');

    magazineRef.once('value').then(function (snapshot) {
      const FirebaseData = snapshot.val();
      console.log('MagazineData', FirebaseData);
      setMagazineData(FirebaseData);
    });
  }, []);

  const onOpen = (_data) => {
    console.log(_data, 'title');
    history.push('/magazinepage');
  };
  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        <Top>All</Top>
        {console.log(magazineData)}
        {magazineData &&
          magazineData.map((data) => (
            <ProductDiv key={data.title}>
              <ProductImgDiv>
                <ProductImg src={data.content.img} alt={data.content.alt} />
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
  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 1rem;
  }
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

export default MagazineList;
