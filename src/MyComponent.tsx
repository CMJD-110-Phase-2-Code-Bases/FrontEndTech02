import { useState } from "react";

export const MyComponent = () => {

  const topic = "Hello everyone, this is CMJD 110 React Exercise";
  let value = 0;

  const [numValue,setNumValue] = useState(value);


  const valueIncrease = () => {
    setNumValue( prev => prev + 1)

  };
  const valueDecrease = () => {
    setNumValue(prev => prev - 1)
    
  };

  return (
    <>
      <p style={{ color: "Red", fontWeight: "bold" }}>{topic}</p>
      <br />
      <br />
      <br />
      <br />
      <h1>The value is: {numValue}</h1>
      <button onClick={valueIncrease}>Increase</button>
      <button style={{ marginLeft: "10px" }} onClick={valueDecrease}>
        Decrease
      </button>
    </>
  );
};
