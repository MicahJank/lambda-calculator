import React, {useState} from "react";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import "./App.css";
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  // the display needs to be set in a way where it can change depending on what buttons are pressed
  const [displayState, setDisplayState] = useState('0'); // initial value of the calculator should be 0

  // Here i am trying to make a function that will be able to grab a number. The number it needs
  // to grab is whatever number the user clicks on the calculator
  const GrabNumber = (number) => {
    console.log(displayState.length);
    displayState !== '0' ? setDisplayState(displayState + number) : setDisplayState(number);
   if (displayState.length > 14) {
     setDisplayState('ERR');
   }
  };

  return (
    <div className="container">
      <Logo />
      <Display currentValue={displayState}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="left-section">
          <Specials />
          <Numbers clickFunction={GrabNumber} displayState={displayState}/>
        </div>
        
        <div className="right-section">
         <Operators />
        </div>
       
 

      </div>
    </div>
  );
}

export default App;
