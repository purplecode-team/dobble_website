import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const UserInfo = () => {
  const [name, onChangeName, setName] = useInput('서유나');
  const [id, onChangeId, setId] = useInput('purplecode@naver.com');
  const [pwd, onChangePwd, setPwd] = useInput('123123123');
  const [modify, setModify] = useState(false);

  const onModify = () => {
    setModify(true);
  };
  const onSave = () => {
    setModify(false);
  };
  console.log(modify);
  return (
    <Container>
      <UserInfoContainer>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src="https://via.placeholder.com/90" style={{ borderRadius: '70%' }} alt="profile" />
        <TextInfo>
          <InfoItem>
            <InfoTitle>이름</InfoTitle>
            <InfoContent value={name} readOnly={!modify} onChange={onChangeName} modify={modify} />
          </InfoItem>
          <InfoItem>
            <InfoTitle>아이디</InfoTitle>
            <InfoContent
              type="email"
              value={id}
              readOnly={!modify}
              onChange={onChangeId}
              modify={modify}
            />
          </InfoItem>
          <InfoItem>
            <InfoTitle>비밀번호</InfoTitle>
            <InfoContent
              type="password"
              value={pwd}
              readOnly={!modify}
              onChange={onChangePwd}
              modify={modify}
            />
          </InfoItem>
        </TextInfo>
      </UserInfoContainer>

      {modify ? (
        <Btn
          xmlns="http://www.w3.org/2000/svg"
          width="9.06vw"
          height="7.407vh"
          viewBox="0 0 174 80"
          onClick={onSave}
        >
          <g id="그룹_179" data-name="그룹 179" transform="translate(-873 -800)">
            <rect
              id="사각형_92"
              data-name="사각형 92"
              width="174"
              height="80"
              rx="40"
              transform="translate(873 800)"
              fill="#f44"
            />
            <text
              id="저장하기"
              transform="translate(912 850)"
              fill="#fff"
              fontSize="24"
              fontFamily="Arial"
              letterSpacing="0.007em"
            >
              <tspan x="0" y="0">
                저장하기
              </tspan>
            </text>
          </g>
        </Btn>
      ) : (
        <Buttom>
          <Btn
            xmlns="http://www.w3.org/2000/svg"
            width="9.06vw"
            height="7.407vh"
            viewBox="0 0 174 80"
          >
            <g id="그룹_179" data-name="그룹 179" transform="translate(-770 -800)">
              <g
                id="사각형_58"
                data-name="사각형 58"
                transform="translate(770 800)"
                fill="none"
                stroke="#f44"
                strokeWidth="1"
              >
                <rect width="174" height="80" rx="40" stroke="none" />
                <rect x="0.5" y="0.5" width="173" height="79" rx="39.5" fill="none" />
              </g>
              <text
                id="로그아웃"
                transform="translate(809 850)"
                fill="#303030"
                fontSize="24"
                fontFamily="Arial"
                letterSpacing="0.007em"
              >
                <tspan x="0" y="0">
                  로그아웃
                </tspan>
              </text>
            </g>
          </Btn>
          <Btn
            xmlns="http://www.w3.org/2000/svg"
            width="9.06vw"
            height="7.407vh"
            viewBox="0 0 174 80"
            onClick={onModify}
          >
            <g id="그룹_159" data-name="그룹 159" transform="translate(-981 -810)">
              <g id="그룹_180" data-name="그룹 180">
                <rect
                  id="사각형_92"
                  data-name="사각형 92"
                  width="174"
                  height="80"
                  rx="40"
                  transform="translate(981 810)"
                  fill="#f44"
                />
                <text
                  id="정보수정"
                  transform="translate(1020 860)"
                  fill="#fff"
                  fontSize="24"
                  fontFamily="Arial"
                  letterSpacing="0.007em"
                >
                  <tspan x="0" y="0">
                    정보수정
                  </tspan>
                </text>
              </g>
            </g>
          </Btn>
        </Buttom>
      )}

      <Secession>회원탈퇴</Secession>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9.81vh;
  align-items: center;
`;
const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 12.03vh;
  align-items: center;
`;
const TextInfo = styled.ul`
  width: 24.53vw;
  font-family: Arial;
  font-size: 1.25vw;
  margin: 0px;
  padding: 0px;
  margin-left: 5.15vw;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const InfoItem = styled.li`
  display: flex;
  margin-bottom: 3.7vh;
  align-items: center;
  justify-content: space-between;
`;
const InfoTitle = styled.div`
  font-weight: bold;
`;

const InfoContent = styled.input`
  width: 17vw;
  height: 5vh;
  font-family: Arial;
  font-size: 1.25vw;
  padding: 0px;
  :focus {
    outline: none;
  }
   border: none;
  background-color: ${(modify) => (modify.modify ? '#FAFAFA;' : '')}
  ::placeholder {
    color: #cbcbcb;
  }
`;
const Buttom = styled.div`
  display: flex;
  width: 18vw;
  justify-content: space-between;
`;
const Secession = styled.div`
  margin-top: 3.98vh;
  color: #b3b3b3;
  font-family: Arial;
  font-size: 1.04vw;
  border-bottom: 1px solid #b3b3b3;
`;
const Btn = styled.svg`
  cursor: pointer;
`;
export default UserInfo;
