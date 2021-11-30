import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

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
            <div>
                <textarea
                    name="newMessage"
                    ref={}
                >

                </textarea>
                <br/>
                <button>Send message</button>
            </div>
        </div>
    )
}