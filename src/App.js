import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./music/user/LoginView";
import MainView from "./music/main/MainView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/" element={<MainView />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
