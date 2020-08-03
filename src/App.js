import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './component/CounterGroup/CounterGroup';
import { createStore } from 'redux'
import counter from './reducers'
import ReactDOM from 'react-dom'


const store = createStore(counter)

// const render = () => {
//   ReactDOM.render(
//     <div className="App">
//       <header className="App-header">
//         <CounterGroup 
//           size={2}
//           totalValue={store.getState()}
//           onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//           onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//         />
//       </header>
//     </div>
//   );
// };


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
store.subscribe(App);
App();
export default App;
