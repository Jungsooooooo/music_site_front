import "../../css/MakeUser.css";
import axios from "axios";

import { modal } from "antd";

import { useState } from "react";

const MakeUser = () => {
  const [idCheck, setIdCheck] = useState(null);

  const createUser = () => {
    const input = {
      id: document.getElementById("makeId").value,
      password: document.getElementById("makePass").value,
    };

    if (idCheck === null) {
      alert("아이디 중복확인을 해주세요.");
    } else if (idCheck === false) {
      alert("이미 있는 아이디 입니다.");
    } else {
      return axios.post("/api/user", input).then((res) => {
        console.log(res.data);
        alert("회원가입이 완료되었습니다");
      });
    }
  };

  const checkId = () => {
    const id = document.getElementById("makeId").value;

    return axios.get("/api/user/" + id).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        alert("이미 있는 아이디 입니다.");
        setIdCheck(false);
      } else {
        alert("사용 가능한 아이디 입니다.");
        setIdCheck(true);
      }
    });
  };

  return (
    <>
      <div className="topColor"></div>
      <div className="joinType">
        <a href="/" className="logo">
          Music Reco
        </a>
        <div>
          <h3>아이디</h3>
          <input id="makeId" type="text" className="col" placeholder="아이디를 입력해주세요"></input>
          <button id="idCheckButton" onClick={checkId}>
            중복확인
          </button>
        </div>
        <div>
          <h3>비밀번호</h3>
          <input id="makePass" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>비밀번호 확인</h3>
          <input id="checkPass" type="password"></input>
        </div>

        <div>
          <h3>이름</h3>
          <input id="makeName" type="text"></input>
        </div>

        <div>
          <h3>생년월일</h3>
          <input id="birth" type="date"></input>
        </div>

        <div>
          <h3>본인확인 이메일</h3>
          <input id="email" type="email"></input>
        </div>

        <div>
          <h3>휴대전화</h3>
          <input id="phoneNumber" type="tel"></input>
        </div>

        <div>
          <button className="loginButton" onClick={createUser}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeUser;
