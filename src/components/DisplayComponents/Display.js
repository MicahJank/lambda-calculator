import React from "react";

const Display = props => {
  return (<div className="display">
  {/* Display any props data here */}
  <h4 className="displayNumber">{props.currentValue}</h4>
  
 
  </div>)
};


export default Display;
