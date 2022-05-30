import React from "react";
import s from './Post.module.css';

type PostType ={
    post: string
    likesCount: number
}


export const Post = (props:PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn.dribbble.com/users/258081/screenshots/6468979/8856_1_1x.jpg?compress=1&resize=400x300"/>
                {props.post}
                <div>
                    <span>Likes:</span>
                    {props.likesCount}
                    <span></span>
                </div>
            </div>
        </div>
    )

}