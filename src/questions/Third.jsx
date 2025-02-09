//make a simple weather app in react js

import React, { useEffect, useState } from "react";

function Third() {
  const [place, setPlace] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!place) {
      return;
    }
    const res = async () => {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=60a15c624a01854338a3fea307dff906`
      );
      const result = await api.json();
      setData(result);
    };
    res();
  }, [place]);
  return (
    <div>
      Search-: <input type="text" onChange={(e) => setPlace(e.target.value)} />
      {data && data.main ? (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}</p>
        </div>
      ) : (
        <p>Enter a valid city</p>
      )}
    </div>
  );
}

export default Third;
