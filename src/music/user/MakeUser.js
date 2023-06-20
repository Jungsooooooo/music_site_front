import "../../css/MakeUser.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MakeUser = () => {
  const [idCheck, setIdCheck] = useState(null);
  const [modalState, setModalState] = useState(true);
  const [inputAddressValue, setInputAddressValue] = useState("");
  const [inputZipCodeValue, setInputZipCodeValue] = useState("");
  const [open, setOpen] = useState(false);

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  useEffect(() => {}, [inputZipCodeValue]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createUser = () => {
    const input = {
      id: document.getElementById("makeId").value,
      password: document.getElementById("makePass").value,
      address: document.getElementById("makeAddress").value,
      phone: document.getElementById("phoneNumber").value,
      birth: document.getElementById("birth").value,
    };

    if (idCheck === null) {
      alert("아이디 중복확인을 해주세요.");
    } else if (idCheck === false) {
      alert("이미 있는 아이디 입니다.");
    } else if (document.getElementById("makePass").value.length < 8) {
      alert("비밀번호는 8자리 이상 입력해주세요.");
    } else if (document.getElementById("makePass").value !== document.getElementById("checkPass").value) {
      alert("비밀번호를 확인해주세요.");
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

  const postCodeStyle = {
    width: "400px",
    height: "400px",
    display: modalState ? "block" : "none",
  }; // 스타일 정의 code

  const onCompletePost = (data) => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  };

  return (
    <>
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
          <h3>주소</h3>
          <input id="makeAddress" type="text" value={inputZipCodeValue}></input>
          <button id="idCheckButton" onClick={handleClickOpen}>
            검색
          </button>
        </div>

        <div>
          <input id="makeAddress" type="text" value={inputAddressValue}></input>
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

      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <DaumPostcode onComplete={onCompletePost}></DaumPostcode>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MakeUser;
