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
        <input id="findIdName" type="text"></input>
      </div>
      <div>
        <label className="findUserLableName">이메일</label>
        <input id="findIdEmail" type="text"></input>
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
