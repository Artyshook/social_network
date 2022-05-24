import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./components/Redux/state"


// export type PostsType = {
//     id: number
//     post: string
//     likesCount: number
// }
//
// export type DialogsType = {
//     id: number
//     name: string
//
// }
//
// export type MessagesType = {
//     id:number
//     message: string
// }

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);


