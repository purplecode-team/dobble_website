import React from 'react';
import styled from 'styled-components';

const SocialLogin = () => {
  return (
    <Section>
      <FormLayout>
        <InputBox>
          <Line> </Line>
        </InputBox>
        <InputBox>
          <SocialButton>카카오톡 로그인</SocialButton>
        </InputBox>
        <InputBox>
          <SocialButton naver>네이버 로그인</SocialButton>
        </InputBox>
      </FormLayout>
    </Section>
  );
};

const Section = styled.div`
  width: 100vw;
`;

const FormLayout = styled.div`
  margin: 0 auto;
  width: 400px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const InputBox = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 5px 20px;
`;

const SocialButton = styled.button`
  cursor: pointer;
  border: none;
  background: rgb(254, 229, 0);
  padding: 11px 10px;
  width: 100%;
  border-radius: 30px;
  font-weight: bold;
  ${(props) => props.naver && `background: rgb(31,195,68); color: white;`}
`;

const Line = styled.div`
  width: 100%;
  background: rgb(238, 238, 238);
  height: 2px;
  margin-bottom: 20px;
`;

export default SocialLogin;
