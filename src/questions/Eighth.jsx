import React, { useEffect } from "react";

const Eighth = () => {
  useEffect(() => {
    const res = async () => {
      const response = await fetch("https://dummyjson.com/carts");
      const json = response.json();
      console.log(json);
    };
    res();
  });
  return <div></div>;
};

export default Eighth;
