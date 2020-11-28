import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import UserInfo from './userInfo';
import WishList from './wishList';

const Nav = () => {
  return (
    <div>
      <NavContainer>
        <Line />
        <List to="/mypage" exact activeClassName="active">
          <ListItem>회원정보</ListItem>
        </List>
        <Line />
        <List to="/mypage/wishlist" activeClassName="active">
          <ListItem>찜목록</ListItem>
        </List>
        <Line />
      </NavContainer>

      <Route path="/mypage" exact component={UserInfo} />
      <Route path="/mypage/wishlist" component={WishList} />
    </div>
  );
};

const NavContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  list-style: none;
  margin-top: 7.4vh;
  font-family: Arial;
  font-size: 1.25vw;
  font-weight: bold;
`;
const List = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  width: 12.135vw;
  text-align: center;
  border-bottom: 2px solid #cbcbcb;
  &.active {
    border-bottom: 2px solid #ff4444;
  }
`;

const ListItem = styled.div`
  margin-bottom: 2.77vh;
`;

const Line = styled.div`
  width: 10.15vw;
  border-bottom: 2px solid #cbcbcb;
`;
export default Nav;
