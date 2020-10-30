import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Main from '../pages/main';
import Basket from '../pages/basket';
import Brand from '../pages/brand';
import MyPage from '../pages/mypage';
import Magazine from '../pages/magazine';
import Product from '../pages/product';
import AppLayout from './AppLayout';

const HomeRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product" component={Product} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/basket" component={Basket} />
    <Route path="/myPage" component={MyPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product" component={Product} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/login" component={Login} />
    <Redirect from="*" to="/login" />
  </Switch>
);

const RootRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <AppLayout>
            <HomeRoutes />
          </AppLayout>
        ) : (
          <AppLayout>
            <LoginRoutes />
          </AppLayout>
        )}
      </Switch>
    </Router>
  );
};

export default RootRouter;
