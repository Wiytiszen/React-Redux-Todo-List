import React from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
