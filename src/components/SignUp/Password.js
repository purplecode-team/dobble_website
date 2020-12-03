import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Circle, Icon, Title, ErrorMessage, InfoBox } from './SignUpStyle';

const Password = ({
  onChangeStep,
  steps,
  title,
  placeholder,
  step,
  id,
  register,
  errors,
  watch,
}) => {
  const password = useRef();
  const confirmPassword = useRef();
  password.current = watch('password');
  confirmPassword.current = watch('confirmPassword');

  useEffect(() => {
    if (
      password.current !== undefined &&
      confirmPassword.current !== undefined &&
      !errors.confirmPassword
    ) {
      onChangeStep({ ...steps, step2: true });
    }
    console.log(steps);
  }, [password.current, confirmPassword.current]);

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
        <InputDiv>
          <PwdDiv>
            <Title>{title}</Title>
            <InputPwd
              name="password"
              type="password"
              placeholder={placeholder}
              ref={register({ required: true, pattern: /^[A-Za-z0-9]{6,12}$/ })}
              id={id}
            />
            <Line />
            {errors.password && errors.password.type === 'required' && (
              <ErrorMessage>비밀번호는 반드시 입력해야합니다.</ErrorMessage>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <ErrorMessage>비밀번호는 6~12자 숫자와 문자 형식이여야 합니다.</ErrorMessage>
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
              <ErrorMessage>비밀번호와 비밀번호 확인이 일치하지 않습니다.</ErrorMessage>
            )}
          </ConfirmDiv>
        </InputDiv>
      </InfoBox>
    </Container>
  );
};
const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.77vh;
`;
const SignUpDiv = styled.div`
  display: flex;
  width: 57.187vw;
  margin: 0vh auto 2.685vh auto;
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.979vw;
`;
const CircleSvg = styled.svg`
  margin-bottom: 1.759vh;
`;

const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
  font-weight: bold;
`;

const InputPwd = styled.input`
  padding: 0px;
  width: 24vw;
  height: 4.81vh;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
    color: #cbcbcb;
  }
`;
const ConfirmPwd = styled.input`
  padding: 0px;
  width: 24vw;
  height: 4.81vh;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
    color: #cbcbcb;
  }
`;
const ConfirmDiv = styled.div`
  width: 24vw;
  display: flex;
  flex-direction: column;
  margin-right: 4.63vw;
`;

const PwdDiv = styled.div`
  width: 24vw;
  display: flex;
  flex-direction: column;
  margin-right: 4.63vw;
`;
const SubmitSvg = styled.svg`
  width: 2.031vw;
  height: 1.813vh;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.61vh;
`;

const Incorrect = styled.div`
  font-size: 1.04vw;
  color: #ff0000;
`;
const Invalidation = styled.div`
  font-size: 1.04vw;
  color: #ff0000;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24vw;
`;
const Line = styled.div`
  border-bottom: 1px solid black;
  width: 24vw;
`;
export default Password;
