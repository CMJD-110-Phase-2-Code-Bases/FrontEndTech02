export const MyComponent = () => {
  const topic = "Hello everyone, this is CMJD 110 React Exercise";
  let value = 0;
  const valueIncrease = () => {
    value++;
    console.log(value);
  };
  const valueDecrease = () => {
    value--;
    console.log(value);
  };
  return (
    <>
      <p style={{ color: "Red", fontWeight: "bold" }}>{topic}</p>
      <br />
      <br />
      <br />
      <br />
      <h1>The value is: {value}</h1>
      <button onClick={valueIncrease}>Increase</button>
      <button style={{ marginLeft: "10px" }} onClick={valueDecrease}>
        Decrease
      </button>
    </>
  );
};
