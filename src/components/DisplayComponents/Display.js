import React from "react";

const Display = props => {
  return (<div className="display">
  {/* Display any props data here */}
  <h4 className="displayNumber">0</h4>
  {props.calculation}
 
  </div>)
};


export default Display;
