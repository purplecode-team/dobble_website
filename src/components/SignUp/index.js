import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import AgreeAndJoin from './AgreeAndJoin';
import firebase from '../../firebase/firebase';
import InputContainer from './InputContainer';

const SignUp = () => {
  const methods = useForm({ mode: 'onChange' });
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      // 이메일과 비밀번호로 유저 생성
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      await createUser.user.updateProfile({
        displayName: data.name,
        phoneNumber: data.tel,
      });

      //Firebase 데이터베이스에 저장해주기
      await firebase.database().ref('users').child(createUser.user.uid).set({
        email: data.email,
        name: createUser.user.displayName,
        password: data.password,
        tel: createUser.user.phoneNumber,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit('');
      }, 5000);
    }
  };

  return (
    <div>
      <SignUpDiv>
        <TitleP>회원가입</TitleP>
        <DescP>doble에 가입하고 더 많은 혜택을 이용하세요!</DescP>
      </SignUpDiv>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} id="signupForm">
          <InputContainer />
        </form>
      </FormProvider>
      <AgreeAndJoin />
      {errorFromSubmit && <p>{errorFromSubmit}</p>}
      <SubmitButton form="signupForm" type="submit" value="가입하기" disabled={loading} />
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
const SubmitButton = styled.input`
cursor: pointer;
  padding: 0px;
  display: block;
  margin: 0 auto;
  :focus {
    outline: none;
  }
  width: 30.625vw;
  height: 7.407vh;
  border-radius: 30px;
  border: none;
  background-color: #efefef;
  font-size: 1.14vw;
  color: #303030;
  :hover{
   background-color: red;
`;
export default SignUp;
