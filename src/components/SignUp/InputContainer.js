import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import SignUpLayout from './SignUpLayout';
import InterestedBrand from './InterestedBrand';
import CloseLayout from './CloseLayout';
import Password from './Password';

const InputContainer = ({ children }) => {
  const methods = useFormContext();

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
      name: 'password',
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
      name: 'brand',
    },
  ];

  const validationCheck = (data) => {
    if (data.title === '메일') {
      return (
        <SignUpLayout
          key={data.name}
          id={data.name}
          {...data}
          onChangeStep={onChangeStep}
          steps={steps}
          {...methods}
        />
      );
    }
    if (data.title === '비밀번호' && data.step[0]) {
      return (
        <Password
          {...data}
          onChangeStep={onChangeStep}
          steps={steps}
          key={data.name}
          id={data.name}
          {...methods}
        />
      );
    }
    if (data.title === '관심있는 기부브랜드' && data.step[0]) {
      return (
        <InterestedBrand
          {...data}
          onChangeStep={onChangeStep}
          steps={steps}
          key={data.name}
          id={data.name}
          {...methods}
        />
      );
    }
    if (data.step[0]) {
      return (
        <SignUpLayout
          {...data}
          onChangeStep={onChangeStep}
          steps={steps}
          key={data.name}
          id={data.name}
          {...methods}
        />
      );
    }

    return <CloseLayout title={data.title} key={data.name} id={data.name} />;
  };

  return <div>{signUpData.map(validationCheck)}</div>;
};

export default InputContainer;
