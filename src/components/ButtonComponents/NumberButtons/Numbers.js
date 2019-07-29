import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import data  from "../../../data.js"; // data is an object that contains 3 arrays

const numbers = data.numbers;

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(numberItem => { 
        return <NumberButton calculate={props.calculate} clickFunction={props.clickFunction} number={numberItem} id={`button${numberItem}`} displayState={props.displayState} setCalculatingState={props.setCalculatingState}/>
      })}
    </div>
  );
};

export default Numbers;
