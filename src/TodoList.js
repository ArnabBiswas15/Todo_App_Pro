import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  startEditing,
  saveEditedTodo,
  cancelEditing,
  deleteTodo,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          startEditing={startEditing}
          saveEditedTodo={saveEditedTodo}
          cancelEditing={cancelEditing}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
