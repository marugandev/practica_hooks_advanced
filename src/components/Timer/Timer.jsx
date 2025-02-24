import "./Timer.css";
import React from "react";

const Timer = ({ date }) => {
  console.log("Render Timer");

  return <h3 className="timer">{date}</h3>;
};

export default Timer;
