import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useTodo } from "./todosContext";
export default function ReactContextTodoList() {
  const { todo, todos, addTodo, deleteTodo, updateTodo, setCurrentTodo } =
    useTodo()!;
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm
          todo={todo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          setCurrentTodo={setCurrentTodo}
        />
        {todos.map((todo: any, index: number) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            setCurrentTodo={setCurrentTodo}
          />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
