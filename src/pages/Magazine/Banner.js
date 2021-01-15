import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container>
      <Desc>
        <SubDesc>도블의 기부 관련 소식과 브랜드들을 만나보세요.</SubDesc>
        <Title>Magazine</Title>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/magazineBanner.png?raw=true');
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
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  margin-top: 10px;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
`;

export default Banner;
