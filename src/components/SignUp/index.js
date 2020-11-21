import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpHandler from './SignUpHandler';
import AgreeAndJoin from './AgreeAndJoin';
import CloseLayout from './CloseLayout';

const SignUp = () => {
  const [completedEmail, setcompletedEmail] = useState(false);
  const [completedPwd, setCompletedPwd] = useState(false);
  const [completeName, setCompleteName] = useState(false);
  const [completeTel, setCompleteTel] = useState(false);
  const [completeBrand, setCompleteBrand] = useState(false);

  const onCompletedEmail = (nextchk) => {
    setcompletedEmail(nextchk);
  };
  const onCompletedPwd = (nextchk) => {
    setCompletedPwd(nextchk);
  };
  const onCompletedName = (nextchk) => {
    setCompleteName(nextchk);
  };
  const onCompleteTel = (nextchk) => {
    setCompleteTel(nextchk);
  };
  const onCompleteBrand = (nextchk) => {
    setCompleteBrand(nextchk);
  };
  return (
    <div>
      <SignUpDiv>
        <TitleP>회원가입</TitleP>
        <DescP>doble에 가입하고 더 많은 혜택을 이용하세요!</DescP>
      </SignUpDiv>
      <SignUpHandler
        title="메일"
        placeholder="메일을 입력하세요"
        onChangeNext={onCompletedEmail}
        nextToggle={completedEmail}
      />
      {completedEmail ? (
        <SignUpHandler
          title="비밀번호"
          placeholder=" "
          onChangeNext={onCompletedPwd}
          nextToggle={completedPwd}
        />
      ) : (
        <CloseLayout title="비밀번호" />
      )}
      {completedPwd ? (
        <SignUpHandler
          title="이름"
          placeholder="이름을 입력하세요"
          onChangeNext={onCompletedName}
          nextToggle={completeName}
        />
      ) : (
        <CloseLayout title="이름" />
      )}
      {completeName ? (
        <SignUpHandler
          title="전화번호"
          placeholder="전화번호를 입력하세요"
          onChangeNext={onCompleteTel}
          nextToggle={completeTel}
        />
      ) : (
        <CloseLayout title="전화번호" />
      )}
      {completeTel ? (
        <SignUpHandler
          title="브랜드"
          placeholder=""
          onChangeNext={onCompleteBrand}
          nextToggle={completeBrand}
        />
      ) : (
        <CloseLayout title="관심있는 기부 브랜드" />
      )}

      <AgreeAndJoin />
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
