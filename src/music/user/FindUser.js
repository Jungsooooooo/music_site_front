import React from "react";

import "../../css/FindUser.css";

const FindUser = () => {
  return (
    <>
      <div className="findUser">
        <div>
          이름
          <input id="findIdName" type="text" placeholder="아이디를 입력해주세요"></input>
        </div>
        <div>
          <h3>비밀번호</h3>
          <input id="findIdEmail" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default FindUser;
