import React from "react";
import "../../css/loginView.css";
import axios from "axios";

const LoginView = () => {
  const login = () => {
    const input = {
      id: document.getElementById("putId").value,
      password: document.getElementById("putId").value,
    };

    return axios.get("/api/user", input).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="topColor"></div>
      <div className="loginType">
        <a href="/" className="logo">
          Music Reco
        </a>
        <div>
          <input id="putId" type="text" placeholder="아이디를 입력해주세요"></input>
        </div>
        <div>
          <input id="putPass" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>
        <div className="joinOrFind">
          <a href="/join" id="register">
            회원가입
          </a>
          <a href="/login" id="findId">
            아이디 찾기
          </a>
          <a href="/login" id="findPassword">
            비밀번호 찾기
          </a>
        </div>
        <div>
          <button className="loginButton" onClick={login}>
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginView;
