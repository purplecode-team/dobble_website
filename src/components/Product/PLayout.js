import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { productsData } from '../Header/interface';

const PLayout = ({ children }) => {
  return (
    <Section>
      <Layout>
        <SideMenu>
          <Title>Category</Title>
          <Content>
            {productsData.map(({ key, content, link }) => (
              <Text key={key} href={link}>
                <StyledLink to={link}>{content}</StyledLink>
              </Text>
            ))}
          </Content>
        </SideMenu>
        <Item>
          <Title>Best</Title>
          {children}
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
`;

const Title = styled.div`
  font-size: 1.4rem;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 67px;
  width: 100%;
`;

const Item = styled.div`
  width: 80%;
  float: left;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.div`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export default PLayout;
