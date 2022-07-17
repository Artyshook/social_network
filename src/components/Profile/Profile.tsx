import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import state, {AddPostAT, PostsType, ProfilePageType, StoreType, UpdateNewPostTextAT} from "../Redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../Redux/redux-store";

export type PropsTypePosts ={
    profilePage: ProfilePageType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT )=> void
    store: AppRootStateType



    // addPost: (postMessage: string) => void
    // UpdateNewPostText: (newText: string)=> void

}

// export type postsDataArray = {
//     id: number
//     post: string
//     likesCount: number
// }

export const Profile = (props: PropsTypePosts) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer dispatch={props.dispatch}  store={props.store}/>
        </div>
    )

}