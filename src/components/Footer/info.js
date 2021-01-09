import React from 'react';
import styled from 'styled-components';

const Info = () => {
  return (
    <InfoDiv>
      <InfoLine xmlns="http://www.w3.org/2000/svg" width="80vw" height="2" viewBox="0 0 1406 1">
        <rect id="사각형_5" data-name="사각형 5" width="1406" height="1" fill="#313030" />
      </InfoLine>
      <InfoP>
        (주)PurpleCode | 사업자 등록번호: 010-1234-5678 | 고객센터: 1234-5789 | 서울시 마포구 |
        이메일: contactus@purplecode.com | copyright 2020 PurpleCode All Rights Reserved. |
        개인정보취급방침 | 이용약관
      </InfoP>
    </InfoDiv>
  );
};

const InfoDiv = styled.div`
  margin-bottom: 5.55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoLine = styled.svg`
  width: 80vw;
`;

const InfoP = styled.p`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  font-size: 0.8px;
  font-family: Stilu, Arial;
`;
export default Info;
