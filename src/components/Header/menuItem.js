import React from 'react';
import styled from 'styled-components';
import DropIcon from '../img/dropIcon.png';

const MenuItem = () => {
  return (
    <CategorySection>
      <CategoryDiv>
        <CategoryBox>
          <Top>
            <Title>Products</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content>
            <div>의류</div>
            <div>가방</div>
            <div>악세서리</div>
            <div>잡화</div>
          </Content>
        </CategoryBox>
        <CategoryBox>
          <Top>
            <Title>Brands</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content>
            <div>마리몬드</div>
            <div>마르코로호</div>
            <div>애니휴먼</div>
            <div>위드아이스</div>
            <div>BOCE</div>
            <div>메리디아니</div>
            <div>뉴킷</div>
            <div>파이어마커스</div>
          </Content>
        </CategoryBox>
        <CategoryBox>
          <Top>
            <Title>Magazine</Title>
            <DropImg src={DropIcon} alt="drop" />
          </Top>
          <Content>
            <div>브랜드 소개</div>
            <div>기부 소식</div>
          </Content>
        </CategoryBox>
      </CategoryDiv>
    </CategorySection>
  );
};

const CategorySection = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
`;

const CategoryDiv = styled.div`
  display: flex;
  width: 70vw;
  justify-content: space-between;
  margin: 80px auto;
  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const CategoryBox = styled.div`
  width: 210px;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 3rem;
`;

const DropImg = styled.img`
  visibility: hidden;
  width: 10px;
  height: 10px;
  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export default MenuItem;
