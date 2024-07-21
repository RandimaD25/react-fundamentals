import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const reduceValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with Randima {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={reduceValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
