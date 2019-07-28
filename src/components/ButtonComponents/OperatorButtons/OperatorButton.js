import React from "react";

let expression = '';

const OperatorButton = (props) => {
  const clickHandler = () => {
    if (props.operator === '=') {
      props.clickFunction(expression);
    } else {
      expression += ` ${props.operator} ${props.displayState}`;
      console.log(expression);
    }
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={clickHandler} className="operatorButton">{props.operator}</button>
    </>
  );
};

export default OperatorButton;
