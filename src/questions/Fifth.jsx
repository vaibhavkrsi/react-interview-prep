//add and remove into cart

import React, { useEffect, useState } from "react";

const Fifth = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const reponse = async () => {
      const result = await fetch(`https://dummyjson.com/carts/`);
      const json = await result.json();
      const desire = 5;
      const des = json.carts.slice(0, desire);
      setData(des);
      console.log(json);
      console.log(des);
    };
    reponse();
  }, []);
  return (
    <div>
      {data.map((cart, index) => (
        <div key={index}>
          {cart.products.map((product, id) => (
            <div key={id}>
              <p>{product.title}</p>
              <img src={product.thumbnail} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fifth;
