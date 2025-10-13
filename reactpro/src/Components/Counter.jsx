import { useState } from "react";
//import { Button } from "react-bootstrap";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1> Count value : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}> Decrement</button>
    </div>
  );
}
