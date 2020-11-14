import React from 'react';
import styled from 'styled-components';

const LoginInput = () => {
  return (
    <InputSection>
      <Form>
        <InputBox>
          <Label>아이디</Label>
          <Input placeholder="아이디를 입력하세요" />
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호를 입력하세요" />
        </InputBox>
        <TextBox>
          <Text>아이디/비밀번호 찾기</Text>
          <Text>회원가입</Text>
        </TextBox>
        <InputBox>
          <LoginButton>로그인</LoginButton>
        </InputBox>
      </Form>
    </InputSection>
  );
};

const InputSection = styled.div`
  width: 100vw;
`;

const InputBox = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 20px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const TextBox = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  color: rgb(150, 150, 150);
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  border-bottom: black 1px solid;
  width: 90%;
  :: placeholder {
    color: rgb(210, 210, 210);
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgb(238, 238, 238);
  padding: 11px 10px;
  width: 100%;
  border-radius: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export default LoginInput;
