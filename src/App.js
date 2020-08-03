import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './component/CounterGroup/CounterGroup';
import { createStore } from 'redux'
import counter from './reducers'


const store = createStore(counter)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup 
          size={2}
          totalValue={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </header>
    </div>
  );
}

export default App;
