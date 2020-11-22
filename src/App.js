import React from 'react';
import styled from 'styled-components';
import RootRouter from './components/RootRouter';

const App = () => {
  return (
    <BaseLayout>
      <RootRouter isLoggedIn={false} />
    </BaseLayout>
  );
};

const BaseLayout = styled.div`
  margin: 0;
  padding: 0;
`;

export default App;
