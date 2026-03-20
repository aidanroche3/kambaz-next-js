"use client";
import { CounterProvider } from "./counter/context";
import CounterContext from "./counter";
import { TodoProvider } from "./todos/todosContext";
import ReactContextTodoList from "./todos/ReactContextTodoList";

export default function ReactContextExamples() {
  return (
    <div>
      <h1>React Context Examples</h1>
      <CounterProvider>
        <CounterContext />
      </CounterProvider>
      <TodoProvider>
        <ReactContextTodoList />
      </TodoProvider>
    </div>
  );
}
