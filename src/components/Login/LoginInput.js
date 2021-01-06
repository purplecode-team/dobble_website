import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import { loginRequest } from '../../reducer/user';
import firebase from '../../firebase/firebase';

const LoginInput = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  const Login = async () => {
    try {
      console.log(email, password);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      Login()
        .then(() => {
          setShowError(false);
          dispatch(loginRequest({ email }));
        })
        .catch((error) => {
          setShowError(true);
          console.log(error);
        });
    },
    [email, password],
  );

  return (
    <InputSection>
      <Form onSubmit={onSubmitForm}>
        <InputBox>
          <Label>이메일</Label>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력하세요"
            required
          />
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </InputBox>
        <TextBox>
          <Text>아이디/비밀번호 찾기</Text>
          <LinkStyle to="/signup">
            <Text>회원가입</Text>
          </LinkStyle>
        </TextBox>
        <div>{showError && 'error'}</div>
        <InputBox>
          <LoginButton type="submit" disabled={!email || !password}>
            로그인
          </LoginButton>
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
  background: rgb(246, 246, 246);
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
  background-color: red;
  color: white;
  padding: 11px 10px;
  width: 100%;
  border-radius: 30px;
  font-weight: bold;
  &: disabled {
    background-color: rgb(238, 238, 238);
    color: rgb(210, 210, 210);
  }
`;

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export default LoginInput;
