import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./music/user/LoginView";
import MainView from "./music/main/MainView";
import MakeUser from "./music/user/MakeUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/join" element={<MakeUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
