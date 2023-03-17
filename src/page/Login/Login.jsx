import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Login.css";
export default function Login() {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const navigate = useNavigate();
  const ChangePageType = () => {
    if (pageType == "login") {
      setPageType("register");
    } else {
      setPageType("login");
    }
  };
  return (
    <div className="contain">
      <h1>Welcome To Blog App</h1>

      <div className="content">
        {<h2>{isLogin ? "SignUp Form" : "Register Form"}</h2>}
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin ? (
          <p className="link" onClick={ChangePageType}>Dont have an account? Register Now</p>
        ) : null}
        {isRegister ? (
          <p className="link" onClick={ChangePageType}>Already have an account? Log in Now</p>
        ) : null}
      </div>
    </div>
  );
}
