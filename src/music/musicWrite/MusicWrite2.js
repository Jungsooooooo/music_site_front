import React, { Component } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

import axios from "axios";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "@mui/material/Button";

import "../../css/MusicWrite2.css";
import { useState } from "react";

const MusicWrite2 = () => {
  const [reco, setReco] = useState("");

  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });

  console.log({ user });

  const musicRecoWrite = () => {
    const input = {
      title: document.getElementById("musicWriteTitle").value,
      info: reco,
      userUUID: user.uid,
    };
    console.log({ input });
    axios
      .post("/api/musics", input, {
        headers: { Authorization: localStorage.getItem("jwtToken") },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="entireForm">
      <Form.Control
        size="lg"
        type="text"
        placeholder="제목 입력해주세요"
        id="musicWriteTitle"
      />
      <CKEditor
        id="ckForm"
        editor={ClassicEditor}
        config={{
          placeholder: "내용을 입력해주세요",
        }}
        data=""
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        onChange={(event, editor) => {
          let data = editor.getData();

          let deletePTag = data.replace(/<p>/g, "").replace(/<\/p>/g, "");

          setReco(deletePTag);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <Button variant="contained" color="success" onClick={musicRecoWrite}>
        작성
      </Button>
    </div>
  );
};

export default MusicWrite2;
