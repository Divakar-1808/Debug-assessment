import React, { useEffect, useState } from "react";
import { fetchTodos } from "../api/todoApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("[UI] Load todos failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Todos</h2>

      {todos.map((todo) => (
        <TodoItem todo={todo} onChange={loadTodos} />
      ))}
    </div>
  );
};

export default TodoList;
