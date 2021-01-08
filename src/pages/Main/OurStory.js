import React from 'react';
import styled from 'styled-components';
import OurStoryLogo from '../../components/img/outStory_logo.png';
import YCircle from '../../components/img/circle_yellow.png';

const OurStory = () => {
  return (
    <Section>
      <Title>Our Story</Title>
      <LogoDiv>
        <Logo src={OurStoryLogo} alt="our_story_logo" />
      </LogoDiv>
      <SubTitle>
        <Inline>" 좋은 소비가</Inline>
        <Inline> 두 배의 가치를 만듭니다. "</Inline>
      </SubTitle>
      <Content>
        <Text>doble은 기부를 뜻하는 donation과 두 배를 뜻하는 double을 결합한 네임으로,</Text>
        <Text>좋은 소비가 두 배 이상의 가치를 만들어 낸다는 의미를 담고 있습니다.</Text>
        <Text>국내 다양한 기부 스토어 브랜드들을 통합해 소개하며,</Text>
        <Text>관련 아이템을 구매할 수 있도록 연결해 줍니다.</Text>
      </Content>
      <Box>
        <BottomImg src={YCircle} alt="yellow_circle" />
      </Box>
    </Section>
  );
};

const Section = styled.div`
  height: 100vh;
  background: rgb(246, 246, 246);
  position: relative;
`;

const Title = styled.h1`
  padding-top: 120px;
  text-align: center;
  font-weight: bold;
  font-size: 3.7rem;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const LogoDiv = styled.div`
  text-align: center;
  margin: 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 59px;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 2.6rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  margin-top: 50px;
  text-align: center;
  color: rgb(180, 180, 180);
  font-weight: bold;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Inline = styled.div`
  display: inline;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Text = styled.div`
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: inline;
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 0px;
  width: 23vw;
  height: 18vw;
  overflow: hidden;
`;

const BottomImg = styled.img`
  float: right;
  height: 35vw;
`;

export default OurStory;
