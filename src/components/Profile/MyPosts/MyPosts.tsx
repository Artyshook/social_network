import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../Redux/state";

type PropsTypePosts ={
    postsData: PostsType[]
}

export const MyPosts = (props: PropsTypePosts) => {

    // let postsData = [
    //     {id:1, post:'Hi how are you?', likesCount: 23},
    //     {id:2, post:'First post here', likesCount: 1}
    // ]

    let postsElements = () => {
        return props.postsData.map (el => <Post message={el.post} likesCount={el.likesCount}/>);


    }

    return (
        <div className={s.wrapper}>
            <h3>New posts</h3>
            <div>
                <div>
                    <textarea>Hehe</textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )

}