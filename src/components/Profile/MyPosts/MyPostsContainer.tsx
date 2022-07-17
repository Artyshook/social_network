import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {
    AddPostAT,
    PostsType, StoreType,
    UpdateNewPostTextAT
} from "../../Redux/state";
import {addPostCreator, updatePostsCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../Redux/redux-store";

type PropsTypePosts ={

    store: AppRootStateType
    dispatch: (action: UpdateNewPostTextAT | AddPostAT )=> void
}

export const MyPostsContainer = (props: PropsTypePosts) => {

    let state = props.store;


    let addPost = () => {
    let text = props.store.profilePage.newPosts
        props.dispatch(addPostCreator(text))
    }

    let onPostChange = (text:string ) => {
        props.dispatch(updatePostsCreator(text))
    }

    return (
        <div className={s.wrapper}>
            <MyPosts updatePostsCreator={onPostChange} addPost={addPost} postsData={state.profilePage.posts} newPostText={state.profilePage.newPosts}/>
        </div>
    )

}