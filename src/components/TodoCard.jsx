import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function TodoCard() {
  const [todos, setTodos] = useState([
    { text: "Learn JavaScript", completed: true },
    { text: "Learn React ", completed: false },
    { text: "Have a life", completed: false },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text: e.target.elements.newTodo.value, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <section className="todoapp">
        <h1>todos</h1>

        <Form handleFormSubmit={handleFormSubmit} />
        <List todos={todos} setTodos={setTodos} />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}
