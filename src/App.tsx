import React, { createContext, useContext, useState, ReactNode } from "react";
import { createRoot } from "react-dom/client";

// Определение типов
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Выучить React Context", completed: false },
    { id: 2, text: "Сделать домашнее задание", completed: false }
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("TodoList must be used within a TodoProvider");
  const { todos, toggleTodo } = context;
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

const AddTodo: React.FC = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("AddTodo must be used within a TodoProvider");
  const { addTodo } = context;
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

const App: React.FC = () => {
  return (
    <TodoProvider>
      <h1>Todo List с React Context</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;