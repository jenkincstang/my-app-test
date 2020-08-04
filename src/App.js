import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoInput></ToDoInput>
        <ToDoList></ToDoList>
      </header>
    </div>
  );
}

export default App;