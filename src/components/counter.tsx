import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      Click to increase: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </>
  );
};
export default Counter;
