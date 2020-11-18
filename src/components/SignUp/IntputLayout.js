import React from 'react';
import {
  SignUpDiv,
  InputDiv,
  BottomDiv,
  ButtonInput,
  ChkDiv,
  CircleSvg,
  IconDiv,
  InfoDiv,
  InfoInput,
  LineDiv,
  SubDesc,
  SubmitSvg,
  TitleDiv,
} from './InputLayoutStyle';

const InputLayout = ({ title, verb, input, onChange, onClick, emailToggle }) => {
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
        <TitleDiv>{title}</TitleDiv>
        <LineDiv>
          <InputDiv>
            <InfoInput
              type="text"
              placeholder={`${title}${verb} 입력하세요`}
              name={title}
              value={input}
              onChange={() => onChange}
            />
            {emailToggle ? (
              <ButtonInput type="button" value="중복확인" onClick={() => onClick} />
            ) : (
              ''
            )}
          </InputDiv>
          <svg xmlns="http://www.w3.org/2000/svg" width="52.6204vw" height="2" viewBox="0 0 1010 3">
            <rect id="사각형_36" data-name="사각형 36" width="1010" height="2" fill="#303030" />
          </svg>
        </LineDiv>
        <BottomDiv>
          {emailToggle ? (
            <ChkDiv>
              <input type="checkbox" />
              <SubDesc> 매달 매거진 구독을 신청합니다</SubDesc>
            </ChkDiv>
          ) : (
            <div />
          )}
          <SubmitSvg
            xmlns="http://www.w3.org/2000/svg"
            width="2.031vw"
            height="1.813vh"
            viewBox="0 0 39 19.583"
            onClick={() => onClick}
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

export default InputLayout;
