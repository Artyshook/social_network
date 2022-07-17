import React, {ChangeEvent} from 'react';
import {DialogItem} from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import state, {
    AddMessageAT,
    AddPostAT,
    DialogsPageType,
    DialogsType,
    MessagesType,
    PostsType,
    ProfilePageType,
    RootStateType, StoreType, updateMessageAT, UpdateNewPostTextAT
} from "../Redux/state";
import {addMessageCreator, updateMessageCreator} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../Redux/redux-store";

type PropsType = {
    // dialogsData: DialogsType[]
    // messagesData: DialogsPageType
    // dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void
    // store: StoreType
    store: AppRootStateType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void
}

export const DialogsContainer = (props: PropsType) => {


    let state = props.store;


    const addMessageHandler = () => {
        let newMessage = state.dialogsPage.newMessage
        props.dispatch(addMessageCreator(newMessage))

    }

    const newMessageChangeHandler = (text: string) => {
        props.dispatch(updateMessageCreator(text))
    }

    return (
        <div className={s.dialogs}>
           <Dialogs addMessage={addMessageHandler} addNewMessage={newMessageChangeHandler} dialogsData={state.dialogsPage.dialogs} messagesData={state.dialogsPage.messages}/>
        </div>
    )

}