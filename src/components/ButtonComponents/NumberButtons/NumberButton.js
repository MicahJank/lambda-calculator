import React from "react";

const NumberButton = (props) => {

  // the onClick should only work if the display doesnt have an error
  // when an error is present and a use clicks a button they will be prompted with an alert
  // telling them to clear the display before continuing
  const clickHandler = () => {
    if (props.displayState !== 'ERR') {
      props.clickFunction(props.number);
    } else {
      alert('ERROR: Please clear display.');
    }
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={clickHandler} className={`numberButton`} id={props.id}>{props.number}</button>
    </>
  );
};

export default NumberButton;
