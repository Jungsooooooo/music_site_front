import "../../css/mainView.css";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";

import "../../css/MusicWrite.css";

const MusicWrite = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });

  const musicRecoWrite = () => {};

  return (
    <div className="center">
      <form onSubmit={""}></form>
      <label className="labelright">제목:</label>
      <input type="text" />
      <div className="center">
        <label className="labelright">장르:</label>
        <input type="text" />
      </div>
      <div className="center">
        <label className="labelright">추천이유:</label>
        <textarea rows={10} cols={50} />
      </div>
      <div className="center">
        <Button variant="contained" color="success">
          작성
        </Button>
      </div>
    </div>
  );
};

export default MusicWrite;
