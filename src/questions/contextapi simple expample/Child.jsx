import React, { useContext } from "react";
import { MessegePass } from "./Parent";

const Child = () => {
  const messege = useContext(MessegePass);
  return (
    <div>
      <h1>My name is -: {messege} </h1>
    </div>
  );
};

export default Child;
