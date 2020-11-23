import React, { useState } from 'react';
import styled from 'styled-components';
import emailIcon from '../img/email.png';

const InputEmail = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    alert(`${value} 신청되었습니다`);
    setValue('');
  };
  return (
    <MyDiv>
      <EmailDiv>
        <MyImg src={emailIcon} alt="email" />
        <EmailInput
          type="email"
          id="mail"
          placeholder="여기에 이메일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3vw"
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
      </EmailDiv>
      <MyHr />
    </MyDiv>
  );
};

const MyDiv = styled.div`
  text-align: center;
  height: 6.2vh;
  width: 27.6vw;
  margin: 0vh auto 13vh;
`;

const EmailDiv = styled.div`
  margin: 0 auto;
`;

const MyImg = styled.img`
  width: 7.54%;
  height: 43%;
  vertical-align: middle;
`;
const EmailInput = styled.input`
  :focus {
    outline: none;
  }
  border: none;
  margin: 0vh 2vw;
  width: 17vw;
  height: 4vh;
  vertical-align: middle;
  ::placeholder{
  text-align:center;
  font-size: 1.3vw;
  font-family: Arial;
  color:#ACACAC;
`;

const MyHr = styled.hr`
  width: 27.4vw;
  border: 1px solid black;
`;

export default InputEmail;
