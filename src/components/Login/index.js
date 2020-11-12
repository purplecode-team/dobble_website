import React from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput';
import SocialLogin from './SocialLogin';

const Login = () => {
  return (
    <div>
      <Title>로그인</Title>
      <LoginInput />
      <SocialLogin />
    </div>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 80px;
`;

export default Login;
