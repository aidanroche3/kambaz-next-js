import { ListGroupItem, Button } from "react-bootstrap";

export default function TodoItem({
  todo,
  deleteTodo,
  setCurrentTodo,
}: {
  todo: { id: string; title: string };
  deleteTodo: (id: any) => void;
  setCurrentTodo: (todo: any) => void;
}) {
  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => deleteTodo(todo.id)}
        id="wd-delete-todo-click"
        className="btn-danger"
      >
        {" "}
        Delete{" "}
      </Button>
      <Button onClick={() => setCurrentTodo(todo)} id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </Button>
      {todo.title}{" "}
    </ListGroupItem>
  );
}
