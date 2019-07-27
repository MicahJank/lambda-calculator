import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import data from "../../../data.js";

const specialsArray = data.specials;

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specialsArray); 

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsArray.map(specialCharacter => {
         return <SpecialButton special={specialCharacter} clickFunction={props.clickFunction}/>
       })}
    </div>
  );
};

export default Specials;