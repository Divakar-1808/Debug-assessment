import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todoApi";

export const useTodos = () => {

  const [todos, setTodos] = useState();

  useEffect(() => {
    console.log("[BUG F5] useEffect triggered");
    fetchTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);
  return todos;
};
