import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Circle, Icon, ErrorMessage, VerticalLine } from './SignUpStyle';
import circleRedEmpty from '../img/circle_red_empty.png';
import verticalLine from '../img/verticalLine.png';
import circleRed from '../img/circle_red.png';

const Password = ({ steps, title, step, id, register, errors, watch, setStep }) => {
  const password = useRef();
  const confirmPassword = useRef();
  password.current = watch('password');
  confirmPassword.current = watch('confirmPassword');

  useEffect(() => {
    if (password.current !== undefined && password.current !== '' && !errors.password) {
      setStep({ ...steps, step2: true });
    }
    console.log(steps);
  }, [password.current, confirmPassword.current]);

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
      <InputDiv>
        <PwdDiv>
          <Title>{title}</Title>
          <InputPwd
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            ref={register({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/ })}
            id={id}
          />
          <Line />
          {errors.password && errors.password.type === 'required' && (
            <ErrorMessage>비밀번호는 반드시 입력해야합니다.</ErrorMessage>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <ErrorMessage>8~20자 영문, 숫자를 사용하세요.</ErrorMessage>
          )}
        </PwdDiv>
        <ConfirmDiv>
          <Title>비밀번호 확인</Title>
          <ConfirmPwd
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 확인을 입력하세요."
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          <Line />
          {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
            <ErrorMessage>비밀번호 확인은 반드시 입력해야합니다.</ErrorMessage>
          )}
          {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </ConfirmDiv>
      </InputDiv>
    </Container>
  );
};
const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 21.11vh;
  margin-left: 2.604vw;
`;

const InputPwd = styled.input`
  padding: 0px;
  width: 25vw;
  background: rgb(246, 246, 246);
  height: 4.81vh;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
    color: #cbcbcb;
  }
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    width: 34vw;
  }
`;
const ConfirmPwd = styled.input`
  padding: 0px;
  width: 25vw;
  height: 4.81vh;
  background: rgb(246, 246, 246);
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
    color: #cbcbcb;
  }
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    width: 34vw;
  }
`;
const Title = styled.label`
  font-size: 1.25vw;
  height: 3.518vh;
  font-weight: bold;
  margin-bottom: 2.77vh;
`;
const ConfirmDiv = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 34vw;
  }
`;

const PwdDiv = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  @media (max-width: 768px) {
    width: 34vw;
  }
`;
const Line = styled.div`
  border-bottom: 1px solid black;
  width: 25vw;
  @media (max-width: 768px) {
    width: 34vw;
  }
`;
export default Password;
