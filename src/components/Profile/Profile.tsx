import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer, {MyPostsPropsType} from "./MyPostsContainer";



export const Profile = (props: any) => {
    return (
        <div className={s.content}>
            <MyPostsContainer />
            <ProfileInfo/>
        </div>
    )
}