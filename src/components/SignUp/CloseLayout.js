import React from 'react';
import styled from 'styled-components';

const CloseLayout = ({ title }) => {
  return (
    <CloseDiv>
      <CircleSvg
        xmlns="http://www.w3.org/2000/svg"
        width="1.979vw"
        height="3.518vh"
        viewBox="0 0 38 38"
      >
        <circle id="타원_7" data-name="타원 7" cx="19" cy="19" r="19" fill="#efefef" />
      </CircleSvg>
      <TitleDiv>{title}</TitleDiv>
    </CloseDiv>
  );
};

const CloseDiv = styled.div`
  display: flex;
  items-align: center;
  padding: 0px;
  width: 57.187vw;
  margin: 0vh auto;
  font-size: 1.041vw;
`;
const CircleSvg = styled.svg`
  margin-right: 2.604vw;
  margin-bottom: 5.3vh;
`;
const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
  font-weight: bold;
`;

export default CloseLayout;
