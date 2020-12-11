import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import firebase from '../../firebase/firebase';
import circleRedEmpty from '../img/circle_red_empty.png';
import verticalLine from '../img/verticalLine.png';
import circleRed from '../img/circle_red.png';

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
  ButtonInput,
  ChkBox,
  ChkDiv,
  SubDesc,
  VerticalLine,
} from './SignUpStyle';

const SignUpLayout = ({ title, step, steps, register, errors, watch, setStep }) => {
  const email = useRef();
  const nameValue = useRef();
  const tel = useRef();

  email.current = watch('email');
  nameValue.current = watch('name');
  tel.current = watch('tel');

  useEffect(() => {
    if (email.current !== undefined && email.current !== '' && !errors.email) {
      setStep({ ...steps, step1: true });
    }
    console.log(steps);
    console.log(email.current);
  }, [email.current]);

  useEffect(() => {
    if (nameValue.current !== undefined && nameValue.current !== '' && !errors.name) {
      setStep({ ...steps, step3: true });
    }
  }, [nameValue.current]);

  useEffect(() => {
    if (tel.current !== undefined && tel.current !== '' && !errors.tel) {
      setStep({ ...steps, step4: true });
    }
  }, [tel.current]);

  const isEmailExist = (_email) => {
    console.log(_email);
  };
  return (
    <Container>
      <Icon>
        {step[1] ? (
          <Circle src={circleRed} alt="circle" />
        ) : (
          <Circle src={circleRedEmpty} alt="circle" />
        )}
        <VerticalLine src={verticalLine} alt="line" />
      </Icon>
      {(function () {
        if (title === '메일') {
          return (
            <InfoBox>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <Title>{title}</Title>
              <InputDiv>
                <InfoInput
                  name="email"
                  type="email"
                  placeholder="메일을 입력하세요."
                  ref={register({
                    required: true,
                    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  })}
                />
                <ButtonInput
                  type="button"
                  value="중복확인"
                  onClick={() => isEmailExist(email.current)}
                />
              </InputDiv>
              <Line />
              {errors.email && errors.email.type === 'required' && (
                <ErrorMessage>이메일은 반드시 입력해야합니다.</ErrorMessage>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <ErrorMessage>이메일 형식에 맞지않습니다.</ErrorMessage>
              )}
              <ChkDiv>
                <ChkBox type="checkbox" name="magazineSubs" ref={register} />
                <SubDesc>매달 매거진 구독을 신청합니다.</SubDesc>
              </ChkDiv>
            </InfoBox>
          );
        }
        if (title === '이름') {
          return (
            <InfoBox>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <Title>{title}</Title>
              <InputDiv>
                <InfoInput
                  name="name"
                  type="text"
                  placeholder="이름을 입력하세요."
                  ref={register({
                    required: true,
                    pattern: /^[가-힣]{2,6}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
                  })}
                />
              </InputDiv>
              <Line />
              {errors.name && errors.name.type === 'required' && (
                <ErrorMessage>이름은 반드시 입력해야합니다.</ErrorMessage>
              )}
              {errors.name && errors.name.type === 'pattern' && (
                <ErrorMessage>
                  한글은 2~6자, 영문은 2~10자 firstname Lastname 형식으로 입력해주세요.
                </ErrorMessage>
              )}
            </InfoBox>
          );
        }
        return (
          <InfoBox>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Title>{title}</Title>
            <InputDiv>
              <InfoInput
                name="tel"
                type="tel"
                placeholder="숫자만 입력해주세요."
                ref={register({ required: true, pattern: /(^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/ })}
              />
            </InputDiv>
            <Line />
            {errors.tel && errors.tel.type === 'required' && (
              <ErrorMessage>전화번호는 반드시 입력해야합니다</ErrorMessage>
            )}
            {errors.tel && errors.tel.type === 'pattern' && (
              <ErrorMessage>전화번호 형식에 맞지않습니다.</ErrorMessage>
            )}
          </InfoBox>
        );
      })()}
    </Container>
  );
};

export default SignUpLayout;
