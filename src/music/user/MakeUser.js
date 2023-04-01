import "../../css/MakeUser.css";
import axios from "axios";

const MakeUser = () => {
  const createUser = () => {
    const input = {
      id: document.getElementById("makeId").value,
      password: document.getElementById("makePass").value,
    };

    return axios.post("/api/user", input).then((res) => {
      console.log(res);
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
          <input id="birth" type="text"></input>
        </div>

        <div>
          <h3>성별</h3>
          <input id="sex" type="text"></input>
        </div>

        <div>
          <h3>본인확인 이메일</h3>
          <input id="email" type="text"></input>
        </div>

        <div>
          <h3>휴대전화</h3>
          <input id="phoneNumber" type="text"></input>
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
