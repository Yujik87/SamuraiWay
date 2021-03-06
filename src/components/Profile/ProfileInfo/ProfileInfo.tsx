import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if(props.profile.length === 0) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <p>{props.profile.fullName}</p>
                <span>О себе: </span>
                <span>{props.profile.aboutMe}</span>
                <p>Мои контакты:</p>
                <ul>
                    <li><a href={props.profile.contacts.facebook}>facebook</a></li>
                    <li><a href={props.profile.contacts.vk}>vk</a></li>
                    <li><a href={props.profile.contacts.instagram}>instagram</a></li>
                    <li><a href={props.profile.contacts.github}>github</a></li>
                </ul>
                <div>
                    <span>Ищу работу:</span><span>{props.profile.lookingForAJob ? " ДА!" : props.profile.lookingForAJobDescription} </span>
                </div>
            </div>

            {/*<div>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="imageProfile"/>
            </div>*/}
        </div>
    )
}