import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./music/user/LoginView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
