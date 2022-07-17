import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store}  from "./components/Redux/redux-store"
import {RootStateType} from "./components/Redux/state";


  let renderEntireTree = (state : any) => {
    ReactDOM.render(
        <App store={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );

}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state)
});