import {AddMessageAT, DialogsPageType, MessagesType, PostsType, StoreType, updateMessageAT} from "./state";

const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
export const  addMessageCreator = (newMessage:string): AddMessageAT => ({type: ADD_NEW_MESSAGE_TEXT, newMessage: newMessage})
export const updateMessageCreator = (newTextMessage:string): updateMessageAT => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: newTextMessage })

export const dialogsReducer = (state: DialogsPageType, action: any) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessage = action.newTextMessage;
    } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
        let body: MessagesType = {
            id: 111,
            message: action.newMessage
        }

        state.messages.push(body);
        state.newMessage = '';
    }

    return state
}