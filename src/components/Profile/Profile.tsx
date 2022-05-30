import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import state, {PostsType} from "../Redux/state";

export type PropsTypePosts ={
    postsData: PostsType[]
    addPost: (postMessage: string) => void
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
            <MyPosts postsData={props.postsData}  addPost={props.addPost}/>
        </div>
    )

}