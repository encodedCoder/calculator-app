import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="Calculator">
      <div className="card">
        <h1 className="card-title">
          Calculator by{" "}
          <a
            href="https://encodedcoder.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            encodedcoder
          </a>
        </h1>
        <div className="calculator">
          <div className="display">{display}</div>
          <button className="button" onClick={handleClear}>
            C
          </button>
          <button className="button" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="button" onClick={() => handleClick("*")}>
            *
          </button>
          <button className="button" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="button" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleClick("9")}>
            9
          </button>
          <button
            className="button operator plus"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button className="button" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="button operator equals" onClick={handleCalculate}>
            =
          </button>
          <button className="button double" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleClick(".")}>
            .
          </button>
        </div>
        <footer className="footer">
          &copy; 2025,{" "}
          <a
            href="https://encodedcoder.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            encodedcoder::Suresh
          </a>
          <br />
          <a
            href="https://github.com/encodedCoder/calculator-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Calculator;
