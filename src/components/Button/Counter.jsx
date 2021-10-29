import React, { useState } from "react";
import "./Counter.scss";

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div className="box">
 
      <div className="counter-section">
        <h5>Counter</h5>
         <h2>{count}</h2>
         <button onClick={handleDecrement}>-</button>  <button onClick={handleIncrement}>+</button> 
      </div>
   
    </div>
    
  );
}

export default Counter;