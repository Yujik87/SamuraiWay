import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';



export const Profile = (props:any) => {
    return (
        <div className={s.content}>
            <MyPosts postsArr={props.state.posts}/>
            <ProfileInfo/>
        </div>
    )
}