import React from 'react';
import {
  Container,
  InfoItem,
  InfoContent,
  Button,
  Img,
  ItemList,
  LogoutBtn,
  MailTitle,
  ModifyBtn,
  Secession,
  TelTitle,
  UserName,
  Line,
} from './MyPageStyle';

const UserInfo = ({ history }) => {
  const user = {
    name: '서유나',
    email: 'purplecode@naver.com',
    tel: '010-2740-1981',
  };
  const onClick = () => {
    history.push('/mypage/changeuserinfo');
  };
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Img src="https://via.placeholder.com/90" style={{ borderRadius: '50%' }} alt="profile" />
      <UserName>{user.name}</UserName>
      <ItemList>
        <Line />
        <InfoItem>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <MailTitle>메일</MailTitle>
          <InfoContent>{user.email}</InfoContent>
        </InfoItem>
        <Line />
        <InfoItem>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <TelTitle>전화번호</TelTitle>
          <InfoContent>{user.tel}</InfoContent>
        </InfoItem>
        <Line />
      </ItemList>
      <Button>
        <LogoutBtn type="button" value="로그아웃" />
        <ModifyBtn type="button" value="정보수정" onClick={onClick} />
      </Button>
      <Secession>회원탈퇴</Secession>
    </Container>
  );
};

export default UserInfo;
