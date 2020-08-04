import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './component/CounterGroup/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={0} sum={0} />
      </header>
    </div>
  );
}

export default App;


// size={2}
//           totalValue={store.getState()}
//           onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//           onDecrement={() => store.dispatch({ type: 'DECREMENT' })}