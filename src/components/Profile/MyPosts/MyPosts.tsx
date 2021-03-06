import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType,} from "../../Redux/state";

type PropsTypePosts ={
    updatePostsCreator: (text:string) => void
    addPost: ()=> void
    postsData: PostsType[]
    newPostText: string
}

export const MyPosts = (props: PropsTypePosts) => {

    const postsElements = () => {
        return props.postsData.map (el => <Post post={el.post} likesCount={el.likesCount}/>);
    }

    let addPost = () => {
        props.addPost();
    }

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>  ) => {
        let newText = e.currentTarget.value
        props.updatePostsCreator(newText)
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