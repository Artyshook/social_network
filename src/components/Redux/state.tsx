import {renderEntireTree} from "../../render";

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
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type RootStateType = {
    profilePage: ProfilePageType// Why not [] at the end ??
    dialogsPage: DialogsPageType// Why not [] at the end ??
}

export const addPost = (postMessage: string) => {
    let newPost: PostsType = {
        id: 5,
        post: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);

}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi how are you?', likesCount: 23},
            {id: 2, post: 'First post here', likesCount: 1}
        ]
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
        ]
    }

}

export default state;