import React from "react";
import "./Todo.css";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`$(task.completed ? 'completed': "")`}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)} className="update-btn">
          update
        </button>
        <button onClick={() => deleteTodo(task.id)} className="delete-btn">
          delete
        </button>
      </div>
    </div>
  );
};
