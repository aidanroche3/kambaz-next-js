"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context state
interface TodoContextState {
  todo: any;
  todos: any[];
  addTodo: (todo: any) => void;
  deleteTodo: (todo: any) => void;
  updateTodo: (todo: any) => void;
  setCurrentTodo: (todo: any) => void;
}

// Create the context
const TodoContext = createContext<TodoContextState | undefined>(undefined);

// Create the provider component
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState({ title: "Learn Mongo" });
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);

  const addTodo = (todo: any) => {
    const newTodos = [
      ...todos,
      { ...todo, id: new Date().getTime().toString() },
    ];
    setTodos(newTodos);
    setTodo({ title: "" });
  };
  const deleteTodo = (id: any) => {
    const newTodos = todos.filter((item) => id !== item.id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({ title: "" });
  };
  const setCurrentTodo = (todo: any) => {
    setTodo(todo);
  };

  const value: TodoContextState = {
    todo,
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    setCurrentTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Create a custom hook to use the counter context
export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
