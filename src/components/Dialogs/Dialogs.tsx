import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageText = (props: string) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>

            </div>
            <div className={s.messages}>
                <MessageText message='Hi!'/>
                <MessageText message='How are you?'/>
                <MessageText message='Yo!'/>

            </div>
        </div>
    )
}