import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Password = () => {
  const [pwdInputs, setPwdInputs] = useState({
    pwd: '',
    confirmPwd: '',
  });
  const { pwd, confirmPwd } = pwdInputs;
  /* 비밀번호와 비밀번호확인이 일치시 체크 (체크후 체크 아이콘 나타나게함) */
  const [pwdOk, setPwdOk] = useState(false);
  /* 비밀번호와 비밀번호확인이 일치하지 않는 것 체크 (일치하지 않는다는 메세지 나타나게함) */
  const [incorrectMessage, setIncorrectMessage] = useState(false);

  useEffect(() => {
    if (pwd === '' || confirmPwd === '') {
      setPwdOk(false);
      setIncorrectMessage(false);
    } else if (pwd !== confirmPwd) {
      setPwdOk(false);
      setIncorrectMessage(true);
    } else {
      setPwdOk(true);
      setIncorrectMessage(false);
    }
  }, [confirmPwd, pwd]);

  const onChange = (e) => {
    const { value, name } = e.target;
    /* 입력 칸에 공백 사용할 수 없음 */
    const blank = /\s/;
    if (blank.test(value) === true) {
      alert('공백은 사용할 수 없습니다.');
      return;
    }
    setPwdInputs({
      ...pwdInputs,
      [name]: value,
    });
  };

  return (
    <SignUpDiv>
      <IconDiv>
        <CircleSvg
          xmlns="http://www.w3.org/2000/svg"
          width="1.979vw"
          height="3.518vh"
          viewBox="0 0 38 38"
        >
          <g id="타원_6" data-name="타원 6" fill="none" stroke="red" strokeWidth="5">
            <circle cx="19" cy="19" r="19" stroke="none" />
            <circle cx="19" cy="19" r="16.5" fill="none" />
          </g>
        </CircleSvg>
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
      </IconDiv>
      <InfoDiv>
        <TitleDiv>비밀번호</TitleDiv>
        <InputDiv>
          <PwdDiv>
            <InputPwd
              type="password"
              placeholder="비밀번호를 입력하세요"
              name="pwd"
              onChange={onChange}
              value={pwd}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24vw" height="2" viewBox="0 0 461 2">
              <rect id="사각형_36" data-name="사각형 36" width="461" height="2" fill="#303030" />
            </svg>
          </PwdDiv>
          <PwdDiv>
            <ConfirmDiv>
              <ConfirmPwd
                type="password"
                placeholder="비밀번호를 확인하세요"
                name="confirmPwd"
                onChange={onChange}
                value={confirmPwd}
              />
              {pwdOk ? (
                <OkSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.291vw"
                  height="4.07vh"
                  viewBox="0 0 44 44"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect width="16" height="16" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="그룹_104" data-name="그룹 104" transform="translate(-1466 -652)">
                    <circle
                      id="타원_9"
                      data-name="타원 9"
                      cx="22"
                      cy="22"
                      r="22"
                      transform="translate(1466 652)"
                      fill="#efefef"
                    />
                    <g id="Yes" transform="translate(1480 666)" clipPath="url(#clip-path)">
                      <path
                        id="Checkbox"
                        d="M6.9,12,1,6.1,2.4,4.7,6.9,9.1,15,1l1.4,1.4Z"
                        transform="translate(-1 1)"
                      />
                      <rect
                        id="사각형_556"
                        data-name="사각형 556"
                        width="16"
                        height="16"
                        fill="none"
                      />
                    </g>
                  </g>
                </OkSvg>
              ) : (
                ''
              )}
            </ConfirmDiv>
            <svg xmlns="http://www.w3.org/2000/svg" width="24vw" height="2" viewBox="0 0 461 2">
              <rect id="사각형_36" data-name="사각형 36" width="461" height="2" fill="#303030" />
            </svg>
          </PwdDiv>
        </InputDiv>

        <BottomDiv>
          {incorrectMessage ? <Incorrect>비밀번호가 일치하지 않습니다.</Incorrect> : <div> </div>}
          <SubmitSvg
            xmlns="http://www.w3.org/2000/svg"
            width="2.031vw"
            height="1.813vh"
            viewBox="0 0 39 19.583"
          >
            <path
              id="합치기_3"
              data-name="합치기 3"
              d="M27.824-1255.066A1.824,1.824,0,0,1,26-1256.891a1.823,1.823,0,0,1,1.823-1.823H58.81l-13.8-13.035a1.633,1.633,0,0,1,0-2.4,1.874,1.874,0,0,1,2.543,0l16.277,15.378a1.723,1.723,0,0,1,.257.305,1.823,1.823,0,0,1,.909,1.578,1.824,1.824,0,0,1-1.823,1.824Z"
              transform="translate(-26 1274.649)"
              fill="#303030"
            />
          </SubmitSvg>
        </BottomDiv>
      </InfoDiv>
    </SignUpDiv>
  );
};
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
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52.6204vw;
  margin-left: 2.604vw;
`;
const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
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
  width: 20vw;
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
  display: flex;
  width: 24vw;
  justify-content: space-between;
`;
const SubmitSvg = styled.svg`
  width: 2.031vw;
  height: 1.813vh;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.61vh;
`;
const PwdDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4.63vw;
`;
const OkSvg = styled.svg``;
const Incorrect = styled.div`
  font-size: 1.04vw;
  color: red;
`;
export default Password;
