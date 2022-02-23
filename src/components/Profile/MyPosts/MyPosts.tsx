import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsPropsType} from "../MyPostsContainer";



export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(
        p => <Post
            message={p.message}
            likesCount={p.likesCount}
        />)

    //let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        if (props.messageForNewPost.trim() !== "") {
            props.addPost()
        }
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea
                    value={props.messageForNewPost}
                    onChange={onPostChange}
                >

                </textarea>
                <br/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
