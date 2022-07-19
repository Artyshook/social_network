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
import {useDispatch, useSelector} from "react-redux";

// type PropsType = {
//     // dialogsData: DialogsType[]
//     // messagesData: DialogsPageType
//     // dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void
//     // store: StoreType
//     store: AppRootStateType
//     dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void
// }

export const DialogsContainer = () => {

    const dispatch = useDispatch()
    const dialogPage : DialogsPageType = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsPage)

    // let state = props.store;


    const addMessageHandler = () => {
        let newMessage = dialogPage.newMessage
        dispatch(addMessageCreator(newMessage))

    }

    const newMessageChangeHandler = (text: string) => {
        dispatch(updateMessageCreator(text))
    }

    return (
        <div className={s.dialogs}>
           <Dialogs addMessage={addMessageHandler} addNewMessage={newMessageChangeHandler} dialogsData={dialogPage.dialogs} messagesData={dialogPage.messages}/>
        </div>
    )

}