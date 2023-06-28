import React from "react";
import { Button } from "@mui/material";

const findPassword = () => {
  return (
    <div className="findUser">
      <div>
        <label className="findUserLableName">이름</label>
        <input id="findIdName" type="text"></input>
      </div>
      <div>
        <label className="findUserLableName">아이디</label>
        <input id="findId" type="text"></input>
      </div>
      <div>
        <label className="findUserLableName">이메일</label>
        <input id="findIdEmail" type="text"></input>
      </div>
      <div>
        <Button variant="outlined" className="findButton" onClick={""}>
          찾기
        </Button>
      </div>
    </div>
  );
};

export default findPassword;
