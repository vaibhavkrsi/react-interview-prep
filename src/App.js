import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const items = [
    {
      id: 1,
      name: "vaibhav",
      email: "vaibhav@text.com",
    },
    {
      id: 2,
      name: "rishi",
      email: "rishi@test.com",
    },
  ];
  return (
    <div>
      <label>
        search -: <input onChange={(e) => setText(e.target.value)} />
      </label>
      {items.some((item) => item.name === text) ? (
        <h1>This name is the list</h1>
      ) : (
        <h1>This mail is not in the list</h1>
      )}
    </div>
  );
}

export default App;
