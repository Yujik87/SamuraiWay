import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props: any) => {

    let postsElements = props.postsArr.map((post: { message: any; likesCount: any; }) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <textarea ref={newPostElement}></textarea>
                <br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
