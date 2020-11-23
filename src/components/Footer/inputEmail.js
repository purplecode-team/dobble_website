import React, { useState } from 'react';
import styled from 'styled-components';
import emailIcon from '../img/email.png';

const InputEmail = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    const blank = /\s/;
    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.');
      setEmail('');
      return;
    }
    setEmail(e.target.value);
  };

  const emailValidationChk = (_email) => {
    let vChk = false;
    /* 이메일 validation */
    const isEmailRegex = (__email) => {
      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return emailRegex.test(__email);
    };
    if (_email === '') {
      vChk = false;
    } else if (isEmailRegex(_email)) {
      vChk = true;
    } else if (!isEmailRegex(_email)) {
      vChk = false;
    }
    return vChk;
  };

  const onClick = () => {
    if (emailValidationChk(email)) {
      alert(`${email} 신청되었습니다`);
      setEmail('');
    } else {
      alert('이메일을 다시 입력해주세요');
      setEmail('');
    }
  };
  return (
    <Container>
      <EmailContainer>
        <MailIcon src={emailIcon} alt="email" />
        <EmailInput
          type="text"
          id="mail"
          placeholder="여기에 이메일을 입력하세요"
          email={email}
          onChange={onChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.9vw"
          height="1.165vh"
          viewBox="0 0 25 12.583"
          onClick={onClick}
        >
          <path
            id="합치기_3"
            data-name="합치기 3"
            d="M27.172-1262.066A1.172,1.172,0,0,1,26-1263.238a1.172,1.172,0,0,1,1.172-1.172H47.033l-8.844-8.375a1.052,1.052,0,0,1,0-1.544,1.2,1.2,0,0,1,1.63,0l10.435,9.881a1.105,1.105,0,0,1,.166.2,1.171,1.171,0,0,1,.581,1.012,1.172,1.172,0,0,1-1.172,1.172Z"
            transform="translate(-26 1274.65)"
            fill="#303030"
          />
        </svg>
      </EmailContainer>
      <Line xmlns="http://www.w3.org/2000/svg" width="27.4vw" height="2" viewBox="0 0 530 2">
        <rect id="사각형_4" data-name="사각형 4" width="530" height="2" fill="#313030" />
      </Line>
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

const EmailContainer = styled.div`
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

export default InputEmail;
