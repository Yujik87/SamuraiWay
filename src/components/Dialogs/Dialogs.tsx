import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

/*
const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
*/

/*const Message = (props: any) => {
    return <div className={s.dialog}>{props.message}</div>
}*/

type DialogsPropsType = {
    id: string
    name: string
}

export const Dialogs = (props: any) => {

    /*let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'},
    ]*/

    let dialogElements = props.state.dialogs.map((d: { name: any; id: any; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: { message: any; }) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}