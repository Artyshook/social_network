import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from "./components/Redux/state"
import {renderEntireTree} from "./render";



renderEntireTree(state);