import React from "react";

const Login = ({ log, isAuth, logout }) => {
  return (
    <div>
      <h2>click log in to login</h2>
      <button onClick={isAuth ? logout : log}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
