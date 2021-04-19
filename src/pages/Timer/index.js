// Globals
import "./styles.scss";
import React, { useState, useEffect } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="qd-expired">
      <div className="qd-expired-emoji">⚠️</div>
      <div className="qd-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('00');
  const [startCount, setStartCount] = useState(false);

  let timer = 0;

  useEffect(() => {
    if (counter > 0 && startCount) {
      timer = setTimeout(updateTime, 1000)
    }

    return () => {
      clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (counter === 0) {
      clearTimeout(timer);
      setCounter(0);
      setStartCount(false);
    }
    secondsToTime(counter);
  }, [counter]);

  // convert seconds to time (hours, minutes)
  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let mints = secs % (60 * 60);
    let minutes = Math.floor(mints / 60);

    let secondsData = mints % 60;
    let seconds = Math.ceil(secondsData);
    setMinutes(minutes);
    setSeconds(`${seconds > 0 ? seconds > 10 ? seconds : '0' + seconds  : '00'}`)
  }

  const updateTime = () => {
    if (counter === 0) {
      setCounter(59);
    } else {
      setCounter(counter => counter - 1);
    }
  }

  // Reset timer
  const resetTimer = () => {
    setCounter(60);
    clearTimeout(timer);
    setStartCount(false);
  }

  // Start the timer
  const startTimer = () => {
    setStartCount(true);
  }

  // Render
  return (
    <div className="qd-page qd-timer">
      <h1>Timer</h1>

      <div className="qd-page-content">
        <div className="qd-timer-clock">{minutes}:{seconds}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="qd-timer-buttons">
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
