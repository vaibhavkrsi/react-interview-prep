//make a simple weather app in react js

import React, { useEffect } from "react";

function Third() {
  useEffect(() => {
    const res = async () => {
      const result = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=60a15c624a01854338a3fea307dff906"
      );
    };
  });
  return <div></div>;
}

export default Third;
