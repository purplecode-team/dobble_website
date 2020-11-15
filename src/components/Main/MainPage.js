import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const resizeWindow = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);
  return (
    <div>
      <MainLayout style={{ height: `${windowHeight}px` }}>
        <span>x {windowHeight}</span>
        <div style={{ paddingTop: '50px' }}>
          <h1>doble</h1>
          <h1>Make It Double</h1>
        </div>
        <div>기부 스토어 브랜드 통합 사이트</div>
      </MainLayout>
    </div>
  );
};

const MainLayout = styled.div`
  background: white;
`;

export default MainPage;
