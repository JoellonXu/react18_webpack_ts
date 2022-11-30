import React, { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = memo(() => {
 
  return (
    <Link to={"/home"} style={{ fontSize: "14px" }}>
    登录
  </Link>
  );
});

export default Login;
