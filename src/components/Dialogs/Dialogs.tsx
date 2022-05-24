import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import state, {
    DialogsPageType,
    DialogsType,
    MessagesType,
    PostsType,
    ProfilePageType,
    RootStateType
} from "../Redux/state";

type PropsType = {
    dialogsData: DialogsType[]
    messagesData: MessagesType[]
}

export const Dialogs = (props:PropsType) => {

let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);
let messageElements = props.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )

}