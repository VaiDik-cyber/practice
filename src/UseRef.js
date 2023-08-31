import { React, useRef, useState } from "react";

export const UseRef = () => {
  const refElement = useRef("");
  const [name, setName] = useState("Vaidik");
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "skyblue";
  }
  return (
    <>
      <h1>UseRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Update input</button>
    </>
  );
};
