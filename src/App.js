import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = () => {
    if (!todoText) return;
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="title">Todo List</h1>

        <div className="todo-input-form">
          <input
            type="text"
            className="todo-input"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter your todo"
          />
          <button className="add-btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <span>{todo.text}</span>

              <div className="button-container">
                <button
                  className="edit-btn"
                  onClick={() => {
                    const newText = prompt('Edit Todo:', todo.text);
                    if (newText) handleEditTodo(todo.id, newText);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="check-btn"
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.completed ? 'Undo' : 'Mark as Completed'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
