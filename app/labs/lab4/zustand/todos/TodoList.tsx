"use client";
import { ListGroup } from "react-bootstrap";
import { useTodoStore } from "./store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function ZustandTodoList() {
  const { todo, todos, addTodo, deleteTodo, updateTodo, setTodo } =
    useTodoStore((state) => state);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm
          todo={todo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          setCurrentTodo={setTodo}
        />
        {todos.map((todo: any, index: number) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            setCurrentTodo={setTodo}
          />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
