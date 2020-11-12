import React from 'react';
import styled from 'styled-components';

const SocialLogin = () => {
  return (
    <div>
      <KakaoSection>카카오톡로그인</KakaoSection>
      <NaverSection>네이버로그인</NaverSection>
    </div>
  );
};

const KakaoSection = styled.div`
  background: yellow;
`;

const NaverSection = styled.div`
  background: green;
`;

export default SocialLogin;
