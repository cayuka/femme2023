import React from "react";
import "./index.css";
import { FcAlarmClock } from "react-icons/fc";
import { Button } from "@mui/material";

const Home = ({ componentName }) => {
  return (
    <div className="flex-container">
      <FcAlarmClock className="timer" />
      <h1>Welcome to Timer</h1>
      <Button variant="contained" component={componentName} to="./timer">
        Get Started
      </Button>
    </div>
  );
};

export default Home;
