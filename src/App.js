import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';

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
        <ToDoInput></ToDoInput>
        <ToDoList></ToDoList>
      </header>
    </div>
  );
}

export default App;
