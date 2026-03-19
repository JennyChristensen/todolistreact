import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="app">
          <h1>Todo Liste</h1>
          <ThemeSwitcher />
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;