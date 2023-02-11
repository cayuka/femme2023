import React, { useEffect, useState } from "react";
import "./timer.css";
import { Button } from "@mui/material";

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState();

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className="pomodoro">
      <h1>Pomodoro Timer</h1>
      <Button variant="contained" onClick={start}>
        Begin
      </Button>
      <div>{secondsLeft} seconds left</div>
    </div>
  );
}

export default Timer;
