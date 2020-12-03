import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import firebase from '../../firebase/firebase';

import {
  Container,
  InputDiv,
  Circle,
  Icon,
  InfoBox,
  InfoInput,
  Title,
  Line,
  ErrorMessage,
} from './SignUpStyle';

const SignUpLayout = ({
  title,
  placeholder,
  step,
  name,
  type,
  onChangeStep,
  steps,
  id,
  register,
  errors,
  watch,
}) => {
  const email = useRef();
  const nameValue = useRef();
  const tel = useRef();
  email.current = watch('email');
  nameValue.current = watch('name');
  tel.current = watch('tel');

  useEffect(() => {
    if (email.current !== undefined && !errors.email) {
      onChangeStep({ ...steps, step1: true });
    }
    console.log(steps);
  }, [email.current]);

  useEffect(() => {
    if (nameValue.current !== undefined && !errors.name) {
      onChangeStep({ ...steps, step3: true });
    }
  }, [nameValue.current]);

  useEffect(() => {
    if (tel.current !== undefined && !errors.tel) {
      onChangeStep({ ...steps, step4: true });
    }
  }, [tel.current]);

  // eslint-disable-next-line consistent-return
  const regexes = (_name) => {
    if (_name === 'email')
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (_name === 'name') return /^[가-힣]{2,5}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    if (_name === 'tel') return /^\d{3}-\d{3,4}-\d{4}$/;

    return '';
  };
  const objectValue = { name };

  return (
    <Container>
      <Icon>
        {step[1] ? (
          <Circle
            xmlns="http://www.w3.org/2000/svg"
            width="1.979vw"
            height="3.518vh"
            viewBox="0 0 38 38"
          >
            <g id="타원_7" data-name="타원 7" fill="red" stroke="red" strokeWidth="5">
              <circle cx="19" cy="19" r="19" stroke="none" />
              <circle cx="19" cy="19" r="16.5" fill="none" />
            </g>
          </Circle>
        ) : (
          <Circle
            xmlns="http://www.w3.org/2000/svg"
            width="1.979vw"
            height="3.518vh"
            viewBox="0 0 38 38"
          >
            <g id="타원_6" data-name="타원 6" fill="none" stroke="red" strokeWidth="5">
              <circle cx="19" cy="19" r="19" stroke="none" />
              <circle cx="19" cy="19" r="16.5" fill="none" />
            </g>
          </Circle>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="15.833vh" viewBox="0 0 1 171">
          <line
            id="선_1"
            data-name="선 1"
            y2="171"
            transform="translate(0.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
        </svg>
      </Icon>
      <InfoBox>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <Title>{title}</Title>
        <InputDiv>
          <InfoInput
            name={name}
            type={type}
            placeholder={placeholder}
            ref={register({ required: true, pattern: regexes(objectValue.name) })}
            id={id}
          />
        </InputDiv>
        <Line />
        {errors.email && errors.email.type === 'required' && (
          <ErrorMessage>이메일은 반드시 입력해야합니다.</ErrorMessage>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <ErrorMessage>이메일이 형식에 맞지 않습니다.</ErrorMessage>
        )}
        {errors.name && errors.name.type === 'required' && (
          <ErrorMessage>이름은 반드시 입력해야합니다.</ErrorMessage>
        )}
        {errors.name && errors.name.type === 'pattern' && (
          <ErrorMessage>
            이름은 한글 2~4자, 영문은 firstname Lastname 형식으로 입력해주세요.
          </ErrorMessage>
        )}
        {errors.tel && errors.tel.type === 'required' && (
          <ErrorMessage>전화번호는 반드시 입력해야합니다.</ErrorMessage>
        )}
        {errors.tel && errors.tel.type === 'pattern' && (
          <ErrorMessage>전화번호는 000-0000-0000 형식으로 입력해야합니다.</ErrorMessage>
        )}
      </InfoBox>
    </Container>
  );
};

export default SignUpLayout;
