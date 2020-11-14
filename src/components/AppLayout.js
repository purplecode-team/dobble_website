import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <ChildLayout>{children}</ChildLayout>
    </div>
  );
};

const ChildLayout = styled.div`
  padding-top: 100px;
`;
export default AppLayout;
