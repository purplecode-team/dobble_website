import React from 'react';
import styled from 'styled-components';

const InterestedBrand = () => {
  return (
    <SignUpDiv>
      <IconDiv>
        <CircleSvg
          xmlns="http://www.w3.org/2000/svg"
          width="1.979vw"
          height="3.518vh"
          viewBox="0 0 38 38"
        >
          <g id="타원_6" data-name="타원 6" fill="none" stroke="red" strokeWidth="5">
            <circle cx="19" cy="19" r="19" stroke="none" />
            <circle cx="19" cy="19" r="16.5" fill="none" />
          </g>
        </CircleSvg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="15.833vh" viewBox="0 0 1 171">
          <line
            id="선_1"
            data-name="선 1"
            y2="171"
            transform="translate(0.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
        </svg>
      </IconDiv>
      <InfoDiv>
        <TitleDiv>관심있는 기부 브랜드</TitleDiv>
      </InfoDiv>
    </SignUpDiv>
  );
};
const SignUpDiv = styled.div`
  display: flex;
  width: 57.187vw;
  margin: 0vh auto 2.685vh auto;
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.979vw;
`;
const CircleSvg = styled.svg`
  margin-bottom: 1.759vh;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52.6204vw;
  margin-left: 2.604vw;
`;
const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
`;

export default InterestedBrand;
