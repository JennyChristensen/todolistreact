import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  if (todos.length === 0) return <p>No tasks yet.</p>;

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
};