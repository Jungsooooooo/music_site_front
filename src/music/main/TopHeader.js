import "../../css/mainView.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { sessionlogout } from "../../store/userSession";

const TopHeader = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ user });

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
        {user.login === true ? (
          <div id="musicWrite">
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
          </div>
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            id="musicWrite"
            className="topheader"
            onClick={goTologin}
          >
            로그인
          </Button>
        )}
      </div>
    </>
  );
};

export default TopHeader;
