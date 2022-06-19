import {AddPostAT, MessagesType, PostsType, ProfilePageType, StoreType, UpdateNewPostTextAT} from "./state";

const  ADD_POST =  "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const updatePostsCreator = (newText: string):UpdateNewPostTextAT =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const addPostCreator = (newPosts:string): AddPostAT => ({type: ADD_POST,  newPosts: newPosts})


export const profileReducer = (state: ProfilePageType, action:any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                post: action.newPosts,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPosts = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPosts = action.newText;
            break;
    }


    return state
}