import React from 'react';
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route} from "react-router-dom"
import {Profile} from "./components/Profile/Profile";
import {RootStateType} from "./components/Redux/state"
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";

type PropsType = {
    state: RootStateType

}

function App (props: PropsType) {

    let dialogsData = props.state.dialogsPage.dialogs;
    let messagesData = props.state.dialogsPage.messages;
    let postsData = props.state.profilePage.posts;


  return (
      <HashRouter>
          <div className="appWrapper">
              <Navbar/>
              <Header/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' render={()=> <Dialogs  dialogsData={dialogsData}
                                                                messagesData={messagesData} />}/>
                  <Route path='/profile' render={()=><Profile postsData={postsData}/>}/>
              </div>
          </div>
      </HashRouter>

  );
}

export default App;
