import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

const UserInfo = () => {
  /* 수정하기를 눌렀을 때 readOnly 풀어주기 */
  const [modify, setModify] = useState(false);

  const { register, watch, errors, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '서유나',
      id: 'purplecode@naver.com',
      tel: '010-2740-1981',
    },
  });
  /* 임의의 현재 비밀번호 */
  const nowPwd = 'asdfasdf';
  /* 저장하기 버튼 눌렀을 때 firebase에서 가져오다가 에러나면 알려주는 에러 메세지 */
  const [errorFromSubmit, setErrorFromSubmit] = useState('');

  /* newPassword와 confirmPassword 비교하기 위해 현재 쓴 password */
  const newPassword = useRef();
  newPassword.current = watch('newPassword');
  /* 수정하기 버튼 눌렀을 때 */
  const onModify = () => {
    setModify(true);
  };

  /* 저장하기 버튼 눌렀을 때 */
  const onSave = () => {
    if (errors.id || errors.name || errors.password) {
      alert('입력이 제대로 되지 않았습니다.');
      return;
    }

    setModify(false);
    try {
      // firebase에 저장하기
    } catch (error) {
      setErrorFromSubmit(error.message);

      setTimeout(() => {
        setErrorFromSubmit('');
      }, 5000);
    }
  };
  return (
    <Wrapper>
      <UserInfoContainer>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src="https://via.placeholder.com/90" style={{ borderRadius: '70%' }} alt="profile" />
        <form onSubmit={handleSubmit(onSave)}>
          <InfoItem>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>이름</label>
            <InfoContent
              name="name"
              ref={register({ required: true, maxLength: 10 })}
              readOnly={!modify}
              modify={modify}
            />
          </InfoItem>
          {errors.name && errors.name.type === 'required' && (
            <ErrorMessage>이름은 반드시 입력해야합니다.</ErrorMessage>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <ErrorMessage>이름은 10글자를 넘길 수 없습니다.</ErrorMessage>
          )}
          <InfoItem>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>아이디</label>
            <InfoContent
              name="id"
              type="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              readOnly={!modify}
              modify={modify}
            />
          </InfoItem>
          {errors.id && errors.id.type === 'required' && (
            <ErrorMessage>이메일은 반드시 입력해야합니다.</ErrorMessage>
          )}
          {errors.id && errors.id.type === 'pattern' && (
            <ErrorMessage>이메일이 형식에 맞지 않습니다.</ErrorMessage>
          )}
          <InfoItem>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>전화번호</label>
            <InfoContent
              name="tel"
              type="tel"
              placeholder="000-0000-0000"
              ref={register({ required: true, pattern: /^\d{3}-\d{3,4}-\d{4}$/ })}
              readOnly={!modify}
              modify={modify}
            />
          </InfoItem>
          {errors.tel && errors.tel.type === 'required' && (
            <ErrorMessage>전화번호는 반드시 입력해야합니다.</ErrorMessage>
          )}
          {errors.tel && errors.tel.type === 'pattern' && (
            <ErrorMessage>전화번호 형식에 맞지 않습니다.</ErrorMessage>
          )}
          {modify && (
            <>
              <InfoItem>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>현재 비밀번호</label>
                <InfoContent
                  name="password"
                  type="password"
                  ref={register({ required: true, validate: (value) => value === nowPwd })}
                  readOnly={!modify}
                  modify={modify}
                />
              </InfoItem>
              {errors.password && errors.password.type === 'required' && (
                <ErrorMessage>비밀번호는 반드시 입력해야합니다.</ErrorMessage>
              )}
              {errors.password && errors.password.type === 'validate' && (
                <ErrorMessage>현재 비밀번호와 일치하지 않습니다.</ErrorMessage>
              )}
              <InfoItem>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>새 비밀번호</label>
                <InfoContent
                  name="newPassword"
                  type="password"
                  ref={register({ required: true, minLength: 6 })}
                  readOnly={!modify}
                  modify={modify}
                />
              </InfoItem>
              {errors.newPassword && errors.newPassword.type === 'required' && (
                <ErrorMessage>비밀번호는 반드시 입력해야합니다.</ErrorMessage>
              )}
              {errors.newPassword && errors.newPassword.type === 'minLength' && (
                <ErrorMessage>비밀번호는 6글자 이상이여야 합니다.</ErrorMessage>
              )}
              <InfoItem>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>새 비밀번호 확인</label>
                <InfoContent
                  name="confirmPassword"
                  type="password"
                  readOnly={!modify}
                  modify={modify}
                  ref={register({
                    required: true,
                    validate: (value) => value === newPassword.current,
                  })}
                />
              </InfoItem>
              {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                <ErrorMessage>비밀번호 확인은 반드시 입력해야합니다.</ErrorMessage>
              )}
              {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                <ErrorMessage>비밀번호와 비밀번호 확인이 일치하지 않습니다.</ErrorMessage>
              )}
            </>
          )}
        </form>
      </UserInfoContainer>
      {errorFromSubmit && <ErrorMessage>{errorFromSubmit}</ErrorMessage>}
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
              fill="#F44"
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
        <Button>
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
        </Button>
      )}

      <Secession>회원탈퇴</Secession>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9.81vh;
  align-items: center;

  form {
    width: 30vw;
    font-family: Arial;
    font-size: 1.25vw;
    margin-left: 5.15vw;
    display: flex;
    flex-direction: column;
  }
  label {
    font-weight: bold;
  }
`;
const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 12.03vh;
  align-items: center;
`;
const InfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1vh 0 1vh 0;
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
const ErrorMessage = styled.div`
  ::before {
    content: '⚠ ';
  }
  padding: 0;
  margin-left: 13vw;
  color: #ff4444;
  font-family: Arial;
  font-size: 0.8vw;
`;
const Button = styled.div`
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
