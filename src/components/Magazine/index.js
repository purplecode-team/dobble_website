import React from 'react';
import styled from 'styled-components';

const Magazine = () => {
  return (
    <Section>
      <div style={{ paddingTop: '100px', color: 'red' }}>magazine</div>
      <div>ss</div>
    </Section>
  );
};

const Section = styled.div`
  background-color: rgba(70, 70, 70, 0.3);
  height: 100vh;
`;

export default Magazine;
