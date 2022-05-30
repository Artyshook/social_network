import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./components/Redux/state"

// type PropsType = {
//     state: RootStateType
// }

export let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );

}

