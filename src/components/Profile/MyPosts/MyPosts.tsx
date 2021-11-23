import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props: any) => {

    let postsElements = props.postsArr.map((p: { message: any; likesCount: any; }) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        //let text = newPostElement.current?.value;
        //newPostElement.current?.value = '';
        props.addPost();
        //props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                >

                </textarea>
                <br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
