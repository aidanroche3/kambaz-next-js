import { create } from "zustand";

interface TodoState {
  todos: any[];
  todo: any;
  addTodo: (todo: { title: string }) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
  setTodo: (todo: { title: string }) => void;
}

// Use create function to create a hook giving us access to the state
export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, id: new Date().getTime().toString() }],
      todo: { title: "" },
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((item) => (item.id === todo.id ? todo : item)),
      todo: { title: "" },
    })),
  setTodo: (todo) => set({ todo }),
}));
