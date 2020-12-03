import React, { useState } from 'react';
import styled from 'styled-components';

const AgreeAndJoin = () => {
  return (
    <AgreeDiv>
      <AgreeUl>
        <SelectAll>
          <AgreeChk type="checkbox" />
          <div>모든 항목 선택하기</div>
        </SelectAll>
        <FirstAgree>
          <AgreeChk type="checkbox" />
          <div>개인정보의 수집 및 이용에 대한 동의</div>
        </FirstAgree>
        <SecondAgree>
          <AgreeChk type="checkbox" />
          <div>매거진 구독을 위한 개인정보의 수집 및 이용에 대한 동의</div>
        </SecondAgree>
      </AgreeUl>
    </AgreeDiv>
  );
};
const AgreeDiv = styled.div`
  margin-top: 3.425vh;
`;
const AgreeUl = styled.ul`
  padding: 0px;
  width: 57.187vw;
  margin: 0vh auto;
  font-size: 1.041vw;
`;
const SelectAll = styled.li`
  display: flex;
  margin-bottom: 2.962vh;
  font-weight: bold;
`;
const FirstAgree = styled.li`
  display: flex;
  margin-bottom: 2.962vh;
`;
const SecondAgree = styled.li`
  display: flex;
  margin-bottom: 14.07vh;
`;

const SubmitButton = styled.input`
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
`;
const AgreeChk = styled.input`
  margin-right: 2.604vw;
`;

export default AgreeAndJoin;
