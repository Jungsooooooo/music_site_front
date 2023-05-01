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
import { Button } from "react-bootstrap-buttons";
import { sessionInfo } from "../../store/userSession";

const MusicWrite = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });
  return <></>;
};

export default MusicWrite;
