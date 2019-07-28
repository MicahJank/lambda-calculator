import React, {useState, useEffect} from "react";

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import "./App.css";
function App() {

  // the display needs to be set in a way where it can change depending on what buttons are pressed
  const [displayState, setDisplayState] = useState('0'); // initial value of the calculator should be 0

  // Here i am trying to make a function that will be able to grab a number. The number it needs
  // to grab is whatever number the user clicks on the calculator
  const grabNumber = (number) => {
    displayState !== '0' ? setDisplayState(displayState + number) : setDisplayState(number);
   if (displayState.length > 14) {
     setDisplayState('ERR'); // max character limit is 14 so if a user goes over that an Error is displayed
   }
  };

  // grabSpecial is a function that should be called in SpecialButton.js. It will grab the value of
  // whatever 'special' character (i.e. 'C', '+/-' or '%') and depending on which one was grabbed will
  // perform a different set of actions and show the result in the displayState
  const grabSpecial = (special) => {
    if (special === 'C') {
      clear();
    } else if (special === '+/-') {
      toggleNegative();
    }
  };

  // clear the display function
  const clear = () => {
    setDisplayState('0');
  };

  // a function that changes the display value to either positive or negative
  const toggleNegative = () => {
    const value = (-(Number(displayState))).toString();
    setDisplayState(value);
  };

  // calculate will take in a string mathmatical expression ('number + number') and calculate it
  // it will then set the display state to the result of that calculation
  const calculate = (expression) => {
    const calculation = eval(expression);
    setDisplayState(calculation);
  };
 

  return (
    <div className="container">
      <Logo />
      <Display currentValue={displayState}/>
      <div className="App">
        <div className="left-section">
          <Specials clickFunction={grabSpecial}/>
          <Numbers calculate={calculate} clickFunction={grabNumber} displayState={displayState}/>
        </div>
        
        <div className="right-section">
         <Operators displayState={displayState} clickFunction={calculate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
