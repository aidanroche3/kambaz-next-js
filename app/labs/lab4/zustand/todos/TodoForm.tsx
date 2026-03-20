import { ListGroupItem, Button, FormControl } from "react-bootstrap";

export default function TodoForm({
  todo,
  addTodo,
  updateTodo,
  setCurrentTodo,
}: {
  todo: any;
  addTodo: (todo: any) => void;
  updateTodo: (todo: any) => void;
  setCurrentTodo: (todo: any) => void;
}) {
  return (
    <ListGroupItem>
      <Button
        onClick={() => addTodo(todo)}
        id="wd-add-todo-click"
        className="btn-success"
      >
        {" "}
        Add{" "}
      </Button>
      <Button
        onClick={() => updateTodo(todo)}
        id="wd-update-todo-click"
        className="btn-warning"
      >
        {" "}
        Update{" "}
      </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => setCurrentTodo({ ...todo, title: e.target.value })}
      />
    </ListGroupItem>
  );
}
