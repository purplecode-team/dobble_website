import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from './SignUpStyle';

const AgreeForJoin = ({ register, errors, watch, setValue }) => {
  const checkAll = useRef();
  const check1 = useRef();
  const check2 = useRef();
  checkAll.current = watch('checkAll');
  check1.current = watch('check1');
  check2.current = watch('check2');

  /* 전체 동의하기 눌렀을 때 */
  useEffect(() => {
    console.log(checkAll.current);
    console.log(check1.current);
    if (checkAll.current) {
      setValue('check1', true);
      setValue('check2', true);
    }
  }, [checkAll.current]);

  /* 전체 선택 후 개별 선택 했을 때 전체 선택 해제하기
  개별 선택으로 모두 선택했을 때 전체 선택 체크*/
  useEffect(() => {
    if (!check1.current || !check2.current) {
      setValue('checkAll', false);
    }
    if (check1.current && check2.current) {
      setValue('checkAll', true);
    }
  }, [check1.current, check2.current]);
  return (
    <AgreeDiv>
      <AgreeUl>
        <SelectAll>
          <AgreeChk type="checkbox" name="checkAll" ref={register} />
          <div>모든 항목 선택하기</div>
        </SelectAll>
        <FirstAgree>
          <AgreeText>
            <AgreeChk type="checkbox" name="check1" ref={register({ required: true })} />
            <div>개인정보의 수집 및 이용에 대한 동의(필수)</div>
          </AgreeText>
          {errors.check1 && errors.check1.type === 'required' && (
            <ErrorMessage>필수 체크 항목 입니다.</ErrorMessage>
          )}
        </FirstAgree>
        <SecondAgree>
          <AgreeChk type="checkbox" name="check2" ref={register} />
          <div>마케팅 활용 및 광고성 정보 수신 동의(선택)</div>
        </SecondAgree>
      </AgreeUl>
    </AgreeDiv>
  );
};
const AgreeDiv = styled.div`
  margin: 8vh auto 0 auto;
  width: 58vw;
  font-size: 1.041vw;
  @media (max-width: 768px) {
    width: 76vw;
  }
`;
const AgreeUl = styled.ul`
  padding: 0px;
`;
const SelectAll = styled.li`
  display: flex;
  margin-bottom: 2.962vh;
  font-weight: bold;
`;
const FirstAgree = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.962vh;
`;
const SecondAgree = styled.li`
  display: flex;
  margin-bottom: 14.07vh;
`;

const AgreeText = styled.div`
  display: flex;
`;

const AgreeChk = styled.input`
  margin: 0px 2.604vw 0px 0px;
`;

export default AgreeForJoin;
