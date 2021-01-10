// 회원가입에 필요한 모든 input들을 step 상태에 따라 리턴
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import SignUpLayout from './SignUpLayout';
import InterestedBrand from './InterestedBrand';
import CloseLayout from './CloseLayout';
import Password from './Password';
import AgreeForJoin from './AgreeForJoin';

const InputContainer = () => {
  const methods = useFormContext();

  const [steps, setStep] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });
  const { step1, step2, step3, step4, step5 } = steps;

  const signUpData = [
    {
      title: '메일',
      step: [step1, step1],
    },
    {
      title: '비밀번호',
      step: [step1, step2],
    },
    {
      title: '이름',
      step: [step2, step3],
    },
    {
      title: '전화번호',
      step: [step3, step4],
    },
    {
      title: '관심있는 기부브랜드',
      step: [step4, step5],
    },
  ];

  const validationCheck = (data) => {
    if (data.title === '메일') {
      return (
        <SignUpLayout
          key={data.title}
          id={data.title}
          {...data}
          steps={steps}
          {...methods}
          setStep={setStep}
        />
      );
    }
    if (data.title === '비밀번호' && data.step[0]) {
      return (
        <Password
          {...data}
          steps={steps}
          key={data.title}
          id={data.title}
          {...methods}
          setStep={setStep}
        />
      );
    }
    if (data.title === '관심있는 기부브랜드' && data.step[0]) {
      return (
        <InterestedBrand
          {...data}
          steps={steps}
          key={data.title}
          id={data.title}
          {...methods}
          setStep={setStep}
        />
      );
    }
    if (data.step[0]) {
      return (
        <SignUpLayout
          {...data}
          steps={steps}
          key={data.title}
          id={data.title}
          {...methods}
          setStep={setStep}
        />
      );
    }

    return <CloseLayout title={data.title} key={data.title} id={data.title} />;
  };

  return (
    <div>
      {signUpData.map(validationCheck)}
      <AgreeForJoin {...methods} />
    </div>
  );
};

export default InputContainer;
