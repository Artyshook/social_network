import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/Redux/state"


  let renderEntireTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );

}

renderEntireTree()

store.subscribe(renderEntireTree);