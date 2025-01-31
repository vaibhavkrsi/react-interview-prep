// make a counter in react js
import React, { useState } from "react";

function Second() {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleClick1}>Click Me to +</button>
      <button onClick={handleClick2}>Click Me to -</button>
      <h3>{count}</h3>
    </>
  );
}

export default Second;
