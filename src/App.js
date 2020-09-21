import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./Component/Category";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Products from "./Component/Products";
import PrivateRoute from "./Component/PrivateRoute";
import Login from "./Component/Login";
import Admin from "./Component/Admin";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const log = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login">
            <Login log={log} isAuth={isAuth} logout={logout} />
          </Route>
          {/* <Route path="/admin" component={Admin} /> */}
          <PrivateRoute path="/admin" component={Admin} isAuth={isAuth} />
        </Switch>
      </div>
      {/* <button onClick={log}>Login</button> */}
    </Router>
  );
}

export default App;
