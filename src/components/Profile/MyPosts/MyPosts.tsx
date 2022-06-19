import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {
    AddPostAT,
    PostsType,
    UpdateNewPostTextAT
} from "../../Redux/state";
import {addPostCreator, updatePostsCreator} from "../../Redux/profile-reducer";

type PropsTypePosts ={
    postsData: PostsType[]
    newPostText: string
    dispatch: (action: UpdateNewPostTextAT | AddPostAT )=> void
}

export const MyPosts = (props: PropsTypePosts) => {

    const postsElements = () => {
        return props.postsData.map (el => <Post post={el.post} likesCount={el.likesCount}/>);
    }



    let addPost = () => {
    let text = props.newPostText
        props.dispatch(addPostCreator(text))
    }

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>  ) => {
        let newText = e.currentTarget.value
        props.dispatch(updatePostsCreator(newText))
    }

    return (
        <div className={s.wrapper}>
            <h3>New posts</h3>
            <div>
                <div>
                    <textarea
                              value={props.newPostText}
                              onChange={newTextChangeHandler}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
                <div className={s.posts}>
                   {postsElements()}
                </div>
            </div>
        </div>
    )

}