import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemLayout = ({ data, children }) => {
  return (
    <Section>
      <Layout>
        <SideMenu>
          <Title>Category</Title>
          <Content>
            {data.map(({ key, content, link }) => (
              <Text key={key} href={link}>
                <StyledLink to={link}>{content}</StyledLink>
              </Text>
            ))}
          </Content>
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
  width: 20%;
  display: inline-block;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

const Item = styled.div`
  width: 80%;
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
`;

export default ItemLayout;
