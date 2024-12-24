import React, { useState } from "react";

function TodoItem({
  todo,
  toggleTodo,
  startEditing,
  saveEditedTodo,
  cancelEditing,
  deleteTodo,
}) {
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveEdit = () => {
    saveEditedTodo(todo.id, editedText);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {todo.isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button onClick={handleSaveEdit} className="save-btn">Save</button>
          <button onClick={() => cancelEditing(todo.id)} className="cancel-btn">Cancel</button>
        </div>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => startEditing(todo.id)} className="edit-btn">
            ✎
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
            &#10005;
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
