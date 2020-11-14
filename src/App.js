import React from 'react';
import styled from 'styled-components';
import RootRouter from './components/RootRouter';

const App = () => {
  const a = false;
  return (
    <BaseLayout>
      <RootRouter isLoggedIn={a} />
    </BaseLayout>
  );
};

const BaseLayout = styled.div`
  margin: 0;
  padding: 0;
`;

export default App;
