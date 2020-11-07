import React from 'react';
import styled from 'styled-components';

const Info = () => {
  return (
    <InfoDiv>
      <MyHr />
      <InfoP>
        (주)PurpleCode | 사업자 등록번호: 010-1234-5678 | 고객센터: 1234-5789 | 서울시 마포구 |
        이메일: contactus@purplecode.com | copyright 2020 PurpleCode All Rights Reserved. |
        개인정보취급방침 | 이용약관
      </InfoP>
    </InfoDiv>
  );
};

const InfoDiv = styled.div`
  margin-bottom: 60px;
`;
const MyHr = styled.hr`
  width: 1406px;
  border: solid 1px;
`;

const InfoP = styled.p`
  text-align: center;
  font-size: 15px;
`;
export default Info;
