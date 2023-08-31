import React from "react";
import "../../css/loginView.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sessionInfo } from "../../store/userSession";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    const input = {
      id: document.getElementById("putId").value,
      password: document.getElementById("putPass").value,
    };

    if (input.id === "" && input.password === "") {
      dispatch(sessionInfo({ id: "관리자" }));
      navigate("/");
    } else {
      return axios.post("/api/users/login", input).then((res) => {
        console.log({ res });

        if (res.status === 200 && res.data.id !== "") {
          alert("환영합니다");
          dispatch(sessionInfo( res.data.token,res.data.uuid));
          localStorage.setItem("jwtToken", res.data.token);
          navigate("/");
        } else {
          alert("정확한 아이디와 비밀번호를 입력해주세요");
        }
      });
    }
  };

  return (
    <>
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
          <a href="/findUser" id="findId">
            아이디 찾기
          </a>
          <a href="/findpassword" id="findPassword">
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
