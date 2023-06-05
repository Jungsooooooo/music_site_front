import React, { Component } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../css/MusicWrite2.css";

const MusicWrite2 = () => {
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
    <div className="entireForm">
      <h2>Title</h2>
      <CKEditor
        editor={ClassicEditor}
        data=""
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        // onChange={(event, editor) => {
        //   const data = editor.getData();
        //   console.log({ event, editor, data });
        // }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </div>
  );
};

export default MusicWrite2;
