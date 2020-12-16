import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <ChildLayout>{children}</ChildLayout>

      <Footer />
    </div>
  );
};

const ChildLayout = styled.div`
  padding-top: 0px;
`;
export default AppLayout;
