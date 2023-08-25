import { useState } from "react";

const TokenReceptacle = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        className="insert-cash"
        onClick={() => setCounter((prev) => Number(prev) + 1)}
      >
        add £1
      </button>
      <h3>cash: £{counter}</h3>
    </>
  );
};

export default TokenReceptacle;
