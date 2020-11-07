import React from 'react';
import styled from 'styled-components';

const Sns = () => {
  return (
    <div>
      <MyUl className="sns">
        <MyLi>
          <MyA href="https://www.instagram.com/purple._.code/">INSTAGRAM</MyA>
        </MyLi>
        <MyLi>
          <MyA href="https://www.instagram.com/purple._.code/">KAKAO</MyA>
        </MyLi>
        <MyLi>
          <MyA href="https://www.facebook.com/purplecode2020">FACEBOOK</MyA>
        </MyLi>
      </MyUl>
    </div>
  );
};

const MyA = styled.a`
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-family: Stilu;
`;
const MyUl = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
`;
const MyLi = styled.li`
  padding: 30px 100px;
`;
export default Sns;
