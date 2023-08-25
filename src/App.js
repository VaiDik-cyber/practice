import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect(() => {
    console.log("useEffect run");
  }, [data]);
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function updateData() {
    setData("Seeta");
  }
  return (
    <>
      <h3>Your count is {count}</h3>
      <button onClick={increaseCount}>+</button>

      <button onClick={decreaseCount}>-</button>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default App;
