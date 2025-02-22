import React, { useMemo } from "react";

function ExpensiveFunction() {
  const height = 5;
  const length = 6;
  return length * height;
}

export default function Hook() {
  const sqaure = useMemo(() => {
    ExpensiveFunction();
  }, [length]);
  return <div>sqaured window funcion : {sqaure}</div>;
}
