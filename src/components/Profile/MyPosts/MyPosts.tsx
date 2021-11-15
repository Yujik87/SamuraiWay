import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = (props: any) => {
    return (
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {/*<Post message="Hi, how are you?" likesCount="0"/>*/}
                {/*<Post message="It`s my first post" likesCount="23"/>*/}
            </div>
        </div>
    )
}
