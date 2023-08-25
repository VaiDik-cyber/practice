import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h3>Your count is {count}</h3>
      <button onClick={increaseCount}>+</button>

      <button onClick={decreaseCount}>-</button>
    </>
  );
}

export default App;
