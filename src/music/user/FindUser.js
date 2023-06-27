import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

import "../../css/FindUser.css";

const FindUser = () => {
  const findId = () => {
    const input = {
      name: document.getElementById("findIdName").value,
      email: document.getElementById("findIdEmail").value,
    };

    return axios.post("/api/users/findid", input).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="findUser">
      <div>
        <label className="findUserLableName">이름</label>
        <input id="findIdName" type="text" placeholder="아이디를 입력해주세요"></input>
      </div>
      <div>
        <label className="findUserLableName">이메일</label>
        <input id="findIdEmail" type="text" placeholder="비밀번호는 8자리 이상"></input>
      </div>
      <div>
        <Button variant="outlined" className="findButton" onClick={findId}>
          찾기
        </Button>
      </div>
    </div>
  );
};

export default FindUser;
