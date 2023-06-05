import { useSelector } from "react-redux";
import React from "react";

import axios from "axios";

import Button from "@mui/material/Button";

import "../../css/mainView.css";
import "../../css/MusicWrite.css";

const MusicWrite = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });

  console.log({ user });

  const musicRecoWrite = () => {
    const input = {
      title: document.getElementById("title").value,
      genre: document.getElementById("genre").value,
      recoReason: document.getElementById("recoReason").value,
      userUUID: user.uid,
    };
    axios.post("/api/musicMain", input);
  };

  return (
    <div className="center">
      <form onSubmit={""}></form>
      <label className="labelright">제목:</label>
      <input type="text" id="title" />
      <div className="center">
        <label className="labelright">장르:</label>
        <input type="text" id="genre" />
      </div>
      <div className="center">
        <label className="labelright">추천이유:</label>
        <textarea rows={10} cols={50} id="recoReason" />
      </div>
      <div className="center">
        <Button variant="contained" color="success" onClick={musicRecoWrite}>
          작성
        </Button>
      </div>
    </div>
  );
};

export default MusicWrite;
