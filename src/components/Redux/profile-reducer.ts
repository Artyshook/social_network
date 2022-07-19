import {AddPostAT, MessagesType, PostsType, ProfilePageType, StoreType, UpdateNewPostTextAT} from "./state";

const  ADD_POST =  "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const updatePostsCreator = (newText: string):UpdateNewPostTextAT =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const addPostCreator = (newPosts:string): AddPostAT => ({type: ADD_POST,  newPosts: newPosts})

let initialState : ProfilePageType = {
    posts: [
        {id: 1, post: 'Hi how are you?', likesCount: 23},
        {id: 2, post: 'First post here', likesCount: 1},
        {id: 2, post: 'First post here', likesCount: 1}
    ],
        newPosts: "text"
};

export const profileReducer = (state = initialState , action:any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                post: action.newPosts,
                likesCount: 0
            };

            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts.push(newPost)
            stateCopy.newPosts = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.newPosts = action.newText;
            return stateCopy ;
    }


    return state
}