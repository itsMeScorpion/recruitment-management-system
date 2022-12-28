//private Route

import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRouter = ({ Component, isLogin, ...rest }) => {
  if (!isLogin) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
  return <Route {...rest} component={Component} />;
};
export default PrivateRouter;
