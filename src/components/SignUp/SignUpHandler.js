import React, { useState, useEffect, useCallback } from 'react';
import InputLayout from './IntputLayout';
import Password from './Password';
import InterestedBrand from './InterestedBrand';

const SignUpHandler = ({ title, placeholder, onChangeNext, nextToggle }) => {
  /* InputLayout에서 입력받은 input 값 */
  const [input, setInput] = useState('');
  /* title이 email일때 중복확인버튼과 메거진 구독 체크 박스를 띄워주기 위한 emailToggle */
  const [emailToggle, setEmailToggle] = useState(false);
  /* 이메일과 비밀번호가 validation 체크가 true 일때 옆에 체크 아이콘을 띄워주기 위한 checkIcon */
  const [checkIcon, setCheckIcon] = useState(false);
  /* validation 체크의 결과 값 */
  /* duplicate 체크의 결과 값 */
  /* password.js에서 입력받은 input 값 */
  const [pwdInputs, setPwdInputs] = useState({
    pwd: '',
    confirmPwd: '',
  });
  const { pwd, confirmPwd } = pwdInputs;
  /* 비밀번호와 비밀번호확인이 일치하지 않는 것 체크 (일치하지 않는다는 메세지 나타나게함) */
  const [incorrectMessage, setIncorrectMessage] = useState(false);
  /* 비밀번호가 형식에 맞지 않았을 때 메세지를 띄워주기 위한 체크 */
  const [validCheckMessage, setValidCheckMessage] = useState(false);

  const validationCheck = useCallback(
    async (_input) => {
      let vChk = false;
      /* 이메일 validation */
      if (title === '메일') {
        const isEmailRegex = (email) => {
          const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
          return emailRegex.test(email);
        };
        if (_input === '') {
          vChk = false;
        } else if (isEmailRegex(_input)) {
          vChk = true;
        } else if (!isEmailRegex(_input)) {
          setInput('');
          vChk = false;
        }
      } /* 비밀번호 validation */ else if (title === '비밀번호') {
        const isPwdRegex = (_pwd) => {
          const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          return pwdRegex.test(_pwd);
        };
        if (_input === '') {
          vChk = false;
        } else if (isPwdRegex(_input)) {
          vChk = true;
        } else if (!isPwdRegex(_input)) {
          vChk = false;
        }
      } else if (title === '이름') {
        /* 이름 validation */
        const isNameRegex = (name) => {
          const nameRegex = /^[가-힣]{2,4}$/;

          return nameRegex.test(name);
        };
        if (_input === '') {
          vChk = false;
        } else if (isNameRegex(_input)) {
          vChk = true;
        } else if (!isNameRegex(_input)) {
          setInput('');
          vChk = false;
        }
      } else if (title === '전화번호') {
        /* 전화번호 validation */
        const isTelRegex = (tel) => {
          const telRegex = /^\d{3}-\d{3,4}-\d{4}$/;

          return telRegex.test(tel);
        };
        if (_input === '') {
          vChk = false;
        } else if (isTelRegex(_input)) {
          vChk = true;
        } else if (!isTelRegex(_input)) {
          setInput('');
          vChk = false;
        }
      }
      return new Promise((resolve) => {
        resolve(vChk);
      });
    },
    [title],
  );
  /* 비밀번호와 비밀번호 확인 체크 */
  useEffect(() => {
    let chk;
    validationCheck(pwd).then((result) => {
      chk = result;
      setValidCheckMessage(result || pwd === '');
    });

    if (confirmPwd === '') {
      setCheckIcon(false);
      setIncorrectMessage(false);
    } else if (pwd === confirmPwd) {
      setIncorrectMessage(false);
      console.log(chk);
      if (chk) {
        setCheckIcon(true);
      } else setCheckIcon(false);
    } else {
      setCheckIcon(false);
      setIncorrectMessage(true);
    }
  }, [confirmPwd, pwd, validationCheck]);

  /* 이메일 중복확인 */
  const duplicateCheck = () => {
    const dChk = true;
    return new Promise((resolve) => {
      resolve(dChk);
    });
  };
  /* 이메일 중복 확인 눌렀을 때 */
  const onDuplicateButton = async () => {
    const validationChk = await validationCheck(input);
    const duplicateChk = await duplicateCheck();
    if (input === '') {
      alert('이메일을 입력해주세요');
    } else if (validationChk && duplicateChk) {
      setCheckIcon(true);
    } else if (!validationChk) {
      alert('이메일 형식이 잘못되었습니다.');
    } else if (!duplicateChk) {
      alert('이미 회원가입된 이메일 입니다.');
    }
  };
  /* input 값 입력완료후 다음으로 넘어가기 위한 버튼 눌렀을 때 */
  const onClick = async () => {
    const validationChk = await validationCheck(input);
    if (title === '메일') {
      const duplicateChk = await duplicateCheck();
      if (input === '') {
        alert('입력 해주세요');
      } else if (validationChk && duplicateChk) {
        onChangeNext(true);
      } else {
        alert('입력이 잘못되었습니다.');
      }
    } else if (input === '') {
      alert('입력 해주세요');
    } else if (validationChk) {
      onChangeNext(true);
    } else {
      alert('입력이 잘못되었습니다.');
    }
  };

  /* input 값 입력할때 받아오기 */
  const onChange = (e) => {
    const blank = /\s/;
    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.');
      return;
    }
    if (title === '비밀번호') {
      const { value, name } = e.target;
      setPwdInputs({
        ...pwdInputs,
        [name]: value,
      });
    }

    setInput(e.target.value);
  };

  useEffect(() => {
    if (title === '메일') {
      setEmailToggle(true);
    }
  }, [title]);

  if (title === '비밀번호') {
    return (
      <Password
        onClick={onClick}
        nextToggle={nextToggle}
        onChange={onChange}
        pwd={pwd}
        confirmPwd={confirmPwd}
        incorrectMessage={incorrectMessage}
        checkIcon={checkIcon}
        validCheckMessage={validCheckMessage}
      />
    );
  }
  if (title === '브랜드') {
    return <InterestedBrand nextToggle={nextToggle} />;
  }
  return (
    <InputLayout
      title={title}
      placeholder={placeholder}
      input={input}
      onChange={onChange}
      onDuplicateButton={onDuplicateButton}
      onClick={onClick}
      emailToggle={emailToggle}
      nextToggle={nextToggle}
      checkIcon={checkIcon}
    />
  );
};

export default SignUpHandler;
