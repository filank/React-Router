import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
  if (!isAuth) return <Redirect to="/" />;
  else return <Route component={Component} {...props} />;
};

export default PrivateRoute;
