import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Main from '../pages/main';
import Basket from '../pages/basket';
import Brand from '../pages/brand';
import Product from '../pages/product';
import Magazine from '../pages/Magazine';
import AppLayout from './AppLayout';
import SignUp from './SignUp';
import MyPage from '../pages/MyPage';
import MagazinePage from '../pages/Magazine/MagazinePage';

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product" component={Product} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/basket" component={Basket} />
    <Redirect from="*" to="/" />
  </Switch>
);

const HomeRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product" component={Product} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/magazinepage" component={MagazinePage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/mypage" component={MyPage} />
    <Redirect from="*" to="/login" />
  </Switch>
);

const RootRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <AppLayout>
            <LoginRoutes />
          </AppLayout>
        ) : (
          <AppLayout>
            <HomeRoutes />
          </AppLayout>
        )}
      </Switch>
    </Router>
  );
};

export default RootRouter;
