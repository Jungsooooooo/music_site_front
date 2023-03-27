import React from "react";
import "../../css/loginView.css";

const LoginView = () => {
  return (
    <div className="loginType">
      <p className="logo">Music</p>
      <div>
        <input id="putId" type="text" placeholder="아이디를 입력해주세요"></input>
      </div>
      <div>
        <input id="putPass" type="password" placeholder="비밀번호는 8자리 이상"></input>
      </div>
      <div>
        <button className="loginButton">로그인</button>
      </div>
    </div>
  );
};

export default LoginView;
