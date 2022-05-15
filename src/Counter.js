import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Sorry, Cannot got below zero");
      setCounter(0);
    }
  };
  const color = counter < 5 ? "red" : counter > 100 ? "green" : "";
  console.log(color);
  return (
    <div className="container">
      <button onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <p className={color}>{counter}</p>
      <button onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
