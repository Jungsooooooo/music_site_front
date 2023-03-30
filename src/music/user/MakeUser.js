import "../../css/MakeUser.css";

const MakeUser = () => {
  return (
    <>
      <div className="topColor"></div>
      <div className="loginType">
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
          <input id="checkPass" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>이름</h3>
          <input id="makeName" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>생년월일</h3>
          <input id="birth" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>성별</h3>
          <input id="sex" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>본인확인 이메일</h3>
          <input id="email" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <h3>휴대전화</h3>
          <input id="phoneNumber" type="password" placeholder="비밀번호는 8자리 이상"></input>
        </div>

        <div>
          <button className="loginButton" onClick={""}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeUser;
