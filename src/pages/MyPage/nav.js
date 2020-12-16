import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import WishList from './wishList';
import ChangeUserInfo from './ChangeUserInfo';

const Nav = () => {
  return (
    <MyPageContainer>
      <NavContainer>
        <List to="/mypage" exact activeClassName="active">
          <ListItem>회원정보</ListItem>
        </List>
        <List to="/mypage/wishlist" activeClassName="active">
          <ListItem>찜목록</ListItem>
        </List>
      </NavContainer>
      <Route path="/mypage" exact component={UserInfo} />
      <Route path="/mypage/changeuserinfo" component={ChangeUserInfo} />
      <Route path="/mypage/wishlist" component={WishList} />
    </MyPageContainer>
  );
};
const MyPageContainer = styled.div`
  width: 660px;
  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 480px) {
    width: 330px;
  }
`;
const NavContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 7.4vh;
  font-family: Arial;
  font-size: 1.25vw;
  font-weight: bold;
  @media (max-width: 480px) {
    margin-top: 4vh;
    font-size: 3vw;
  }
`;
const List = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  width: 330px;
  text-align: center;
  border-bottom: 2px solid #cbcbcb;
  &.active {
    border-bottom: 2px solid #ff4444;
  }
  @media (max-width: 768px) {
    width: 225px;
  }
  @media (max-width: 480px) {
    width: 165px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 2.77vh;
`;

export default Nav;
