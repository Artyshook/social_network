import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import state, {AddPostAT, PostsType, ProfilePageType, UpdateNewPostTextAT} from "../Redux/state";

export type PropsTypePosts ={
    profilePage: ProfilePageType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT )=> void


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
            <MyPosts postsData={props.profilePage.posts}
                     newPostText={props.profilePage.newPosts}
                     dispatch={props.dispatch}
            />
        </div>
    )

}