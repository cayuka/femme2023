import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages";
import Timer from "./pages/timer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home componentName={Link} />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
