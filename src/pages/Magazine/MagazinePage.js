import React from 'react';
import styled from 'styled-components';
import { Container, Img } from '../MyPage/MyPageStyle';

const MagazinePage = () => {
  return (
    <div>
      <Banner>
        <Wrapper>
          <Desc>
            <HashTag>#카테고리</HashTag>
            <Title>Title</Title>
            <SubDesc>2020 마지막 홀리데이를 위한 스타일링</SubDesc>
          </Desc>
          <WriterInfo>
            <img
              src="https://via.placeholder.com/50"
              style={{ borderRadius: '50%' }}
              alt="profile"
            />
            <Text>김지원</Text>
            <Text>annie1004619@naver.com</Text>
          </WriterInfo>
        </Wrapper>
        <Line />
      </Banner>
    </div>
  );
};

const Banner = styled.div`
  height: 80vh;
  width: 100%;
  background: rgb(212, 212, 212);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Desc = styled.div`
  align-items: flex-start;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;
const WriterInfo = styled.div`
  padding: 0 50px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SubDesc = styled.div`
  color: rgb(70, 70, 70);
  font-size: 0.8rem;
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  margin-top: 10px;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
  margin-bottom: 15px;
`;
const HashTag = styled.div`
  font-size: 0.8rem;
  width: 80px;
  height: 20px;
  text-align: center;
  color: white;
  overflow: hidden;
  border-radius: 18px 18px;
  background: gray;
  font-family: 'Stilu';
`;
const Text = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  font-family: 'Stilu', Arial;
  font-size: 0.8rem;
`;
const Line = styled.div`
  border-bottom: 1px solid #707070;
  margin: 60px 50px 50px 50px;
`;

export default MagazinePage;
