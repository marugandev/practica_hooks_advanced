import "./Calculator.css";

import React, { useEffect, memo, useReducer, useRef } from "react";
import Button from "../Button/Button";
import ShowResult from "../ShowResult/ShowResult";

const Calculator = memo(() => {
  console.log("Render Calculator");

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const resultRef = useRef(null);
  const arrayHistoricalResultsRef = useRef([]);
  const inputNumberRef = useRef(null);
  const actionRef = useRef(null);
  let prevInputNumber = null;

  const inputFocus = () => {
    if (inputNumberRef.current) {
      inputNumberRef.current.focus();
    }
  };

  const clearInputNumberRef = () => {
    if (inputNumberRef.current) inputNumberRef.current.value = "";
    inputFocus();
  };

  const getInputValue = () => {
    let inputNumber = inputNumberRef.current?.valueAsNumber;
    if (isNaN(inputNumber)) return null;
    clearInputNumberRef();
    return inputNumber;
  };

  const getButtonAction = (e) => {
    actionRef.current = e.target.getAttribute("data-action");
    console.log("action:", actionRef.current);
    return actionRef.current;
  };

  const handleValues = (e) => {
    prevInputNumber = getInputValue();
    console.log("prevInputNumber:", prevInputNumber);
    getButtonAction(e);
  };

  const handleResult = () => {
    let inputNumber = getInputValue();
    console.log("inputNumber:", inputNumber);

    switch (actionRef.current) {
      case "sum":
        resultRef.current = prevInputNumber + inputNumber;
        break;
      case "subtract":
        resultRef.current = prevInputNumber - inputNumber;
        break;
      case "multiply":
        resultRef.current = prevInputNumber * inputNumber;
        break;
      case "split":
        resultRef.current = prevInputNumber / inputNumber;
        break;
      case "percentaje":
        resultRef.current = (prevInputNumber * inputNumber) / 100;
        break;
      default:
        return;
    }

    console.log("Result:", resultRef.current);

    arrayHistoricalResultsRef.current.push(resultRef.current);
    console.log(arrayHistoricalResultsRef.current);

    prevInputNumber = null;
    actionRef.current = null;

    forceUpdate();
    inputFocus();
  };

  useEffect(() => {
    inputFocus();
  }, []);

  return (
    <>
      <h3>_Calculator</h3>
      <label htmlFor="calculatorInput">
        <input
          type="number"
          name="calculatorInput"
          id="calculatorInput"
          className="calculator-input"
          min="0"
          ref={inputNumberRef}
        />
      </label>
      <div className="buttons-container">
        <Button name={"+"} func={handleValues} DA="sum" />
        <Button name={"-"} func={handleValues} DA="subtract" />
        <Button name={"x"} func={handleValues} DA="multiply" />
        <Button name={"/"} func={handleValues} DA="split" />
        <Button name={"%"} func={handleValues} DA="percentaje" />
        <Button name={"="} func={handleResult} />
      </div>
      <ShowResult text="_Last result:" result={resultRef.current} />
      <ShowResult
        text="_Historical results:"
        result={arrayHistoricalResultsRef.current.slice(-2).join(", ")}
      />
    </>
  );
});

export default Calculator;
