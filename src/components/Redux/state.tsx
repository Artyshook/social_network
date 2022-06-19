import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type PostsType = {
    id: number
    post: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPosts: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType//
    dialogsPage: DialogsPageType//
}
export type StoreType = {
    _state : RootStateType
    // addPost: (postMessage: string) => void
    // UpdateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: ()=> RootStateType
    _callSubscriber: () => void
    dispatch: (action: UpdateNewPostTextAT | AddPostAT | AddMessageAT |  updateMessageAT)=> void
}
export type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type AddPostAT = {
    type: "ADD-POST"
    newPosts: string
}
export type AddMessageAT = {
    type: "ADD-NEW-MESSAGE-TEXT"
    newMessage: string
}
export  type updateMessageAT = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newTextMessage: string
}

let store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi how are you?', likesCount: 23},
                {id: 2, post: 'First post here', likesCount: 1},
                {id: 2, post: 'First post here', likesCount: 1}
            ],
            newPosts: "text"
        },
        dialogsPage: {
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

    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log("rendering")
    },
    subscribe (observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch (action) {
       this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage,action);
       this._state.profilePage =  profileReducer(this._state.profilePage,action);
       this._callSubscriber();
    }

}

export default store;
