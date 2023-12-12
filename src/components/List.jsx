import React, { useState } from "react";

export default function List({ todos, setTodos }) {
  const [filterTodos, setFilterTodos] = useState("all");

  const handleCheckboxClick = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );

      console.log(updatedTodos);

      return updatedTodos;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterTodos === "all") return true;
    else if (filterTodos === "active") return !todo.completed;
    else if (filterTodos === "completed") return todo.completed;
    return true;
  });

  const handleClearCompleted = () => {
    const remainingTodos = filteredTodos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`${todo.completed ? "completed" : ""}`} // Apply the "completed" class conditionally
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxClick(index)}
              />
              <label>{todo.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
      <div className="footer">
        <span className="todo-count">
          <strong>{todos.length}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={filterTodos === "all" ? "selected" : ""}
              onClick={() => setFilterTodos("all")}
            >
              All
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => setFilterTodos("active")}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => setFilterTodos("completed")}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
    </section>
  );
}
