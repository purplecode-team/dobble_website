import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import RootRouter from './components/RootRouter';
import { useScrollTop } from './utils/scrollTop';

const App = () => {
  const { me } = useSelector((state) => state.user);
  const setScrollTop = useScrollTop(true);

  return (
    <BaseLayout>
      <RootRouter isLoggedIn={me} />
      <TopBtn onClick={() => setScrollTop(true)}>TOP</TopBtn>
    </BaseLayout>
  );
};

const BaseLayout = styled.div`
  margin: 0;
  padding: 0;
`;

const TopBtn = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid black;
  line-height: 40px;
  text-align: center;
`;

export default App;
