// 메거진 기사들 ( 제목, 해시태그, 설명)
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setMagazine } from '../../reducer/magazine';

const ArticleIntroduction = ({ data, history }) => {
  const { title, mainImg, hashtag, description } = data;
  const dispatch = useDispatch();

  //해당하는 기사의 내용을 /currentmagazine 페에지에 가서 보여준다.
  const onOpen = (_data) => {
    dispatch(setMagazine(_data));
    history.push('/currentmagazine');
  };
  return (
    <ProductDiv key={title} onClick={() => onOpen(data)}>
      <ProductImgDiv>
        <ProductImg src={mainImg.img} alt={mainImg.alt} />
      </ProductImgDiv>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '12px',
        }}
      >
        <Title>{title}</Title>
        {hashtag && <HashTag>{hashtag}</HashTag>}
      </div>
      <Text>{description}</Text>
    </ProductDiv>
  );
};

const ProductDiv = styled.div`
  display: inline-block;
  margin-top: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
  padding-top: 0;
  cursor: pointer;
  padding-right: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ProductImgDiv = styled.div`
  width: 290px;
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
  font-weight: bold;
  font-family: 'Stilu';
`;
const HashTag = styled.div`
  font-size: 0.8rem;
  width: 73px;
  text-align: center;
  color: white;
  overflow: hidden;
  border-radius: 18px 18px;
  background: #ea404a;
  font-family: 'Stilu';
`;
const Text = styled.div`
  font-size: 0.8rem;
  font-family: 'Arial';
  color: #888888;
  margin-top: 5px;
`;

export default withRouter(ArticleIntroduction);
