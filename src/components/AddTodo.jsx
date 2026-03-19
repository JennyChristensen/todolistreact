import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("Todo can't be empty");
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Write your task here"
      />
      <button type="submit">Add</button>
    </form>
  );
};