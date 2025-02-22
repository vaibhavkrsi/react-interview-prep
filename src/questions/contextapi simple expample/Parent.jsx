import React, { createContext } from "react";
import Child from "./Child";

export const MessegePass = createContext();

const Parent = () => {
  const name = "vaibhav";
  return (
    <div>
      <MessegePass.Provider value={name}>
        <Child />
      </MessegePass.Provider>
    </div>
  );
};

export default Parent;
