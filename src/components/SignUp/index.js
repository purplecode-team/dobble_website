import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpLayout from './SignUpLayout';
import AgreeAndJoin from './AgreeAndJoin';
import CloseLayout from './CloseLayout';
import Password from './Password';
import InterestedBrand from './InterestedBrand';
import firebase from '../../firebase/firebase';

const SignUp = () => {
  const [steps, setStep] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });
  const { step1, step2, step3, step4, step5 } = steps;

  const onChangeStep = (_step) => {
    setStep(_step);
  };

  const signUpData = [
    {
      title: '메일',
      placeholder: '메일을 입력하세요.',
      step: [step1, step1],
      name: 'email',
      type: 'email',
    },
    {
      title: '비밀번호',
      placeholder: '비밀번호를 입력하세요.',
      step: [step1, step2],
    },
    {
      title: '이름',
      placeholder: '이름을 입력하세요.',
      step: [step2, step3],
      name: 'name',
      type: 'text',
    },
    {
      title: '전화번호',
      placeholder: '000-0000-0000',
      step: [step3, step4],
      name: 'tel',
      type: 'tel',
    },
    {
      title: '관심있는 기부브랜드',
      placeholder: '',
      step: [step4, step5],
    },
  ];

  const validationCheck = (data) => {
    if (data.title === '메일') {
      return <SignUpLayout {...data} onChangeStep={onChangeStep} steps={steps} />;
    }
    if (data.title === '비밀번호' && data.step[0]) {
      return <Password {...data} onChangeStep={onChangeStep} steps={steps} />;
    }
    if (data.title === '관심있는 기부브랜드' && data.step[0]) {
      return <InterestedBrand {...data} onChangeStep={onChangeStep} steps={steps} />;
    }
    if (data.step[0]) {
      return <SignUpLayout {...data} onChangeStep={onChangeStep} steps={steps} />;
    }

    return <CloseLayout title={data.title} />;
  };

  return (
    <div>
      <SignUpDiv>
        <TitleP>회원가입</TitleP>
        <DescP>doble에 가입하고 더 많은 혜택을 이용하세요!</DescP>
      </SignUpDiv>
      {signUpData.map(validationCheck)}
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
