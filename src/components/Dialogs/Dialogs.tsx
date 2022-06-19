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
    RootStateType, updateMessageAT, UpdateNewPostTextAT
} from "../Redux/state";
import {addMessageCreator, updateMessageCreator} from "../Redux/dialogs-reducer";

type PropsType = {
    dialogsData: DialogsType[]
    messagesData: DialogsPageType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void

}

export const Dialogs = (props:PropsType) => {

let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);
let messageElements = props.messagesData.messages.map(m => <Message message={m.message}/>);

const addMessageHandler = () => {
    let newMessage = props.messagesData.newMessage
    props.dispatch(addMessageCreator(newMessage))

}

const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newTextMessage = e.currentTarget.value
    props.dispatch(updateMessageCreator(newTextMessage))
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div><textarea
                    onChange={newMessageChangeHandler}
                />
                </div>

                <button onClick={addMessageHandler}>send</button>
            </div>
        </div>
    )

}