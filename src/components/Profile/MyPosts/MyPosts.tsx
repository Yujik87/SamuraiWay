import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props: any) => {

/*    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
    ]*/

    let postsElements = props.postsArr.map((post: { message: any; likesCount: any; }) => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <textarea></textarea>
                <br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
