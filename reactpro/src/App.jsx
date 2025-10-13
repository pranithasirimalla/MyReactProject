import { useState } from "react";
import Hello from "./Components/Hello.jsx";
import Fruits from "./Components/Fruits.jsx";
import Message from "./Components/Message.jsx";
import Counter from "./Components/Counter.jsx";
import Form from "./Components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);
  const person = {
    name: "Pranitha",
    message: "Hello",
    emoji: "👋",
    seatNumbers: [1, 2, 3, 4, 5],
  };

  return (
    <div className="App">
      {/* <Hello person={person} /> */}
      {/* <Fruits /> */}
      {/* <Message text="This is an alert message!" /> */}
      {/*<Counter />  */}
      <Form />
    </div>
  );
}

export default App;
