import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: () => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <MyPosts
                postsArr={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
            <ProfileInfo/>
        </div>
    )
}