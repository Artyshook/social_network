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

type PropsType = {
    store: StoreType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void


}

function App (props: PropsType) {
    let dialogsData = props.store._state.dialogsPage.dialogs;
    let messagesData = props.store._state.dialogsPage
    let postsData = props.store._state.profilePage;
    let dispatch = props.dispatch

  return (
      <HashRouter>
          <div className="appWrapper">
              <Navbar/>
              <Header/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' render={()=> <Dialogs  dialogsData={dialogsData}
                                                                messagesData={messagesData}
                                                                dispatch={dispatch}
                  />}/>
                  <Route path='/profile' render={()=><Profile profilePage={postsData} dispatch={dispatch}/>}/>
              </div>
          </div>
      </HashRouter>

  );
}

export default App;
