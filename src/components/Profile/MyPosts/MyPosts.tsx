import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../Redux/state";

type PropsTypePosts ={
    postsData: PostsType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PropsTypePosts) => {
    // let postsData = [
    //     {id:1, post:'Hi how are you?', likesCount: 23},
    //     {id:2, post:'First post here', likesCount: 1}
    // ]

    const postsElements = () => {
        return props.postsData.map (el => <Post post={el.post} likesCount={el.likesCount}/>);
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
        // let text = newPostElement.current
        // props.addPost(text)
    }

    return (
        <div className={s.wrapper}>
            <h3>New posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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