import "../../css/mainView.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import prettier from "./prettier.PNG";
import music1 from "./music1.jpg";
import music2 from "./music2.jpg";
import music3 from "./music3.jpg";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@mui/material/Button";
import { sessionlogout } from "../../store/userSession";

import CardGroup from "react-bootstrap/CardGroup";

import Card from "react-bootstrap/Card";

const TopHeader = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ user });
  console.log(user.id);
  console.log(user.id === "");

  const goTologin = () => {
    navigate("/login");
  };

  const logout = () => {
    dispatch(sessionlogout());
    navigate("/login");
  };

  const goToWrite = () => {
    navigate("/MusicWrite");
  };

  return (
    <>
      <div className="topColor" />
      <div className="mainHeader">
        <a id="goToReco" className="topheader" href="/">
          Music_Reco
        </a>
        {user.id !== "" ? (
          <>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              id="musicWrite"
              className="topheader"
              onClick={goToWrite}
            >
              글쓰기
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              id="loginButton"
              className="topheader"
              onClick={logout}
            >
              로그아웃
            </Button>
          </>
        ) : (
          <Button variant="primary" id="loginButton" className="topheader" onClick={goTologin}>
            로그인
          </Button>
        )}
      </div>
    </>
  );
};

export default TopHeader;
