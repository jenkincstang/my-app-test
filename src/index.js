import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import CompletedItemList from './component/CompletedItemList';
import {HashRouter, Route} from "react-router-dom";

const store = createStore(reducer);
//Provider的作用
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <Route exact path="/" component={App}/>
        <Route path="/finished" component={CompletedItemList}/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


