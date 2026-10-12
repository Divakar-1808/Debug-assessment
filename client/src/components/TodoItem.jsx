import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../api/todoApi";
import "./TodoItem.css";

const TodoItem = ({ todo, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      console.log("[UI] Delete success");
      onChange();
    } catch (error) {
      console.error("[UI] Delete failed:", error.message);
    }
  };

  const handleUpdate = async () => {
    await updateTodo(todo.id, {title, description });
    setIsEditing(false);
    onChange();
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <div>
        <strong>{todo.title}</strong>
        {todo.description && <p>{todo.description}</p>}
      </div>

      <div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
