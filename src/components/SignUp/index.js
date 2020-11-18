import React from 'react';
import styled from 'styled-components';
import SignUpHandler from './SignUpHandler';

const SignUp = () => {
  return (
    <div>
      <SignUpDiv>
        <TitleP>회원가입</TitleP>
        <DescP>doble에 가입하고 더 많은 혜택을 이용하세요!</DescP>
      </SignUpDiv>
      <SignUpHandler title="메일" verb="을" />
    </div>
  );
};

const TitleP = styled.p`
  text-align: center;
  font-size: 2.0833vw;
  font-weight: bold;
`;
const DescP = styled.p`
  text-align: center;
  font-size: 1.25vw;
  color: #888888;
`;
const SignUpDiv = styled.div`
  margin-bottom: 5.185vh;
`;
export default SignUp;
