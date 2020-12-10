import React from 'react';
import styled from 'styled-components';

const PLayout = ({ children }) => {
  return (
    <Section>
      <Layout>
        <SideMenu>Category</SideMenu>
        <Item>{children}</Item>
      </Layout>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
`;

const Layout = styled.div`
  margin: 40px 80px;
  @media (max-width: 768px) {
    margin: 40px 40px;
  }
`;

const SideMenu = styled.div`
  width: 30%;
  display: inline-block;
  background: pink;
`;

const Item = styled.div`
  width: 70%;
  display: inline-block;
  background: red;
`;

export default PLayout;
