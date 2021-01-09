import React from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput';
import SocialLogin from './SocialLogin';
import DobleLogo from '../../components/img/doble_icon.png';

const Login = () => {
  return (
    <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <LogoSection>
        <Logo src={DobleLogo} alt="logo" />
      </LogoSection>
      <Title>로그인</Title>
      <LoginInput />
      <SocialLogin />
    </div>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LogoSection = styled.div`
  margin-top: 120px;
  weight: 100vw;
  text-align: center;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export default Login;
