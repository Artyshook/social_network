import React from 'react';
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route} from "react-router-dom"
import {Profile} from "./components/Profile/Profile";
import {
    AddMessageAT,
    AddPostAT,
    RootStateType,
    StoreType,
    updateMessageAT,
    UpdateNewPostTextAT
} from "./components/Redux/state"
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";
import {AppRootStateType} from "./components/Redux/redux-store";

type PropsType = {
    store: AppRootStateType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void


}

function App (props: PropsType) {
    let dialogsData = props.store.dialogsPage.dialogs;
    let messagesData = props.store.dialogsPage
    let postsData = props.store.profilePage;
    let dispatch = props.dispatch


  return (
      <HashRouter>
          <div className="appWrapper">
              <Navbar/>
              <Header/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' render={()=> <DialogsContainer  dispatch={dispatch} store={props.store}/>}/>
                  <Route path='/profile' render={()=><Profile profilePage={postsData} dispatch={dispatch} store={props.store}/>}/>
              </div>
          </div>
      </HashRouter>

  );
}

export default App;
