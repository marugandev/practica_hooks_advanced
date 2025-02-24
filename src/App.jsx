import "./App.css";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";

import { useEffect, useState } from "react";
import UseGetDate from "./hooks/UseGetDate";
import Header from "./components/Header/Header";

function App() {
  console.log("Render App");
  const date = UseGetDate();
  return (
    <>
      <Header />
      <Timer date={date}></Timer>
      <Calculator></Calculator>
    </>
  );
}

export default App;
