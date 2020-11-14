import React from 'react';
import styled from 'styled-components';
import Email from './email';
import InputLayout from './inputLayout';

const SignUp = () => {
  return (
    <div>
      <SignUpDiv>
        <TitleP>회원가입</TitleP>
        <DescP>doble에 가입하고 더 많은 혜택을 이용하세요!</DescP>
      </SignUpDiv>
      <Email title="메일" verb="을" />
      <InputLayout title="비밀번호" verb="를" />
      <InputLayout title="이름" verb="을" />
      <InputLayout title="전화번호" verb="를" />
      <InputLayout title="지역" verb="을" />
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
