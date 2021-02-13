import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import emailIcon from '../../components/img/email.png';
import firebase from '../../firebase/firebase';

const InputEmail = () => {
  const { register, errors, handleSubmit, reset } = useForm({});
  const [errorFromSubmit, setErrorFromSubmit] = useState('');

  const onSubmit = (data) => {
    try {
      //Firebase 데이터베이스에 저장해주기
      const subsListRef = firebase.database().ref('magazineSubsList');
      const newSubsRef = subsListRef.push();
      newSubsRef.set({
        email: data.email,
      });
      alert(`${data.email} 메거진 구독이 신청되었습니다.`);
      reset({});
    } catch (error) {
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit('');
      }, 5000);
    }
  };

  return (
    <Container>
      <EmailContainer onSubmit={handleSubmit(onSubmit)}>
        <MailIcon src={emailIcon} alt="email" />
        <EmailInput
          name="email"
          type="email"
          placeholder="여기에 메일을 입력하세요."
          ref={register({
            required: true,
            pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
          })}
        />
        <button
          type="submit"
          style={{
            cursor: 'pointer',
            border: 'none',
            background: 'rgb(246, 246, 246)',
            outline: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.9vw"
            height="1.165vh"
            viewBox="0 0 25 12.583"
          >
            <path
              id="합치기_3"
              data-name="합치기 3"
              d="M27.172-1262.066A1.172,1.172,0,0,1,26-1263.238a1.172,1.172,0,0,1,1.172-1.172H47.033l-8.844-8.375a1.052,1.052,0,0,1,0-1.544,1.2,1.2,0,0,1,1.63,0l10.435,9.881a1.105,1.105,0,0,1,.166.2,1.171,1.171,0,0,1,.581,1.012,1.172,1.172,0,0,1-1.172,1.172Z"
              transform="translate(-26 1274.65)"
              fill="#303030"
            />
          </svg>
        </button>
      </EmailContainer>
      <Line xmlns="http://www.w3.org/2000/svg" width="27.4vw" height="2" viewBox="0 0 530 2">
        <rect id="사각형_4" data-name="사각형 4" width="530" height="2" fill="#313030" />
      </Line>
      {errors.email && errors.email.type === 'required' && (
        <ErrorMessage>이메일은 반드시 입력해야합니다.</ErrorMessage>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <ErrorMessage>이메일이 형식에 맞지 않습니다.</ErrorMessage>
      )}
      {errorFromSubmit && <ErrorMessage>{errorFromSubmit} </ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12.87vh;
  @media (min-width: 375px) {
    margin: 0 auto 10vh;
  }
`;

const EmailContainer = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 25vw;
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    width: 45vw;
  }
`;

const MailIcon = styled.img`
  width: 7.54%;
  height: 45%;
  vertical-align: middle;
`;
const EmailInput = styled.input`
  :focus {
    outline: none;
  }
  background: rgb(246, 246, 246);
  text-align: center;
  border: none;
  width: 17vw;
  height: 4vh;
  vertical-align: middle;
  ::placeholder {
    font-size: 1.3vw;
    font-family: Arial;
    color: #acacac;
  }
  @media (max-width: 768px) {
    width: 35vw;
    ::placeholder {
      font-size: 2vw;
    }
  }
`;

const Line = styled.svg`
  @media (max-width: 768px) {
    width: 55vw;
  }
`;
const ErrorMessage = styled.div`
  ::before {
    content: '⚠ ';
  }
  padding: 0;
  color: #ff4444;
  font-family: Arial;
  font-size: 0.8vw;
`;
export default InputEmail;
