import React from 'react';
import styled from 'styled-components';

const OurStory = () => {
  return (
    <Section>
      <Title>Our Story</Title>
      <div>이미지</div>
      <SubTitle>" 좋은 소비가 두 배의 가치를 만듭니다. "</SubTitle>
    </Section>
  );
};

const Section = styled.div`
  background: yellow;
  height: 100vh;
`;

const Title = styled.h1`
  padding-top: 120px;
  text-align: center;
  font-weight: bold;
  font-size: 3.5rem;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default OurStory;
