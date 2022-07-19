import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {
    AddPostAT,
    PostsType, ProfilePageType, StoreType,
    UpdateNewPostTextAT
} from "../../Redux/state";
import {addPostCreator, updatePostsCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../Redux/redux-store";
import {DefaultRootState, useDispatch, useSelector} from "react-redux";

// type PropsTypePosts ={
//
//     store: AppRootStateType
//     dispatch: (action: UpdateNewPostTextAT | AddPostAT )=> void
// }

export const MyPostsContainer = () => {

    const dispatch = useDispatch()
    const profilePage  = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)

    let addPost = () => {
    let text = profilePage.newPosts
        dispatch(addPostCreator(text))
    }

    let onPostChange = (text:string ) => {
        dispatch(updatePostsCreator(text))
    }

    return (
        <div className={s.wrapper}>
            <MyPosts updatePostsCreator={onPostChange} addPost={addPost} postsData={profilePage.posts} newPostText={profilePage.newPosts}/>
        </div>
    )

}