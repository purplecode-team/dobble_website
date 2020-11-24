import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import RootRouter from './components/RootRouter';

const App = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <BaseLayout>
      <RootRouter isLoggedIn={me} />
    </BaseLayout>
  );
};

const BaseLayout = styled.div`
  margin: 0;
  padding: 0;
`;

export default App;
