import React, { useState } from 'react';
import InputLayout from './IntputLayout';

const SignUpHandler = ({ title, verb }) => {
  const [input, setInput] = useState('');
  const [emailToggle, setEmailToggle] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(name, value);
  };

  const onClick = () => {
    alert('버튼을 눌렀습니다.');
  };

  if (title === '메일') {
    setEmailToggle(true);
  }

  return (
    <InputLayout
      title={title}
      verb={verb}
      input={input}
      onChange={onChange}
      onClick={onClick}
      emailToggle={emailToggle}
    />
  );
};

export default SignUpHandler;
