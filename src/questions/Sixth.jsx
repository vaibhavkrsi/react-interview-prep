//passsing props and state to child component

import { useState } from "react";

function Child({ c, increment, d }) {
  return (
    <div>
      <h1>Count : {c}</h1>
      <button onClick={increment}>Click me </button>
      <h3>{d}</h3>
    </div>
  );
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const b = "this is a messege";

  function handleClick() {
    setCount(count + 1);
  }
  return <Child c={count} increment={handleClick} d={b} />;
}
