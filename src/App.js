import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './component/CounterGroup/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
      </header>
    </div>
  );
}

export default App;