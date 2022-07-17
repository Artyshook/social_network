import {AddMessageAT, DialogsPageType, MessagesType, PostsType, StoreType, updateMessageAT} from "./state";

const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
export const  addMessageCreator = (newMessage:string): AddMessageAT => ({type: ADD_NEW_MESSAGE_TEXT, newMessage: newMessage})
export const updateMessageCreator = (newTextMessage:string): updateMessageAT => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: newTextMessage })

let initialState : DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Honza'},
        {id: 3, name: 'Veronika'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Nikol'}
    ],
    messages: [
        {id: 1, message: "Hi there!"},
        {id: 2, message: "It's 5 pm"},
        {id: 3, message: "Can't wait your visit"},
        {id: 4, message: "Hoooo"},
        {id: 5, message: "Yep!"}
    ],
    newMessage: "text"
}
export const dialogsReducer = (state = initialState, action: any) => {
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