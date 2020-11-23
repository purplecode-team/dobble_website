import React from 'react';
import styled from 'styled-components';
import emailIcon from '../img/email.png';

const InputEmail = () => {
  return (
    <MyDiv>
      <MyImg src={emailIcon} alt="email" />
      <EmailInput type="email" id="mail" placeholder="여기에 이메일을 입력하세요" />
      <SubmitInput type="submit" id="submitBtn" value="신청" />
      <MyHr />
    </MyDiv>
  );
};

const MyDiv = styled.div`
  text-align: center;
  margin-bottom: 170px;
`;

const MyImg = styled.img`
  width: 40px;
  height: 28px;
  vertical-align: middle;
`;
const EmailInput = styled.input`
  :focus {
    outline: none;
  }
  border: none;
  margin: 0px 50px;
  padding: 0px;
  width:316px;
  height: 33px;
  line-height: 33px;
  vertical-align: middle;
  ::placeholder{
  font-size: 25px;
  font-family: Arial;
  color:#ACACAC;
`;
const SubmitInput = styled.input`
  background-color: black;
  color: white;
  border: none;
  width: 40px;
  height: 28px;
  font-family: Arial;
`;
const MyHr = styled.hr`
  width: 530px;
  border: solid 1px;
`;

export default InputEmail;
