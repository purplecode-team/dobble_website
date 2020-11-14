import React from 'react';
import styled from 'styled-components';

const InputLayout = (userInfo) => {
  let emailToggle = false;
  if (userInfo.title === '메일') {
    emailToggle = true;
  }
  const onclick = () => {
    alert('버튼을 눌렀습니다.');
  };
  return (
    <MyDiv>
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
        <TitleDiv>{userInfo.title}</TitleDiv>
        <EmailDiv>
          <InfoInput type="text" placeholder={`${userInfo.title}${userInfo.verb} 입력하세요`} />
          {emailToggle ? <ButtonInput type="button" value="중복확인" onClick={onclick} /> : ''}
        </EmailDiv>
        <svg xmlns="http://www.w3.org/2000/svg" width="52.6204vw" height="3" viewBox="0 0 1010 3">
          <rect id="사각형_36" data-name="사각형 36" width="1010" height="3" fill="#303030" />
        </svg>

        <EmailToggleDiv>
          {emailToggle ? (
            <ChkDiv>
              <ChkInput type="checkbox" value="subcribe" />
              매달 매거진 구독을 신청합니다
            </ChkDiv>
          ) : (
            <div />
          )}
          <OkSvg
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
          </OkSvg>
        </EmailToggleDiv>
      </InfoDiv>
    </MyDiv>
  );
};
const MyDiv = styled.div`
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

const InfoInput = styled.input`
  padding: 0px;
  width: 25vw;
  height: 4.81vh;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
  }
`;

const OkSvg = styled.svg`
  width: 2.031vw;
  height: 1.813vh;
`;

const EmailDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonInput = styled.input`
  :focus {
    outline: none;
  }
  width: 7.18vw;
  height: 4.07vh;
  float: right;
  border-radius: 12px;
  border: none;
  background-color: #efefef;
  font-size: 1.14vw;
  color: #d2d2d2;
`;
const ChkDiv = styled.div`
  font-size: 1.4vw;
`;
const ChkInput = styled.input`
  border-radius: 12px;
`;
const EmailToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default InputLayout;
