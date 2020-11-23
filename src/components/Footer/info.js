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
  margin-bottom: 5.55vh;
`;
const MyHr = styled.hr`
  width: 80vw;
  border: solid 1px;
`;

const InfoP = styled.p`
  width: 73vw;
  margin: 0 auto;
  text-align: center;
  font-size: 1vw;
`;
export default Info;
