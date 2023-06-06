import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./music/user/LoginView";
import MainView from "./music/main/MainView";
import MakeUser from "./music/user/MakeUser";
import TopHeader from "./music/main/TopHeader";
import MusicWrite2 from "./music/musicWrite/MusicWrite2";
import UserInfo from "./music/admin/UserInfo";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <TopHeader />
        </div>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/join" element={<MakeUser />} />
          <Route path="/musicWrite" element={<MusicWrite2 />} />
          <Route path="/admin/UserInfo" element={<UserInfo />} />
          {/* <Route path="/musicWrite2" element={<MusicWrite2/>}/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
