import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import firebase from '../../firebase/firebase';
import { logoutRequest } from '../../reducer/user';

const UserInfo = ({ history }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequest());
  }, []);

  const user = [];
  // useEffect(() => {
  //   const users = firebase.auth().currentUser;
  //   users &&
  //     users.providerData.forEach(function (profile) {
  //       console.log(`Sign-in provider: ${profile.providerId}`);
  //       console.log(`  Provider-specific UID: ${profile.uid}`);
  //       console.log(`  Name: ${profile.name}`);
  //       console.log(`  Email: ${profile.email}`);
  //       console.log(`  Photo URL: ${profile.photoURL}`);
  //     });
  // }, []);

  // const userId = firebase.auth().currentUser.uid;
  // firebase
  //   .database()
  //   .ref(`/users/${userId}`)
  //   .once('value')
  //   .then(function (snapshot) {
  //     user.push(snapshot.val().tel);
  //     user.push(snapshot.val().name);
  //     // console.log(snapshot.val().name);
  //     // console.log(snapshot.val().tel);
  //   });
  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    const query = firebase.database().ref(`/users/${userId}`);
    const loadData = async () => {
      try {
        await query.once('value').then(function (snapshot) {
          user.push(snapshot.val().tel);
          user.push(snapshot.val().name);
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const onClick = () => {
    history.push('/mypage/changeuserinfo');
  };
  return (
    <Container>
      {console.log(user)}
      <Img src="https://via.placeholder.com/90" style={{ borderRadius: '50%' }} alt="profile" />
      <UserName>user</UserName>
      <ItemList>
        <Line />
        <InfoItem>
          <MailTitle>메일</MailTitle>
          <InfoContent>{me.email}</InfoContent>
        </InfoItem>
        <Line />
        <InfoItem>
          <TelTitle>전화번호</TelTitle>
          <InfoContent>{user[0]}</InfoContent>
        </InfoItem>
        <Line />
      </ItemList>
      <Button>
        <LogoutBtn type="button" value="로그아웃" onClick={onLogout} />
        <ModifyBtn type="button" value="정보수정" onClick={onClick} />
      </Button>
      <Secession>회원탈퇴</Secession>
    </Container>
  );
};

export default UserInfo;
