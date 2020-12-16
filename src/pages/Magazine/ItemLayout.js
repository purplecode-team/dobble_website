import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemLayout = ({ MagazineCategory, Season, children }) => {
  return (
    <Section>
      <Layout>
        <SideMenu>
          <div>
            <Title>Category</Title>
            <Content>
              {MagazineCategory.map(({ key, content, link }) => (
                <Text key={key} href={link}>
                  <StyledLink to={link}>{content}</StyledLink>
                </Text>
              ))}
            </Content>
          </div>
          <SeasonDiv>
            <SeasonTitle>Season</SeasonTitle>
            <Content>
              {Season.map(({ key, content, link }) => (
                <Text key={key} href={link}>
                  <StyledLink to={link}>{content}</StyledLink>
                </Text>
              ))}
            </Content>
          </SeasonDiv>
        </SideMenu>
        <Item>
          <Content>{children}</Content>
        </Item>
      </Layout>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
`;

const Layout = styled.div`
  margin: 60px 80px;
  @media (max-width: 768px) {
    margin: 40px 40px;
  }
`;

const SideMenu = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  width: 100%;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  width: 100%;
`;
const SeasonDiv = styled.div`
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`;
const SeasonTitle = styled.div`
  margin-top: 60px;
  font-size: 1.4rem;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Item = styled.div`
  width: 75%;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
    display: inline-block;
    margin-right: 20px;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;

export default ItemLayout;
