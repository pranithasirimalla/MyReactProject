import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function () {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      {console.log("todos--",todos)}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}
