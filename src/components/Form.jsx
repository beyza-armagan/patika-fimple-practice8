import React from "react";

function Form({ handleFormSubmit }) {
  return (
    <header className="header">
      <form onSubmit={handleFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="newTodo"
        />
      </form>
    </header>
  );
}

export default Form;
